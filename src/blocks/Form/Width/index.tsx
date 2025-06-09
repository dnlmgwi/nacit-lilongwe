import * as React from 'react'
import { cn } from '@/utilities/ui'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  // Map width values to Tailwind column span classes
  let colSpanClass = ''

  if (width) {
    // Handle string values from dropdown or numeric values
    if (typeof width === 'string') {
      // Handle dropdown string values
      switch (width) {
        case '1/3':
          colSpanClass = 'col-span-1 md:col-span-1' // 1/3 width
          break
        case '1/2':
          colSpanClass = 'col-span-1 md:col-span-2' // 1/2 width
          break
        case 'full':
          colSpanClass = 'col-span-1 md:col-span-full' // full width
          break
        default:
          // Try to parse as number if it's not one of our predefined values
          const widthNum = parseInt(width, 10)
          if (!isNaN(widthNum)) {
            // Map percentage ranges to column spans
            if (widthNum <= 25) {
              colSpanClass = 'col-span-1' // 1/4 width
            } else if (widthNum <= 50) {
              colSpanClass = 'col-span-1 md:col-span-2' // 1/2 width
            } else if (widthNum <= 75) {
              colSpanClass = 'col-span-1 md:col-span-3' // 3/4 width
            } else {
              colSpanClass = 'col-span-1 md:col-span-full' // full width
            }
          } else {
            // Default to full width for unrecognized strings
            colSpanClass = 'col-span-1 md:col-span-full'
          }
      }
    } else {
      // Handle numeric values (legacy support)
      if (width <= 25) {
        colSpanClass = 'col-span-1' // 1/4 width
      } else if (width <= 50) {
        colSpanClass = 'col-span-1 md:col-span-2' // 1/2 width
      } else if (width <= 75) {
        colSpanClass = 'col-span-1 md:col-span-3' // 3/4 width
      } else {
        colSpanClass = 'col-span-1 md:col-span-full' // full width
      }
    }
  } else {
    // Default to full width if no width specified
    colSpanClass = 'col-span-1 md:col-span-full'
  }

  return <div className={cn(colSpanClass, className)}>{children}</div>
}
