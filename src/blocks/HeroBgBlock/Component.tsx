'use client'

import { ArrowRight } from 'lucide-react'

import type { HeroBgBlock as HeroBackgroundBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollingText } from '@/components/ScrollingText'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'

export const HeroBackgroundBlock: React.FC<HeroBackgroundBlockProps> = ({
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
        'w-full h-fit min-h-screen relative overflow-hidden flex flex-col justify-center items-center',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses],
      )}
    >
      {/* Background decorative elements - circular profile images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top-left decorative circle */}
        <div className="absolute left-8 top-16">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-1.webp"
              width={100}
              height={100}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Top-right decorative circle */}
        <div className="absolute right-16 top-24">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-2.webp"
              width={100}
              height={100}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom-right decorative circle */}
        <div className="absolute right-32 bottom-56">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-3.webp"
              width={100}
              height={100}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom-left decorative circle */}
        <div className="absolute left-32 bottom-16">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-4.webp"
              width={100}
              height={100}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Additional decorative circles */}
        <div className="absolute right-48 bottom-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-5.webp"
              width={80}
              height={80}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="absolute left-1/4 top-36">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-brand-lime">
            <Image
              src="/images/profiles/profile-6.webp"
              width={80}
              height={80}
              alt="Decorative profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Decorative curves/lines - using SVG for the curved lines */}
        <div className={"scale-50 relative bottom-1/3 -z-10 opacity-50"}>
          <svg width="1546" height="1265" viewBox="0 0 1546 1265" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M365.164 1141.14L363.238 1138.84L365.165 1141.14C382.704 1126.44 418.52 1107.14 456.015 1088.91C493.393 1070.75 532.067 1053.83 555.064 1043.9C780.591 946.492 1040.09 905.322 1289.71 900.589C1346.03 899.523 1403.47 899.203 1459.74 900.717C1469.57 900.981 1479.39 901.676 1489.28 902.377L1491.39 902.526C1492.78 902.625 1494.17 902.722 1495.56 902.818C1469.47 906.756 1442.38 909.571 1415.08 912.172C1408.66 912.785 1402.21 913.385 1395.77 913.986C1365.25 916.832 1334.72 919.68 1305.42 923.793C1281.46 927.059 1257.58 930.723 1233.78 934.784C1209.97 938.843 1186.26 943.298 1162.64 948.149C1139.03 952.997 1115.52 958.237 1092.12 963.869C1068.73 969.5 1045.46 975.519 1022.32 981.925C999.173 988.331 976.175 995.12 953.321 1002.29C930.465 1009.46 907.769 1017.01 885.233 1024.94C862.696 1032.87 840.333 1041.16 818.146 1049.84C795.96 1058.51 773.965 1067.54 752.16 1076.94C696.982 1100.72 643.573 1127.29 591.932 1156.67L591.92 1156.68C562.106 1173.83 532.567 1191.34 503.303 1209.21L503.294 1209.21L503.285 1209.22C495.814 1213.86 488.518 1218.91 481.273 1224C480.256 1224.72 479.24 1225.43 478.225 1226.15C471.989 1230.53 465.775 1234.91 459.433 1239.07C444.8 1248.68 429.687 1257.03 412.736 1261.56H406.991C388.508 1256.46 374.837 1251.47 366.017 1236.29C361.032 1227.72 355.787 1212.8 352.678 1197.59C351.129 1190.02 350.13 1182.47 349.943 1175.69C349.756 1168.87 350.399 1163.05 351.974 1158.82C354.61 1151.74 358.84 1146.44 365.164 1141.14ZM140.449 1013.1C524.651 749.42 1048.39 772.562 1502.17 853.074C990.503 831.422 484.514 835.016 108.874 1168.17C86.3499 1178.4 60.6355 1177.73 40.1986 1168.53C19.711 1159.3 4.73917 1141.63 3.2671 1117.93C3.28444 1008.46 34.7255 795.485 86.0818 587.452C111.759 483.439 142.392 380.756 176.519 292.959C210.583 205.326 248.023 132.802 287.31 88.5291C339.185 58.6451 410.934 38.0006 493.115 24.5601C575.47 11.091 668.082 4.89018 761.238 3.78621C930.494 1.78038 1101.32 16.6018 1215.33 35.1014C939.941 37.9657 668.937 60.5976 405.883 136.919L405.037 137.165L404.457 137.829C331.53 221.514 274.853 365.571 231.187 525.424C187.487 685.404 156.697 861.684 135.781 1010.21L134.83 1016.96L140.449 1013.1Z" stroke="#67C723" stroke-width="6"/>
          </svg>
        </div>
      </div>

      {/* Notice bar at top */}
      <div className="relative z-10 flex w-full items-center justify-center pt-4">
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

      {/* Main content */}
      <div className="container relative z-10 py-16 md:py-24 flex flex-col items-center justify-center gap-8 md:gap-16">
        {preHeading && backgroundColor && (
          <PreHeading title={preHeading} backgroundColor={backgroundColor} className="mx-auto -mb-16" />
        )}

        {/* Main heading and CTA section */}
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-center">
          {richText && (
            <RichText className="mb-10 text-white dark:text-white text-center" data={richText} />
          )}

          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="flex gap-4 w-full justify-center items-center flex-col lg:flex-row">
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

        {/* This hidden section holds the background media if needed for future reference */}
        <div className="hidden">
          {!useImagePlaceholder && media && typeof media === 'object' && (
            <Media resource={media} priority={false} alt={'Background image'} />
          )}
        </div>
      </div>
    </div>
  )
}
