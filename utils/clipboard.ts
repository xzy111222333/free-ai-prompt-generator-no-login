export const copyToClipboard = async (value: string) => {
  if (!value) return false
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value)
      return true
    }
  } catch (error) {
    console.error('Clipboard error', error)
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  const result = document.execCommand('copy')
  document.body.removeChild(textarea)
  return result
}
