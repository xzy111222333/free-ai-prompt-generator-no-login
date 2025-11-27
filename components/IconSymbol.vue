<template>
  <svg
    class="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'spark'">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 19l1-2 2-1-1 2z" />
      <path d="M18 18l1-2 2-1-1 2z" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="M4 12l4 4 12-12" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </template>
    <template v-else-if="name === 'adjust'">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="9" cy="6" r="2.3" />
      <circle cx="15" cy="12" r="2.3" />
      <circle cx="9" cy="18" r="2.3" />
    </template>
    <template v-else-if="name === 'branch'">
      <path d="M6 5v6a4 4 0 004 4h4a4 4 0 014 4v0" />
      <circle cx="6" cy="3.5" r="2.2" />
      <circle cx="18" cy="19.5" r="2.2" />
      <circle cx="12" cy="9.5" r="2.2" />
    </template>
    <template v-else-if="name === 'chain'">
      <path d="M9.5 14.5l5-5" />
      <path d="M7.75 9.75a3 3 0 010-4.24l.5-.5a3 3 0 014.24 0l1.26 1.26a3 3 0 010 4.24" />
      <path d="M16.25 14.25a3 3 0 010 4.24l-.5.5a3 3 0 01-4.24 0l-1.26-1.26a3 3 0 010-4.24" />
    </template>
    <template v-else-if="name === 'clipboard'">
      <path d="M9 4h6a1 1 0 011 1v1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2V5a1 1 0 011-1z" />
      <rect x="9" y="2" width="6" height="4" rx="1.2" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </template>
    <template v-else-if="name === 'settings'">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 00.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.18a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </template>
    <template v-else-if="name === 'light'">
      <path d="M12 3a6 6 0 016 6c0 2.3-1.34 4.28-3.27 5.25L14 18h-4l-.73-3.75A6 6 0 0112 3z" />
      <path d="M9 21h6" />
    </template>
    <template v-else-if="name === 'image'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 16l-5-5-4 4-2-2-5 5" />
    </template>
    <template v-else-if="name === 'feather'">
      <path d="M20 3a9 9 0 01-9 9h-3l-4 4" />
      <path d="M16 3a5 5 0 01-5 5H8l-4 4" />
      <path d="M12 3a1 1 0 01-1 1H8L4 8" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="6" />
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
const name = props.name
</script>
