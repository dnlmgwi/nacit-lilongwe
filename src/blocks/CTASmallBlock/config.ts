import type { Block } from 'payload'
import { link } from '../../fields/link'

export const CTASmallBlock: Block = {
  slug: 'ctaSmallBlock',
  interfaceName: 'CTASmallBlock',
  labels: {
    singular: 'Small CTA Block',
    plural: 'Small CTA Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: {
        description: 'Add a CTA (e.g., "Can\'t find your answer?")',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      admin: {
        description: 'Text displayed below the heading',
      },
    },
    {
      name: 'buttonLink',
      type: 'group',
      label: 'Button Link',
      admin: {
        description: 'Set the link for the CTA button',
      },
      fields: [
        link({
          appearances: false,
          overrides: {
            admin: {
              description: 'Where should the button link to?',
            },
          },
        }),
      ],
    },
  ],
}
