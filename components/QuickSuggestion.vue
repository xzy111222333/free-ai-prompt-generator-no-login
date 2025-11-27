<template>
  <button
    type="button"
    class="group text-left p-4 rounded-2xl border transition focus-ring bg-white/90 hover:bg-white"
    :style="{ borderColor: borderColor }"
    @click="$emit('select', text)"
  >
    <div class="flex items-start gap-3">
      <span class="badge-dot mt-1.5" :style="{ backgroundColor: accentColor }"></span>
      <div class="flex-1">
        <p class="text-sm text-[var(--text-strong)] leading-relaxed">{{ text }}</p>
        <span class="text-xs text-[var(--text-soft)] mt-2 inline-flex items-center gap-1">
          Use suggestion
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M7 5l6 5-6 5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ text: string }>()

const palette = ['#1b84ff', '#17c653', '#f6c000', '#f8285a', '#43ced7']

const accentColor = computed(() => {
  const sum = Array.from(props.text).reduce((total, char) => total + char.charCodeAt(0), 0)
  return palette[sum % palette.length]
})

const borderColor = computed(() => `${accentColor.value}33`)

defineEmits<{
  (e: 'select', value: string): void
}>()
</script>
