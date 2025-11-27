<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <!-- Article Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <NuxtLink to="/guides" class="text-[var(--accent-blue)] hover:underline text-sm font-medium">
            ← Back to Guides
          </NuxtLink>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)]">
            Chapter 1
          </span>
          <span class="text-xs text-[var(--text-soft)]">10 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          The Core Principles of Effective Prompting
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          Prompt engineering is structured communication with language models. This chapter covers four principles that consistently improve output quality by 3-5x.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Why Most Prompts Fail</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Language models are probability engines. Given "write an article," the model generates the statistically most likely continuation based on its training data. This often produces generic output because the prompt lacks constraints: no target audience, no specific requirements, no format specifications.
          </p>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Research from Anthropic shows that prompts with explicit task definitions achieve 67% higher success rates than vague ones. The difference is information density. Below is a real example showing how adding structure changes results.
          </p>
          
          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Case Study: B2B SaaS Product Launch</h3>
            <p class="text-base text-[var(--text-muted)]">
              A project management tool needs an announcement email for existing users about a new "Focus Mode" feature. The goal is 30% feature adoption within two weeks. Standard marketing copy hasn't worked for previous launches.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Principle 1: Task Specification</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Models need explicit action verbs. "Focus Mode" could mean: explain it, critique it, compare alternatives, or write about it. Each produces different outputs. Task ambiguity is the primary cause of prompt failure.
          </p>
          
          <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-red-800 mb-2">Low-Information Prompt</h4>
              <p class="text-sm text-red-700">"Focus Mode for our app"</p>
              <p class="text-xs text-red-600 mt-2">No action verb. Model must infer intent from context, leading to generic descriptions.</p>
            </div>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="text-sm font-semibold text-green-800 mb-2">High-Information Prompt</h4>
              <p class="text-sm text-green-700">"Write a product launch email announcing Focus Mode to existing users"</p>
              <p class="text-xs text-green-600 mt-2">Clear action (write), format (email), audience (existing users), purpose (announcement).</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Principle 2: Contextual Constraints</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Context reduces the solution space. Without audience specification, models default to generic business writing. Adding "for technical users" vs "for executives" changes vocabulary, detail level, and structure. This isn't stylistic preference—it's how attention mechanisms weight different training examples.
          </p>

          <div class="border-l-4 border-[var(--accent-blue)] pl-6 mb-8">
            <h3 class="text-xl font-semibold text-[var(--text-strong)] mb-3">Adding Constraints</h3>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Building on the previous example:
            </p>
            <div class="bg-white rounded-lg p-4 border text-sm text-[var(--text-muted)] font-mono leading-relaxed">
                <p>"Write a product launch email announcing Focus Mode to existing users.</p>
                <p class="mt-2"><span class="bg-blue-100 text-blue-800 p-1 rounded">Target audience: Mid-market B2B teams (20-200 employees) struggling with notification overload. Goal: 30% feature adoption in 14 days.</span>"</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Now the model knows to emphasize productivity gains, use business metrics (time saved, focus hours), and include urgency without being aggressive. The 30% adoption target implies this needs a strong value proposition, not just feature documentation.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Principle 3: Role Definition</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Models are trained on diverse text sources: academic papers, marketing copy, forum posts, documentation. Role assignment activates specific distribution weights. "As a technical writer" increases precision and reduces marketing language. "As a growth marketer" does the opposite.
          </p>
          
          <div class="border-l-4 border-[var(--accent-green)] pl-6 mb-8">
            <h3 class="text-xl font-semibold text-[var(--text-strong)] mb-3">Applying Role Context</h3>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Continuing the email example:
            </p>
            <div class="bg-white rounded-lg p-4 border text-sm text-[var(--text-muted)] font-mono leading-relaxed">
                <p>"<span class="bg-green-100 text-green-800 p-1 rounded">You are a senior product marketer at a productivity SaaS company. Your writing is direct, metric-focused, and avoids hype.</span></p>
                <p class="mt-2">Write a product launch email announcing Focus Mode to existing users.</p>
                <p class="mt-2">Target audience: Mid-market B2B teams (20-200 employees) struggling with notification overload. Goal: 30% feature adoption in 14 days."</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Principle 4: Output Specification</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Format constraints prevent wasted generation. Models will produce lengthy explanations unless told otherwise. Specifying "3 bullet points, max 15 words each" saves tokens and forces prioritization. Structure also affects content: asking for a table makes the model organize information differently than prose.
          </p>

          <div class="border-l-4 border-[var(--accent-gold)] pl-6 mb-8">
            <h3 class="text-xl font-semibold text-[var(--text-strong)] mb-3">Completing the Prompt</h3>
            <p class="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Final version with output constraints:
            </p>
            <div class="bg-white rounded-lg p-4 border text-sm text-[var(--text-muted)] font-mono leading-relaxed">
                <p>"You are a senior product marketer at a productivity SaaS company. Your writing is direct, metric-focused, and avoids hype.</p>
                <p class="mt-2">Write a product launch email announcing Focus Mode to existing users.</p>
                <p class="mt-2">Target audience: Mid-market B2B teams (20-200 employees) struggling with notification overload. Goal: 30% feature adoption in 14 days.</p>
                <p class="mt-2"><span class="bg-yellow-100 text-yellow-800 p-1 rounded">Format: Subject line (under 50 chars), body (150-200 words), single CTA button. Include one specific metric about focus time improvement. No exclamation points.</span>"</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Before and After Comparison</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            The initial prompt "Focus Mode for our app" contains 4 tokens. The final version contains 87 tokens but delivers exponentially better results. Token cost is negligible (GPT-4: ~$0.0026 for this prompt). The real cost is iteration time when prompts fail.
          </p>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Implementation Checklist</h3>
            <ul class="space-y-2 text-base text-[var(--text-muted)]">
              <li>• <strong>Task:</strong> Action verb + specific deliverable</li>
              <li>• <strong>Context:</strong> Target audience + business goal with metrics</li>
              <li>• <strong>Role:</strong> Expertise level + writing style constraints</li>
              <li>• <strong>Format:</strong> Structure + length + explicit exclusions</li>
            </ul>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Common Failure Patterns</h2>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Troubleshooting Poor Results</h3>
            <p class="text-base text-yellow-700 mb-4">
              If output quality is low, check these:
            </p>
            <ul class="list-disc list-inside text-sm text-yellow-700 space-y-2">
              <li><strong>Conflicting constraints:</strong> "Be brief but comprehensive" creates ambiguity. Specify exact word counts.</li>
              <li><strong>Implicit assumptions:</strong> "Write professionally" has no standard definition. Provide examples or anti-examples.</li>
              <li><strong>Missing negatives:</strong> Models over-generate. State what NOT to include: "No buzzwords, no rhetorical questions."</li>
              <li><strong>Vague metrics:</strong> "Engaging" is unmeasurable. Use "Click-through rate above 2.5%" or reference successful examples.</li>
            </ul>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Next: Prompt Frameworks</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              These four principles form the foundation. The next chapter introduces reusable frameworks that encode this structure, reducing cognitive load for repeated tasks.
            </p>
            <NuxtLink to="/guides/2-structuring-prompts" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 2: Structuring Prompts
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
  title: 'Chapter 1: Core Principles of Prompting - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn the foundational principles of effective AI prompting. Master clarity, context, persona, and formatting to create professional-grade prompts.'
    },
    {
      name: 'keywords',
      content: 'prompt engineering, prompt basics, AI prompting, beginner prompt guide, LLM prompting, prompt principles'
    }
  ]
})
</script>
