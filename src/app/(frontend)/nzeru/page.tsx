import type { Metadata } from 'next/types'
import { ReadonlyURLSearchParams } from 'next/navigation'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import BlogPageClient from './page.client'
import type { Post } from '@/payload-types'
import { Card, CardPostData } from '@/components/Card'
import { CollectionSlug } from 'payload'
import Link from 'next/link'
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

export default async function BlogPage({ params, searchParams }: PageProps) {
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

  // Build where clause for posts query
  const where = {
    _status: {
      equals: 'published',
    },
    ...(categoryId
      ? {
          'categories.id': {
            equals: categoryId,
          },
        }
      : {}),
  }

  // Fetch featured posts (latest 3 posts)
  const featuredPosts = await payload.find({
    collection: 'posts' as CollectionSlug,
    depth: 1,
    limit: 2,
    where,
    overrideAccess: false,
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

  // Fetch all categories
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  // Fetch regular posts with category filter if selected
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 12,
    where,
    page: pageNumber,
    overrideAccess: false,
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
    <div className="pt-24 pb-24">
      <BlogPageClient />

      {/* Featured Posts */}
      <div className="container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.docs.map((post) => (
            <Card
              key={post.id}
              doc={post as CardPostData}
              relationTo="posts"
              showCategories
              className="featured-post"
            />
          ))}
        </div>
      </div>

      {/* Recent Articles Section */}
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-medium">Recent Articles</h2>
        </div>

        {/* Category Filters */}
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 mt-6 mb-8 min-w-max px-1">
            <Link href="/nzeru" className={`category-pill ${!categoryId ? 'active' : ''}`}>
              All
            </Link>
            {categories.docs.map((category) => {
              // Preserve existing query params except category
              const newParams = new URLSearchParams()
              if (pageQuery) newParams.set('page', pageQuery)
              newParams.set('category', String(category.id))

              return (
                <a
                  key={category.id}
                  href={`/nzeru?${newParams.toString()}`}
                  className={`category-pill ${categoryId === String(category.id) ? 'active' : ''}`}
                >
                  {category.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mb-8">
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
          <Pagination page={posts.page} totalPages={posts.totalPages} basePath="/nzeru" />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Nacit Lilongwe | Nzeru`,
    description: 'Read the latest articles, tips, and insights from Nacit Lilongwe.',
    openGraph: {
      type: 'website',
      title: 'Nacit Lilongwe | Nzeru',
      description: 'Read the latest articles, tips, and insights from Nacit Lilongwe.',
    },
  }
}
