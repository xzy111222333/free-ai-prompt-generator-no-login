<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        Claude Prompt Generator
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Generate prompts optimized for Claude AI
      </p>
    </div>

    <!-- Main Generator Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="claude"
        headline="Claude Prompt Generator"
        description="Describe your task and receive a structured prompt optimized for Claude AI."
        :show-preset-select="false"
        input-label="Give me a Claude Prompt to:"
        input-placeholder="Convert Spanish into Japanese"
        :initial-options="{ structure: 'non-xml' }"
        @manage-presets="openDocs('#claude')"
      >
        <template #controls="{ options, setOption, isProcessing }">
          <label class="block text-base font-medium text-[var(--text-muted)] mb-3 mt-4">Structure</label>
          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              class="btn-secondary h-12"
              :class="{ 'ring-2 ring-[var(--accent-blue)]': options?.structure === 'non-xml' }"
              :disabled="isProcessing"
              @click="setOption('structure', 'non-xml')"
            >
              Non XML Structure
            </button>
            <button
              type="button"
              class="btn-secondary h-12"
              :class="{ 'ring-2 ring-[var(--accent-blue)]': options?.structure === 'xml' }"
              :disabled="isProcessing"
              @click="setOption('structure', 'xml')"
            >
              XML Structure
            </button>
          </div>
        </template>
      </PromptWorkbench>
    </section>
  </div>
</template>

<script setup lang="ts">
import PromptWorkbench from '@/components/PromptWorkbench.vue'

// Set page meta
useHead({
  title: 'Claude AI Prompt Generator - Optimized Prompts for Claude',
  meta: [
    {
      name: 'description',
      content: 'Generate structured prompts optimized for Claude AI. Support for both XML and non-XML formats. Free Claude prompt generator with professional templates.'
    },
    {
      name: 'keywords',
      content: 'Claude AI prompts, Claude prompt generator, Anthropic Claude, AI prompts, Claude XML prompts, prompt engineering'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
