import type { Block } from 'payload'

export const IndustryBlock: Block = {
  slug: 'industryBlock',
  interfaceName: 'IndustryBlocks',
  labels: {
    singular: 'Industry Block',
    plural: 'Industry Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      admin: {
        description: 'Optional small text displayed above the heading (e.g. "Our Products")',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      admin: {
        description: 'The main title of the section (e.g. "Access Your Pay, Not Your Savings")',
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
      name: 'industry',
      type: 'array',
      label: 'Industry',
      required: true,
      minRows: 1,
      maxRows: 9,
      admin: {
        description: 'Add Industry Images',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Industry Image',
          admin: {
            description: 'Upload an image (recommended ratio 1:1 or 4:3)',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
          admin: {
            description: 'The description of the industry',
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
        { label: 'White', value: 'white' },
        { label: 'Gray', value: 'gray' },
        { label: 'Brand Dark Green', value: 'brand-dark-green' },
        { label: 'Brand Lime', value: 'brand-lime' },
        { label: 'Brand Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Select the background color for the section (defaults to white)',
      },
    },
  ],
}
