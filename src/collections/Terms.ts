import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { termsAccess } from '@/access/termsAccess'
import { slugField } from '@/fields/slug'

export const Terms: CollectionConfig = {
  slug: 'terms',
  access: termsAccess,
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The title of the term',
      },
    },
    ...slugField(),
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            BlocksFeature({
              blocks: [],
            }),
          ]
        },
      }),
      required: true,
      admin: {
        description: 'The content of the term',
      },
    },
  ],
}
