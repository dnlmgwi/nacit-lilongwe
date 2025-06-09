'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { ProductStepsBlocks as ProductsStepsBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

export const ProductStepsBlocks: React.FC<ProductsStepsBlockProps> = ({
  heading,
  subHeading,
  preHeading,
  steps = [],
  backgroundColor = 'white',
  productCardColor = 'brand-dark-green',
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
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          {preHeading && backgroundColor && (
            <PreHeading
              title={preHeading}
              backgroundColor={backgroundColor}
              className="mb-4 mx-auto"
            />
          )}

          {heading && <h2 className="text-4xl md:text-5xl font-medium mb-6">{heading}</h2>}

          {subHeading && <p className="text-lg mb-8">{subHeading}</p>}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto h-fit">
          {steps.map((steps, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col overflow-hidden rounded-3xl',
                'h-fit min-h-[300px]',

                productCardColor === 'brand-green'
                  ? 'bg-brand-green'
                  : productCardColor === 'gray'
                    ? 'bg-gray-100'
                    : productCardColor === 'white'
                      ? 'bg-white'
                      : 'bg-brand-dark-green',
              )}
            >
              {/* Image Side */}
              <div
                className="w-full relative h-96 py-10 flex items-center justify-center overflow-hidden"
              >
                {steps.media ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Media
                      resource={steps.media}
                      className="object-contain max-w-full max-h-full scale-75"
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
                className="p-8 flex flex-col justify-center
                  w-full container items-start mx-auto
                  h-fit gap-2"
              >
                <h3 className="text-2xl font-medium text-brand-lime">{steps.title}</h3>
                <p
                  className={cn(
                    'mb-6 text-center',
                    productCardColor === 'white' || productCardColor === 'gray'
                      ? 'text-gray-800'
                      : 'text-white',
                  )}
                >
                  {steps.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
