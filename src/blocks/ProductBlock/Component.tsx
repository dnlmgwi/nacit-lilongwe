'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Media } from '@/components/Media'
import type { ProductBlocks as ProductsBlockProps } from '@/payload-types'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

export const ProductBlocks: React.FC<ProductsBlockProps> = ({
  heading,
  subHeading,
  preHeading,
  products = [],
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
        <div className="flex items-center text-center mb-16 max-w-3xl mx-auto">
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

        {/* Product Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto h-fit ">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col overflow-hidden rounded-3xl',
                'h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[600px]',

                productCardColor === 'brand-green'
                  ? 'bg-brand-green'
                  : productCardColor === 'gray'
                    ? 'bg-gray-100'
                    : productCardColor === 'white'
                      ? 'bg-white'
                      : 'bg-brand-dark-green',
              )}
            >
              {/* Text Content Side */}
              <div
                className="p-8 sm:p-10 md:p-12 pt-10 sm:pt-12 md:pt-14 flex flex-col justify-center
                  w-full sm:w-4/5 md:w-2/3 container items-center mx-auto
                  h-auto sm:h-1/2"
              >
                <h3 className="text-2xl sm:text-3xl font-medium text-brand-lime mb-3 sm:mb-4 mt-10">
                  {product.title}
                </h3>
                <p
                  className={cn(
                    'mb-6 sm:mb-8 text-center',
                    productCardColor === 'white' || productCardColor === 'gray'
                      ? 'text-gray-800'
                      : 'text-white',
                  )}
                >
                  {product.description}
                </p>
                {product.link && (
                  <BrandButtonWithIcon
                    {...product.link}
                    icon={<ArrowRight className="h-4 w-4" />}
                    className={cn(
                      'w-fit',
                      productCardColor === 'white' || productCardColor === 'gray'
                        ? 'bg-brand-dark-green text-white hover:bg-brand-dark-green/90'
                        : 'bg-brand-lime text-black hover:bg-brand-lime/90',
                    )}
                  />
                )}
              </div>

              {/* Image Side */}
              <div
                className="w-full relative min-h-[100px] sm:min-h-[200px] md:min-h-[150px]
                  h-1/2 flex items-end justify-center overflow-hidden -bottom-10 scale-125"
              >
                {product.media ? (
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Media
                      resource={product.media}
                      className="object-contain w-full h-full absolute"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
