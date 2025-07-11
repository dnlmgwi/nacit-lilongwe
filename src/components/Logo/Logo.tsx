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
      alt="NACIT Lilongwe Logo"
      width={4013}
      height={1825}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('max-w-[12rem] w-full', className)}
      src={props.theme ? '/images/nacit_lilongwe_logo.webp' : '/images/nacit_lilongwe.webp'}
      style={{ aspectRatio: '4013 / 1825', height: 'auto' }}
    />
  )
}
