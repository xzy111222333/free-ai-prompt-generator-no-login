<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Title -->
    <div class="text-center mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-[var(--text-strong)] mb-3">
        The Ultimate AI Prompt Generator for ChatGPT, Claude & More
      </h1>
      <p class="text-base text-[var(--text-soft)] max-w-3xl mx-auto leading-relaxed">
        Generate precise and professional AI Prompts for ChatGPT, Claude, Gemini, and more. Enhance output quality and boost your productivity with the best results – no registration required and completely free.
      </p>
    </div>

    <!-- Tool Navigation Cards -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <ToolCard
          v-for="tool in tools"
          :key="tool.href"
          :title="tool.title"
          :description="tool.description"
          :href="tool.href"
          :icon="tool.icon"
          :active="tool.href === '/'"
        />
      </div>

    <!-- Main Generator Section -->
    <section class="space-y-6">
      <PromptWorkbench
        ref="workbench"
        engine="studio"
        headline="AI Prompt Generator"
        description="Describe what you want the prompt to do and receive a polished result."
        @manage-presets="openPresetDocs()"
      />
    </section>

    <!-- Comprehensive Content Section -->
    <section class="mt-16 space-y-12">
      <!-- Introduction Article -->
      <div class="max-w-4xl mx-auto">
        <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
          <div class="prose prose-lg max-w-none">
            <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Getting Better Results from AI Starts with the Right Prompt</h2>
            
            <p class="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
              You might know exactly what you want from AI, but putting it into words the AI understands? That's where most people struggle. If your prompt is too vague, the output feels generic or off-target. If it's too complex, the AI might miss your main point entirely.
            </p>

            <p class="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
              This is where PromptRule's AI Prompt Generator makes the difference. It transforms your rough ideas into clear, effective, and well-structured prompts that consistently deliver better results from ChatGPT, Claude, Gemini, and other AI models. Whether you're writing content, solving problems, or brainstorming ideas, the right prompt is your foundation for success.
            </p>

            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">What is an AI Prompt Generator?</h3>
            
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
              An AI Prompt Generator is a specialized tool that helps you craft better instructions for AI models like ChatGPT, Claude, and Gemini. Instead of guessing how to phrase your requests, you simply describe what you want to accomplish, and the generator creates a detailed, structured prompt that guides the AI toward your desired outcome.
            </p>

            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-8">
              For example, instead of asking "Write about marketing," you might get a prompt like: "You are a senior marketing strategist with 10 years of experience. Create a comprehensive content marketing plan for a B2B SaaS company targeting small businesses. Include specific tactics, metrics to track, and a 3-month implementation timeline."
            </p>

            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">How Does PromptRule's AI Prompt Generator Work?</h3>

            <div class="space-y-6 mb-8">
              <div class="border-l-4 border-[var(--accent-blue)] pl-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-2">1. You Describe Your Goal</h4>
                <p class="text-base text-[var(--text-muted)] leading-relaxed">
                  Simply tell us what you want the AI to help you with. Be as specific as possible about your audience, tone, format, and desired outcome. The more details you provide, the better your generated prompt will be.
                </p>
              </div>

              <div class="border-l-4 border-[var(--accent-green)] pl-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-2">2. AI Processes Your Input</h4>
                <p class="text-base text-[var(--text-muted)] leading-relaxed">
                  Our advanced AI analyzes your request, identifies the key components needed for success, and structures them using proven prompt engineering frameworks like RACE, CARE, and CREATE.
                </p>
              </div>

              <div class="border-l-4 border-[var(--accent-gold)] pl-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-2">3. Get Your Optimized Prompt</h4>
                <p class="text-base text-[var(--text-muted)] leading-relaxed">
                  Receive a comprehensive, ready-to-use prompt that includes role definition, clear instructions, context, constraints, and output formatting guidelines. Copy and paste it directly into your preferred AI tool.
                </p>
              </div>
            </div>

            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Benefits of Using PromptRule</h3>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-[var(--surface-50)] rounded-2xl p-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Save Time and Reduce Frustration</h4>
                <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                  Stop wasting time on trial-and-error prompting. Get high-quality results on your first try with professionally structured prompts that work consistently across different AI models.
                </p>
              </div>

              <div class="bg-[var(--surface-50)] rounded-2xl p-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Learn Prompt Engineering</h4>
                <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                  Every generated prompt teaches you something new about effective AI communication. Observe the patterns and techniques to improve your own prompt-writing skills over time.
                </p>
              </div>

              <div class="bg-[var(--surface-50)] rounded-2xl p-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Works with Any AI Model</h4>
                <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                  Our prompts are designed to work effectively with ChatGPT, Claude, Gemini, and other leading AI models. One prompt, multiple platforms, consistent results.
                </p>
              </div>

              <div class="bg-[var(--surface-50)] rounded-2xl p-6">
                <h4 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Completely Free</h4>
                <p class="text-sm text-[var(--text-muted)] leading-relaxed">
                  No registration required, no hidden costs, no usage limits. Generate as many high-quality prompts as you need, whenever you need them, absolutely free.
                </p>
              </div>
            </div>

            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Perfect for Every Use Case</h3>

            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
              Whether you're a content creator, marketer, student, educator, entrepreneur, or simply someone who wants to get more from AI tools, PromptRule adapts to your needs:
            </p>

            <div class="grid md:grid-cols-3 gap-4 mb-8">
              <div class="text-center p-4">
                <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-teal)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--text-strong)] mb-2">Content Creation</h4>
                <p class="text-sm text-[var(--text-muted)]">Blog posts, articles, social media content, and marketing copy</p>
              </div>

              <div class="text-center p-4">
                <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-wave-green)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--text-strong)] mb-2">Business Strategy</h4>
                <p class="text-sm text-[var(--text-muted)]">Planning, analysis, problem-solving, and decision-making</p>
              </div>

              <div class="text-center p-4">
                <div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-wave-pink)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--text-strong)] mb-2">Education</h4>
                <p class="text-sm text-[var(--text-muted)]">Lesson plans, research, explanations, and learning materials</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
              <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Ready to Get Better Results from AI?</h3>
              <p class="text-lg text-[var(--text-muted)] mb-6">
                Join thousands of users who have discovered the power of well-crafted prompts. Start generating professional-quality prompts in seconds.
              </p>
              <button 
                type="button" 
                class="btn-primary hover-lift text-lg px-8 py-4"
                @click="scrollToTop"
              >
                Try PromptRule Now - It's Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PromptWorkbench from '@/components/PromptWorkbench.vue'
