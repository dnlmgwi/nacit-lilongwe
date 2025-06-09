import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateNotificationBanner } from './hooks/revalidateNotificationBanner'
import { globalsAccess } from '@/access/globalsAccess'

export const NotificationBanner: GlobalConfig = {
  slug: 'notificationBanner',
  access: globalsAccess,
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enable Notification Banner',
      defaultValue: false,
    },
    {
      name: 'message',
      type: 'text',
      label: 'Notification Message',
      required: true,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enabled),
      },
    },
    {
      name: 'hasLink',
      type: 'checkbox',
      label: 'Add Link to Banner',
      defaultValue: false,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enabled),
      },
    },
    {
      name: 'linkDetails',
      type: 'group',
      label: 'Link Details',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enabled && siblingData?.hasLink),
      },
      fields: [
        link({
          appearances: ['default', 'outline'],
        }),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateNotificationBanner],
  },
}
