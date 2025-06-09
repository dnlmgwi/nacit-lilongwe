import clsx from 'clsx'
import React from 'react'
import Image from 'next/image' // <-- Import Next.js Image

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  theme?: boolean
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Mwachangu Logo"
      width={4013}
      height={1825}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('max-w-[12rem] w-full', className)}
      src={props.theme ? '/images/earn_mwachangu_logo.webp' : '/images/earn_mwachangu.webp'}
      style={{ aspectRatio: '4013 / 1825', height: 'auto' }}
    />
  )
}
