import type { Access } from 'payload'

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
const isAdminLevel: Access = ({ req: { user } }) => {
  if (!user) return false
  return ['super_admin', 'admin', 'dev'].includes(user.role)
}

// Check if document is published
const isPublished = ({ data }: { data: any }): boolean => {
  return data?._status === 'published'
}

// Access control for terms collection
export const termsAccess: Record<string, Access> = {
  // Only admin-level roles can create terms
  create: ({ req }) => {
    if (!req.user) return false
    return isAdminLevel({ req })
  },

  // Admin-level roles can read all terms
  // Others can only read published terms
  read: ({ req, data }) => {
    // Admin-level roles can read all terms
    if (req.user && isAdminLevel({ req })) return true

    // Others can only read published terms
    return isPublished({ data })
  },

  // Only admin-level roles can update terms
  update: ({ req }) => {
    if (!req.user) return false
    return isAdminLevel({ req })
  },

  // Only super_admin and admin can delete terms
  delete: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin'].includes(req.user.role)
  },
}
