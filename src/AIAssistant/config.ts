import type { GlobalConfig } from 'payload'
import { globalsAccess } from '@/access/globalsAccess'
// Fix import path with absolute path
import { revalidateAIAssistant } from '@/AIAssistant/hooks/revalidateAIAssistant'

export const AIAssistant: GlobalConfig = {
  slug: 'aiAssistant',
  access: globalsAccess,
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enable AI Assistant',
      defaultValue: false,
    },
    {
      name: 'welcomeMessage',
      type: 'text',
      label: 'AI Assistant Welcome Message',
      required: true,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.enabled),
      },
    },
  ],
  hooks: {
    afterChange: [revalidateAIAssistant],
  },
}
