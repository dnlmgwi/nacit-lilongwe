import React from 'react'
import { Check } from 'lucide-react'
import type { StoryBlock as StoryBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'
import RichText from '@/components/RichText'

// Feature item with check icon
const FeatureItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="bg-brand-lime flex justify-center rounded-full p-1 scale-[0.7]">
        <Check className="text-brand-dark-green h-6 w-6" aria-hidden="true" />
      </div>
      <span className="text-sm sm:text-base">{text}</span>
    </div>
  )
}

export const StoryBlock: React.FC<StoryBlockProps> = ({
  preHeading,
  heading,
  subHeading,
  featureItems,
  mediaType = 'image',
  media,
  svgCode,
  richText,
  lottieJSON,
  layout = 'imageRight',
  backgroundColor = 'white',
  mediaBorderRadius = 'rounded-3xl',
  mediaWidth = 'md:w-1/2',
  contentWidth = 'md:w-1/2',
}) => {
  const isMediaOnRight = layout === 'imageRight'
  const isContentCentered = layout === 'center'

  return (
    <section
      className={cn(
        'p-8 py-12 md:py-20 h-fit',
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center max-w-3xl">
                {heading}
              </h2>
            )}

            {/* Media section (image, svg, or lottie) - Hidden on mobile */}
            <div
              className={cn(
                'hidden md:flex items-center justify-center w-full md:w-2/3 max-w-3xl mb-8',
                mediaBorderRadius || 'rounded-3xl',
              )}
            >
              <div className="w-full h-full flex items-center justify-center rounded-3xl">
                {renderMedia(
                  mediaType || 'image',
                  media,
                  svgCode || '',
                  lottieJSON || '',
                  mediaBorderRadius || 'rounded-3xl',

                )}
              </div>
            </div>

            {/* Subheading text */}
            {subHeading && (
              <p className="text-base md:text-lg mb-8 text-justify max-w-2xl text-brand-dark-green">
                {subHeading}
              </p>
            )}

            {richText && (
              <RichText
                className="text-base md:text-lg mb-8 text-justify max-w-2xl text-brand-dark-green"
                data={richText}
                enableGutter={false}
              />
            )}

            {/* Feature items list */}
            {featureItems && featureItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl">
                {featureItems.map((item, i) => (
                  <FeatureItem key={i} text={item.text} />
                ))}
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
            <div className={cn('flex flex-col justify-center', contentWidth || 'md:w-1/2 ')}>
              {/* tagline */}
              {preHeading && (
                <div className="relative">
                  <p className=" font-medium mb-4 capitalize border-b-4 border-brand-teal w-fit align-baseline">
                    {preHeading}
                  </p>
                </div>
              )}

              {/* Main heading */}
              {heading && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">{heading}</h2>
              )}

              {/* Subheading text */}
              {subHeading && (
                <p className="text-base text-justify font-normal md:text-lg mb-6 text-brand-dark-green">
                  {subHeading}
                </p>
              )}

              {richText && (
                <RichText
                  className="text-base md:text-lg mb-8 text-justify max-w-2xl text-brand-dark-green"
                  data={richText}
                  enableGutter={false}
                />
              )}

              {/* Feature items list */}
              {featureItems && featureItems.length > 0 && (
                <div className="mb-8">
                  {featureItems.map((item, i) => (
                    <FeatureItem key={i} text={item.text} />
                  ))}
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
                  mediaBorderRadius || 'rounded-3xl',
                )}
              >
                {renderMedia(
                  mediaType || 'image',
                  media,
                  svgCode || '',
                  lottieJSON || '',
                  mediaBorderRadius || 'rounded-3xl',
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
              'w-full h-full object-cover hover:scale-105 transition-transform',
              borderRadius,
            )}
            imgClassName="object-cover w-full h-full rounded-3xl"
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
