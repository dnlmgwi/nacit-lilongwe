import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { SecurityBlock as SecurityBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'
import { IconComponent } from '@/Header/MegaMenu/icons'

// Feature item with check icon
const FeatureItem: React.FC<{
  title: string
  description: string
  icon: string
  color: string
}> = ({ title, description, icon, color }) => {
  return (
    <div
      className="
      flex flex-row items-start
      text-start
      gap-6
    "
    >
      <div
        className="
        border
        border-brand-lime
        rounded-full
        p-4
        mb-4
        scale-75
      "
      >
        {icon ? (
          // If using an icon font/component
          <IconComponent
            name={icon}
            className="h-8 w-8 text-brand-lime" // Size and color of the icon
          />
        ) : (
          // Placeholder if no icon/SVG is provided, keeps the circle size consistent
          <div className="h-8 w-8" />
        )}
      </div>
      <div className={cn(bgColorClasses[color as keyof typeof bgColorClasses])}>
        <h3
          className="
        text-2xl
        font-medium

        mb-2
      "
        >
          {title}
        </h3>

        <p
          className="
        text-lg
        font-normal
        text-start
      "
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export const SecurityBlock: React.FC<SecurityBlockProps> = ({
  preHeading,
  heading,
  subHeading,
  featureItems,
  showButton,
  mediaType = 'image',
  media,
  svgCode,
  lottieJSON,
  button,
  layout = 'imageRight',
  backgroundColor = 'white',
  mediaBorderRadius = 'rounded-lg',
  mediaWidth = 'md:w-1/2',
  contentWidth = 'md:w-1/2',
}) => {
  const isMediaOnRight = layout === 'imageRight'
  const isContentCentered = layout === 'center'

  return (
    <section
      className={cn(
        'p-8 py-12 md:py-20',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses],
      )}
    >
      <div className="container px-4 sm:px-6 md:px-8">
        {isContentCentered ? (
          // Centered layout (Image on top or bottom with centered text)
          <div className="flex flex-col items-center">
            {/* Pre-heading tag */}
            {preHeading && backgroundColor && (
              <PreHeading title={preHeading} backgroundColor={backgroundColor} />
            )}

            {/* Main heading */}
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center max-w-3xl">
                {heading}
              </h2>
            )}

            {/* Subheading text */}
            {subHeading && (
              <p className="text-base md:text-lg mb-8 text-center max-w-2xl">{subHeading}</p>
            )}

            {/* Media section (image, svg, or lottie) - Hidden on mobile */}
            <div
              className={cn(
                'hidden md:flex items-center justify-center w-full md:w-2/3 max-w-3xl mb-8',
                mediaBorderRadius || 'rounded-lg',
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                {renderMedia(
                  mediaType || 'image',
                  media,
                  svgCode || '',
                  lottieJSON || '',
                  mediaBorderRadius || 'rounded-lg',
                )}
              </div>
            </div>

            {/* Feature items list */}
            {featureItems && featureItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl">
                {featureItems.map((item, i) => (
                  <FeatureItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    color={backgroundColor as keyof typeof bgColorClasses}
                  />
                ))}
              </div>
            )}

            {/* CTA button */}
            {showButton && button && button.link && (
              <div className="mt-6 w-full">
                <BrandButtonWithIcon
                  {...button.link}
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="w-fit"
                />
              </div>
            )}
          </div>
        ) : (
          // Side by side layout
          <div
            className={cn(
              'flex flex-col gap-8 ',
              isMediaOnRight ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
          >
            {/* Content section */}
            <div className={cn('flex flex-col justify-center h-full', contentWidth || 'md:w-1/2 ')}>
              {/* Pre-heading tag */}
              {preHeading && backgroundColor && (
                <PreHeading title={preHeading} backgroundColor={backgroundColor} />
              )}

              {/* Main heading */}
              {heading && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">{heading}</h2>
              )}

              {/* Subheading text */}
              {subHeading && (
                <p className="text-base font-normal text-justify md:text-lg mb-6">{subHeading}</p>
              )}

              {/* Feature items list */}
              {featureItems && featureItems.length > 0 && (
                <div className="mb-8 flex flex-col gap-8">
                  {featureItems.map((item, i) => (
                    <FeatureItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      color={backgroundColor as keyof typeof bgColorClasses}
                    />
                  ))}
                </div>
              )}

              {/* CTA button in centered layout */}
              {showButton && button && button.link && (
                <div className="mt-6 w-full">
                  <BrandButtonWithIcon
                    {...button.link}
                    icon={<ArrowRight className="h-4 w-4" />}
                    className="w-fit"
                  />
                </div>
              )}
            </div>

            {/* Media section - Hidden on mobile */}
            <div
              className={cn('hidden md:flex items-center justify-center', mediaWidth || 'md:w-1/2')}
            >
              <div
                className={cn(
                  'w-full h-full overflow-hidden flex items-center justify-center',
                  mediaBorderRadius || 'rounded-lg',
                )}
              >
                {renderMedia(
                  mediaType || 'image',
                  media,
                  svgCode || '',
                  lottieJSON || '',
                  mediaBorderRadius || 'rounded-lg',
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Helper function to render different media types
const renderMedia = (
  mediaType: string,
  media: any,
  svgCode: string,
  lottieJSON: string,
  borderRadius: string,
) => {
  switch (mediaType) {
    case 'image':
      return media && typeof media === 'object' ? (
        <div className="flex items-center justify-center w-full h-full">
          <Media
            resource={media}
            className={cn(
              'w-full h-full object-contain hover:scale-105 transition-transform',
              borderRadius,
            )}
            imgClassName="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div
          className={cn(
            'w-full aspect-video bg-gray-200 flex items-center justify-center',
            borderRadius,
          )}
        >
          <span className="text-gray-500">No image provided</span>
        </div>
      )

    case 'svg':
      return svgCode ? (
        <div className={cn('w-full', borderRadius)} dangerouslySetInnerHTML={{ __html: svgCode }} />
      ) : (
        <div
          className={cn(
            'w-full aspect-video bg-gray-200 flex items-center justify-center',
            borderRadius,
          )}
        >
          <span className="text-gray-500">No SVG provided</span>
        </div>
      )

    case 'lottie':
      // You would need to add Lottie player component integration here
      return (
        <div className={cn('w-full aspect-video flex items-center justify-center', borderRadius)}>
          {lottieJSON ? (
            <div className="w-full h-full">
              {/* Add Lottie player component here */}
              <span className="text-gray-500">Lottie animation would render here</span>
            </div>
          ) : (
            <span className="text-gray-500">No Lottie animation provided</span>
          )}
        </div>
      )

    default:
      return (
        <div
          className={cn(
            'w-full aspect-square bg-gray-200 flex items-center justify-center',
            borderRadius,
          )}
        >
          <span className="text-gray-500">Unsupported media type</span>
        </div>
      )
  }
}
