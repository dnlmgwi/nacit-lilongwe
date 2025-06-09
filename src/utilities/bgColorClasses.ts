export const bgColorClasses = {
  gray: 'bg-gray-50 text-brand-dark-green',
  'brand-dark-green': 'bg-brand-dark-green text-white',
  'brand-lime': 'bg-brand-lime text-brand-dark-green',
  'brand-green': 'bg-brand-green text-white',
  white: 'bg-white text-brand-dark-green',
}

// Function to convert the string backgroundColor to the expected type
export const BgColor = (
  color: string | null | undefined,
): 'gray' | 'white' | 'brand-dark-green' | 'brand-lime' | 'brand-green' => {
  if (!color) return 'white'
  if (
    color === 'gray' ||
    color === 'white' ||
    color === 'brand-dark-green' ||
    color === 'brand-lime' ||
    color === 'brand-green'
  ) {
    return color
  }
  return 'white'
}
