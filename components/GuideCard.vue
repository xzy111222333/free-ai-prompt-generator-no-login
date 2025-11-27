<template>
  <NuxtLink
    :to="href"
    class="block card-surface rounded-2xl border border-[var(--surface-border)]/80 p-6 hover-lift elegant-shadow transition-all duration-300 group"
  >
    <div class="flex items-start gap-4 mb-4">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-teal)] flex items-center justify-center flex-shrink-0">
        <IconSymbol :name="icon" class="w-6 h-6 text-white" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--surface-100)] text-[var(--text-soft)]">
            {{ category }}
          </span>
          <span class="text-xs text-[var(--text-soft)]">{{ readTime }} read</span>
        </div>
        <h3 class="text-lg font-semibold text-[var(--text-strong)] group-hover:text-[var(--accent-blue)] transition-colors">
          {{ title }}
        </h3>
      </div>
    </div>
    
    <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
      {{ description }}
    </p>
    
    <div class="flex items-center text-[var(--accent-blue)] text-sm font-medium group-hover:gap-3 gap-2 transition-all">
      <span>Read Guide</span>
      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import IconSymbol from '@/components/IconSymbol.vue'

defineProps<{
  title: string
  description: string
  href: string
  category: string
  readTime: string
  icon: string
}>()
</script>
