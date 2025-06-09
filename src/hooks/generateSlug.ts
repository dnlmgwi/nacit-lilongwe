const generateSlug = (title: string) => {
  if (!title) return ''

  return (
    title
      .toLowerCase()
      .trim()
      // Replace non-alphanumeric characters with hyphens
      .replace(/[^a-z0-9]+/g, '-')
      // Remove leading and trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Replace multiple consecutive hyphens with a single one
      .replace(/-+/g, '-')
  )
}

export default generateSlug
