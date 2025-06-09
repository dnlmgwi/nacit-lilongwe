'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function BlogPageClient() {
  const searchParams = useSearchParams()
  // const currentPage = Number(searchParams.get('page')) || 1

  /* Force the header to be light mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  return null // This component is currently just for client-side functionality
}
