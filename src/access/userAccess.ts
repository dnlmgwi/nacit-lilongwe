import type { Access, PayloadRequest } from 'payload'

// Check if user is an admin-level role (super_admin, admin, dev)
export const isAdminRole: Access = ({ req: { user } }: { req: PayloadRequest }) => {
  if (!user) return false
  return ['super_admin', 'admin'].includes(user.role)
}

// Check if user is accessing their own resource
export const isSelf = ({
  req,
  id,
}: {
  req: PayloadRequest
  id: string | number | undefined
}): boolean => {
  if (!req.user) return false

  return req.user.id === id
}

// Check if user is admin, manager, or the same user as the document
export const isAdminOrSelf: Access = ({ req, id, data }) => {

  if (!req.user) return false

  if (isAdminRole({ req })) return true

  return req.user.id === id
}

export const isAdminOrSelfField: Access = ({ req }) => {
  const { user } = req
  if (!user) return false
  return isAdminRole({ req })
}

// Access control for users collection
export const userAccess: Record<string, Access> = {
  // Only admin-level roles can create users
  create: isAdminRole,

  // Admin-level roles can read all users, others can only read themselves
  read: ({ req, id }) => {
    // Admin-level roles can read all users
    if (isAdminRole({ req })) return true

    // Users can read their own profile
    if (isSelf({ req, id })) return true

    return false
  },

  // Admin-level roles can update all users, others can only update themselves
  update: ({ req, id }) => {
    if (isAdminRole({ req })) return true
    return isSelf({ req, id })
  },

  // Only admin-level roles can delete users
  delete: isAdminRole,
}
