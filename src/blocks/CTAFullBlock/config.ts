import type { Block } from 'payload'
import { link } from '../../fields/link'

export const CTAFullBlock: Block = {
  slug: 'ctaFullBlock',
  interfaceName: 'CTAFullBlock',
  labels: {
    singular: 'Full CTA Block',
    plural: 'Full CTA Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      defaultValue: 'Ready to get started?',
      required: true,
      admin: {
        description: 'Optional small text displayed above the heading',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: {
        description: 'Add a CTA (e.g., "Access Your Pay, Not Your Savings")',
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
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'brand-dark-green',
      options: [
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
        { label: 'Dark Green', value: 'brand-dark-green' },
        { label: 'Lime', value: 'brand-lime' },
        { label: 'Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Choose the background color for the feature block',
      },
    },
  ],
}
