import type { Block } from 'payload'
import { link } from '../../fields/link'

export const FAQBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      defaultValue: 'FAQs',
      admin: {
        description: 'Optional small text displayed above the heading',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'For Employees',
      admin: {
        description: 'The main title of the FAQ section',
      },
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'Discover responses to common asked questions about our product and services.',
      admin: {
        description: 'Supporting text displayed below the heading',
      },
    },
    {
      name: 'faqItems',
      type: 'array',
      label: 'FAQ Items',
      minRows: 1,
      admin: {
        description: 'Add questions and answers for the FAQ section',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
          admin: {
            description: 'The question text',
          },
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
          admin: {
            description: 'The answer text',
          },
        },
      ],
    },
    {
      name: 'buttonLink',
      type: 'group',
      label: 'Button Link',
      admin: {
        description: 'Add a call to action button (optional)',
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
      defaultValue: 'white',
      options: [
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
        { label: 'Dark Green', value: 'brand-dark-green' },
        { label: 'Lime', value: 'brand-lime' },
        { label: 'Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Select the background color for the FAQ section (defaults to white)',
      },
    },
  ],
}
