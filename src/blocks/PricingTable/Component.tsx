import React from 'react'
import { Category, CategoryData, ValueType } from './Components'
import { CheckCircle } from 'lucide-react'
import type { PricingTableBlock as PricingTableBlockProps } from '@/payload-types'

type Props = PricingTableBlockProps & {
  disableInnerContainer?: boolean
}

/**
 * A pricing table block component using semantic HTML and Tailwind
 * that displays features organized by categories
 */
export const PricingTableBlock: React.FC<Props> = (props) => {
  // Use the props directly instead of destructuring an empty object
  const blockData = props

  // Check if blockData has required properties, if not return a placeholder
  if (!blockData.heading || !blockData.categories || blockData.categories.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {blockData?.heading || 'Pricing'}
          </h2>
          {blockData?.subheading && <p className="text-xl text-gray-600">{blockData.subheading}</p>}
          <p className="mt-8 text-gray-500">No pricing information available.</p>
        </div>
      </section>
    )
  }

  const { heading, subheading, categories } = blockData

  const transformedCategories: CategoryData[] = categories.map((category) => ({
    name: category.name,
    features: Array.isArray(category.features)
      ? category.features.map((feature) => ({
          name: feature.name,
          type: feature.value as ValueType,
          value: feature.value === 'text' ? feature.text || '' : !!feature.icon,
        }))
      : [],
  }))

  const startingIndices: number[] = []
  let currentIndex = 0

  transformedCategories.forEach((category, idx) => {
    startingIndices[idx] = currentIndex
    currentIndex += category.features.length
  })

  return (
    <section className={`py-16 px-4 bg-brand-white`} aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 id="pricing-heading" className="text-5xl font-medium text-gray-900 mb-4">
          {heading}
        </h2>
        {subheading && <p className="text- font-normal text-gray-600">{subheading}</p>}
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <table className="w-full border-collapse">
          <caption className="sr-only">Pricing and features table</caption>
          {transformedCategories.map((category, categoryIndex) => (
            <Category
              key={categoryIndex}
              category={category}
              customIcon={<CheckCircle className="text-brand-green h-6 w-6" aria-hidden="true" />}
              startingIndex={startingIndices[categoryIndex]}
            />
          ))}
        </table>
      </div>
    </section>
  )
}
