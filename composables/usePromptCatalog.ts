import { promptCatalog } from '@/data/promptPresets'
import type { PromptCategory } from '@/types/prompt'

interface UsePromptCatalogOptions {
  engine: keyof typeof promptCatalog
}

export const usePromptCatalog = (options: UsePromptCatalogOptions) => {
  const runtimeConfig = useRuntimeConfig()
  const categories = ref<PromptCategory[]>(promptCatalog[options.engine] ?? [])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadFromBackend = async () => {
    if (!process.client && !process.server) {
      return
    }

    const apiBase = runtimeConfig.public.apiBase
    const endpoint = runtimeConfig.public.promptsEndpoint || '/prompts'

    if (!apiBase) {
      return
    }

    isLoading.value = true
    error.value = null

    try {
      const response = await $fetch<PromptCategory[]>(`${apiBase}${endpoint}`, {
        query: { engine: options.engine }
      })
      if (Array.isArray(response) && response.length) {
        categories.value = response
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch prompt catalog'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    loadFromBackend()
  })

  return {
    categories,
    isLoading,
    error,
    reload: loadFromBackend
  }
}
