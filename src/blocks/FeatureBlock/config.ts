import type { Block } from 'payload'
import { link } from '../../fields/link'

export const FeatureBlock: Block = {
  slug: 'featureBlock',
  interfaceName: 'FeatureBlock',
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
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
        description:
          'The main title of the feature block (e.g. "Financial Freedom in Three Steps")',
      },
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Sub-heading',
      admin: {
        description: 'Supporting text displayed below the heading',
      },
    },
    {
      name: 'featureItems',
      type: 'array',
      label: 'Feature Items',
      admin: {
        description: 'Add checkmarked feature items to highlight key points',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Feature Text',
          required: true,
        },
      ],
    },
    {
      name: 'mediaType',
      type: 'select',
      label: 'Media Type',
      defaultValue: 'image',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'SVG', value: 'svg' },
        { label: 'Lottie Animation', value: 'lottie' },
      ],
      admin: {
        description: 'Choose the type of media to display',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        description: 'Upload an image for the feature section',
        condition: (_, { mediaType } = {}) => mediaType === 'image',
      },
    },
    {
      name: 'svgCode',
      type: 'textarea',
      label: 'SVG Code',
      admin: {
        description: 'Paste your SVG code here',
        condition: (_, { mediaType } = {}) => mediaType === 'svg',
      },
    },
    {
      name: 'lottieJSON',
      type: 'textarea',
      label: 'Lottie JSON',
      admin: {
        description: 'Paste your Lottie animation JSON here',
        condition: (_, { mediaType } = {}) => mediaType === 'lottie',
      },
    },
    {
      name: 'showButton',
      type: 'checkbox',
      label: 'Show CTA Button',
      defaultValue: false,
      admin: {
        description: 'Toggle to show or hide the call to action button',
      },
    },
    {
      name: 'button',
      type: 'group',
      label: 'Call to Action Button',
      admin: {
        description: 'Add a call to action button',
        condition: (_, { showButton } = {}) => showButton === true,
      },
      fields: [
        link({
          appearances: ['default', 'outline'],
          overrides: {
            admin: {
              description: 'Set the link for the CTA button',
            },
          },
        }),
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'imageRight',
      options: [
        { label: 'Image on Right', value: 'imageRight' },
        { label: 'Image on Left', value: 'imageLeft' },
        { label: 'Centered Content', value: 'center' },
      ],
      admin: {
        description: 'Choose the layout for the feature block',
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
        description: 'Choose the background color for the feature block',
      },
    },
    {
      name: 'mediaBorderRadius',
      type: 'select',
      label: 'Media Border Radius',
      defaultValue: 'rounded-3xl',
      options: [
        { label: 'None', value: 'rounded-none' },
        { label: 'Small', value: 'rounded-xl' },
        { label: 'Medium', value: 'rounded-2xl' },
        { label: 'Large', value: 'rounded-3xl' },
        // { label: 'Full', value: 'rounded-full' },
      ],
      admin: {
        description: 'Choose the border radius for the media element',
      },
    },
    {
      name: 'mediaWidth',
      type: 'select',
      label: 'Media Width',
      defaultValue: 'md:w-1/2',
      options: [
        { label: '1/3 Width', value: 'md:w-1/3' },
        { label: '1/2 Width', value: 'md:w-1/2' },
        // { label: '2/3 Width', value: 'md:w-2/3' },
      ],
      admin: {
        description: 'Choose the width of the media element (for side-by-side layouts)',
        condition: (_, { layout } = {}) => layout === 'imageRight' || layout === 'imageLeft',
      },
    },
    {
      name: 'contentWidth',
      type: 'select',
      label: 'Content Width',
      defaultValue: 'md:w-1/2',
      options: [
        { label: '1/3 Width', value: 'md:w-1/3' },
        { label: '1/2 Width', value: 'md:w-1/2' },
        // { label: '2/3 Width', value: 'md:w-2/3' },
      ],
      admin: {
        description: 'Choose the width of the content section (for side-by-side layouts)',
        condition: (_, { layout } = {}) => layout === 'imageRight' || layout === 'imageLeft',
      },
    },
  ],
}
