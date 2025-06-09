import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { CTAFullBlock as CTAFullBlockProps } from '@/payload-types'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { PreHeading } from '@/components/ui/pre-heading'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'

export const CTAFullBlock: React.FC<CTAFullBlockProps> = ({
  preHeading,
  backgroundColor = 'brand-dark-green',
  heading,
  subheading,
  buttonLink,
}) => {
  return (
    <section
      className={cn(
        '"w-full px-4 sm:px-6 md:px-10 lg:px-20 h-96 flex flex-col justify-center rounded-br-3xl rounded-bl-3xl',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses],
      )}
    >
      <div className="flex flex-col items-center px-4md:px-8 md:py-8 lg:px-10 space-y-8  py-28">
        {/* Text content - centered on mobile, left-aligned on larger screens */}
        <div className="flex flex-col space-y-2 items-center text-center mb-6 md:mb-0 md:pr-8 w-1/2">
          {/* Pre-heading tag */}
          {preHeading && backgroundColor && (
            <PreHeading title={preHeading} backgroundColor={backgroundColor} />
          )}

          {heading && (
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium mb-2">
              {heading}
            </h2>
          )}
          {subheading && <p className="text-sm sm:text-base  font-normal">{subheading}</p>}
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
    </section>
  )
}
