import type { Access } from 'payload'

// Access control for media collection
export const mediaAccess: Record<string, Access> = {
  // Admin-level roles and editors can create media
  create: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin', 'dev', 'editor'].includes(req.user.role)
  },
  read: () => true,

  // Admin-level roles can update media
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

  // Only super_admin and admin can delete media
  delete: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin'].includes(req.user.role)
  },
}
