import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'teamBlock',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks',
  },
  fields: [
    {
      name: 'preHeading',
      type: 'text',
      label: 'Pre-heading',
      defaultValue: 'Our Team',
      admin: {
        description: 'Optional small text displayed above the heading',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Our leadership',
      admin: {
        description: 'The main title of the team section',
      },
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'Meet the visionaries leading our company forward.',
      admin: {
        description: 'Supporting text displayed below the heading',
      },
    },
    {
      name: 'teamMembers',
      type: 'array',
      label: 'Team Members',
      minRows: 1,
      admin: {
        description: 'Add team members for the section',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Profile Image',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload a profile image for the team member',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
          admin: {
            description: 'Team member name',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          admin: {
            description: 'Team member job title or position',
          },
        },
        {
          name: 'links',
          type: 'array',
          label: 'Social Media Links',
          admin: {
            description: 'Add social media links for the team member',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              required: true,
              options: [
                {
                  label: 'LinkedIn',
                  value: 'linkedin',
                },
                {
                  label: 'GitHub',
                  value: 'github',
                },
                {
                  label: 'Twitter',
                  value: 'twitter',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'Facebook',
                  value: 'facebook',
                },
                {
                  label: 'YouTube',
                  value: 'youtube',
                },
                {
                  label: 'Website',
                  value: 'website',
                },
                {
                  label: 'Email',
                  value: 'email',
                },
              ],
              admin: {
                description: 'Select the social media platform',
              },
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL or Email',
              required: true,
              admin: {
                description: 'Enter the URL or email address',
              },
            },
          ],
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
        { label: 'Dark Green', value: 'brand-dark-green' },
        { label: 'Lime', value: 'brand-lime' },
        { label: 'Green', value: 'brand-green' },
      ],
      admin: {
        description: 'Select the background color for the team section (defaults to white)',
      },
    },
  ],
}
