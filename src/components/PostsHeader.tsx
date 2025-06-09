'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'
import { ChevronLeft } from 'lucide-react'
import { Logo } from './Logo/Logo'

export function PostsHeader() {
  const pathname = usePathname()
  const isPostPage = pathname?.startsWith('/posts/')

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-brand-dark-green">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Back button - only show on post pages */}
        <div className="flex-1">
          {isPostPage && (
            <Link
              href="/posts"
              className={cn(
                'inline-flex items-center gap-1 text-sm font-medium text-white/90',
                'hover:text-white transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'rounded-md p-2 -ml-2',
              )}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold">Back</span>
            </Link>
          )}
        </div>

        {/* Logo - centered */}
        <div className="flex-1 flex justify-center">
          <Link href="/posts" className="block w-28">
            <Logo loading="eager" priority="high" className="w-full h-auto" />
          </Link>
        </div>

        {/* Spacer to balance the layout */}
        <div className="flex-1"></div>
      </div>
    </header>
  )
}
