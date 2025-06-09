'use client'

import React from 'react'
// Now using the correct type from payload-types
import type { AiAssistant } from '@/payload-types'

interface AIAssistantClientProps {
  data: AiAssistant
}

export const AIAssistantClient: React.FC<AIAssistantClientProps> = ({ data }) => {
  if (!data?.enabled) {
    return null
  }

  const { welcomeMessage } = data

  return (
    <div>
      {/* AI Assistant UI Component */}
      <div className="ai-assistant-placeholder">
        {welcomeMessage && <p>{welcomeMessage}</p>}
        {/* Additional AI UI components will be placed here */}
      </div>
    </div>
  )
}
