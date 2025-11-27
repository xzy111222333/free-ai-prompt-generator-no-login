<template>
  <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-6 lg:p-8 elegant-shadow space-y-4">
    <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="space-y-1">
        <span class="highlight-pill text-sm" :style="highlightStyle">Generated Prompt</span>
        <p class="text-xs text-[var(--text-soft)]" v-if="meta?.note">{{ meta.note }}</p>
      </div>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="btn-secondary hover-lift flex items-center gap-2 h-10 px-4 text-sm"
          :style="{ color: accentColor, borderColor: accentBorder }"
          :disabled="!prompt || isLoading"
          @click="$emit('copy')"
        >
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M7 5a2 2 0 012-2h6a2 2 0 012 2v9a2 2 0 01-2 2h-6a2 2 0 01-2-2V5z" />
            <path d="M4 7v9a2 2 0 002 2h6" />
          </svg>
          <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
        </button>
        <button
          type="button"
          class="btn-primary hover-lift flex items-center gap-2 h-10 px-4 text-sm font-semibold"
          :style="{ backgroundImage: regenerateGradient }"
          :disabled="isLoading"
          @click="$emit('regenerate')"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.511m0 0V4.837m0 4.511l-2.657-2.658a7.5 7.5 0 10-2.225 11.852" />
          </svg>
          {{ isLoading ? 'Generating…' : 'Regenerate' }}
        </button>
      </div>
    </header>

    <div class="relative min-h-[300px]">
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
        <div class="flex items-center gap-3" :style="{ color: accentColor }">
          <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0113.49-4.238" />
          </svg>
          <span class="font-medium">Generating your prompt…</span>
        </div>
      </div>

      <div class="result-sheet rounded-2xl p-6 min-h-[300px]" :class="{ 'opacity-40 pointer-events-none': isLoading }">
        <template v-if="prompt">
          <pre class="whitespace-pre-wrap text-sm leading-relaxed text-[var(--text-strong)] font-mono">{{ prompt }}</pre>
        </template>
        <template v-else>
          <div class="flex items-center justify-center h-full">
            <div class="text-center space-y-3 max-w-md">
              <div class="w-12 h-12 mx-auto rounded-full border-2 border-dashed border-[var(--surface-border)] flex items-center justify-center">
                <svg class="w-6 h-6 text-[var(--text-soft)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-[var(--text-soft)]">Your generated prompt will appear here</p>
                <p class="text-xs text-[var(--text-soft)] opacity-75">Fill in the form above and click "Generate" to get started</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <p v-if="error" class="text-sm text-[#f8285a] text-center">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = withDefaults(
  defineProps<{
    prompt: string
    meta: Record<string, any> | null
    isLoading: boolean
    error: string | null
    copied: boolean
    accent?: string
  }>(),
  {
    accent: '#1b84ff'
  }
)

defineEmits<{
  (e: 'copy'): void
  (e: 'regenerate'): void
}>()

const accentColor = computed(() => props.accent ?? '#1b84ff')
const accentBorder = computed(() => `${accentColor.value}33`)
const regenerateGradient = computed(() => `linear-gradient(135deg, ${accentColor.value} 0%, #43ced7 100%)`)
const highlightStyle = computed(() => ({ backgroundColor: `${accentColor.value}1f`, color: accentColor.value }))
</script>
