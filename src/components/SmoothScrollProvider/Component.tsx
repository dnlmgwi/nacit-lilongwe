'use client'

import { useEffect } from 'react'
import { setupSmoothScroll } from '@/utilities/smoothScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollProviderProps {
  children: React.ReactNode
  offset?: number
  duration?: number  // Controls how long the scroll animation lasts
  ease?: string      // GSAP easing function to use
}

// Register ScrollTrigger for enhanced scroll animations
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScrollProvider({ 
  children, 
  offset = 0,
  duration = 1,    // Default 1 second for scroll duration
  ease = 'power3.out' // Smooth deceleration effect
}: SmoothScrollProviderProps) {
  
  // Set up smooth scrolling effects
  useEffect(() => {
    // Initialize ScrollTrigger to work with our page structure
    ScrollTrigger.defaults({
      scroller: document.documentElement,
      start: 'top 90%', // Animations trigger when the top of the element reaches 90% from the top of the viewport
      toggleActions: 'play none none reverse' // play when entering viewport, reverse when leaving
    })
    
    // Apply easing configuration to all scroll animations
    gsap.config({
      autoSleep: 60,
      force3D: true
    })
    
    // Set up our anchor link smooth scrolling
    const cleanup = setupSmoothScroll(offset, duration, ease)
    
    // Refresh ScrollTrigger to ensure proper initialization
    ScrollTrigger.refresh()
    
    // Clean up function
    return () => {
      cleanup()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [offset, duration, ease])

  return <>{children}</>
}
