import { Block } from 'payload'

export const PricingTableBlock: Block = {
  slug: 'pricingTable',
  interfaceName: 'PricingTableBlock',
  labels: {
    singular: 'Pricing Table',
    plural: 'Pricing Tables',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Feature Name',
              required: true,
            },
            {
              name: 'value',
              type: 'select',
              label: 'Value Type',
              required: true,
              defaultValue: 'text',
              options: [
                {
                  label: 'Text',
                  value: 'text',
                },
                {
                  label: 'Icon',
                  value: 'icon',
                },
              ],
            },
            {
              name: 'text', // Shortened from 'textValue'
              type: 'text',
              label: 'Text Value',
              admin: {
                condition: (data, siblingData) => siblingData?.value === 'text',
              },
              required: false,
            },
            {
              name: 'icon',
              type: 'checkbox',
              label: 'Show Icon',
              defaultValue: false,
              admin: {
                condition: (data, siblingData) => siblingData?.value === 'icon',
              },
            },
          ],
        },
      ],
    },
  ],
}
