'use client'

import React from 'react'
import { X } from 'lucide-react'

import type { NotificationBanner } from '@/payload-types'
import { BrandButton } from '@/components/ui/brand-button'
import { ScrollingText } from '@/components/ScrollingText'

interface NotificationBannerClientProps {
  data: NotificationBanner
}

export const NotificationBannerClient: React.FC<NotificationBannerClientProps> = ({ data }) => {
  const [isVisible, setIsVisible] = React.useState(true)

  if (!data?.enabled || !isVisible) {
    return null
  }

  const { message, hasLink, linkDetails } = data

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className="sticky top-0 z-40 w-full bg-brand-lime text-brand-dark-green py-1">
      <div className="container mx-auto px-4 flex justify-around flex-row items-center">
        {/* Left side with text */}
        <div className="flex-grow min-w-0 mx-auto text-center overflow-x-auto whitespace-nowrap max-w-full">
          {message && <ScrollingText text={message} />}
        </div>

        {/* Right side with buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {hasLink && linkDetails?.link && (
            <BrandButton
              {...linkDetails.link}
              variant={linkDetails.link.appearance === 'outline' ? 'outline' : 'default'}
              className={
                linkDetails.link.appearance === 'outline'
                  ? 'bg-brand-mimosa text-brand-dark-green border hover:text-brand-dark-green hover:border-brand-dark-green text-sm whitespace-nowrap'
                  : 'bg-brand-dark-green text-brand-lime hover:text-brand-dark-green hover:bg-brand-mimosa text-sm whitespace-nowrap'
              }
            />
          )}

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-brand-teal/10 focus:outline-none"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
