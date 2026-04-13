/**
 * Utility function to get the correct image URL with base path
 */
export const getImageUrl = (path: string): string => {
  const basePath = import.meta.env.BASE_URL
  // If path already starts with the base URL, return as is
  if (path.startsWith(basePath)) {
    return path
  }
  // If path starts with /, remove it and prepend base URL
  if (path.startsWith('/')) {
    return `${basePath}${path.slice(1)}`
  }
  // Otherwise prepend base URL
  return `${basePath}${path}`
}
