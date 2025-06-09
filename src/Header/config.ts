import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { globalsAccess } from '@/access/globalsAccess'

export const Header: GlobalConfig = {
  slug: 'header',
  access: globalsAccess,
  fields: [
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
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'megaMenuItems',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Menu Label',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon Name (Lucide)',
          type: 'text',
          admin: {
            description: 'Enter a valid Lucide icon name (e.g., "Building2", "Users", "Wallet")',
          },
        },
        {
          name: 'sections',
          label: 'Menu Sections',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'title',
              label: 'Section Title',
              type: 'text',
              required: true,
            },
            {
              name: 'items',
              label: 'Section Links',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
                {
                  name: 'icon',
                  label: 'Icon Name (Lucide)',
                  type: 'text',
                  admin: {
                    description:
                      'Enter a valid Lucide icon name (e.g., "Building2", "Users", "Wallet")',
                  },
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                  admin: {
                    description: 'Describe the contents of this page',
                  },
                  required: true,
                },
              ],
              admin: {
                components: {
                  RowLabel: '@/Header/MegaMenu/types#MegaMenuLinkRowLabel',
                },
              },
            },
          ],
          admin: {
            components: {
              RowLabel: '@/Header/MegaMenu/types#MegaMenuSectionRowLabel',
            },
          },
        },
      ],
      admin: {
        components: {
          RowLabel: '@/Header/MegaMenu/types#MegaMenuRowLabel',
        },
      },
      maxRows: 6,
    },
    {
      name: 'authButtons',
      type: 'group',
      label: 'Authentication Menus',
      fields: [
        {
          name: 'showRegister',
          type: 'checkbox',
          label: 'Show Register Menu',
          defaultValue: false,
        },
        {
          name: 'registerButton',
          type: 'group',
          label: 'Register Menu',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.showRegister),
          },
          fields: [
            link({
              appearances: ['default', 'outline'],
            }),
            {
              name: 'icon',
              label: 'Icon Name (Lucide)',
              type: 'text',
              defaultValue: 'UserPlus',
              admin: {
                description: 'Enter a valid Lucide icon name (e.g., "UserPlus", "LogIn")',
              },
            },
            {
              name: 'authItems',
              type: 'array',
              label: 'Register Menu Items',
              fields: [
                link({
                  appearances: false,
                }),
                {
                  name: 'icon',
                  label: 'Icon Name (Lucide)',
                  type: 'text',
                  admin: {
                    description:
                      'Enter a valid Lucide icon name (e.g., "Building2", "Users", "Wallet")',
                  },
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                  admin: {
                    description: 'Brief description of this auth option',
                  },
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'showSignIn',
          type: 'checkbox',
          label: 'Show Sign In Menu',
          defaultValue: false,
        },
        {
          name: 'signInButton',
          type: 'group',
          label: 'Sign In Menu',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.showSignIn),
          },
          fields: [
            link({
              appearances: ['default', 'outline'],
            }),
            {
              name: 'icon',
              label: 'Icon Name (Lucide)',
              type: 'text',
              defaultValue: 'LogIn',
              admin: {
                description: 'Enter a valid Lucide icon name (e.g., "UserPlus", "LogIn")',
              },
            },
            {
              name: 'authItems',
              type: 'array',
              label: 'Sign In Menu Items',
              fields: [
                link({
                  appearances: false,
                }),
                {
                  name: 'icon',
                  label: 'Icon Name (Lucide)',
                  type: 'text',
                  admin: {
                    description:
                      'Enter a valid Lucide icon name (e.g., "Building2", "Users", "Wallet")',
                  },
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                  admin: {
                    description: 'Brief description of this auth option',
                  },
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
