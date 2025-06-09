import React from 'react'
import { CheckIcon } from 'lucide-react'

export type ValueType = 'text' | 'icon'

export interface FeatureValueProps {
  type: ValueType
  value: string | boolean
  customIcon?: React.ReactNode
  className?: string
}

/**
 * A component that renders either a text value or an icon based on the type
 */
const FeatureValue: React.FC<FeatureValueProps> = ({ type, value, customIcon, className = '' }) => {
  if (type === 'icon') {
    return !value ? (
      <div className="bg-brand-lime flex justify-center rounded-full p-1">{customIcon}</div>
    ) : (
      <div className="bg-brand-lime flex justify-center rounded-full p-1 scale-[0.7]">
        <CheckIcon className="text-brand-dark-green h-6 w-6" aria-hidden="true" />
      </div>
    )
  }

  if (type === 'text') {
    if (value === '') {
      return <span className="text-gray-400">—</span> // Em dash for empty values
    }
    return <span className={`text-gray-900 font-normal ${className}`}>{value as string}</span>
  }

  return null
}

export default FeatureValue
