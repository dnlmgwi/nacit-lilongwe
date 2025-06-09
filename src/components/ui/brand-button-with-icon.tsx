import { BrandButton } from '@/components/ui/brand-button'
import { cn } from '@/utilities/ui'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type BrandButtonVariant = 'default' | 'outline'

type BrandButtonWithIconProps = {
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
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const BrandButtonWithIcon: React.FC<BrandButtonWithIconProps> = (props) => {
  const {
    variant = 'default',
    children,
    className,
    label,
    newTab,
    reference,
    type,
    url,
    icon,
    iconPosition = 'right',
  } = props

  if (!icon) {
    return (
      <BrandButton
        variant={variant}
        className={className}
        label={label}
        newTab={newTab}
        reference={reference}
        type={type}
        url={url}
      >
        {children}
      </BrandButton>
    )
  }

  return (
    <BrandButton
      variant={variant}
      className={cn('flex items-center gap-2', className)}
      label={null}
      newTab={newTab}
      reference={reference}
      type={type}
      url={url}
    >
      {iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      <span>{label}</span>
      {children}
      {iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </BrandButton>
  )
}
