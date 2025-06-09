import type { Block } from 'payload'
import { link } from '../../fields/link'

export const PlatformFeaturesBlock: Block = {
  slug: 'platformFeatures',
  interfaceName: 'PlatformFeatures',
  labels: {
    singular: 'Platform Features Block',
    plural: 'Platform Features Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      admin: {
        description: 'Optional small text displayed above the heading (e.g. "Our Mobile App")',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: {
        description: 'The main title of the platform features section',
      },
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Subheading',
      admin: {
        description: 'Supporting text displayed below the heading',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      maxRows: 8,
      admin: {
        description: 'Add platform features with icons',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Feature Description',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon Type',
          defaultValue: 'lucide',
          options: [
            { label: 'Lucide Icon', value: 'lucide' },
            { label: 'SVG Upload', value: 'svg' },
          ],
          admin: {
            description: 'Choose the type of icon to display',
          },
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Lucide Icon Name',
          admin: {
            description: 'Enter the name of a Lucide icon (e.g., "Zap", "Shield", "CreditCard")',
            condition: (_, { iconType } = {}) => iconType === 'lucide',
          },
        },
        {
          name: 'svgMedia',
          type: 'upload',
          relationTo: 'media',
          label: 'SVG Image',
          admin: {
            description: 'Upload an SVG image',
            condition: (_, { iconType } = {}) => iconType === 'svg',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'white',
      options: [
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
        { label: 'Brand Dark Green', value: 'brand-dark-green' },
        { label: 'Brand Lime', value: 'brand-lime' },
        { label: 'Brand Green', value: 'brand-green' },
      ],
    },
    {
      name: 'button',
      type: 'group',
      label: 'Call to Action Button',
      admin: {
        description: 'Optional button to add below the features',
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
