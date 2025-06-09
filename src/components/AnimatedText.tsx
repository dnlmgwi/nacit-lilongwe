'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface AnimatedTextProps {
  text: string
  isThinking?: boolean
  className?: string
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  isThinking = false,
  className = '',
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLSpanElement>(null)
  const dotsContainerRef = useRef<HTMLDivElement>(null)
  const [visibleText, setVisibleText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [words, setWords] = useState<string[]>([])

  // Animation for the thinking dots
  useEffect(() => {
    if (!isThinking || !dotsRef.current || !dotsContainerRef.current) return

    // Clear any existing content
    dotsRef.current.innerHTML = ''

    // Create three dots
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span')
      dot.className = 'inline-block w-1.5 h-1.5 mx-0.5 rounded-full bg-current'
      dot.style.opacity = '0.3'
      dotsRef.current.appendChild(dot)
    }

    const dots = Array.from(dotsRef.current.children)
    const dotsAnimation = gsap.timeline({ repeat: -1 })

    // Animate each dot sequentially with a slight delay
    dots.forEach((dot, i) => {
      dotsAnimation
        .to(
          dot,
          {
            opacity: 1,
            y: -3,
            duration: 0.3,
            ease: 'power1.inOut',
          },
          i * 0.2,
        )
        .to(
          dot,
          {
            opacity: 0.3,
            y: 0,
            duration: 0.3,
            ease: 'power1.inOut',
          },
          `+=0.2`,
        )
    })

    return () => {
      dotsAnimation.kill()
    }
  }, [isThinking])

  // Animate text word by word while preserving formatting
  useEffect(() => {
    if (isThinking) {
      setVisibleText('')
      setCurrentIndex(0)
      return
    }

    if (currentIndex < words.length) {
      const nextSegment = words[currentIndex]
      if (!nextSegment) return

      const isNewLine = nextSegment === '\n'
      const isDoubleNewLine = nextSegment === '\n\n'
      const isBulletPoint = nextSegment.startsWith('* ') || nextSegment.startsWith('- ')

      const timeout = setTimeout(
        () => {
          setVisibleText((prev) => {
            // Handle new lines
            if (isNewLine) {
              return `${prev}<br />`
            }
            if (isDoubleNewLine) {
              return `${prev}<br /><br />`
            }
            // Add space before words unless it's the first word, after a newline, or a bullet point
            const needsSpace =
              prev &&
              !prev.endsWith('<br />') &&
              !prev.endsWith('<br /><br />') &&
              !isBulletPoint &&
              !prev.endsWith(' ')
            return `${prev}${needsSpace ? ' ' : ''}${nextSegment}`
          })
          setCurrentIndex((prev) => prev + 1)
        },
        isNewLine || isDoubleNewLine ? 50 : 30,
      )

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isThinking, words])

  // Reset animation when text changes
  useEffect(() => {
    if (!text) {
      setVisibleText('')
      setCurrentIndex(0)
      setWords([])
      return
    }

    // Then animate it character by character
    const timer = setTimeout(() => {
      // Split text into segments while preserving newlines
      const segments: string[] = []
      let currentSegment = ''

      for (let i = 0; i < text.length; i++) {
        const char = text[i]
        const nextChar = text[i + 1]

        if (char === '\n') {
          if (currentSegment) {
            segments.push(currentSegment)
            currentSegment = ''
          }
          // Add single or double newline as separate segments
          if (nextChar === '\n') {
            segments.push('\n\n')
            i++
          } else {
            segments.push('\n')
          }
        } else if (char === ' ' && !currentSegment) {
          // Skip leading spaces
          continue
        } else if (char === ' ' && currentSegment) {
          // End of a word
          segments.push(currentSegment)
          currentSegment = ''
        } else {
          currentSegment += char
        }
      }

      // Add the last segment if it exists
      if (currentSegment) {
        segments.push(currentSegment)
      }

      setVisibleText('')
      setCurrentIndex(0)
      setWords(segments.filter((segment) => segment.length > 0))
    }, 100) // Small delay to ensure the full text is rendered first

    return () => clearTimeout(timer)
  }, [text])

  if (isThinking) {
    return (
      <div ref={dotsContainerRef} className={`inline-flex items-center ${className}`}>
        <span className="font-medium">Thinking</span>
        <span ref={dotsRef} className="ml-2 h-2 flex items-center" />
      </div>
    )
  }

  // Format text with markdown
  const formatText = (text: string) => {
    if (!text) return ''

    return (
      text
        // Handle bold text **bold**
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Handle italic text *italic*
        .replace(/(^|\s)\*(.*?)\*(?=\s|$)/g, '$1<em>$2</em>')
        // Handle code blocks `code`
        .replace(
          /`(.*?)`/g,
          '<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">$1</code>',
        )
    )
  }

  // Split text into visible and hidden parts
  const formattedText = formatText(text)
  const visibleFormattedText = formatText(visibleText)
  const isFullyVisible = visibleText === text

  return (
    <div className="w-full">
      <div
        ref={textRef}
        className={`inline-block w-full max-w-full ${className}`}
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {/* Hidden helper to maintain layout */}
        <div
          className="invisible h-0 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />

        {/* Visible content */}
        <div
          className="relative w-full break-words"
          dangerouslySetInnerHTML={{
            __html: isFullyVisible ? formattedText : `${visibleFormattedText}`,
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedText
