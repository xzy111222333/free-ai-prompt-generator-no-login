<template>
  <NuxtLink
    :to="href"
    class="accent-card rounded-2xl border transition hover-lift"
    :class="{ 'ring-2 ring-[var(--accent-blue)]/50': active }"
    :style="{ borderColor: borderColor }"
  >
    <div class="accent-card__inner p-5 text-left space-y-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
        :style="{ background: iconBackground, color: accentColor }"
      >
        <IconSymbol :name="icon" class="w-5 h-5" />
      </div>
      <div>
        <h3 class="text-base font-semibold text-[var(--text-strong)] mb-1">{{ title }}</h3>
        <p class="text-sm text-[var(--text-soft)] leading-relaxed">{{ description }}</p>
      </div>
      <span class="text-xs font-semibold text-[var(--text-soft)] inline-flex items-center gap-2">
        Explore workspace
        <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M7 5l6 5-6 5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconSymbol from '@/components/IconSymbol.vue'

const props = defineProps<{
  title: string
  description: string
  href: string
  icon: string
  active?: boolean
}>()

const palette = ['#1b84ff', '#17c653', '#f6c000', '#f8285a', '#43ced7']

const accentColor = computed(() => {
  const sum = Array.from(props.title + props.icon).reduce((total, char) => total + char.charCodeAt(0), 0)
  return palette[sum % palette.length]
})

const borderColor = computed(() => `${accentColor.value}33`)
const iconBackground = computed(() => `linear-gradient(135deg, ${accentColor.value}22, ${accentColor.value}11)`)
</script>
