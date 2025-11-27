import type { PromptCategory, PromptRequestPayload, PromptResponse } from '@/types/prompt'

interface UsePromptEngineOptions {
  engine: string
}

export const usePromptEngine = (options: UsePromptEngineOptions) => {
  const runtimeConfig = useRuntimeConfig()
  const generatedPrompt = ref('')
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const metadata = ref<Record<string, any> | null>(null)

  const buildPayload = (presetId: string, input: string, optionsOverride?: Record<string, any>): PromptRequestPayload => ({
    engine: options.engine,
    promptPresetId: presetId,
    userInput: input,
    options: optionsOverride
  })

  const generate = async (payload: PromptRequestPayload) => {
    const apiBase = runtimeConfig.public.apiBase

    if (!payload.userInput?.trim()) {
      error.value = 'Please describe what you need so we can design the prompt.'
      return
    }

    isLoading.value = true
    error.value = null

    try {
      if (!apiBase) {
        await new Promise((resolve) => setTimeout(resolve, 650))
        generatedPrompt.value = payload.userInput
          ? `# Prompt Blueprint\n\n## Role\nYou are an expert specialised in ${payload.promptPresetId.replace(/-/g, ' ')}.\n\n## Goal\n${payload.userInput}.\n\n## Instructions\n1. Analyse the objective and gather missing context.\n2. Produce a structured response with bullet insights.\n3. Finish with actionable recommendations and optional guardrails.\n\n## Output\nReturn markdown with headings, highlights and next steps.`
          : ''
        metadata.value = {
          mock: true,
          note: 'Configure API settings to enable backend generation.'
        }
        return
      }

      const response = await $fetch<PromptResponse>(`${apiBase}/generate`, {
        method: 'POST',
        body: payload
      })

      generatedPrompt.value = response.prompt
      metadata.value = response.meta ?? null
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unable to generate prompt right now.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    generatedPrompt,
    isLoading,
    error,
    metadata,
    buildPayload,
    generate
  }
}

export const flattenPresets = (categories: PromptCategory[]) =>
  categories.flatMap((category) =>
    category.presets.map((preset) => ({
      ...preset,
      category: {
        id: category.id,
        label: category.label,
        summary: category.summary
      }
    }))
  )
