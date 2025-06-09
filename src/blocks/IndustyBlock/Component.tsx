'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { IndustryBlocks as IndustryBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

export const IndustryBlock: React.FC<IndustryBlockProps> = ({
  heading,
  subHeading,
  preHeading,
  industry = [],
  backgroundColor = 'white',
}) => {
  return (
    <section
      className={cn(
        'py-16 px-4 h-fit',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses],
      )}
    >
      <div className="container mx-auto h-fit">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 max-w-3xl mx-auto">
          {preHeading && backgroundColor && (
            <PreHeading
              title={preHeading}
              backgroundColor={backgroundColor}
              className="mb-4 mx-auto"
            />
          )}

          {heading && <h2 className="text-4xl md:text-5xl font-medium mb-6">{heading}</h2>}

          {subHeading && <p className="text-lg">{subHeading}</p>}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto h-fit">
          {industry.map((industry, index) => (
            <div
              key={index}
              className={cn('flex flex-col overflow-hidden rounded-3xl', 'h-fit min-h-[300px]')}
            >
              {/* Image Side */}
              <div className="w-full relative h-96 py-4 flex items-center justify-center overflow-hidden">
                {industry.media ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Media
                      resource={industry.media}
                      className="max-w-full max-h-full rounded-3xl"
                      imgClassName="object-cover rounded-3xl"
                      fill
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                )}
              </div>
              {/* Text Content Side */}
              <div
                className="flex flex-col justify-start
                  w-full items-start mx-auto
                  h-fit"
              >
                <p className={cn('mb-6 text-lg font-medium')}>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
