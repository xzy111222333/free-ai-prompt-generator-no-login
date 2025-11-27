<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        Gemini Generator
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Generate optimized prompts specifically for Google Gemini
      </p>
    </div>

    <!-- Main Generator Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="gemini"
        headline="Gemini Generator"
        description="Describe your goal and receive a Gemini-optimized prompt."
        @manage-presets="openDocs('#gemini')"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import PromptWorkbench from '@/components/PromptWorkbench.vue'

// Set page meta
useHead({
  title: 'Google Gemini Prompt Generator - Create Optimized Gemini Prompts',
  meta: [
    {
      name: 'description',
      content: 'Generate effective prompts for Google Gemini AI. Free Gemini prompt generator with professional optimization. Get better results from Gemini instantly.'
    },
    {
      name: 'keywords',
      content: 'Gemini prompts, Google Gemini, Gemini AI, AI prompt generator, Gemini optimization, Google AI'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
