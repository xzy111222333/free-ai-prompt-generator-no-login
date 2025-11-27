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
            Chapter 4
          </span>
          <span class="text-xs text-[var(--text-soft)]">14 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          AI as a Creative Partner: Content Creation
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          Content creation with AI requires systematic workflows, not single-shot prompts. This chapter provides production-tested processes for generating high-quality content at scale, including quality control and iteration strategies.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Content Generation Pipeline</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Single-prompt content generation produces generic output. Professional workflows break creation into stages, each with specific prompts and quality gates. This reduces revision cycles by 60-70% compared to monolithic generation.
          </p>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Example: Technical Blog Post Production</h3>
            <p class="text-base text-[var(--text-muted)]">
              Goal: Generate 10 technical blog posts monthly about database optimization for SaaS CTOs. Requirements: Technical accuracy, SEO optimization, 1500-2000 words. Constraint: Subject matter experts limited to 2 hours/week for review.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Stage 1: Topic Research and Angle Development</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Start with competitor analysis and keyword research. Feed AI 3-5 competitor articles, target keywords, and business constraints. Output: unique angle differentiated from existing content.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Research Prompt (Example)</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are a technical content strategist specializing in database technology.</p>
              <p class="mt-2">Context: Target keyword 'PostgreSQL query optimization' (1200 searches/mo). Competitor articles focus on: EXPLAIN ANALYZE, indexing basics, query planning.</p>
              <p class="mt-2">Task: Propose 3 article angles that cover this keyword but differentiate through: 1) Specific use case 2) Advanced technique 3) Tool/workflow integration.</p>
              <p class="mt-2">Format: For each angle: Title, unique approach, expected reader outcome."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Quality gate: Human reviews angles for technical feasibility and business alignment. Reject generic angles. Iteration time: 10-15 minutes.
          </p>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Stage 2: Technical Outline with SME Input</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Critical stage: outline determines content quality. For technical content, SME reviews outline before writing. Fixing structural issues costs 10x less at outline stage than after drafting.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Outline Generation Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are a database engineer with 10+ years experience.</p>
              <p class="mt-2">Task: Create article outline for 'Query Optimization in High-Traffic PostgreSQL Applications'</p>
              <p class="mt-2">Requirements:</p>
              <p>- 1500-2000 words (estimate 200-250 words per section)</p>
              <p>- Structure: Problem statement, 4-5 optimization techniques, benchmarks, implementation checklist</p>
              <p>- Each technique section: explanation, code example, performance impact, when to use/avoid</p>
              <p>- Target: CTOs/senior engineers evaluating optimization strategies</p>
              <p class="mt-2">Format: Hierarchical outline with H2/H3 headings, word count estimates, notes on required code examples."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Quality gate: SME reviews outline for technical accuracy, logical flow, completeness. Common issues: missing edge cases, incorrect sequencing, insufficient depth. Iteration time: 30 minutes.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Stage 3: Section-by-Section Drafting</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Draft sections independently with full context (outline, target audience, approved angle). Section-level generation allows parallel execution and easier revision. For 1500-word article: 5-7 sections, 200-250 words each.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Section Drafting Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"Role: Senior database engineer writing for technical blog.</p>
              <p class="mt-2">Context: Article section on 'Index-Only Scans' for PostgreSQL optimization. Target: Senior engineers familiar with SQL but not PostgreSQL internals.</p>
              <p class="mt-2">Section requirements (from approved outline):</p>
              <p>- Explain index-only scan mechanism (100 words)</p>
              <p>- Show code example: table setup, query, EXPLAIN output (80 words + code)</p>
              <p>- Discuss when effective vs when to avoid (70 words)</p>
              <p>- Performance benchmark: query time before/after (50 words)</p>
              <p class="mt-2">Style: Technical precision, active voice, no marketing language. Code must be executable. Include specific version (PostgreSQL 14+)."</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Stage 4: Technical Review and Revision</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            SME reviews draft for technical accuracy. Common issues: oversimplified explanations, missing caveats, outdated syntax. Revision prompts target specific problems rather than regenerating entire sections.
          </p>
          
          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Targeted Revision Prompts</h3>
            <ul class="space-y-3 text-base text-[var(--text-muted)]">
                <li>
                    <strong>Technical accuracy:</strong> "Add caveat that index-only scans require VACUUM to maintain visibility map. Explain impact on write-heavy workloads."
                </li>
                <li>
                    <strong>Code correction:</strong> "Update code example to use prepared statements. Add error handling for connection failures."
                </li>
                <li>
                    <strong>Depth adjustment:</strong> "Expand explanation of visibility map. Current version assumes too much prior knowledge."
                </li>
                <li>
                    <strong>Benchmarking:</strong> "Add benchmark conditions: dataset size, hardware specs, PostgreSQL config. Current numbers lack reproducibility."
                </li>
            </ul>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Quality Control Metrics</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Measure AI content performance against baseline. Key metrics: SME revision time, reader engagement (time on page, scroll depth), conversion rates for bottom-funnel content. Track by content type and prompt template.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-4">Production Metrics (Real Data)</h3>
              <p class="text-sm text-[var(--text-muted)]">
                <strong>Baseline (human-written):</strong><br>
                - Production time: 6-8 hours/article<br>
                - Avg. time on page: 4:20<br>
                - Revision cycles: 1-2<br><br>
                <strong>AI-assisted (4-stage workflow):</strong><br>
                - Production time: 2.5-3 hours/article<br>
                - Avg. time on page: 4:10<br>
                - Revision cycles: 2-3 (but faster)<br>
                - SME time: 45 min vs 6+ hours
              </p>
            </div>

            <div class="bg-[var(--surface-50)] rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-4">Failure Modes</h3>
              <p class="text-sm text-[var(--text-muted)]">
                <strong>Hallucinated technical details:</strong> Code examples with syntax errors, non-existent API methods. Mitigation: SME review + automated code validation.<br><br>
                <strong>Inconsistent terminology:</strong> Using different terms for same concept across sections. Mitigation: Glossary in system prompt.<br><br>
                <strong>Generic conclusions:</strong> AI defaults to platitudes. Mitigation: Require specific, actionable takeaways in outline.
              </p>
            </div>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Cost Analysis</h3>
            <p class="text-base text-yellow-700 mb-4">
              <strong>GPT-4 cost per article (1500 words):</strong>
            </p>
            <ul class="list-disc list-inside text-sm text-yellow-700 space-y-1">
              <li>Research + outline: ~1500 tokens input, ~800 output = $0.06</li>
              <li>Section drafting (5 sections): ~2000 input, ~2500 output = $0.13</li>
              <li>Revisions (3 iterations): ~3000 input, ~1500 output = $0.14</li>
              <li><strong>Total AI cost: ~$0.33/article</strong></li>
            </ul>
            <p class="text-xs text-yellow-700 mt-3">
              Human cost reduction: $200 (8 hrs @ $25/hr) to $75 (3 hrs @ $25/hr). AI cost negligible. ROI driven by time savings.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Next: Business Analysis</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              Content creation is generative. The next chapter covers analytical applications: market analysis, competitive intelligence, and strategic planning with AI.
            </p>
            <NuxtLink to="/guides/5-business-strategy" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 5: Business Strategy
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
  title: 'Chapter 4: AI for Content Creation - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn to use AI as a creative partner for content creation. Master the workflow from brainstorming and outlining to drafting and refining blog posts, social media, and more.'
    },
    {
      name: 'keywords',
      content: 'AI content creation, content creation prompts, AI blog writing, AI for social media, content marketing, AI copywriting, content workflow'
    }
  ]
})
</script>
