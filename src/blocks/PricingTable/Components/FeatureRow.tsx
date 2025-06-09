import React from 'react'
import FeatureValue, { ValueType } from './FeatureValue'

export interface FeatureData {
  name: string
  type: ValueType
  value: string | boolean
}

interface FeatureRowProps {
  feature: FeatureData
  customIcon?: React.ReactNode
  index: number
}

/**
 * A component for rendering a single feature row in the pricing table
 * with semantic HTML and Tailwind styling
 */
const FeatureRow: React.FC<FeatureRowProps> = ({ feature, customIcon, index }) => {
  const isAlternateRow = index % 2 === 1

  return (
    <tr className={`border-y-[1.5px] border-gray-50 ${isAlternateRow ? 'bg-white' : 'bg-gray-50'}`}>
      <th scope="row" className="px-6 py-4 text-left text-gray-700 font-normal">
        {feature.name}
      </th>
      <td className="px-6 py-4 text-center flex justify-center">
        <FeatureValue type={feature.type} value={feature.value} customIcon={customIcon} />
      </td>
    </tr>
  )
}

export default FeatureRow
