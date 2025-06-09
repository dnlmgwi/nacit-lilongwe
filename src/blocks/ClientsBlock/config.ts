import type { Block } from 'payload'

export const ClientsBlock: Block = {
  slug: 'clientsBlock',
  interfaceName: 'ClientsBlock',
  labels: {
    singular: 'Clients Block',
    plural: 'Clients Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Our Clients',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'clients',
      type: 'array',
      label: 'Client Logos',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Client Name',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
          required: true,
          admin: {
            description: 'Recommended size: 160x80px (WebP or PNG with transparent background)',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Client URL (optional)',
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
        { label: 'Light Gray', value: 'gray-50' },
        { label: 'Brand Dark Green', value: 'brand-dark-green' },
        { label: 'Brand Green', value: 'brand-green' },
      ],
    },
  ],
}
