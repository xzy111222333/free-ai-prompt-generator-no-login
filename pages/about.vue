<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h1 class="text-4xl font-bold text-[var(--text-strong)] mb-8">About PromptRule</h1>
          
          <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
            PromptRule is the ultimate AI prompt generator designed to help you get better results from ChatGPT, Claude, Gemini, and other AI models. We believe that everyone should have access to high-quality prompt engineering tools without barriers.
          </p>

          <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">Our Mission</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            We're on a mission to democratize AI prompt engineering. Too many people struggle with getting consistent, high-quality results from AI tools simply because they don't know how to craft effective prompts. PromptRule bridges that gap by transforming your ideas into professionally structured prompts that work.
          </p>

          <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">Why PromptRule is Free</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            We believe that access to powerful AI tools shouldn't be limited by your budget or technical expertise. That's why PromptRule is completely free to use, with no registration required, no usage limits, and no hidden costs. Our goal is to empower as many people as possible to harness the full potential of AI.
          </p>

          <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">How We Help You</h2>
          
          <div class="space-y-4 mb-8">
            <div class="border-l-4 border-[var(--accent-blue)] pl-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Professional Prompt Engineering</h3>
              <p class="text-base text-[var(--text-muted)] leading-relaxed">
                Our advanced AI uses proven frameworks like RACE, CARE, CREATE, and others to structure your prompts for maximum effectiveness.
              </p>
            </div>

            <div class="border-l-4 border-[var(--accent-green)] pl-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Multiple AI Model Support</h3>
              <p class="text-base text-[var(--text-muted)] leading-relaxed">
                Whether you're using ChatGPT, Claude, Gemini, or other AI models, our prompts are designed to work consistently across platforms.
              </p>
            </div>

            <div class="border-l-4 border-[var(--accent-gold)] pl-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-2">Specialized Tools</h3>
              <p class="text-base text-[var(--text-muted)] leading-relaxed">
                From our Midjourney prompt generator to our prompt optimizer and checker, we provide specialized tools for every use case.
              </p>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-[var(--text-strong)] mb-6">Our Commitment</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            We're committed to continuously improving PromptRule based on user feedback and the latest developments in AI and prompt engineering. We regularly update our frameworks, add new features, and ensure our tools remain at the cutting edge of what's possible.
          </p>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Join the PromptRule Community</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              Thousands of content creators, marketers, students, and professionals trust PromptRule to enhance their AI interactions. Join them today and discover the difference that well-crafted prompts can make.
            </p>
            <NuxtLink to="/" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Start Using PromptRule
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'About PromptRule - Free AI Prompt Generator',
  meta: [
    {
      name: 'description',
      content: 'Learn about PromptRule\'s mission to democratize AI prompt engineering. Discover why we\'re free, how we help you get better AI results, and our commitment to the community.'
    }
  ]
})
</script>
