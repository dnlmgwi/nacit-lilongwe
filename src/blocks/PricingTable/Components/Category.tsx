import React from 'react'
import FeatureRow, { FeatureData } from './FeatureRow'

export interface CategoryData {
  name: string
  features: FeatureData[]
}

interface CategoryProps {
  category: CategoryData
  customIcon?: React.ReactNode
  startingIndex?: number // For tracking alternating backgrounds
}

/**
 * A component for rendering a category in the pricing table
 * using semantic HTML elements
 */
const Category: React.FC<CategoryProps> = ({ category, customIcon, startingIndex = 0 }) => {
  return (
    <tbody>
      {/* Category header */}
      <tr className="bg-brand-white">
        <th
          scope="colgroup"
          colSpan={2}
          className="px-6 py-4 text-left font-medium text-lg text-gray-800 border-b-2 border-gray-50"
        >
          {category.name}
        </th>
      </tr>

      {/* Features */}
      {category.features.map((feature, featureIndex) => (
        <FeatureRow
          key={featureIndex}
          feature={feature}
          customIcon={customIcon}
          index={startingIndex + featureIndex}
        />
      ))}
    </tbody>
  )
}

export default Category
