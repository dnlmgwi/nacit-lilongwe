'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { IconComponent } from '../MegaMenu/icons'
import { CMSLink } from '@/components/Link'
// import { cn } from '@/utilities/ui'
import {
  NavigationAuthMenu,
  NavigationAuthMenuContent,
  NavigationAuthMenuItem,
  NavigationAuthMenuLink,
  NavigationAuthMenuList,
  NavigationAuthMenuTrigger,
} from '@/components/ui/navigation-auth-menu'

type AuthButtonProps = {
  item: {
    link: {
      type?: ('reference' | 'custom') | null
      newTab?: boolean | null
      reference?: any
      url?: string | null
      label: string
      appearance?: ('default' | 'outline') | null
    }
    icon?: string | null
    authItems?: any[] | null
  }
  type: 'register' | 'signin'
}

// Desktop Auth Menu Dropdown
export function AuthMenuDropdown({ item }: AuthButtonProps) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { link, icon, authItems } = item

  if (!authItems || !Array.isArray(authItems) || authItems.length === 0) {
    return (
      <NavigationAuthMenuItem className="p-0 font-medium hover:bg-transparent min-w-0">
        <CMSLink
          {...link}
          appearance={link.appearance || 'default'}
          className="flex items-center gap-2 py-2 px-4 text-white hover:text-brand-lime whitespace-nowrap w-full"
        />
      </NavigationAuthMenuItem>
    )
  }

  return (
    <NavigationAuthMenu>
      <NavigationAuthMenuList>
        <NavigationAuthMenuItem>
          <NavigationAuthMenuTrigger className="flex items-center gap-2 py-2 pr-4 font-medium text-white hover:bg-transparent hover:text-brand-lime whitespace-nowrap overflow-hidden text-ellipsis min-w-0 w-full">
            <div className="flex items-center gap-1 w-full justify-center">
              {icon && (
                <span className="mr-1 flex-shrink-0">
                  <IconComponent name={icon} className="w-5 h-5" />
                </span>
              )}
              <span className="whitespace-nowrap">{link.label}</span>
            </div>
          </NavigationAuthMenuTrigger>
          <NavigationAuthMenuContent
            className="rounded-xl bg-brand-white shadow-xl border border-brand-dark-green p-4"
            style={{ maxWidth: '90vw', width: 'auto', position: 'relative' }}
          >
            <div className="outline-none outline-0">
              <div className="space-y-1">
                {authItems.map((item, index) => (
                  <NavigationAuthMenuLink
                    key={`auth-item-${index}`}
                    className="flex items-center gap-3 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis px-2 py-2 hover:bg-brand-mimosa/10"
                    asChild
                  >
                    <div>
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center justify-center rounded-lg !bg-brand-mimosa p-2 flex-shrink-0">
                          {item.icon ? (
                            <IconComponent
                              name={item.icon}
                              className="h-6 w-6 text-brand-dark-green"
                            />
                          ) : (
                            <div className="h-6 w-6" />
                          )}
                        </div>

                        <CMSLink
                          {...item.link}
                          className="w-full text-sm font-medium text-brand-dark-green whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          <div>{item.description}</div>
                        </CMSLink>
                      </div>
                    </div>
                  </NavigationAuthMenuLink>
                ))}
              </div>
            </div>
          </NavigationAuthMenuContent>
        </NavigationAuthMenuItem>
      </NavigationAuthMenuList>
    </NavigationAuthMenu>
  )
}

// Mobile version
export function MobileAuthMenu({
  item,
  type,
  closeNav,
}: AuthButtonProps & { closeNav: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const { link, icon, authItems } = item

  if (!authItems || !Array.isArray(authItems) || authItems.length === 0) {
    return (
      <div className="px-2">
        <CMSLink
          {...link}
          appearance="inline"
          className="block py-3 px-4 text-white hover:text-brand-lime w-full text-center"
          onClick={closeNav}
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Dropdown Trigger*/}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-brand-lime"
      >
        <div className="flex items-center">
          {icon && (
            <span className="mr-2 flex-shrink-0">
              <IconComponent name={icon} className="w-5 h-5" />
            </span>
          )}
          <span>{link.label}</span>
        </div>
        <ChevronDown
          strokeWidth={2.5}
          className={`h-4 w-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Content */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} bg-brand-dark-green/90 p-4 rounded-lg mx-2 mb-4 max-w-[90vw] overflow-x-hidden`}
        style={{ maxWidth: '90vw' }}
      >
        <h3 className="text-brand-lime font-medium mb-3 border-b border-brand-lime/20 pb-2">
          {type === 'register' ? 'Register Options' : 'Sign In Options'}
        </h3>
        <ul className="space-y-4">
          {authItems.map((menuItem, index) => (
            <li key={index} className="group">
              <NavigationAuthMenuLink
                asChild
                className="p-0 flex flex-row w-full hover:bg-transparent"
              >
                <div className="flex items-center gap-3 ">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-lg bg-brand-mimosa p-2">
                    {menuItem.icon ? (
                      <IconComponent
                        name={menuItem.icon}
                        className="h-5 w-5 text-brand-dark-green"
                      />
                    ) : (
                      <div className="h-5 w-5" />
                    )}
                  </div>

                  <CMSLink
                    {...menuItem.link}
                    className="w-full text-sm font-medium text-white group-hover:text-brand-lime"
                    onClick={closeNav}
                  >
                    <div className={'text-xs text-gray-50/35'}>{menuItem.description}</div>
                  </CMSLink>
                </div>
              </NavigationAuthMenuLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
