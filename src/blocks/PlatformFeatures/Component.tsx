'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { PlatformFeatures as PlatformFeaturesProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import { IconComponent } from '@/Header/MegaMenu/icons'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

// Feature item component
const FeatureItem: React.FC<{
  title: string
  description: string
  icon?: string | null // Example: 'bolt' for IconComponent
  svgMedia?: any // Example: { url: '/path/to/icon.svg', alt: 'icon' } for Media
}> = ({ title, description, icon, svgMedia }) => {
  return (
    // --- Main Card Container ---
    <div
      className="
      flex flex-col items-start
      text-center
      p-6
      bg-white
      rounded-xl
    "
    >
      {/* --- Icon Container (Circle) --- */}
      <div
        className="
        bg-brand-lime
        rounded-full
        p-4
        mb-4
        border border-brand-dark-green
      "
      >
        {icon ? (
          // If using an icon font/component
          <IconComponent
            name={icon}
            className="h-8 w-8 text-brand-dark-green" // Size and color of the icon
          />
        ) : svgMedia ? (
          // If using an SVG/image component
          <div className="h-8 w-8 flex items-center justify-center">
            {' '}
            {/* Ensure SVG container is sized */}
            <Media
              resource={svgMedia}
              className="h-8 w-8" // Size of the SVG/image
            />
          </div>
        ) : (
          // Placeholder if no icon/SVG is provided, keeps the circle size consistent
          <div className="h-8 w-8" />
        )}
      </div>

      {/* --- Title --- */}
      <h3
        className="
        text-lg
        font-medium
        text-brand-dark-green
        mb-2
      "
      >
        {title}
      </h3>

      <p
        className="
        text-sm
        font-normal
        text-gray-600
        text-start
      "
      >
        {description}
      </p>
    </div>
  )
}

export const PlatformFeatures: React.FC<PlatformFeaturesProps> = ({
  heading,
  subHeading,
  preHeading,
  features,
  button,
  backgroundColor = 'white',
}) => {
  return (
    <section
      className={cn('py-16 px-4', bgColorClasses[backgroundColor as keyof typeof bgColorClasses])}
    >
      <div className="container mx-auto items-start">
        {/* Section header */}
        {/* Pre-heading tag */}
        {preHeading && backgroundColor && (
          <PreHeading title={preHeading} backgroundColor={backgroundColor} />
        )}

        {/* Main heading */}
        {heading && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-start max-w-3xl">
            {heading}
          </h2>
        )}

        {/* Subheading text */}
        {subHeading && (
          <p className="text-base md:text-lg mb-4 text-start max-w-xl">{subHeading}</p>
        )}
        <div className="flex flex-col items-start">
          {/* CTA button */}
          {button && button.link && (
            <div className="flex justify-center mt-8">
              <BrandButtonWithIcon
                {...button.link}
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-fit"
              />
            </div>
          )}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
          {features?.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title || ''}
              description={feature.description || ''}
              icon={feature.iconType === 'lucide' ? feature.icon : undefined}
              svgMedia={feature.iconType === 'svg' ? feature.svgMedia : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
