<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        Midjourney Prompt Generator
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
        Create stunning visual prompts optimized for Midjourney AI
      </p>
    </div>

    <!-- Main Generator Section -->
    <section class="space-y-6">
      <PromptWorkbench
        engine="midjourney"
        headline="Midjourney Prompt Generator"
        description="Describe your visual concept and receive a production-ready Midjourney prompt."
        :show-preset-select="false"
        input-label="Describe Your Visual Concept"
        input-placeholder="a photo of a man eating spinach on a ship"
        :initial-options="{ orientation: 'horizontal' }"
        @manage-presets="openDocs('#midjourney')"
      >
        <template #controls="{ options, setOption, isProcessing }">
          <label class="block text-base font-medium text-[var(--text-muted)] mb-3 mt-4">Orientation</label>
          <div class="grid grid-cols-3 gap-2">
            <button
              type="button"
              class="btn-secondary h-12"
              :class="{ 'ring-2 ring-[var(--accent-blue)]': options?.orientation === 'horizontal' }"
              :disabled="isProcessing"
              @click="setOption('orientation', 'horizontal')"
            >
              Horizontal
            </button>
            <button
              type="button"
              class="btn-secondary h-12"
              :class="{ 'ring-2 ring-[var(--accent-blue)]': options?.orientation === 'square' }"
              :disabled="isProcessing"
              @click="setOption('orientation', 'square')"
            >
              Square
            </button>
            <button
              type="button"
              class="btn-secondary h-12"
              :class="{ 'ring-2 ring-[var(--accent-blue)]': options?.orientation === 'vertical' }"
              :disabled="isProcessing"
              @click="setOption('orientation', 'vertical')"
            >
              Vertical
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
  title: 'Midjourney Prompt Generator - Create Stunning Visual AI Prompts',
  meta: [
    {
      name: 'description',
      content: 'Generate professional Midjourney prompts for stunning AI-generated images. Free Midjourney prompt generator with orientation controls and optimization.'
    },
    {
      name: 'keywords',
      content: 'Midjourney prompts, Midjourney prompt generator, AI image prompts, Midjourney AI, AI art generator, image generation'
    }
  ]
})

const openDocs = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.open(`https://github.com/your-org/prompt-atelier#backend-integration${hash}`, '_blank', 'noopener')
  }
}
</script>