import ToolCard from '@/components/ToolCard.vue'

// Set page meta
useHead({
  title: 'Free AI Prompt Generator for ChatGPT, Claude, Gemini - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Generate professional AI prompts for ChatGPT, Claude, Gemini, and more. Free AI prompt generator with no registration required. Get better results from AI models instantly.'
    },
    {
      name: 'keywords',
      content: 'AI prompt generator, ChatGPT prompts, Claude AI, Gemini prompts, free prompt generator, AI tools, prompt engineering, prompt optimizer'
    }
  ]
})

const workbench = ref<InstanceType<typeof PromptWorkbench> | null>(null)

const tools = [
  {
    title: 'AI Prompt Generator',
    description: 'Generate prompts for ChatGPT and other AI models',
    href: '/',
    icon: 'spark'
  },
  {
    title: 'Prompt Checker',
    description: 'Analyze and improve your prompts',
    href: '/checker',
    icon: 'check'
  },
  {
    title: 'Prompt Optimizer',
    description: 'Transform and enhance your prompts',
    href: '/optimizer',
    icon: 'adjust'
  },
  {
    title: 'Midjourney Generator',
    description: 'Create prompts for Midjourney AI',
    href: '/midjourney',
    icon: 'image'
  },
  {
    title: 'Claude Generator',
    description: 'Generate prompts for Claude AI',
    href: '/claude',
    icon: 'feather'
  }
]

const openPresetDocs = () => {
  if (typeof window !== 'undefined') {
    window.open('https://github.com/your-org/prompt-atelier#backend-integration', '_blank', 'noopener')
  }
}

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

</script>
