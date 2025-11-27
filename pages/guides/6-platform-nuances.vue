<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <!-- Article Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <NuxtLink to="/guides" class="text-[var(--accent-blue)] hover:underline text-sm font-medium">
            ← Back to Guides
          </NuxtLink>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent-teal)]/10 text-[var(--accent-teal)]">
            Chapter 6
          </span>
          <span class="text-xs text-[var(--text-soft)]">10 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          Platform-Specific Nuances: ChatGPT vs. Claude
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          Different models have measurable performance differences across task types. This chapter provides empirical guidance on model selection based on latency, accuracy, and cost trade-offs.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Model Architecture and Performance</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            GPT-4 and Claude 3.5 Sonnet represent different architectural approaches. Their performance varies by task type: code generation, long-form analysis, creative writing, structured extraction. Selection should be data-driven, not based on subjective preferences.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">GPT-4 Performance Profile</h3>
              <ul class="text-sm text-[var(--text-muted)] space-y-2">
                <li><strong class="text-[var(--text-strong)]">Code generation:</strong> HumanEval benchmark: 67% (vs Claude: 73%). Strong across languages but Claude edges out on complex logic.</li>
                <li><strong class="text-[var(--text-strong)]">Instruction following:</strong> Better at ambiguous instructions, infers intent more aggressively.</li>
                <li><strong class="text-[var(--text-strong)]">Context window:</strong> 128k tokens. Performs well across full context but attention drops after 64k.</li>
                <li><strong class="text-[var(--text-strong)]">Latency:</strong> Average 15-20 tokens/sec. Slower than Claude for long outputs.</li>
                <li><strong class="text-[var(--text-strong)]">Cost:</strong> Input $0.03/1k, Output $0.06/1k (GPT-4 Turbo)</li>
              </ul>
            </div>

            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Claude 3.5 Sonnet Profile</h3>
              <ul class="text-sm text-[var(--text-muted)] space-y-2">
                <li><strong class="text-[var(--text-strong)]">Code generation:</strong> HumanEval: 73%. Particularly strong at refactoring and explaining code.</li>
                <li><strong class="text-[var(--text-strong)]">Long document analysis:</strong> Superior at 100k+ token documents. Maintains coherence better at extreme lengths.</li>
                <li><strong class="text-[var(--text-strong)]">Context window:</strong> 200k tokens. More consistent attention across full window.</li>
                <li><strong class="text-[var(--text-strong)]">Latency:</strong> 30-35 tokens/sec. Faster output generation.</li>
                <li><strong class="text-[var(--text-strong)]">Cost:</strong> Input $0.003/1k, Output $0.015/1k (significantly cheaper)</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Task-Based Model Selection</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Model selection should optimize for task requirements: speed, cost, accuracy. Below are empirically derived recommendations based on production use.
          </p>
          
          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-4">Prompt Adaptation Is Overrated</h3>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Myth: You need different prompting styles for different models. Reality: Well-structured prompts (RACE/CARE framework) work across models. Differences are marginal compared to other factors.
            </p>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Focus on: Task-model fit (code vs analysis), cost-accuracy tradeoffs, latency requirements. Don't waste time "tuning" prompts for specific models unless you're at production scale with measurable metrics.
            </p>
            <p class="text-base text-[var(--text-muted)] leading-relaxed">
              Exception: When context length matters. Claude handles 150k+ tokens better. For those tasks, architectural differences are significant.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Decision Matrix by Use Case</h2>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-4">Use GPT-4 For:</h3>
              <ul class="text-sm text-[var(--text-muted)] space-y-2">
                <li><strong>Creative brainstorming:</strong> More diverse ideation, less conservative outputs.</li>
                <li><strong>Ambiguous instructions:</strong> Better at inferring intent from vague prompts.</li>
                <li><strong>General knowledge tasks:</strong> Broad training data, good for varied topics.</li>
                <li><strong>When cost is secondary:</strong> Higher quality justifies higher cost for critical tasks.</li>
              </ul>
            </div>

            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-4">Use Claude 3.5 Sonnet For:</h3>
              <ul class="text-sm text-[var(--text-muted)] space-y-2">
                <li><strong>Code-heavy tasks:</strong> 6% better on HumanEval, superior code explanation.</li>
                <li><strong>Long documents:</strong> 200k context, better attention at extreme lengths.</li>
                <li><strong>High-volume production:</strong> 5x cheaper, 2x faster - critical for scale.</li>
                <li><strong>Structured extraction:</strong> More reliable JSON output, better format adherence.</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Cost-Performance Trade-offs</h3>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Example: Generating 1000 blog article outlines (500 tokens each)</strong>
            </p>
            <ul class="list-disc list-inside text-sm text-yellow-700 space-y-2">
              <li>GPT-4 Turbo: 1000 * 500 * $0.00003 = $15 (input) + output cost. Higher quality, slower.</li>
              <li>Claude Sonnet: 1000 * 500 * $0.000003 = $1.50 (input) + output cost. 10x cheaper, comparable quality.</li>
              <li>For production systems processing 100k+ requests/day, Claude saves $1000-2000/day.</li>
            </ul>
            <p class="text-xs text-yellow-700 mt-3">
              Recommendation: Use Claude for high-volume, structured tasks. Reserve GPT-4 for complex reasoning or creative tasks where quality justifies cost.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Final Chapter: Learning Applications</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              The final chapter covers AI for education: building personalized tutoring systems, generating practice problems, and adaptive learning workflows.
            </p>
            <NuxtLink to="/guides/7-education-learning" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 7: Education & Learning
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
  title: 'Chapter 6: Platform Nuances - ChatGPT vs. Claude - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn the key differences between ChatGPT and Claude and how to tailor your prompts for each AI model to get the best results for creative and analytical tasks.'
    },
    {
      name: 'keywords',
      content: 'ChatGPT vs Claude, prompt engineering, platform specific prompts, OpenAI, Anthropic, AI comparison, LLM comparison'
    }
  ]
})
</script>
