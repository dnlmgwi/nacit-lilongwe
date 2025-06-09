import type { Access } from 'payload'
import { z } from 'zod'

// Define role types with validation
export const RoleSchema = z.enum(['super_admin', 'dev', 'editor', 'author', 'contributor', 'admin'])
export type Role = z.infer<typeof RoleSchema>

// Configuration for role-based access
export const accessConfig = {
  // Role hierarchy from highest to lowest
  roleHierarchy: ['super_admin', 'admin', 'dev', 'editor', 'author', 'contributor'] as const,

  // Administrative collections that only super-admin and dev can access
  adminCollections: [
    'terms',
    'redirects',
    'forms',
    'form-submissions',
    'search-results',
    'header',
    'footer',
    'notification-banner',
  ] as const,

  // Default permissions for each role and collection
  permissions: {
    posts: {
      super_admin: { create: true, read: true, update: true, delete: true },
      admin: { create: true, read: true, update: true, delete: true },
      dev: { create: true, read: true, update: true, delete: true },
      editor: { create: true, read: true, update: true, delete: false },
      author: { create: true, read: true, update: true, delete: false },
      contributor: { create: true, read: true, update: false, delete: false },
    },
    categories: {
      super_admin: { create: true, read: true, update: true, delete: true },
      dev: { create: true, read: true, update: true, delete: true },
      editor: { create: true, read: true, update: true, delete: true },
      author: { create: false, read: true, update: false, delete: false },
      contributor: { create: false, read: true, update: false, delete: false },
    },
    media: {
      super_admin: { create: true, read: true, update: true, delete: true },
      dev: { create: true, read: true, update: true, delete: true },
      editor: { create: true, read: true, update: true, delete: true },
      author: { create: true, read: true, update: true, delete: false },
      contributor: { create: true, read: true, update: false, delete: false },
    },
    users: {
      super_admin: { create: true, read: true, update: true, delete: true },
      admin: { create: true, read: true, update: true, delete: true },
      dev: { create: true, read: true, update: true, delete: true },
      editor: { create: false, read: true, update: false, delete: false },
      author: { create: false, read: true, update: false, delete: false },
      contributor: { create: false, read: false, update: false, delete: false },
    },
    settings: {
      super_admin: { create: true, read: true, update: true, delete: true },
      dev: { create: true, read: true, update: true, delete: true },
      editor: { create: false, read: true, update: false, delete: false },
      author: { create: false, read: true, update: false, delete: false },
      contributor: { create: false, read: true, update: false, delete: false },
    },
  } as const,
}

// Validate and get user role
const getUserRole = (user: any): Role | null => {
  try {
    return RoleSchema.parse(user?.role)
  } catch {
    return null
  }
}

// Check if user has a specific role
export const isRole =
  (role: Role): Access =>
  ({ req: { user } }) => {
    const userRole = getUserRole(user)
    return userRole === role
  }

// Check if user has a role equal to or higher than the specified role
export const isRoleOrHigher =
  (role: Role): Access =>
  ({ req: { user } }) => {
    const userRole = getUserRole(user)
    if (!userRole) return false

    const userRoleIndex = accessConfig.roleHierarchy.indexOf(userRole)
    const requiredRoleIndex = accessConfig.roleHierarchy.indexOf(role)
    return userRoleIndex <= requiredRoleIndex
  }
