<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        Prompt Optimizer
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Transform and enhance your prompts for better performance
      </p>
    </div>

    <!-- Main Optimizer Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="optimizer"
        headline="Prompt Optimizer"
        description="Paste your prompt to receive an improved and optimized version."
        @manage-presets="openDocs('#optimizer')"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import PromptWorkbench from '@/components/PromptWorkbench.vue'

// Set page meta
useHead({
  title: 'AI Prompt Optimizer - Transform and Enhance Your Prompts',
  meta: [
    {
      name: 'description',
      content: 'Free AI prompt optimizer. Transform your basic prompts into professional, high-performance versions. Get better results from ChatGPT, Claude, and other AI models.'
    },
    {
      name: 'keywords',
      content: 'prompt optimizer, AI prompt enhancement, prompt improvement, AI optimization, prompt engineering tools'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
