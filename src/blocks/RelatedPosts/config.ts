import type { Block } from 'payload'

export const RelatedPostsBlock: Block = {
  slug: 'relatedPosts',
  labels: {
    singular: 'Related Posts Block',
    plural: 'Related Posts Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      defaultValue: 'Recent Articles',
    },
    {
      name: 'showCategories',
      label: 'Show Categories',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'limit',
      label: 'Limit',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 12,
    },
    {
      name: 'introContent',
      label: 'Intro Content',
      type: 'richText',
    },
  ],
}

export default RelatedPostsBlock
