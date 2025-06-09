import type { Metadata } from 'next/types'
import { CollectionArchive } from '../components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import type { Post } from '@/payload-types'

export const dynamic = 'force-dynamic'
export const revalidate = 600

interface PageProps {
  params: Promise<{
    pageParam?: string
  }>
  searchParams: Promise<{
    page?: string
    category?: string
  }>
}

export default async function PostsPage({ params, searchParams }: PageProps) {
  const { pageParam } = await params
  const { page: pageQuery, category: categoryQuery } = await searchParams

  const payload = await getPayload({ config: configPromise })

  // Parse values safely - prioritize route param, then query param, then default to 1
  const pageNumber =
    pageParam && Number.isInteger(Number(pageParam))
      ? Number(pageParam)
      : pageQuery && Number.isInteger(Number(pageQuery))
        ? Number(pageQuery)
        : 1
  const categoryId = categoryQuery || undefined

  // Fetch all categories
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  // Build where clause for posts query
  const where = {
    _status: {
      equals: 'published',
    },
    ...(categoryId
      ? {
          'categories.id': {
            equals: Number(categoryId),
          },
        }
      : {}),
  }

  // Fetch posts with category filter if selected
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 12,
    page: pageNumber,
    overrideAccess: false,
    where,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
      populatedAuthors: true,
      publishedAt: true,
    },
    sort: '-publishedAt',
  })

  return (
    <div className="p-8 bg-background text-foreground min-h-screen">
      {/* Category Filters */}
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 mt-6 mb-8 min-w-max px-1">
          <Link
            href="/posts"
            className={`category-pill ${!categoryId ? 'active' : ''} border-brand-dark-green bg-white text-brand-dark-green hover:bg-brand-dark-green hover:text-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700`}
          >
            All
          </Link>
          {categories.docs.map((category) => {
            // Preserve existing query params except category
            const newParams = new URLSearchParams()
            if (pageQuery) newParams.set('page', pageQuery)
            newParams.set('category', String(category.id))

            return (
              <Link
                key={category.id}
                href={`/posts?${newParams.toString()}`}
                className={`category-pill ${categoryId === String(category.id) ? 'active' : ''} border-brand-dark-green bg-white text-brand-dark-green hover:bg-brand-dark-green hover:text-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700`}
              >
                {category.title}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="container mb-8 text-foreground">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs as Post[]} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} basePath="/posts" />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Posts | Earn Mwachangu`,
    description: 'All posts from Earn Mwachangu.',
    openGraph: {
      type: 'website',
      title: 'Posts | Earn Mwachangu',
      description: 'All posts from Earn Mwachangu.',
    },
  }
}
