import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register the ScrollToPlugin with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

export const smoothScrollTo = (hash: string, offset = 0, duration = 1) => {
  if (!hash || typeof window === 'undefined') return
  
  const element = document.querySelector(hash)
  if (!element) return
  
  // Use GSAP ScrollToPlugin for smoother animation with custom easing
  gsap.to(window, {
    duration,
    scrollTo: {
      y: (element as HTMLElement).offsetTop - offset,
      autoKill: true
    },
    ease: 'power3.out' // This provides a nice smooth deceleration effect
  })
}

export const setupSmoothScroll = (offset = 0, duration = 1, ease = 'power3.out') => {
  // Handle initial hash in URL
  if (typeof window !== 'undefined' && window.location.hash) {
    setTimeout(() => {
      smoothScrollTo(window.location.hash, offset, duration)
    }, 100)
  }

  // Handle anchor link clicks
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
    
    if (anchor) {
      const hash = anchor.getAttribute('href')
      if (hash && hash !== '#') {
        e.preventDefault()
        smoothScrollTo(hash, offset, duration)
        // Update URL without scrolling
        window.history.pushState(null, '', hash)
      }
    }
  }

  // Add event listener
  document.addEventListener('click', handleClick)
  
  // Cleanup function
  return () => {
    document.removeEventListener('click', handleClick)
  }
}
