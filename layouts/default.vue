<template>
  <div class="min-h-screen gradient-bg flex flex-col">
    <header class="sticky top-0 z-50">
      <div class="glass-effect border-b border-[var(--surface-border)]/80">
        <nav class="container-responsive">
          <div class="flex items-center justify-between h-16 sm:h-[72px]">
            <NuxtLink to="/" class="flex items-center gap-2 hover-lift focus-ring rounded-xl px-1 py-1">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md border border-white/20">
                <img 
                  src="/logo-64x64.png" 
                  alt="PromptRule Logo" 
                  class="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </div>
              <div class="flex flex-col leading-tight">
                <span class="text-base sm:text-lg font-semibold gradient-text">PromptRule</span>
                <span class="text-xs text-[var(--text-soft)] tracking-wide uppercase">AI Prompt Generator</span>
              </div>
            </NuxtLink>

            <div class="hidden xl:flex items-center gap-1">
              <NuxtLink
                v-for="item in allNavigation"
                :key="item.name"
                :to="item.href"
                class="px-4 py-2 text-sm font-medium rounded-xl transition hover:bg-[var(--surface-100)] hover:text-[var(--accent-blue)]"
                :class="{ 'text-[var(--accent-blue)] bg-[var(--surface-100)]': $route.path === item.href }"
              >
                {{ item.name }}
              </NuxtLink>
              <NuxtLink
                to="/guides"
                class="px-4 py-2 text-sm font-medium rounded-xl transition hover:bg-[var(--surface-100)] hover:text-[var(--accent-blue)]"
                :class="{ 'text-[var(--accent-blue)] bg-[var(--surface-100)]': $route.path.startsWith('/guides') }"
              >
                Guides
              </NuxtLink>
            </div>

            <button
              type="button"
              class="xl:hidden focus-ring rounded-xl p-2 text-[var(--text-strong)] hover:bg-[var(--surface-100)]"
              :aria-expanded="mobileMenuOpen"
              aria-label="Toggle navigation menu"
              @click="toggleMobileMenu"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
        </nav>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="xl:hidden border-t border-[var(--surface-border)]/80">
            <div class="container-responsive py-4 space-y-3">
              <div class="grid gap-1">
                <NuxtLink
                  v-for="item in allNavigation"
                  :key="item.name"
                  :to="item.href"
                  class="mobile-menu-item"
                  :class="{ 'text-[var(--accent-blue)] bg-[var(--surface-100)]': $route.path === item.href }"
                  @click="closeMobileMenu"
                >
                  {{ item.name }}
                </NuxtLink>
                <NuxtLink
                  to="/guides"
                  class="mobile-menu-item"
                  :class="{ 'text-[var(--accent-blue)] bg-[var(--surface-100)]': $route.path.startsWith('/guides') }"
                  @click="closeMobileMenu"
                >
                  Guides
                </NuxtLink>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="mt-16 sm:mt-20">
      <div class="container-responsive pb-10">
        <div class="glass-effect border border-[var(--surface-border)]/70 rounded-3xl px-6 py-6 sm:px-8 sm:py-8 text-center space-y-4">
          <p class="text-sm text-[var(--text-soft)]">© 2025 PromptRule.com · Free AI Prompt Generator for everyone.</p>
          <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
            <NuxtLink to="/about" class="text-[var(--text-soft)] hover:text-[var(--accent-blue)] transition-colors">About Us</NuxtLink>
            <span class="text-[var(--text-soft)]">·</span>
            <NuxtLink to="/contact" class="text-[var(--text-soft)] hover:text-[var(--accent-blue)] transition-colors">Contact</NuxtLink>
            <span class="text-[var(--text-soft)]">·</span>
            <NuxtLink to="/privacy" class="text-[var(--text-soft)] hover:text-[var(--accent-blue)] transition-colors">Privacy Policy</NuxtLink>
            <span class="text-[var(--text-soft)]">·</span>
            <NuxtLink to="/terms" class="text-[var(--text-soft)] hover:text-[var(--accent-blue)] transition-colors">Terms of Service</NuxtLink>
            <span class="text-[var(--text-soft)]">·</span>
            <NuxtLink to="/guides" class="text-[var(--text-soft)] hover:text-[var(--accent-blue)] transition-colors">Guides</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Generator', href: '/' },
  { name: 'Checker', href: '/checker' },
  { name: 'Optimizer', href: '/optimizer' },
  { name: 'ChatGPT', href: '/chatgpt' },
  { name: 'Gemini', href: '/gemini' }
]

const secondary = [
  { name: 'Midjourney', href: '/midjourney' },
  { name: 'Claude', href: '/claude' }
]

const allNavigation = [...navigation, ...secondary]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
