import type { Block } from 'payload'

export const ProductStepsBlock: Block = {
  slug: 'productStepsBlocks',
  interfaceName: 'ProductStepsBlocks',
  labels: {
    singular: 'Product Steps Block',
    plural: 'Products Steps Blocks',
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
      name: 'steps',
      type: 'array',
      label: 'Steps',
      required: true,
      minRows: 1,
      maxRows: 3,
      admin: {
        description: 'Add steps cards with text and image',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
          admin: {
            description: 'The step name',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description',
          required: true,
          admin: {
            description: 'The description of the step',
          },
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Product Image',
          admin: {
            description: 'Upload an image (recommended ratio 1:1 or 4:3)',
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
    {
      name: 'productCardColor',
      type: 'select',
      label: 'Product Card Color',
      defaultValue: 'brand-dark-green',
      options: [
        { label: 'Brand Dark Green', value: 'brand-dark-green' },
        { label: 'Brand Green', value: 'brand-green' },
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
      ],
      admin: {
        description: 'Select the background color for the product cards',
      },
    },
  ],
}
