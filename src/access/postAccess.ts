import type { Access, PayloadRequest } from 'payload'
import { Post } from '@/payload-types'

// Check if user is an admin or editor
const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (!user) return false
  return ['super_admin', 'admin', 'dev', 'editor'].includes(user.role)
}

// Check if user is the author of the post
const isAuthor = ({ req, data }: { req: PayloadRequest; data: any }): boolean => {
  if (!req.user) return false
  return req.user.id === data?.author
}

// Check if post is in draft status
const isDraft = ({ data }: { data: Post }): boolean => {
  return data?._status === 'draft'
}

// Check if post is published
const isPublished = ({ data }: { data: Post }): boolean => {
  return data?._status === 'published'
}

// Access control for posts collection
export const postAccess: Record<string, Access> = {
  // Admin, editors, and authors can create posts
  admin: isAdminOrEditor || isAuthor,

  // Admins and editors can update any post
  // Authors can only update their own posts that are in draft status
  update: ({ req, data }) => {
    if (!req.user) return false

    // Admins and editors can update any post
    if (isAdminOrEditor({ req })) return true

    // Authors can only update their own posts that are in draft status
    if (req.user.role === 'author') {
      return isAuthor({ req, data }) && isDraft({ data })
    }

    return false
  },

  // Admins can delete any post
  // Authors can only delete their own posts that are in draft status
  delete: ({ req, data }) => {
    if (!req.user) return false

    // Admins can delete any post
    if (['super_admin', 'admin', 'dev'].includes(req.user.role)) return true

    // Authors can only delete their own posts that are in draft status
    if (req.user.role === 'author') {
      return isAuthor({ req, data }) && isDraft({ data })
    }

    return false
  },

  read: ({ req, data }) => {
    // If there's no user (not logged in), only allow access to published posts
    if (!req.user) {
      const isPostPublished = isPublished({ data })
      return isPostPublished
    }

    // Admins and editors can read all posts
    if (isAdminOrEditor({ req })) {
      return true
    }

    // Authors can read their own posts
    if (req.user.role === 'author') {
      const isUserAuthor = isAuthor({ req, data })
      const isPostPublished = isPublished({ data })
      return isUserAuthor || isPostPublished
    }

    // For all other roles, only allow access to published posts
    const isPostPublished = isPublished({ data })
    return isPostPublished
  },
}
