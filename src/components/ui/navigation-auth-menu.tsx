import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/utilities/ui'

function NavigationAuthMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  const menuRef = React.useRef<HTMLDivElement>(null)
  const [menuWidth, setMenuWidth] = React.useState(0)

  // Use ResizeObserver to track menu width changes
  React.useEffect(() => {
    if (!menuRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === menuRef.current) {
          setMenuWidth(entry.contentRect.width)
        }
      }
    })

    resizeObserver.observe(menuRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div ref={menuRef} className="relative">
      <NavigationMenuPrimitive.Root
        data-slot="navigationAuth-menu"
        data-viewport={viewport}
        data-menu-width={menuWidth}
        className={cn(
          'group/navigationAuth-menu relative flex max-w-max flex-1 items-center justify-center',
          className,
        )}
        {...props}
      >
        {children}
        {viewport && <NavigationAuthMenuViewport />}
      </NavigationMenuPrimitive.Root>
    </div>
  )
}

function NavigationAuthMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigationAuth-menu-list"
      className={cn('group flex flex-1 list-none items-center justify-center gap-1', className)}
      {...props}
    />
  )
}

function NavigationAuthMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigationAuth-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

const navigationAuthMenuTriggerStyle = cva(
  // Base styles - default state with transparent background and black text
  'group flex h-fit w-max items-start justify-start rounded-md bg-transparent px-2 py-2 text-sm font-medium text-black' +
    // Hover state - changes only text color to brand-lime green while keeping background transparent
    ' hover:bg-transparent hover:text-brand-lime' +
    // Focus state - same as hover, with brand-lime text and transparent background
    ' focus:bg-transparent focus:text-brand-lime' +
    // Disabled state - standard disabled appearance
    ' disabled:pointer-events-none disabled:opacity-50' +
    // Open/active state - keeps background transparent but changes text to brand-lime
    ' data-[state=open]:bg-transparent data-[state=open]:text-brand-lime' +
    // Open state hover and focus - maintains transparency for consistency
    ' data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent' +
    // Focus-visible state for accessibility and keyboard navigation
    ' focus-visible:ring-ring/50 outline-none transition-[color,box-shadow]' +
    ' focus-visible:ring-[3px] focus-visible:outline-1',
)

function NavigationAuthMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigationAuth-menu-trigger"
      className={cn(navigationAuthMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationAuthMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  // Add a ref to measure content dimensions
  const contentRef = React.useRef<HTMLDivElement>(null)

  // Effect to ensure content stays within viewport
  React.useEffect(() => {
    const content = contentRef.current
    if (!content) return

    // Function to adjust content if needed
    const adjustContent = () => {
      const rect = content.getBoundingClientRect()
      const viewportWidth = window.innerWidth

      // If content is wider than viewport, constrain it
      if (rect.width > viewportWidth - 20) {
        // 20px buffer
        content.style.maxWidth = `${viewportWidth - 20}px`
        content.style.overflowX = 'auto'
      } else {
        content.style.maxWidth = ''
        content.style.overflowX = ''
      }
    }

    // Run adjustment when content becomes visible
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'data-state' &&
          content.getAttribute('data-state') === 'open'
        ) {
          adjustContent()
        }
      })
    })

    observer.observe(content, { attributes: true })
    window.addEventListener('resize', adjustContent)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', adjustContent)
    }
  }, [])

  return (
    <NavigationMenuPrimitive.Content
      ref={contentRef}
      data-slot="navigationAuth-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
        'group-data-[viewport=false]/navigationAuth-menu:bg-popover group-data-[viewport=false]/navigationAuth-menu:text-popover-foreground group-data-[viewport=false]/navigationAuth-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigationAuth-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigationAuth-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigationAuth-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigationAuth-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigationAuth-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigationAuth-menu:top-full group-data-[viewport=false]/navigationAuth-menu:mt-1.5 group-data-[viewport=false]/navigationAuth-menu:overflow-hidden group-data-[viewport=false]/navigationAuth-menu:rounded-md group-data-[viewport=false]/navigationAuth-menu:border group-data-[viewport=false]/navigationAuth-menu:shadow group-data-[viewport=false]/navigationAuth-menu:duration-200',
        'w-fit',
        className,
      )}
      style={{
        maxWidth: '90vw',
        overflowX: 'hidden',
      }}
      {...props}
    />
  )
}

function NavigationAuthMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ left: '0', transform: 'translateX(0)' })

  // Function to adjust position based on viewport boundaries
  const adjustPosition = React.useCallback(() => {
    if (!viewportRef.current) return

    const rect = viewportRef.current.getBoundingClientRect()
    // Find the navigationAuth menu root element
    const menuRoot = viewportRef.current.closest('[data-slot="navigationAuth-menu"]')
    const parentRect =
      menuRoot?.getBoundingClientRect() ||
      viewportRef.current.parentElement?.getBoundingClientRect()

    if (!parentRect) return

    const viewportWidth = window.innerWidth
    const contentWidth = rect.width
    const menuWidth = Number(menuRoot?.getAttribute('data-menu-width') || 0)
    const parentCenter = parentRect.left + parentRect.width / 2

    // Calculate if the menu would overflow on either side
    const leftOverflow = parentCenter - contentWidth / 2 < 10 // 10px buffer
    const rightOverflow = parentCenter + contentWidth / 2 > viewportWidth - 10 // 10px buffer

    // Adjust position based on overflow conditions
    if (leftOverflow && !rightOverflow) {
      // Align to left edge with small padding
      setPosition({ left: '0', transform: 'translateX(0)' })
    } else if (rightOverflow && !leftOverflow) {
      // Align to right edge with small padding
      setPosition({ left: '100%', transform: 'translateX(-100%)' })
    } else if (rightOverflow && leftOverflow) {
      // If both sides overflow, center it and let the content component handle overflow
      setPosition({ left: '50%', transform: 'translateX(-50%)' })
    } else {
      // Default center positioning
      setPosition({ left: '50%', transform: 'translateX(-50%)' })
    }
  }, [])

  // Add resize listener and mutation observer to adjust position when needed
  React.useEffect(() => {
    adjustPosition()
    window.addEventListener('resize', adjustPosition)

    // Create a mutation observer to detect when viewport content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'childList' ||
          (mutation.type === 'attributes' && mutation.attributeName === 'data-state')
        ) {
          // Small delay to allow content to render
          setTimeout(adjustPosition, 50)
        }
      })
    })

    // Start observing the viewport for content changes
    if (viewportRef.current) {
      observer.observe(viewportRef.current, {
        childList: true,
        attributes: true,
        subtree: true,
      })
    }

    return () => {
      window.removeEventListener('resize', adjustPosition)
      observer.disconnect()
    }
  }, [adjustPosition])

  return (
    <div
      ref={viewportRef}
      className={cn('absolute top-full isolate z-50 flex justify-center max-w-[90vw]')}
      style={{
        left: position.left,
        transform: position.transform,
        transition: 'left 200ms ease, transform 200ms ease',
      }}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigationAuth-menu-viewport"
        className={cn(
          'origin-top-center text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigationAuth-menu-viewport-height)] w-full overflow-hidden bg-transparent rounded-md md:w-[var(--radix-navigationAuth-menu-viewport-width)]',
          className,
        )}
        style={{ maxWidth: '90vw' }}
        {...props}
      />
    </div>
  )
}

function NavigationAuthMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigationAuth-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationAuthMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigationAuth-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationAuthMenu,
  NavigationAuthMenuList,
  NavigationAuthMenuItem,
  NavigationAuthMenuContent,
  NavigationAuthMenuTrigger,
  NavigationAuthMenuLink,
  NavigationAuthMenuIndicator,
  NavigationAuthMenuViewport,
  navigationAuthMenuTriggerStyle,
}
