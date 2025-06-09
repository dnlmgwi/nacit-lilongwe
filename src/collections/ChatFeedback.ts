import { CollectionConfig } from 'payload'

export const ChatFeedback: CollectionConfig = {
  slug: 'chat-feedback',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['question', 'response', 'isPositive', 'createdAt'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'response',
      type: 'richText',
      required: true,
    },
    {
      name: 'isPositive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'userAgent',
          type: 'text',
        },
        {
          name: 'ipAddress',
          type: 'text',
        },
      ],
    },
  ],
  timestamps: true,
}
