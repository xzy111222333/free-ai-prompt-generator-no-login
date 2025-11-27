<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <!-- Article Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <NuxtLink to="/guides" class="text-[var(--accent-blue)] hover:underline text-sm font-medium">
            ← Back to Guides
          </NuxtLink>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent-pink)]/10 text-[var(--accent-pink)]">
            Chapter 3
          </span>
          <span class="text-xs text-[var(--text-soft)]">15 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          Advanced Prompting Techniques
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          Advanced techniques manipulate model behavior at the architectural level. This chapter covers Chain-of-Thought reasoning and Few-Shot learning, both supported by academic research and deployed in production systems.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Chain-of-Thought Prompting</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            CoT leverages the transformer's sequential processing. By forcing the model to generate intermediate reasoning steps, you increase the effective "thinking time" (number of forward passes through the attention mechanism). Research from Google shows CoT improves accuracy by 30-50% on arithmetic and logical reasoning tasks.
          </p>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Why Standard Prompts Fail on Multi-Step Tasks</h3>
            <p class="text-base text-[var(--text-muted)]">
              Problem: Calculate ROI for a marketing campaign with 3 channels, different attribution models, and time-delayed conversions. Standard prompt: model generates final number without showing work. If wrong, debugging is impossible. CoT forces visible reasoning.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-red-800 mb-2">Standard Prompt</h4>
              <p class="text-sm text-red-700">"Calculate the marketing ROI. Channel A spent $10k, generated 50 conversions. Channel B spent $15k, generated 80 conversions. Avg customer value: $500. Attribution: last-touch."</p>
              <p class="text-xs text-red-600 mt-2">Output: "ROI is 150%" - No intermediate steps. Cannot verify if attribution model was applied correctly.</p>
            </div>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-green-800 mb-2">CoT Prompt</h4>
              <p class="text-sm text-green-700">Same input + "<strong class='text-green-900'>Calculate step-by-step: 1) Revenue per channel 2) Cost per channel 3) Profit per channel 4) ROI formula 5) Final answer.</strong>"</p>
              <p class="text-xs text-green-600 mt-2">Output includes: "Channel A: 50 conv * $500 = $25k revenue. Cost: $10k. Profit: $15k..." Full audit trail.</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-[var(--text-strong)] my-6">CoT Implementation Patterns</h3>
          <ul class="space-y-4 text-base text-[var(--text-muted)] leading-relaxed mb-8">
              <li><strong>Zero-shot CoT:</strong> Add "Think step-by-step" or "Show your work." Effective for straightforward multi-step problems. No examples needed.</li>
              <li><strong>Structured CoT:</strong> Provide explicit steps: "1) Extract variables 2) Apply formula 3) Verify units 4) State answer." Use for domain-specific reasoning (financial analysis, scientific calculations).</li>
              <li><strong>Self-consistency:</strong> Generate 3-5 CoT paths, select most common answer. Reduces errors from single reasoning path. Used in production for high-stakes decisions.</li>
              <li><strong>Verification step:</strong> End with "Review your reasoning for errors." Model catches 20-30% of its own mistakes.</li>
          </ul>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Few-Shot Learning</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Few-shot learning provides task-specific training data in the prompt context. Models adjust their distribution based on examples without parameter updates. This is in-context learning: the model's behavior changes for that session only. Research shows 3-5 high-quality examples often match fine-tuned model performance for specific tasks.
          </p>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Use Case: Classification with Edge Cases</h3>
            <p class="text-base text-[var(--text-muted)]">
              Task: Categorize support tickets into Bug/Feature/Billing. Challenge: Ambiguous cases ("Feature doesn't work as expected" - is this a bug or feature request?). Instructions alone can't cover all edge cases. Examples demonstrate boundary decisions.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Few-Shot Implementation</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p class="mb-4">"Categorize support tickets: Bug, Feature, Billing. Examples:</p>
              
              <p class="mt-3"><strong>Input:</strong> "Export crashes with 500 error"</p>
              <p><strong>Category:</strong> Bug</p>
              <p><strong>Reasoning:</strong> System error, existing feature broken</p>
              
              <p class="mt-3"><strong>Input:</strong> "Salesforce integration would be useful"</p>
              <p><strong>Category:</strong> Feature</p>
              <p><strong>Reasoning:</strong> New capability request</p>

              <p class="mt-3"><strong>Input:</strong> "Dashboard doesn't show data the way I expected"</p>
              <p><strong>Category:</strong> Feature</p>
              <p><strong>Reasoning:</strong> Not a bug, user wants different behavior</p>

              <p class="mt-4">Note the third example: demonstrates the boundary between bugs and features.</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Including reasoning increases accuracy by 15-20% (internal testing). The model learns not just the what, but the why. This is few-shot CoT: combining both techniques.
          </p>

          <h3 class="text-2xl font-bold text-[var(--text-strong)] my-6">Few-Shot Engineering</h3>
          <ul class="space-y-4 text-base text-[var(--text-muted)] leading-relaxed mb-8">
              <li><strong>Example selection:</strong> Choose edge cases over obvious ones. Model already handles "Invoice question -> Billing." Show ambiguous cases that define boundaries.</li>
              <li><strong>Example ordering:</strong> Most recent example has strongest influence. Place most similar example last.</li>
              <li><strong>Format consistency:</strong> Exact delimiter consistency matters. "Input:" vs "Input -" changes pattern matching. Use same structure across all examples.</li>
              <li><strong>Optimal count:</strong> 3-5 examples for most tasks. More examples improve accuracy with diminishing returns. Context window limits apply (examples use tokens).</li>
              <li><strong>Dynamic few-shot:</strong> For production, retrieve similar examples from database based on input. This is retrieval-augmented prompting.</li>
          </ul>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Technique Composition</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            CoT and few-shot are composable. Few-shot CoT (providing examples that include reasoning) outperforms either technique alone. Research paper "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" demonstrates this empirically.
          </p>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Other advanced combinations: Self-consistency + Few-shot (generate multiple few-shot reasoning paths), Structured CoT + Examples (provide reasoning template + filled examples). Choose based on task complexity and accuracy requirements.
          </p>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Production Considerations</h3>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Cost:</strong> CoT increases token usage 2-3x (both prompt and completion). For high-volume applications, evaluate cost vs accuracy tradeoff.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Latency:</strong> Longer completions mean higher latency. For real-time applications (<200ms), consider smaller models with few-shot instead of large models with CoT.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Reliability:</strong> CoT makes errors visible and debuggable. For high-stakes decisions (financial, legal, medical), the audit trail justifies cost.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Next: Domain Applications</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              The next chapters apply these techniques to specific domains: content creation, business analysis, and education. Each includes production-tested workflows and troubleshooting guides.
            </p>
            <NuxtLink to="/guides/4-content-creation" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 4: Content Creation
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
  title: 'Chapter 3: Advanced Prompting Techniques - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Master advanced prompt engineering techniques like Chain-of-Thought (CoT) and Few-Shot Prompting to unlock AI-powered reasoning and problem-solving.'
    },
    {
      name: 'keywords',
      content: 'advanced prompting, prompt engineering, chain of thought, few-shot prompting, CoT prompting, AI reasoning, complex problem solving'
    }
  ]
})
</script>
