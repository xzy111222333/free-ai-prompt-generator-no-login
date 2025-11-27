import { defineEventHandler, getQuery } from 'h3'
import { promptCatalog } from '@/data/promptPresets'
import type { PromptCategory } from '@/types/prompt'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const engine = typeof query.engine === 'string' ? query.engine : undefined

  if (!engine) {
    return [] as PromptCategory[]
  }

  return (promptCatalog[engine] ?? []) as PromptCategory[]
})
