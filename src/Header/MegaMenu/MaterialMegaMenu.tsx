'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import { IconComponent } from './icons'
import { CMSLink } from '@/components/Link'
import type { Header } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { MobileAuthMenu } from '../AuthMenu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useRouter, usePathname } from 'next/navigation'

interface MaterialMegaMenuProps {
  items: NonNullable<Header['megaMenuItems']>
  navItems: Header['navItems']
  authButtons?: Header['authButtons']
  showAuthButtons?: boolean
}

// Desktop Menu Item with Dropdown
function DesktopMenuDropdown({ item }: { item: NonNullable<Header['megaMenuItems']>[number] }) {
  const renderItems = item.sections?.map((section, sectionIndex) => (
    <NavigationMenuLink
      key={section.id || sectionIndex}
      className={cn(navigationMenuTriggerStyle())}
    >
      {/* Section Title */}
      <div className="px-3 py-2 text-sm font-bold text-brand-dark-green border-b border-brand-dark-green/10 mb-2">
        {section.title}
      </div>

      {/* Section Items */}
      <div className="space-y-1">
        {section.items?.map((menuItem, itemIndex) => (
          <div
            key={`${menuItem.id}-${itemIndex}`}
            className="flex items-center gap-3 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis px-2 py-2 hover:bg-brand-mimosa/10"
          >
            <div className="flex items-center justify-center rounded-lg !bg-brand-mimosa p-2">
              {menuItem.icon ? (
                <IconComponent name={menuItem.icon} className="h-6 w-6 text-brand-dark-green" />
              ) : (
                <div className="h-6 w-6" />
              )}
            </div>

            <div className="w-full">
              <CMSLink
                key={itemIndex}
                {...menuItem.link}
                className="w-full text-sm font-medium text-brand-dark-green whitespace-nowrap overflow-hidden text-ellipsis"
                // renderAsSpan
              >
                <div className="text-xs !font-medium text-brand-dark-green/70 whitespace-nowrap overflow-hidden text-ellipsis">
                  {menuItem.description}
                </div>
              </CMSLink>
            </div>
          </div>
        ))}
      </div>
    </NavigationMenuLink>
  ))

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="flex items-center gap-2 py-2 pr-4 font-medium text-white hover:bg-transparent hover:text-brand-lime whitespace-nowrap overflow-hidden text-ellipsis">
        {item.icon && (
          <span className="mr-2">
            <IconComponent name={item.icon} className="w-5 h-5" />
          </span>
        )}
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="rounded-xl bg-brand-white shadow-xl border border-brand-dark-green p-4 overflow-y-auto"
        style={{
          maxWidth: '90vw',
          width: 'auto',
          position: 'relative',
          overflowX: 'auto',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 outline-none outline-0 max-h-[80vh] w-full px-4 justify-center">
          {renderItems}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

// Mobile Menu Item with Dropdown
function MobileMenuDropdown({
  item,
  closeNav,
}: {
  item: NonNullable<Header['megaMenuItems']>[number]
  closeNav: () => void
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <NavigationMenuItem className="w-full">
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-brand-lime"
      >
        <div className="flex items-center justify-center w-full">
          {item.icon && (
            <span className="mr-2">
              <IconComponent name={item.icon} className="w-5 h-5" />
            </span>
          )}
          <span className="flex-grow text-start">{item.label}</span>
        </div>
        <ChevronDown
          strokeWidth={2.5}
          className={`h-4 w-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Content */}
      {isMobileMenuOpen && (
        <div className="bg-brand-dark-green/90 p-4 rounded-lg mx-2 mb-4 w-full max-h-fit overflow-y-auto min-w-full">
          {item.sections?.map((section, secIndex) => (
            <div key={secIndex} className="mb-6 w-full">
              <h3 className="text-brand-lime font-medium mb-3 border-b border-brand-lime/20 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-4 w-full">
                {section.items?.map((menuLink, linkIndex) => (
                  <NavigationMenuItem key={linkIndex} className="w-full list-none">
                    {' '}
                    {/* Removed the wrapping <li> and added list-none */}
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0 flex items-center justify-center rounded-lg bg-brand-mimosa p-2">
                        {menuLink.icon ? (
                          <IconComponent
                            name={menuLink.icon}
                            className="h-5 w-5 text-brand-dark-green"
                          />
                        ) : (
                          <div className="h-5 w-5" />
                        )}
                      </div>

                      <CMSLink
                        {...menuLink.link}
                        className="w-full text-sm font-medium text-white"
                        onClick={closeNav}
                      >
                        <div className="text-xs text-white/75 whitespace-nowrap overflow-hidden text-ellipsis">
                          {menuLink.description}
                        </div>
                      </CMSLink>
                    </div>
                  </NavigationMenuItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </NavigationMenuItem>
  )
}

export function MaterialMegaMenu({
  items,
  navItems,
  authButtons,
  showAuthButtons = true,
}: MaterialMegaMenuProps) {
  const [openNav, setOpenNav] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const { showRegister, registerButton, showSignIn, signInButton } = authButtons || {}
  // const router = useRouter()
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  // Close mobile menu handler
  const closeNav = useCallback(() => {
    setOpenNav(false)
  }, [])

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openNav) {
        closeNav()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openNav, closeNav])

  // Handle screen resize
  useEffect(() => {
    // Initial check
    setIsLargeScreen(window.innerWidth >= 960)

    const handleResize = () => {
      const isNowLargeScreen = window.innerWidth >= 960

      // Close mobile menu when screen becomes large
      if (isNowLargeScreen && openNav) {
        closeNav()
      }

      setIsLargeScreen(isNowLargeScreen)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openNav, closeNav])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [openNav])

  // All navigation items for mobile (including mega menu)
  const allMobileNavItems = [
    // Regular nav items
    ...(navItems?.filter(
      (item) =>
        // Filter out nav items that are also mega menu items
        !items.some((megaItem) => megaItem.label === item.link?.label),
    ) || []),
  ]

  // Close mobile menu on route change (Next.js navigation)
  useEffect(() => {
    if (!openNav) {
      setPrevPathname(pathname)
      return
    }
    if (pathname !== prevPathname) {
      closeNav()
      setPrevPathname(pathname)
    }
  }, [pathname, openNav, prevPathname, closeNav])

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden flex items-center justify-center p-2 text-white hover:text-brand-lime w-full"
        onClick={() => setOpenNav(!openNav)}
        aria-label="Toggle menu"
      >
        {openNav ? (
          <X className="h-6 w-6" strokeWidth={2} />
        ) : (
          <MenuIcon className="h-6 w-6" strokeWidth={2} />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavigationMenu className="max-w-full relative">
          <NavigationMenuList className="mt-0 mb-0 flex-row items-center justify-center space-x-6 w-full">
            {/* Mega menu items */}
            {items.map((item, index) => (
              <DesktopMenuDropdown key={item.id || index} item={item} />
            ))}

            {/* Regular nav items */}
            {navItems?.map(({ link }, i) => {
              // Skip if this nav item is also a mega menu item
              if (items.some((item) => item.label === link?.label)) return null
              if (!link || !link.label) return null

              return (
                <NavigationMenuItem key={`${link.label}-${i}`}>
                  <CMSLink
                    {...link}
                    appearance="inline"
                    className={cn(
                      'font-medium hover:bg-transparent p-0 flex items-center gap-2 py-3 px-4 text-white hover:text-brand-lime w-fit flex-nowrap text-nowrap whitespace-nowrap',
                    )}
                  />
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="fixed inset-0 bg-brand-dark-green z-50 lg:hidden flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-between p-4 border-b border-white/10 items-center">
            <div className="text-white text-lg font-medium">Menu</div>
            <button onClick={closeNav} aria-label="Close menu" className="text-white p-2">
              <X className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Menu Content*/}
          <div className="flex-grow overflow-y-auto w-full">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col w-full items-start">
                <div className="w-full" style={{ width: '100vw' }}>
                  {/* Regular Nav Items */}
                  {allMobileNavItems.map(({ link }, i) => (
                    <NavigationMenuItem key={`nav-${i}`} className="w-full">
                      <CMSLink
                        {...link}
                        appearance="inline"
                        className="block py-3 px-4 text-white hover:text-brand-lime hover:bg-transparent w-full text-left"
                        onClick={closeNav}
                      />
                    </NavigationMenuItem>
                  ))}
                  {/* Mega Menu Items */}
                  {items.map((item, i) => (
                    <MobileMenuDropdown key={`mega-${i}`} item={item} closeNav={closeNav} />
                  ))}
                  {/* Auth Items in Mobile Menu */}
                  {showAuthButtons && (
                    <div>
                      {showSignIn && signInButton?.link && (
                        <MobileAuthMenu item={signInButton} type="signin" closeNav={closeNav} />
                      )}
                      {showRegister && registerButton?.link && (
                        <MobileAuthMenu item={registerButton} type="register" closeNav={closeNav} />
                      )}
                    </div>
                  )}
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </>
  )
}
