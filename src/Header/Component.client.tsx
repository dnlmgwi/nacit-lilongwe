'use client'
import Link from 'next/link'
import React from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { AuthMenuDropdown } from './AuthMenu'

interface HeaderClientProps {
  data: Header
  showAuthButtons?: boolean
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, showAuthButtons = true }) => {
  const authButtons = data?.authButtons || {}
  const { showRegister, registerButton, showSignIn, signInButton } = authButtons

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-green shadow-md max-w-screen">
      <div className="py-2 md:py-4 flex items-center justify-between px-2 md:px-8">
        <div className="flex-shrink-0">
          <Link href="/">
            <Logo loading="eager" priority="high" className={'scale-75'} />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Center nav with fixed width to prevent layout shifts */}
          <div className="flex justify-center mr-2">
            <HeaderNav data={data} showAuthButtons={showAuthButtons} />
          </div>

          {/* Search button */}
          {/*<Link href="/search" className="mr-2 md:mr-4 flex-shrink-0">*/}
          {/*  <span className="sr-only">Search</span>*/}
          {/*  <SearchIcon className="w-5 dark:text-white text-white" />*/}
          {/*</Link>*/}

          {/* Desktop Auth Buttons - these will only show on desktop */}
          {showAuthButtons && (
            <div className="hidden ml-2 lg:flex flex-row">
              {/* Sign In Button/Menu */}
              {showSignIn && signInButton?.link && (
                <div className="px-1 min-w-[100px] flex justify-center">
                  <AuthMenuDropdown item={signInButton} type="signin" />
                </div>
              )}

              {/* Register Button/Menu */}
              {showRegister && registerButton?.link && (
                <div className="px-1 min-w-[100px] flex justify-center">
                  <AuthMenuDropdown item={registerButton} type="register" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
