import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
// Import the correct type name (AiAssistant with lowercase 'i')
import type { AiAssistant as AIAssistantType } from '@/payload-types'
// Use absolute path to avoid module resolution issues
import { AIAssistantClient } from '@/AIAssistant/Component.client'

export async function AIAssistant() {
  // Now we can use the proper types since they're generated
  const aiAssistantData: AIAssistantType = await getCachedGlobal(
    'aiAssistant',
    1,
  )()

  return <AIAssistantClient data={aiAssistantData} />
}
