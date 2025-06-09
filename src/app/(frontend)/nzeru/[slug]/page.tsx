import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { CollectionSlug, getPayload } from 'payload'
import React from 'react'
import { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts' as CollectionSlug,
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  return posts.docs
    ?.map((doc) => {
      if ('slug' in doc) {
        return { slug: doc.slug }
      }
      return null
    })
    .filter(Boolean)
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

async function queryPostBySlug({ slug }: { slug: string }): Promise<Post | undefined> {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0] as Post | undefined
}

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise

  const post = await queryPostBySlug({ slug })

  if (!post) {
    return <PayloadRedirects url={`/nzeru/${slug}`} />
  }

  const { title, populatedAuthors, heroImage, content } = post
  return (
    <>
      <LivePreviewListener />
      <div className="container mx-auto px-4 py-8">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {populatedAuthors && populatedAuthors.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                {populatedAuthors.map((author) => (
                  <span key={author.id} className="text-gray-600">
                    {author.name}
                  </span>
                ))}
              </div>
            )}
            {heroImage && typeof heroImage !== 'string' && (
              <div className="relative w-full h-[400px] mb-8">
                <Media resource={heroImage} />
              </div>
            )}
          </header>
          {content && <RichText data={content} />}
        </article>
      </div>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })
  return generateMeta({ doc: post || null })
}
