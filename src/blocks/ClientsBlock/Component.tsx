'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Media, ClientsBlock as ClientsBlockProps } from '@/payload-types'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import { cn } from '@/utilities/ui'
import gsap from 'gsap'

// Define the structure for a single client item based on ClientsBlockType
interface ClientItemData {
  name: string
  logo: Media | number | null // Can be a populated Media object, just an ID, or null for placeholders
  url?: string | null
}

// Color definitions will be moved inside the ClientsBlock component
// so they can be used in the LogoItem component

export const ClientsBlock: React.FC<ClientsBlockProps> = ({
  heading = 'Our Clients',
  subheading,
  clients = [],
  backgroundColor = 'white',
}) => {
  // For animation control
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Use a safe reference to clients (never null)
  const safeClients = clients || []

  // Colors for gradient effects that need RGB values
  const gradientColors = {
    white: 'rgb(255, 255, 255)',
    'gray-50': 'rgb(249, 250, 251)',
    'brand-dark-green': 'rgb(10, 54, 34)',
    'brand-green': 'rgb(9, 114, 64)',
  }
  
  // Brand color for placeholders and accent elements
  const brandAccentColor = backgroundColor === 'brand-dark-green' || backgroundColor === 'brand-green' 
    ? 'rgba(255, 255, 255, 0.15)' // Light overlay for dark backgrounds
    : 'rgba(9, 114, 64, 0.12)' // Light green for light backgrounds
    
  // Get the appropriate gradient color based on the background
  const gradientColor = gradientColors[backgroundColor as keyof typeof gradientColors] || gradientColors.white  

  // Define text colors based on background
  const textColor =
    backgroundColor === 'brand-dark-green' || backgroundColor === 'brand-green'
      ? 'text-white'
      : 'text-gray-900'
      
  // Define heading color with brand emphasis - use brand-dark-green for light backgrounds
  const headingColor =
    backgroundColor === 'brand-dark-green' || backgroundColor === 'brand-green'
      ? 'text-white'
      : 'text-brand-dark-green'

  // We'll use the cn utility for class composition

  // Inner component for rendering individual logo items
  const LogoItem: React.FC<{ client: ClientItemData; index: number }> = ({ client }) => {
    // Handle null logo case explicitly
    const logoMediaObject = client.logo && typeof client.logo === 'object' ? client.logo : null
    const logoUrl = logoMediaObject?.url
    const altText = logoMediaObject?.alt || client.name || 'Client logo'

    const content = (
      <div className="flex-shrink-0 flex items-center justify-center mx-4 md:mx-8 w-32 h-16 md:w-40 md:h-20 transition-transform hover:scale-105">
        {logoUrl ? (
          <>
            <Image
              src={logoUrl}
              alt={altText}
              width={160}
              height={80}
              className="object-contain max-h-full max-w-full"
              sizes="(max-width: 768px) 128px, 160px"
              loading="lazy"
              onError={() =>
                console.error(`[LogoItem] Failed to load image for ${client.name}:`, logoUrl)
              }
              onLoad={() => console.log(`[LogoItem] Successfully loaded image for ${client.name}`)}
            />
          </>
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center rounded" 
            style={{ background: brandAccentColor }}
          >
            <span className={`${textColor} text-sm font-medium opacity-75`}>{client.name}</span>
          </div>
        )}
      </div>
    )

    return client.url ? (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 rounded hover:opacity-90 transition-opacity"
      >
        {content}
      </a>
    ) : (
      content
    )
  }

  // Set up GSAP animation for infinite scrolling
  useEffect(() => {
    if (!scrollerRef.current) return

    // Mark component as loaded for animation purposes
    setIsLoaded(true)

    // Get the width of the content for animation calculation
    const scrollerContent = scrollerRef.current
    const scrollerWidth = scrollerContent.scrollWidth

    // Calculate animation duration based on content width for consistent speed
    // Smaller values = faster scrolling
    const duration = Math.max(scrollerWidth / 35, 15)

    // Create a seamless loop animation
    const tl = gsap.timeline({ repeat: -1, paused: false })

    // Clone the content for seamless looping
    tl.to(scrollerContent, {
      x: -scrollerWidth / 2,
      duration: duration,
      ease: 'none',
      onComplete: () => {
        // Reset position when animation completes
        gsap.set(scrollerContent, { x: 0 })
      },
    })

    // Start the animation
    tl.play()

    // Cleanup function
    return () => {
      tl.kill()
      gsap.killTweensOf(scrollerContent)
    }
  }, [safeClients.length, isLoaded])

  // Generate placeholders if no clients are available - MINIMUM 8 for no gaps
  const placeholders: ClientItemData[] = [
    { name: 'Client Placeholder 1', logo: null, url: null },
    { name: 'Client Placeholder 2', logo: null, url: null },
    { name: 'Client Placeholder 3', logo: null, url: null },
    { name: 'Client Placeholder 4', logo: null, url: null },
    { name: 'Client Placeholder 5', logo: null, url: null },
    { name: 'Client Placeholder 6', logo: null, url: null },
    { name: 'Client Placeholder 7', logo: null, url: null },
    { name: 'Client Placeholder 8', logo: null, url: null },
  ]

  // IMPORTANT: Always ensure we have AT LEAST 8 logos for seamless scrolling with no gaps
  // The number of required logos depends on their width and the container width
  // For real clients, we duplicate them multiple times for continuous motion
  let displayClients: ClientItemData[] = []

  if (safeClients.length >= 8) {
    // If we have enough real clients, duplicate them
    displayClients = [...safeClients, ...safeClients, ...safeClients]
  } else if (safeClients.length > 0) {
    // If we have some clients but fewer than 8, repeat them more times
    const duplicationsNeeded = Math.ceil(24 / safeClients.length)
    for (let i = 0; i < duplicationsNeeded; i++) {
      displayClients = [...displayClients, ...safeClients]
    }
  } else {
    // If no clients, use placeholders repeated multiple times
    displayClients = [...placeholders, ...placeholders, ...placeholders]
  }

  return (
    <section
      className={cn(
        'py-12 md:py-16',
        bgColorClasses[backgroundColor as keyof typeof bgColorClasses]
      )}
      aria-label="Client logos"
    >
      <div className="container mx-auto px-4">
        {(heading || subheading) && (
          <div className="text-center mb-10 md:mb-12">
            {heading && (
              <h2 className={`text-2xl md:text-3xl font-normal mb-3 ${headingColor}`}>{heading}</h2>
            )}
            {subheading && (
              <p className={`text-lg md:text-xl ${textColor} opacity-90`}>{subheading}</p>
            )}
          </div>
        )}

        <div className="relative">
          {/* Left fade gradient effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${gradientColor}, transparent)`,
            }}
          />

          {/* Right fade gradient effect */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${gradientColor}, transparent)`,
            }}
          />

          {/* Single row GSAP-controlled scrolling container */}
          <div className="overflow-hidden py-8 w-full">
            <div
              ref={scrollerRef}
              className="flex items-center justify-start"
              style={{ width: 'max-content' }} // Allow row to expand to natural width
            >
              {displayClients.map((client, index) => (
                <div key={`client-${index}`} className="px-4 md:px-6">
                  <LogoItem client={client} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlay on right */}
          {safeClients.length > 3 && (
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-current to-transparent opacity-10 pointer-events-none" />
          )}
        </div>
      </div>
    </section>
  )
}
