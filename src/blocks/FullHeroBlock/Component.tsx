'use client'

import { ArrowRight } from 'lucide-react'

import type { FullHeroBlock as FullHeroBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollingText } from '@/components/ScrollingText'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

export const FullHeroBlock: React.FC<FullHeroBlockProps> = ({
  showNotice,
  richText,
  buttons,
  showIcons,
  preHeading,
  media,
  noticeLink,
  useImagePlaceholder,
  backgroundColor = 'brand-dark-green',
}) => {
  return (
    <div
      className={cn(
        'w-full pt-4 h-fit',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses],
      )}
    >
      <div className="flex w-full items-center justify-center">
        {showNotice && noticeLink && (
          <Link href={noticeLink.link.url as string}>
            <div className="flex flex-row w-fit bg-brand-mimosa rounded-full px-2 py-2 justify-center items-center scale-[0.9]">
              <div className="w-fit bg-brand-lime rounded-full text-brand-dark-green py-2 px-4 text-center font-medium capitalize">
                {noticeLink.link.label}
              </div>
              <ScrollingText text={noticeLink.noticeText} className="text-brand-dark-green mx-4" />
              <div className="p-2 ">
                <ArrowRight className="h-5 w-5 text-brand-dark-green" />
              </div>
            </div>
          </Link>
        )}
      </div>

      <div className="container py-4 md:py-24 flex flex-col md:flex-col items-center justify-center gap-4 md:gap-16">
        {preHeading && backgroundColor && (
          <PreHeading
            title={preHeading}
            backgroundColor={backgroundColor}
            className="mx-auto -mb-8"
          />
        )}
        <div className="w-full md:w-1/2 flex flex-col">
          {richText && (
            <RichText className="mb-6 text-white dark:text-white text-center" data={richText} />
          )}
          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="flex gap-4 w-full space-x-4 justify-center items-center flex-col lg:flex-row">
              {buttons.map(({ link }, i) => {
                if (!link) return null

                return (
                  <BrandButtonWithIcon
                    key={i}
                    {...link}
                    variant={link.appearance === 'outline' ? 'outline' : 'default'}
                    icon={showIcons ? <ArrowRight className="h-4 w-4" /> : undefined}
                    className="scale-110"
                  />
                )
              })}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          {useImagePlaceholder ? (
            <div className="w-full aspect-video rounded-md flex items-center justify-center">
              <span className="text-gray-500">
                <Image
                  src="/images/place-holder.png"
                  width={1000}
                  height={500}
                  alt="place-holder"
                  className="relative object-contain"
                ></Image>
              </span>
            </div>
          ) : (
            media &&
            typeof media === 'object' && (
              <div className="w-full">
                <Media
                  resource={media}
                  priority={true}
                  loading={'eager'}
                  alt={'hero'}
                  className="w-full rounded-md overflow-hidden"
                  imgClassName="object-cover w-full h-full rounded-3xl"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
