import React from 'react'
import { ArrowRight, Info } from 'lucide-react'
import type { CTALargeBlock as CTALargeBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import NextImage from 'next/image'
import { PreHeading } from '@/components/ui/pre-heading'

export const CTALargeBlock: React.FC<CTALargeBlockProps> = ({
  heading,
  subheading,
  preHeading,
  buttonLink,
  termsLink,
  backgroundColor,
  illustration,
  useIllustrationPlaceholder,
}) => {
  return (
    <section className="bg-brand-white m-20">
      <div className="py-0 px-6 bg-brand-dark-green text-white rounded-3xl overflow-hidden ">
        <div className={cn('container py-12 px-6 md:px-10 flex md:flex-col-1 lg:flex-col-2')}>
          {/* Content area */}
          <div
            className={cn(
              'flex flex-col text-center md:text-left md:w-1/2 md:mr-10 justify-center',
            )}
          >
            {preHeading && backgroundColor && (
              <PreHeading title={preHeading} backgroundColor={backgroundColor} />
            )}

            {/* Main heading with highlighted text */}
            {heading && (
              <h2 className="text-5xl md:text-6xl font-medium mb-6">
                <span className="text-brand-lime">{heading.split(' or ')[0]}</span>
                <span className="text-white">
                  <span> or </span>
                  {heading.split(' or ')[1]}
                </span>
              </h2>
            )}

            {/* SubHeading */}
            {subheading && <p className="text-brand-white font-normal mb-4">{subheading}</p>}

            {/* Rich text content */}
            {termsLink && (
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm mb-6">
                <Info className={'w-4 h-4'}></Info>
                <Link
                  href={termsLink.link.url || '#'}
                  className="text-white underline hover:text-brand-lime"
                >
                  Terms and Conditions apply
                </Link>
              </div>
            )}

            {/* CTA Button */}
            {buttonLink && (
              <div className="mt-4">
                <BrandButtonWithIcon
                  {...buttonLink.link}
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="inline-flex"
                />
              </div>
            )}
          </div>

          {/* Illustration area */}
          <div className={cn('flex items-center justify-center md:w-1/2')}>
            {useIllustrationPlaceholder ? (
              <div className="w-full max-w-md aspect-square relative">
                <NextImage
                  className={'object-contain'}
                  src={'/images/isometric_credit_card_with_zero_percent_interest_1.webp'}
                  alt={'Fees'}
                  fill
                  fetchPriority={'high'}
                ></NextImage>
              </div>
            ) : (
              illustration &&
              typeof illustration === 'object' && (
                <Media
                  resource={illustration}
                  className="w-full max-w-md"
                  imgClassName="object-contain"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
