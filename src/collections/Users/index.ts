import type { CollectionConfig } from 'payload'
import { isAdminOrSelfField, isAdminRole, userAccess } from '@/access/userAccess'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'email',
    group: 'Admin',
  },
  access: userAccess,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      access: {
        update: ({ req }) => isAdminOrSelfField({ req }) === true,
        create: ({ req }) => isAdminOrSelfField({ req }) === true,
        read: () => true,
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Super Admin', value: 'super_admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Developer', value: 'dev' },
        { label: 'Editor', value: 'editor' },
        { label: 'Author', value: 'author' },
        { label: 'Contributor', value: 'contributor' },
      ],
      defaultValue: 'super_admin',
      access: {
        update: ({ req }) => isAdminRole({ req }) === true,
        create: ({ req }) => isAdminRole({ req }) === true,
        read: () => true,
      },
      admin: {
        description: 'User role determines access permissions',
      },
    },
  ],
  timestamps: true,
}
