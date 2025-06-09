import type { Block } from 'payload'
import { link } from '../../fields/link'

export const CTALargeBlock: Block = {
  slug: 'ctaLargeBlock',
  interfaceName: 'CTALargeBlock',
  labels: {
    singular: 'Large CTA Block',
    plural: 'Large CTA Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      defaultValue: 'Easy Pricing',
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
        description:
          'Use "or" in your text to create emphasis (e.g., "Zero hidden fees or interest charges")',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      admin: {
        description: 'Optional small text displayed below the heading',
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
      name: 'termsLink',
      type: 'group',
      label: 'Terms Link',
      admin: {
        description: 'Link to terms and conditions',
      },
      fields: [
        link({
          appearances: false,
          overrides: {
            admin: {
              description: 'Where should the terms link to?',
            },
          },
        }),
      ],
    },
    {
      name: 'illustration',
      type: 'upload',
      relationTo: 'media',
      label: 'Illustration',
      admin: {
        description: 'Upload an illustration or image for the CTA section',
      },
    },
    {
      name: 'useIllustrationPlaceholder',
      type: 'checkbox',
      label: 'Use Placeholder Instead of Illustration',
      defaultValue: false,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'brand-dark-green',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Gray', value: 'gray' },
        { label: 'Brand Dark Green', value: 'brand-dark-green' },
        { label: 'Brand Lime', value: 'brand-lime' },
        { label: 'Brand Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Select the background color for the card (defaults to white)',
      },
    },
  ],
}
