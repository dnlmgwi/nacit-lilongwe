import type { Access } from 'payload'
import { anyone } from './anyone'

// Access control for categories collection
export const categoriesAccess: Record<string, Access> = {
  // Only admin-level roles can create categories
  create: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin', 'dev', 'editor'].includes(req.user.role)
  },

  // All authenticated users can read categories
  read: anyone,

  // Only admin-level roles can update categories
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

  // Only super_admin and admin can delete categories
  delete: ({ req }) => {
    if (!req.user) return false
    return ['super_admin', 'admin'].includes(req.user.role)
  },
}
