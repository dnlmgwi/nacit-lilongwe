import { CollectionConfig } from 'payload'

export const CachedResponses: CollectionConfig = {
  slug: 'cached-responses',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'response', 'usageCount', 'lastUsed'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        readOnly: true, // Usually set programmatically
      },
    },
    {
      name: 'response',
      type: 'richText',
      required: true,
    },
    {
      name: 'usageCount',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'lastUsed',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
  timestamps: true,
}
