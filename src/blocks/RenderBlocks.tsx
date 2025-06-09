import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBlock } from '@/blocks/HeroBlock/Component'
import { PricingTableBlock } from '@/blocks/PricingTable/Component'
import { CTAFullBlock } from '@/blocks/CTAFullBlock/Component'
import { CTALargeBlock } from '@/blocks/CTALargeBlock/Component'
import { CTASmallBlock } from '@/blocks/CTASmallBlock/Component'
import { FeatureBlock } from '@/blocks/FeatureBlock/Component'
import { PlatformFeatures } from '@/blocks/PlatformFeatures/Component'
import { StoryBlock } from '@/blocks/StoryBlock/Component'
import { ProductBlocks } from '@/blocks/ProductBlock/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { TeamBlock } from '@/blocks/TeamBlock/Component'
import { ProductStepsBlocks } from '@/blocks/ProductStepsBlock/Component'
import { IndustryBlock } from '@/blocks/IndustyBlock/Component'
import { RatingBlock } from '@/blocks/RatingCardBlock/Component'
import { FullHeroBlock } from '@/blocks/FullHeroBlock/Component'
import { HeroBackgroundBlock } from '@/blocks/HeroBgBlock/Component'
import { SecurityBlock } from '@/blocks/SecurityBlock/Component'
import { TermsBlockComponent } from '@/blocks/TermsBlock/TermsBlockComponent'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { ClientsBlock } from '@/blocks/ClientsBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  ctaFullBlock: CTAFullBlock,
  ctaLargeBlock: CTALargeBlock,
  ctaSmallBlock: CTASmallBlock,
  featureBlock: FeatureBlock,
  industryBlock: IndustryBlock,
  ratingBlock: RatingBlock,
  productBlocks: ProductBlocks,
  productStepsBlocks: ProductStepsBlocks,
  storyBlock: StoryBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroBlock: HeroBlock,
  pricingTable: PricingTableBlock,
  platformFeatures: PlatformFeatures,
  faqBlock: FAQBlock,
  teamBlock: TeamBlock,
  fullHeroBlock: FullHeroBlock,
  heroBgBlock: HeroBackgroundBlock,
  securityBlock: SecurityBlock,
  relatedPosts: RelatedPosts,
  termsBlock: TermsBlockComponent,
  clientsBlock: ClientsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
