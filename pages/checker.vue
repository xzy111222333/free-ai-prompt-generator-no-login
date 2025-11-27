<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        Prompt Checker
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Analyze and improve your AI prompts for better results
      </p>
    </div>

    <!-- Main Checker Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="checker"
        headline="Prompt Analyzer"
        description="Paste your prompt to receive analysis with improvements and suggestions."
        :show-preset-select="false"
        input-label="Prompt to Check:"
        input-placeholder="Please enter the prompt here."
        :initial-options="{ useCase: '' }"
        @manage-presets="openDocs('#checker')"
      >
        <template #controls="{ setOption, isProcessing }">
          <label for="use-case" class="block text-base font-medium text-[var(--text-muted)] mb-3 mt-4">Intended Use Case (who/what this prompt is for):</label>
          <input
            id="use-case"
            type="text"
            class="form-input h-14 text-base"
            placeholder="eg: For ChatGPT to generate professional job application content."
            :disabled="isProcessing"
            @input="(e: any) => setOption('useCase', e?.target?.value || '')"
          />
        </template>
      </PromptWorkbench>
    </section>
  </div>
</template>

<script setup lang="ts">
import PromptWorkbench from '@/components/PromptWorkbench.vue'

// Set page meta
useHead({
  title: 'AI Prompt Checker - Analyze and Improve Your AI Prompts',
  meta: [
    {
      name: 'description',
      content: 'Free AI prompt checker tool. Analyze your prompts and get professional suggestions for improvement. Works with ChatGPT, Claude, Gemini, and all AI models.'
    },
    {
      name: 'keywords',
      content: 'prompt checker, AI prompt analyzer, prompt improvement, prompt analysis, AI tools, prompt optimization'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
