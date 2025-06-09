import type { Block, CollectionSlug } from 'payload'

export const TermsBlock: Block = {
  slug: 'termsBlock',
  interfaceName: 'TermsBlock',
  labels: {
    singular: 'Terms Block',
    plural: 'Terms Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Terms & Conditions',
      admin: {
        description: 'The main title of the terms section',
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
      name: 'terms',
      type: 'relationship',
      relationTo: 'terms' as CollectionSlug,
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the terms to display in this block',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'white',
      options: [
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
        { label: 'Dark Green', value: 'brand-dark-green' },
        { label: 'Lime', value: 'brand-lime' },
        { label: 'Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Select the background color for the terms section (defaults to white)',
      },
    },
  ],
}
