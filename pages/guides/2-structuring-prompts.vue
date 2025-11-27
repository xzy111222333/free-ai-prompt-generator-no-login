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
            Chapter 2
          </span>
          <span class="text-xs text-[var(--text-soft)]">12 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          Structuring Your Prompts for Success
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          Frameworks are reusable templates that encode the four core principles. They reduce decision fatigue and ensure consistency across teams. This chapter covers two frameworks with proven adoption in production environments.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Why Frameworks Matter</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Cognitive load increases prompt failure rates. Teams using frameworks show 40% better output consistency (based on internal testing at scale). Frameworks also enable prompt libraries: instead of recreating prompts, you templatize successful ones with variable slots.
          </p>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            The frameworks below aren't prescriptive. They're starting points. Most organizations modify them based on their use cases. The value is having a structure, not following acronyms religiously.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Framework 1: RACE</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            RACE covers the four principles from Chapter 1 in a memorable acronym. Adoption is high because each component has a clear function. Use this for most professional tasks.
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-[var(--surface-50)] rounded-xl">
              <div class="w-16 h-16 bg-[var(--accent-blue)] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">R</div>
              <h4 class="font-semibold text-[var(--text-strong)] mb-1">Role</h4>
              <p class="text-sm text-[var(--text-muted)]">Who the AI should be.</p>
            </div>
            <div class="text-center p-4 bg-[var(--surface-50)] rounded-xl">
              <div class="w-16 h-16 bg-[var(--accent-green)] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">A</div>
              <h4 class="font-semibold text-[var(--text-strong)] mb-1">Action</h4>
              <p class="text-sm text-[var(--text-muted)]">What the AI should do.</p>
            </div>
            <div class="text-center p-4 bg-[var(--surface-50)] rounded-xl">
              <div class="w-16 h-16 bg-[var(--accent-gold)] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">C</div>
              <h4 class="font-semibold text-[var(--text-strong)] mb-1">Context</h4>
              <p class="text-sm text-[var(--text-muted)]">The background information.</p>
            </div>
            <div class="text-center p-4 bg-[var(--surface-50)] rounded-xl">
              <div class="w-16 h-16 bg-[var(--accent-pink)] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">E</div>
              <h4 class="font-semibold text-[var(--text-strong)] mb-1">Expectation</h4>
              <p class="text-sm text-[var(--text-muted)]">The desired output format.</p>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-[var(--text-strong)] my-6">RACE in Practice</h3>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Scenario: Engineering scheduled database migration causing 2-hour downtime. Need to notify 5,000 enterprise users. Previous outage notifications resulted in 300+ support tickets due to unclear communication.
          </p>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">RACE Template Applied</h4>
            <div class="text-base text-[var(--text-muted)] space-y-4">
              <p><strong class="text-[var(--accent-blue)]">Role:</strong> Infrastructure communications lead at enterprise SaaS. Writing prioritizes clarity and reduces support load.</p>
              <p><strong class="text-[var(--accent-green)]">Action:</strong> Write maintenance notification email.</p>
              <p><strong class="text-[var(--accent-gold)]">Context:</strong> Planned database migration, Saturday 2-4 AM EST (lowest traffic window). Platform fully unavailable. Target: enterprise customers (IT managers, not end users). Goal: <80 support tickets (historical avg: 300).</p>
              <p><strong class="text-[var(--accent-pink)]">Expectation:</strong> Subject line (under 60 chars, includes date), body (150-200 words): what/when/why/workarounds, FAQ link, escalation contact. No marketing content. Professional not apologetic.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Framework 2: CARE (Few-Shot Variant)</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            CARE extends RACE with examples. Use this when output style is hard to specify verbally: brand voice, technical writing style, or specific formatting. Examples provide training data for the immediate task.
          </p>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            <strong>CARE:</strong> Context, Action, Result, Example. The "Result" component explicitly states success criteria.
          </p>

          <h3 class="text-2xl font-bold text-[var(--text-strong)] my-6">CARE in Practice</h3>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Scenario: Developer documentation for API authentication. Existing docs are technical but inconsistent in voice. Need to standardize 20+ new endpoint descriptions.
          </p>
          
          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">CARE Template Applied</h4>
            <div class="text-base text-[var(--text-muted)] space-y-4">
              <p><strong class="text-[var(--accent-teal)]">Context:</strong> API documentation for /auth/token endpoint. Audience: backend developers integrating our OAuth2 service. Must match existing doc style.</p>
              <p><strong class="text-[var(--accent-blue)]">Action:</strong> Write endpoint description.</p>
              <p><strong class="text-[var(--accent-green)]">Result:</strong> 2-3 sentences, active voice, technical precision, includes common use case. No marketing language.</p>
              <p><strong class="text-[var(--accent-pink)]">Example:</strong> From existing docs - "Revokes an active access token immediately. Returns 204 on success. Use this before token expiry when users log out to prevent unauthorized reuse."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            The example demonstrates exact style: sentence length, technical detail level, when to mention edge cases. This is more precise than describing style with adjectives. For complex style requirements, provide 2-3 examples covering different scenarios.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Framework Selection and Modification</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Frameworks are tools, not rules. Teams often create custom variants: RACE + Constraints, CARE + Anti-Examples. The principle is consistent structure, not acronym adherence. Document your chosen framework and enforce it through code review or automated validation.
          </p>
          
          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Implementation Guidelines</h3>
            <ul class="space-y-2 text-base text-[var(--text-muted)]">
              <li>• <strong>Default to RACE:</strong> Covers 90% of use cases. Only add complexity when needed.</li>
              <li>• <strong>Use CARE for style-critical tasks:</strong> Brand voice, technical writing, legal documents.</li>
              <li>• <strong>Version your templates:</strong> Track what works. A/B test prompts for high-value tasks.</li>
              <li>• <strong>Build a prompt library:</strong> Store successful prompts with metadata: use case, model, date, success metrics.</li>
              <li>• <strong>Omit irrelevant components:</strong> If task doesn't need a role definition, skip it. Unnecessary tokens cost money and add noise.</li>
            </ul>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Real-World Application</h3>
            <p class="text-base text-yellow-700 mb-4">
              Case: Customer support team needs 50 standardized responses for common tickets. Manual writing takes 8 hours, introduces inconsistencies.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              Solution: Create CARE template with 3 example responses. Generate 50 variations in 20 minutes. Editor reviews for accuracy. Result: 95% approved without modification, 2.5 hours total time including review.
            </p>
            <p class="text-xs text-yellow-700 mt-2">
              Key: High-quality examples and strict output format reduced editing overhead.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Next: Advanced Techniques</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              Frameworks handle standard tasks. The next chapter covers advanced techniques for complex reasoning, multi-step analysis, and tasks requiring logical consistency.
            </p>
            <NuxtLink to="/guides/3-advanced-techniques" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 3: Advanced Techniques
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
  title: 'Chapter 2: Structuring Prompts with Frameworks - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn to use prompt frameworks like RACE and CARE to create consistent, high-quality AI outputs. Structure your prompts for professional results.'
    },
    {
      name: 'keywords',
      content: 'prompt frameworks, prompt engineering, RACE framework, CARE framework, prompt structure, AI prompt templates, consistent AI results'
    }
  ]
})
</script>
