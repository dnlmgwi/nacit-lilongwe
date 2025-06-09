'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef, useState } from 'react'

export const ScrollingText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(15)

  useEffect(() => {
    // Function to check if text overflows container
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.clientWidth
        const textWidth = contentRef.current.scrollWidth

        // Only enable scrolling if text is wider than its container
        if (textWidth > containerWidth) {
          setShouldScroll(true)

          // Adjust animation duration based on text length
          // Longer text should scroll slower for readability
          const calculatedDuration = Math.max(10, textWidth / 50)
          setAnimationDuration(calculatedDuration)
        } else {
          setShouldScroll(false)
        }
      }
    }

    // Run on mount and window resize
    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [text])

  if (!shouldScroll) {
    // If text doesn't need to scroll, display it normally with truncation
    return (
      <div className={cn('text-center truncate px-2', className)} ref={containerRef}>
        {text}
      </div>
    )
  }

  // For scrolling text
  return (
    <div className={cn('overflow-hidden w-full relative', className)} ref={containerRef}>
      {/* First copy of the text */}
      <div
        className="whitespace-nowrap inline-block"
        style={{
          animation: `ticker ${animationDuration}s linear infinite`,
        }}
      >
        <span ref={contentRef} className="inline-block">
          {text}
        </span>
        <span className="inline-block px-8">•</span> {/* Separator dot */}
        <span className="inline-block">{text}</span>
      </div>
    </div>
  )
}
