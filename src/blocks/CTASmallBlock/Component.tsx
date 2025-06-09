import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { CTASmallBlock as CTASmallBlockProps } from '@/payload-types'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'

export const CTASmallBlock: React.FC<CTASmallBlockProps> = ({
  heading,
  subheading,
  buttonLink,
}) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 my-6 md:my-10 lg:my-16">
      <div className="bg-brand-dark-green text-white rounded-2xl overflow-hidden">
        <div className="px-4 py-6 md:px-8 md:py-8 lg:px-10">
          {/* Layout for mobile (vertical) and desktop (horizontal) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Text content - centered on mobile, left-aligned on larger screens */}
            <div className="text-center md:text-left mb-6 md:mb-0 md:pr-8">
              {heading && (
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium mb-2">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p className="text-sm sm:text-base text-brand-white/90 font-normal">{subheading}</p>
              )}
            </div>

            {/* CTA Button */}
            {buttonLink && (
              <div className="flex justify-center md:justify-end md:min-w-[160px] md:flex-shrink-0">
                <BrandButtonWithIcon
                  {...buttonLink.link}
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="px-5 py-2.5 text-sm font-medium"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
