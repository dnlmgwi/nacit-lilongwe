import React from 'react'
import configPromise from '@payload-config'
import { CollectionSlug, getPayload } from 'payload'
import { TermsBlock } from './Component'

export async function TermsBlockComponent(props: any) {
  const { terms: termIds, ...rest } = props

  // Early return if no terms are selected
  if (!termIds || !termIds.length) {
    return <TermsBlock {...rest} terms={[]} />
  }

  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch all terms that match the IDs in the termIds array
    // Handle different possible structures of termIds
    let termValues = []

    if (Array.isArray(termIds)) {
      termValues = termIds
        .map((term: any) => {
          if (typeof term === 'object' && term !== null) {
            return term.value || term.id || term
          }
          return term
        })
        .filter(Boolean)
    } else if (typeof termIds === 'object' && termIds !== null) {
      // Handle case where termIds might be a single object
      const value = termIds.value || termIds.id
      if (value) termValues = [value]
    }

    if (termValues.length === 0) {
      return <TermsBlock {...rest} terms={[]} />
    }

    const termsResponse = await payload.find({
      collection: 'terms' as CollectionSlug,
      where: {
        and: [
          {
            id: {
              in: termValues,
            },
          },
          {
            _status: {
              equals: 'published',
            },
          },
        ],
      },
    })

    // Check if we have any docs in the response
    if (!termsResponse.docs || termsResponse.docs.length === 0) {
      return <TermsBlock {...rest} terms={[]} />
    }

    const terms = termsResponse.docs.map((term) => ({
      ...term,
    }))

    return <TermsBlock {...rest} terms={terms} />
  } catch (error) {
    console.error('Error fetching terms:', error)
    return <TermsBlock {...rest} terms={[]} />
  }
}
