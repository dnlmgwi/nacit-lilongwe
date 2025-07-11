import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { categoriesAccess } from '@/access/categoriesAccess'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: categoriesAccess,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
