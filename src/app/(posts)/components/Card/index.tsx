'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { formatDate } from '@/utilities/formatDate'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<
  Post,
  'slug' | 'categories' | 'meta' | 'title' | 'populatedAuthors' | 'publishedAt'
>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title, populatedAuthors, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/posts/${slug}`

  return (
    <article
      className={cn('group hover:cursor-pointer transition-all duration-200', className)}
      ref={card.ref}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
        {!metaImage && (
          <div className="w-full h-full bg-muted flex items-center justify-center rounded-3xl">
            No image
          </div>
        )}
        {metaImage && typeof metaImage !== 'string' && (
          <div className="relative w-full h-full flex items-center justify-center">
            <Media
              resource={metaImage}
              className="max-w-full max-h-full rounded-3xl"
              imgClassName="object-cover rounded-3xl"
              fill
            />
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        {showCategories && hasCategories && (
          <div className="flex gap-2">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: categoryTitle } = category
                return categoryTitle ? (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-brand-green/10 text-brand-dark-green border border-brand-dark-green"
                  >
                    {categoryTitle}
                  </span>
                ) : null
              }
              return null
            })}
          </div>
        )}

        {titleToUse && (
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
            <Link href={href} ref={link.ref} className="no-underline">
              {titleToUse}
            </Link>
          </h3>
        )}

        {description && (
          <p className="text-muted-foreground text-sm line-clamp-2">{sanitizedDescription}</p>
        )}

        <div className="flex items-center gap-3 mt-auto">
          {populatedAuthors?.[0] && (
            <>
              <div className="flex items-center gap-2">
                {populatedAuthors[0].name && (
                  <span className="text-sm font-medium">{populatedAuthors[0].name}</span>
                )}
              </div>
              <span className="text-muted-foreground">·</span>
            </>
          )}
          {publishedAt && (
            <time className="text-sm text-muted-foreground">{formatDate(publishedAt)}</time>
          )}
        </div>
      </div>
    </article>
  )
}
