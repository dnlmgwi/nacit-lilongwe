'use client'
import React from 'react'
import { useRowLabel, RowLabelProps as PayloadRowLabelProps } from '@payloadcms/ui'
import type { Header } from '@/payload-types'

// Helper to safely get the type of array elements, handling potential null/undefined
type ArrayElementType<T> = T extends ReadonlyArray<infer E> | null | undefined ? E : never

// Define explicit interfaces for our menu structure
// This ensures TypeScript knows exactly what properties to expect
interface MegaMenuLink {
  label?: string
  link?: {
    label?: string
    [key: string]: any
  }
  [key: string]: any
}

interface MegaMenuSection {
  title?: string
  items?: MegaMenuLink[]
  [key: string]: any
}

interface MegaMenuItem {
  label?: string
  sections?: MegaMenuSection[]
  [key: string]: any
}

// Type for a single item in the 'megaMenuItems' array
export type MegaMenuItemType = MegaMenuItem & ArrayElementType<Header['megaMenuItems']>

// Type for a single item in the 'sections' array within a MegaMenuItem
export type MegaMenuSectionType = MegaMenuSection

// Type for a single item in the 'items' array within a MegaMenuSection
export type MegaMenuLinkType = MegaMenuLink

export const MegaMenuRowLabel: React.FC<PayloadRowLabelProps> = () => {
  const { data, rowNumber } = useRowLabel<MegaMenuItemType>()

  let menuLabel: string | undefined = undefined

  // Explicitly check data is an object and has the 'label' property of type string
  if (
    data &&
    typeof data === 'object' &&
    'label' in data &&
    typeof data.label === 'string' &&
    data.label
  ) {
    // Access only within this strictly guarded block
    menuLabel = data.label
  }

  const displayLabel = menuLabel
    ? `Item ${rowNumber !== undefined ? rowNumber + 1 : ''}: ${menuLabel}`
    : `Item ${rowNumber !== undefined ? rowNumber + 1 : ''}`

  return <span>{displayLabel}</span>
}

export const MegaMenuSectionRowLabel: React.FC<PayloadRowLabelProps> = () => {
  const { data, rowNumber } = useRowLabel<MegaMenuSectionType>()
  let title: string | undefined = undefined

  // Explicitly check data is an object and has the 'title' property of type string
  if (
    data &&
    typeof data === 'object' &&
    'title' in data &&
    typeof data.title === 'string' &&
    data.title
  ) {
    // Access only within this strictly guarded block
    title = data.title
  }

  const label = title
    ? `Section ${rowNumber !== undefined ? rowNumber + 1 : ''}: ${title}`
    : `Section ${rowNumber !== undefined ? rowNumber + 1 : ''}`
  return <span>{label}</span>
}

export const MegaMenuLinkRowLabel: React.FC<PayloadRowLabelProps> = () => {
  const { data, rowNumber } = useRowLabel<MegaMenuLinkType>()
  let displayLabel: string | undefined = undefined

  // Check data type first
  if (data && typeof data === 'object') {
    // Prioritize direct 'label' if it exists and is a non-empty string
    if ('label' in data && typeof data.label === 'string' && data.label) {
      displayLabel = data.label // Assign within the block
    }
    // Otherwise, check for nested 'link.label' structure
    else if (
      'link' in data && // Check 'link' property exists
      data.link && // Check 'link' is truthy
      typeof data.link === 'object' && // Check 'link' is an object
      'label' in data.link && // Check 'label' exists within 'link'
      typeof data.link.label === 'string' && // Check nested label is a string
      data.link.label // Check nested label is non-empty
    ) {
      displayLabel = data.link.label // Assign within the block
    }
  }

  const label = displayLabel
    ? `Link ${rowNumber !== undefined ? rowNumber + 1 : ''}: ${displayLabel}`
    : `Link ${rowNumber !== undefined ? rowNumber + 1 : ''}`
  return <span>{label}</span>
}
