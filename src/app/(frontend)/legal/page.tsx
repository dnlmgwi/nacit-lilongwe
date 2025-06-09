import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import LegalPageClient from './page.client'
import type { Page, Term } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Legal Information | Nacit Lilongwe',
  description: 'Legal information, terms of service, privacy policy, and other legal documents.',
}

export default async function LegalPage() {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  let terms: Term[] = []
  try {
    // Fetch all terms from the terms collection
    const termsResult = await payload.find({
      collection: 'terms',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: true, // Override access to ensure we can fetch terms during build
    })

    terms = termsResult.docs || []
  } catch (error) {
    console.error('Error fetching terms:', error)
    // Continue with empty terms array
  }

  // Create a layout array with the terms block
  const layout: Page['layout'] = [
    {
      blockType: 'termsBlock' as const,
      heading: 'Legal Information',
      subHeading: 'Important legal documents and policies',
      terms: terms,
      backgroundColor: 'white' as const,
    },
  ]

  return (
    <article>
      <LegalPageClient />
      <RenderBlocks blocks={layout} />
    </article>
  )
}
