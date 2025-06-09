'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'

type IconComponentProps = {
  name: string
  className?: string
}

export const IconComponent: React.FC<IconComponentProps> = ({ name, className }) => {
  // Get all the Lucide icons
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>

  // Find the requested icon
  const IconComponent = icons[name]

  if (!IconComponent) {
    // Fall back to a default icon or return null if icon not found
    const DefaultIcon = LucideIcons.HelpCircle
    return <DefaultIcon className={className || 'w-4 h-4'} />
  }

  return <IconComponent className={className || 'w-4 h-4'} />
}
