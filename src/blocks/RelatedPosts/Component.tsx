import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'
import type { Post } from '@/payload-types'
import { Card } from '../../components/Card'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedPostsBlockProps = {
  title?: string
  showCategories?: boolean
  limit?: number
  introContent?: SerializedEditorState
  className?: string
  docs?: Post[]
}

export const RelatedPosts: React.FC<RelatedPostsBlockProps> = (props) => {
  const { className, docs, introContent, title = 'Recent Articles', showCategories = true } = props

  return (
    <div className={clsx('lg:container', className)}>
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <Card key={index} doc={doc} relationTo="posts" showCategories={showCategories} />
        })}
      </div>
    </div>
  )
}
