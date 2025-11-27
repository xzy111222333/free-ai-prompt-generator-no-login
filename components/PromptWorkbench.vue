<template>
  <section class="space-y-6">
    <!-- Main Generator Card -->
    <div class="max-w-5xl mx-auto">
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-6 lg:p-8 elegant-shadow space-y-6">
        <header class="text-center space-y-3">
          <span class="highlight-pill" :class="accentClass">
            <span class="badge-dot" :style="{ backgroundColor: accentColor }"></span>
            {{ engineLabel }}
          </span>
          <h2 class="text-2xl lg:text-3xl font-semibold font-display text-[var(--text-strong)]">{{ headline }}</h2>
          <p class="text-base text-[var(--text-soft)] leading-relaxed max-w-2xl mx-auto">
            {{ description }}
          </p>
        </header>

        <div class="space-y-6">
          <!-- Main Input Area -->
          <div>
            <label for="prompt-input" class="block text-base font-medium text-[var(--text-muted)] mb-3">{{ inputLabel }}</label>
            <textarea
              id="prompt-input"
              ref="textareaRef"
              v-model="userInput"
              class="form-textarea focus-ring min-h-[120px] text-base"
              :placeholder="inputPlaceholder"
            ></textarea>
          </div>

          <!-- Controls Row -->
          <div class="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <template v-if="showPresetSelect">
                <label for="preset-select" class="block text-base font-medium text-[var(--text-muted)] mb-3">{{ presetLabel }}</label>
                <div class="relative">
                  <select id="preset-select" v-model="selectedPreset" class="form-input appearance-none pr-12 text-base h-14 py-4 px-4">
                    <option v-for="preset in presets" :key="preset.id" :value="preset.id">
                      {{ preset.label }} · {{ preset.category.label }}
                    </option>
                  </select>
                  <svg
                    class="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-soft)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </template>

              <slot name="controls" :options="extraOptions" :setOption="setOption" :isProcessing="isProcessing" />
            </div>
            <button type="button" class="btn-primary hover-lift h-14 px-6 text-base font-semibold" :disabled="isProcessing" @click="onGenerate">
              <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="!isProcessing">Generate</span>
              <span v-else>Generating...</span>
            </button>
          </div>

          <!-- Quick Suggestions -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-base font-medium text-[var(--text-strong)]">Quick Suggestions</h3>
              <button type="button" class="p-1 rounded-lg hover:bg-[var(--surface-100)] transition-colors" @click="refreshSuggestions">
                <svg class="w-4 h-4 text-[var(--text-soft)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <button
                v-for="suggestion in currentSuggestions"
                :key="suggestion"
                type="button"
                class="text-left p-3 text-sm bg-[var(--surface-50)] hover:bg-[var(--surface-100)] rounded-lg transition-colors border border-[var(--surface-border)]"
                @click="applySuggestion(suggestion)"
              >
                {{ suggestion }}
              </button>
            </div>
          </div>

          <!-- Template Description -->
          <div v-if="activePreset" class="rounded-2xl border border-[var(--surface-border)] bg-white/90 p-4 space-y-1">
            <p class="text-sm font-semibold text-[var(--text-strong)]">{{ activePreset.label }}</p>
            <p class="text-xs text-[var(--text-soft)] leading-relaxed">{{ activePreset.description || activePreset.template }}</p>
            <p v-if="activePreset.tone" class="text-xs uppercase tracking-wide font-medium" :style="{ color: accentColor }">
              Tone · {{ activePreset.tone }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Generated Result - Only show when there's content -->
    <div v-if="generatedPrompt || isProcessing || error" class="max-w-5xl mx-auto">
      <GeneratedResult
        :prompt="generatedPrompt"
        :meta="metaInfo"
        :is-loading="isProcessing"
        :error="error"
        :copied="copied"
        :accent="accentColor"
        @copy="copyPrompt"
        @regenerate="onGenerate"
      />
    </div>

    <slot name="extras" />
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import GeneratedResult from '@/components/GeneratedResult.vue'
import { copyToClipboard } from '@/utils/clipboard'
import { flattenPresets, usePromptEngine } from '@/composables/usePromptEngine'
import { usePromptCatalog } from '@/composables/usePromptCatalog'
import type { PromptCategory, PromptPreset } from '@/types/prompt'

const props = defineProps({
  engine: { type: String, required: true },
  headline: { type: String, required: true },
  description: { type: String, required: true },
  showPresetSelect: { type: Boolean, default: true },
  inputLabel: { type: String, default: 'I want a prompt that will…' },
  inputPlaceholder: { type: String, default: 'Describe your goal, audience or task in detail' },
  presetLabel: { type: String, default: 'Prompt template' },
  initialOptions: { type: Object as () => Record<string, any> | undefined, default: undefined },
  defaultPresetId: { type: String, default: 'freeform' }
})

defineEmits<{ (e: 'manage-presets'): void }>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const userInput = ref('')
const selectedPreset = ref('')
const copied = ref(false)
const extraOptions = ref<Record<string, any>>({ ...(props.initialOptions || {}) })

// Page-specific suggestions data
const suggestionsByEngine: Record<string, string[]> = {
  studio: [
    'Write a thank you email',
    'Write user requirements', 
    'Create content calendar',
    'Brainstorm marketing ideas',
    'Draft a job description',
    'Generate meeting agenda',
    'Write a blog post outline',
    'Draft a product description',
    'Create social media posts',
    'Write a press release',
    'Draft contract terms',
    'Write engaging headlines',
    'Write value proposition',
    'Write creative strategy',
    'Write a Facebook post',
    'Create content pillars',
    'Write a professional email',
    'Create onboarding content'
  ],
  midjourney: [
    'A futuristic city at sunset',
    'Portrait of a wise old wizard',
    'Cyberpunk street scene at night',
    'Beautiful fantasy landscape',
    'Modern minimalist architecture',
    'Vintage car in autumn forest',
    'Abstract geometric patterns',
    'Steampunk mechanical device',
    'Underwater coral reef scene',
    'Space station interior design',
    'Medieval castle on a cliff',
    'Colorful street art mural',
    'Elegant fashion photography',
    'Cozy cabin in snowy mountains',
    'Surreal dreamlike composition',
    'Product photography setup',
    'Character design concept art',
    'Nature macro photography'
  ],
  checker: [
    'Check this marketing email for clarity',
    'Analyze this product description',
    'Review this job posting for bias',
    'Evaluate this social media caption',
    'Check this blog post introduction',
    'Analyze this customer service response',
    'Review this presentation outline',
    'Evaluate this website copy',
    'Check this newsletter content',
    'Analyze this sales pitch',
    'Review this training material',
    'Evaluate this press release',
    'Check this user manual section',
    'Analyze this survey questions',
    'Review this contract language',
    'Evaluate this brand messaging',
    'Check this technical documentation',
    'Analyze this meeting agenda'
  ],
  optimizer: [
    'Make this email more persuasive',
    'Improve this product headline',
    'Enhance this social media post',
    'Optimize this landing page copy',
    'Refine this job description',
    'Polish this blog post title',
    'Strengthen this call-to-action',
    'Improve this value proposition',
    'Enhance this brand tagline',
    'Optimize this ad copy',
    'Refine this email subject line',
    'Polish this presentation intro',
    'Strengthen this sales message',
    'Improve this website headline',
    'Enhance this product benefits',
    'Optimize this newsletter intro',
    'Refine this customer testimonial',
    'Polish this company description'
  ],
  chatgpt: [
    'Create a conversational chatbot',
    'Design an interview assistant',
    'Build a creative writing helper',
    'Make a study buddy for students',
    'Create a brainstorming partner',
    'Design a coding mentor',
    'Build a language learning tutor',
    'Make a personal productivity coach',
    'Create a storytelling companion',
    'Design a problem-solving assistant',
    'Build a research helper',
    'Make a creative ideation partner',
    'Create a writing feedback tool',
    'Design a learning facilitator',
    'Build a decision-making advisor',
    'Make a goal-setting coach',
    'Create a skill development guide',
    'Design a knowledge synthesizer'
  ],
  gemini: [
    'Analyze complex data patterns',
    'Compare multiple research papers',
    'Process multimodal content',
    'Synthesize information sources',
    'Evaluate technical specifications',
    'Analyze market trends',
    'Process visual and text data',
    'Compare competitive analysis',
    'Evaluate system architecture',
    'Analyze user behavior data',
    'Process research findings',
    'Evaluate business metrics',
    'Analyze content performance',
    'Process survey responses',
    'Evaluate project requirements',
    'Analyze financial reports',
    'Process customer feedback',
    'Evaluate strategic options'
  ],
  claude: [
    'Write professional documentation',
    'Create detailed analysis report',
    'Draft policy guidelines',
    'Write technical specifications',
    'Create training materials',
    'Draft legal-compliant content',
    'Write research methodology',
    'Create process documentation',
    'Draft compliance procedures',
    'Write executive summary',
    'Create audit checklist',
    'Draft risk assessment',
    'Write project proposal',
    'Create quality standards',
    'Draft operational procedures',
    'Write strategic plan',
    'Create evaluation framework',
    'Draft governance guidelines'
  ]
}

const currentSuggestions = ref<string[]>([])

// Get suggestions for current engine
const getEngineSpecificSuggestions = () => {
  return suggestionsByEngine[props.engine] || suggestionsByEngine.studio
}

// Initialize with random suggestions for current engine
const initializeSuggestions = () => {
  const engineSuggestions = getEngineSpecificSuggestions()
  const shuffled = [...engineSuggestions].sort(() => 0.5 - Math.random())
  currentSuggestions.value = shuffled.slice(0, 10)
}

const refreshSuggestions = () => {
  const engineSuggestions = getEngineSpecificSuggestions()
  const shuffled = [...engineSuggestions].sort(() => 0.5 - Math.random())
  currentSuggestions.value = shuffled.slice(0, 10)
}

// Initialize suggestions on component mount
initializeSuggestions()

// Watch for engine changes and update suggestions accordingly
watch(
  () => props.engine,
  () => {
    initializeSuggestions()
  }
)

const { categories, isLoading: catalogLoading, error: catalogError } = usePromptCatalog({
  engine: props.engine as keyof typeof import('@/data/promptPresets').promptCatalog
})

const presets = computed(() => flattenPresets(categories.value))

watch(
  presets,
  (list) => {
    if (list.length && !selectedPreset.value) {
      selectedPreset.value = list[0].id
    }
  },
  { immediate: true }
)

const activePreset = computed(
  () =>
    presets.value.find((preset) => preset.id === selectedPreset.value) as (PromptPreset & {
      category: PromptCategory
    }) | undefined
)

const accentMap: Record<string, { className: string; color: string }> = {
  studio: { className: 'blue', color: '#1b84ff' },
  checker: { className: 'gold', color: '#f6c000' },
  optimizer: { className: 'green', color: '#17c653' },
  chatgpt: { className: 'teal', color: '#43ced7' },
  gemini: { className: 'pink', color: '#f8285a' },
  midjourney: { className: 'pink', color: '#fa5f84' },
  claude: { className: 'blue', color: '#1b84ff' }
}

const accentConfig = computed(() => accentMap[props.engine] || accentMap.studio)
const accentClass = computed(() => accentConfig.value.className)
const accentColor = computed(() => accentConfig.value.color)

const engineLabel = computed(() => props.engine.replace(/-/g, ' ').toUpperCase())

const { generatedPrompt, isLoading, error, metadata, buildPayload, generate } = usePromptEngine({
  engine: props.engine
})

const isProcessing = computed(() => isLoading.value || catalogLoading.value)

const onGenerate = () => {
  const presetId = activePreset.value?.id || props.defaultPresetId
  const payload = buildPayload(presetId, userInput.value, { ...extraOptions.value })
  generate(payload)
}

const copyPrompt = async () => {
  if (!generatedPrompt.value) return
  await copyToClipboard(generatedPrompt.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}

const metaInfo = computed(() => metadata.value)

watch(isProcessing, (state) => {
  if (state) {
    copied.value = false
  }
})

const applySuggestion = async (suggestion: string) => {
  userInput.value = suggestion
  await nextTick()
  textareaRef.value?.focus()
  textareaRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const setOption = (key: string, value: any) => {
  extraOptions.value = { ...extraOptions.value, [key]: value }
}

defineExpose({ applySuggestion, refreshSuggestions, setOption })
</script>
