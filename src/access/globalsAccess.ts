import type { Access } from 'payload'

// Access control for globals
export const globalsAccess: Record<string, Access> = {
  // Only super_admin can create globals
  create: ({ req }) => {
    if (!req.user) return false
    return req.user.role === 'super_admin'
  },

  // Admin-level roles can read globals
  read: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin', 'dev'].includes(req.user.role)
  },

  // Only super_admin and admin can update globals
  update: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin'].includes(req.user.role)
  },

  // Only super_admin can delete globals
  delete: ({ req }) => {
    if (!req.user) return false
    return req.user.role === 'super_admin'
  },
}
