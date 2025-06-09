'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { MaterialMegaMenu } from '../MegaMenu/MaterialMegaMenu'

interface HeaderNavProps {
  data: HeaderType
  showAuthButtons?: boolean
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, showAuthButtons = true }) => {
  const navItems = data?.navItems || []
  const megaMenuItems = data?.megaMenuItems || []
  const authButtons = data?.authButtons

  return (
    <nav className="relative w-full flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <MaterialMegaMenu
          items={megaMenuItems}
          navItems={navItems}
          authButtons={authButtons}
          showAuthButtons={showAuthButtons}
        />
      </div>
    </nav>
  )
}
