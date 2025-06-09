import { bgColorClasses } from '@/utilities/bgColorClasses'
import React from 'react'

type BgColorOptions = keyof typeof bgColorClasses

// Map background colors to their corresponding accent bar colors
const accentBarColors = {
  gray: 'bg-brand-lime',
  'brand-dark-green': 'bg-brand-lime',
  'brand-lime': 'bg-brand-dark-green',
  'brand-green': 'bg-white',
  white: 'bg-brand-lime',
}

type PreHeadingProps = {
  title?: string
  backgroundColor?: BgColorOptions
  className?: string
}

export function PreHeading({
  title = 'Our Story',
  backgroundColor = 'white',
  className = '',
}: PreHeadingProps) {
  // Get background color classes
  const bgClasses = bgColorClasses[backgroundColor]

  // Get the text color class from the background classes
  const textColorClass = bgClasses.split(' ').find((cls) => cls.startsWith('text-')) || ''

  // Get the appropriate bar color based on the background
  const barColor = accentBarColors[backgroundColor]

  return (
    <div className="w-fit">
      <div className={`flex flex-col items-center justify-center ${className} mb-4`}>
        <div className="flex flex-col items-start -mb-1">
          <span
            className={`${textColorClass} text-lg font-medium leading-[22px] text-left overflow-ellipsis z-10`}
          >
            {title}
          </span>
        </div>
        <div className={`w-full h-[4px] ${barColor}`}></div>
      </div>
    </div>
  )
}
