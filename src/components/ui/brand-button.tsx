import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type BrandButtonVariant = 'default' | 'outline'

type BrandButtonProps = {
  variant?: BrandButtonVariant
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const BrandButton: React.FC<BrandButtonProps> = (props) => {
  const { variant = 'default', children, className, label, newTab, reference, type, url } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  const buttonStyles = cn(
    'rounded-full px-6 py-4 transition-colors text-medium scale-70',
    variant === 'outline'
      ? 'bg-transparent text-brand-lime border-brand-lime border hover:bg-brand-lime hover:text-brand-dark-green'
      : 'bg-brand-lime text-brand-dark-green hover:bg-brand-green',
    className,
  )

  return (
    <Link className={buttonStyles} href={href || ''} {...newTabProps}>
      {label && label}
      {children && children}
    </Link>
  )
}
