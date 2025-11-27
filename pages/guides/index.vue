<template>
  <div class="container-responsive py-8 space-y-8">
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4">
        The Prompt Engineering Course
      </h1>
      <p class="text-xl text-[var(--text-soft)] max-w-3xl mx-auto leading-relaxed">
        A comprehensive, chapter-by-chapter guide to mastering professional AI communication. From first principles to advanced applications, learn to get exceptional results from any model.
      </p>
    </div>

    <!-- Featured Guide -->
    <section class="mb-16">
      <div class="max-w-5xl mx-auto">
        <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span class="highlight-pill blue mb-4">Start Here</span>
              <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-4">
                Chapter 1: The Core Principles
              </h2>
              <p class="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                Begin your journey by learning the foundational principles of effective AI prompting. Master clarity, context, persona, and formatting to create professional-grade prompts.
              </p>
              <NuxtLink to="/guides/1-core-principles" class="btn-primary hover-lift">
                Start Learning
              </NuxtLink>
            </div>
            <div class="lg:text-right">
              <div class="inline-block p-8 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl">
                <svg class="w-24 h-24 text-[var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Categories -->
    <section class="space-y-12">
      <!-- Getting Started -->
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-8">Course Chapters</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GuideCard
            title="Chapter 1: Core Principles"
            description="Learn the fundamentals of writing effective AI prompts from scratch."
            href="/guides/1-core-principles"
            category="Beginner"
            readTime="10 min"
            icon="academic-cap"
          />
          <GuideCard
            title="Chapter 2: Structuring Prompts"
            description="Use frameworks like RACE and CARE to create consistent, high-quality AI outputs."
            href="/guides/2-structuring-prompts"
            category="Beginner"
            readTime="12 min"
            icon="squares-plus"
          />
          <GuideCard
            title="Chapter 3: Advanced Techniques"
            description="Unlock reasoning and problem-solving with Chain-of-Thought and Few-Shot Prompting."
            href="/guides/3-advanced-techniques"
            category="Advanced"
            readTime="15 min"
            icon="sparkles"
          />
          <GuideCard
            title="Chapter 4: AI for Content Creation"
            description="Master the workflow from brainstorming and outlining to drafting and refining."
            href="/guides/4-content-creation"
            category="Use Case"
            readTime="14 min"
            icon="pencil-square"
          />
          <GuideCard
            title="Chapter 5: AI for Business & Strategy"
            description="Apply frameworks like SWOT and PESTLE to generate strategic insights."
            href="/guides/5-business-strategy"
            category="Use Case"
            readTime="15 min"
            icon="briefcase"
          />
          <GuideCard
            title="Chapter 6: Platform Nuances"
            description="Learn the key differences between ChatGPT and Claude and how to tailor your prompts."
            href="/guides/6-platform-nuances"
            category="Advanced"
            readTime="10 min"
            icon="chat-bubble-left-right"
          />
          <GuideCard
            title="Chapter 7: AI for Education"
            description="Craft prompts for conceptual understanding, knowledge testing, and skill development."
            href="/guides/7-education-learning"
            category="Use Case"
            readTime="12 min"
            icon="book-open"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'AI Prompt Engineering Course & Guides - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Master AI prompting with our comprehensive, chapter-by-chapter course. Learn prompting techniques, frameworks, and best practices for better results.'
    },
    {
      name: 'keywords',
      content: 'AI prompting guide, prompt engineering course, ChatGPT prompts, Claude AI, AI tutorials, prompt frameworks, prompt engineering'
    }
  ]
})
</script>

