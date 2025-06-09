import type { Access, PayloadRequest } from 'payload'
import { authenticatedOrPublished } from './authenticatedOrPublished'

// Check if user is a super admin
// const isSuperAdmin: Access = ({ req: { user } }) => {
//   if (!user) return false
//   return user.role === 'super_admin'
// }

// Check if user is an admin
// const isAdmin: Access = ({ req: { user } }) => {
//   if (!user) return false
//   return user.role === 'admin'
// }

// Check if user is a developer
// const isDev: Access = ({ req: { user } }) => {
//   if (!user) return false
//   return user.role === 'dev'
// }

// Check if user is a super admin, admin, or dev
// const isAdminLevel: Access = ({ req: { user } }) => {
//   if (!user) return false
//   return ['super_admin', 'admin', 'dev'].includes(user.role)
// }

// Access control for pages collection
export const pagesAccess: Record<string, Access> = {
  // Only admin-level roles can create pages
  create: ({ req }) => {
    if (!req.user) return false

    // Super admin can always create
    if (req.user.role === 'super_admin') return true

    // Admin can create
    if (req.user.role === 'admin') return true

    // Dev can create
    if (req.user.role === 'dev') return true

    return false
  },

  // Admin-level roles can read pages
  read: authenticatedOrPublished,

  // Admin-level roles can update pages with hierarchy restrictions
  update: ({ req }) => {
    if (!req.user) return false

    // Super admin can always update
    if (req.user.role === 'super_admin') return true

    // Admin can update
    if (req.user.role === 'admin') return true

    // Dev can update
    if (req.user.role === 'dev') return true

    return false
  },

  // Only super_admin and admin can delete pages
  delete: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin'].includes(req.user.role)
  },
}
