import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import { revalidateFooter } from './hooks/revalidateFooter'
import { globalsAccess } from '@/access/globalsAccess'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: globalsAccess,
  fields: [
    {
      name: 'productLinks',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Products',
          required: true,
        },
        linkGroup({
          appearances: false,
        }),
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'companyLinks',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Company',
          required: true,
        },
        linkGroup({
          appearances: false,
        }),
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'resourceLinks',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Resources',
          required: true,
        },
        linkGroup({
          appearances: false,
        }),
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'text',
          defaultValue: 'info@earnmwachangu.com',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '0990167497',
          required: true,
        },
        {
          name: 'alternativePhone',
          type: 'text',
          defaultValue: '0998484630',
          required: false,
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: 'Plot 47/378, Area 47 Sector 1, Lilongwe',
          required: true,
        },
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'appDownloadLinks',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Download app',
          required: true,
        },
        {
          name: 'appStoreLink',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
        {
          name: 'googlePlayLink',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
        {
          name: 'linkedin',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
        {
          name: 'twitter',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
        {
          name: 'instagram',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
        {
          name: 'youtube',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
      ],
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© EarnMwachange 2024.',
      required: false,
    },
    {
      name: 'externalCopyright',
      type: 'text',
      label: 'Use of Third Party Logos and Icons',
      required: false,
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        condition: () => true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
