import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'
import { link } from '../../fields/link'

export const HeroBackgroundBlock: Block = {
  slug: 'heroBgBlock',
  interfaceName: 'HeroBgBlock',
  fields: [
    {
      name: 'showNotice',
      type: 'checkbox',
      label: 'Show Notice Banner',
      defaultValue: false,
    },
    {
      name: 'noticeLink',
      type: 'group',
      label: 'Notice Link',
      admin: {
        condition: (_, { showNotice } = {}) => showNotice,
      },
      fields: [
        {
          name: 'noticeText',
          type: 'text',
          label: 'Notice Text',
          required: true,
          admin: {
            description: 'Add text for the notice banner',
          },
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              description: 'Add a link to the notice banner',
            },
          },
        }),
      ],
    },
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      admin: {
        description: 'Optional small text displayed above the heading (e.g. "Our Products")',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Hero Content',
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
        name: 'buttons',
        label: 'Call to Action Buttons',
        admin: {
          description: 'Add up to 2 call to action buttons',
        },
      },
    }),
    {
      name: 'showIcons',
      type: 'checkbox',
      label: 'Show Icons on Buttons',
      defaultValue: false,
    },

    {
      name: 'useImagePlaceholder',
      type: 'checkbox',
      label: 'Use Placeholder Instead of Image',
      defaultValue: false,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        description: 'Upload an image for the hero section',
        condition: (_,{ useImagePlaceholder } = {}) => !useImagePlaceholder,
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'brand-dark-green',
      options: [
        { label: 'Dark Green', value: 'brand-dark-green' },
        { label: 'Lime', value: 'brand-lime' },
        { label: 'Green', value: 'brand-green' },
        { label: 'White', value: 'white' },
      ],
    },
  ],
  labels: {
    plural: 'Hero Background Blocks',
    singular: 'Hero Background Block',
  },
}
