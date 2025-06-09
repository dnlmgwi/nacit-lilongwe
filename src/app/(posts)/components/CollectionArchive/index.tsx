import { cn } from '@/utilities/ui'
import React from 'react'
import { Card } from '../Card'
import { CardPostData } from '../Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return <Card key={index} doc={result} relationTo="posts" showCategories />
          }
          return null
        })}
      </div>
    </div>
  )
}
