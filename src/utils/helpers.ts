// Function to truncate text
function truncateText(text: string, length: number): string {
  if (text?.length === 0 || !text) return ''

  if (text?.length <= length) {
    return text
  }
  return text?.substring(0, length) + '...' || ''
}

export { truncateText }
