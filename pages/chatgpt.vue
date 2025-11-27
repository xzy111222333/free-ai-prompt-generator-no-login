<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        ChatGPT Generator
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Generate optimized prompts specifically for ChatGPT
      </p>
    </div>

    <!-- Main Generator Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="chatgpt"
        headline="ChatGPT Generator"
        description="Describe your goal and receive a ChatGPT-optimized prompt."
        :show-preset-select="false"
        input-label="Give me a ChatGPT Prompt to:"
        input-placeholder="Convert Spanish into Japanese"
        :initial-options="{ structure: 'markdown' }"
        @manage-presets="openDocs('#chatgpt')"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import PromptWorkbench from '@/components/PromptWorkbench.vue'

// Set page meta
useHead({
  title: 'ChatGPT Prompt Generator - Create Optimized Prompts for ChatGPT',
  meta: [
    {
      name: 'description',
      content: 'Generate effective ChatGPT prompts that deliver better results. Free ChatGPT prompt generator with professional templates and optimization. No registration required.'
    },
    {
      name: 'keywords',
      content: 'ChatGPT prompt generator, ChatGPT prompts, OpenAI ChatGPT, AI prompts, prompt engineering, ChatGPT optimization'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
