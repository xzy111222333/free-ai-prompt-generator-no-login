<template>
  <div class="container-responsive py-8 space-y-8">
    <div class="max-w-4xl mx-auto">
      <!-- Article Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <NuxtLink to="/guides" class="text-[var(--accent-blue)] hover:underline text-sm font-medium">
            ← Back to Guides
          </NuxtLink>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)]">
            Chapter 7
          </span>
          <span class="text-xs text-[var(--text-soft)]">12 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          AI as a Tutor: Prompts for Education & Learning
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          AI enables scalable personalized education. This chapter covers systematic approaches to tutoring, practice problem generation, and knowledge assessment using prompt engineering.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">AI Tutoring: Beyond Q&A</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Effective AI tutoring isn't answering questions. It's structured pedagogy: diagnosing knowledge gaps, providing targeted explanations, generating practice problems, and assessing understanding. This requires careful prompt design and iterative interaction.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Explanation Generation with Prerequisites</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Good explanations match learner's current knowledge. AI needs explicit prerequisite information to calibrate difficulty. "Explain X" produces generic output. "Explain X assuming knowledge of Y but not Z" produces targeted explanations.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Calibrated Explanation Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are teaching operating systems concepts.</p>
              <p class="mt-2">Task: Explain virtual memory.</p>
              <p class="mt-2">Learner prerequisites: Understands basic memory (RAM vs disk), familiar with hexadecimal addressing. Does NOT know: paging, page tables, TLBs.</p>
              <p class="mt-2">Requirements: 200-300 words. Start with why virtual memory exists (problem it solves). Then explain mechanism at high level. No implementation details. Include one diagram description.</p>
              <p class="mt-2">End with check for understanding: pose one question testing whether explanation was clear."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            The prerequisite specification is critical. Without it, AI might explain too simplistically (boring) or use unexplained jargon (confusing). The check-for-understanding question enables iterative clarification.
          </p>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Practice Problem Generation</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Practice problems are more valuable than explanations for skill development. AI can generate problems at specific difficulty levels, targeting specific concepts. Key: provide worked examples to define quality and difficulty.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Problem Generation Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"Generate 5 practice problems for linked list manipulation in C.</p>
              <p class="mt-2">Target difficulty: intermediate (comfortable with pointers, not expert at edge cases)</p>
              <p class="mt-2">Focus areas: 60% insertion/deletion, 40% traversal/search</p>
              <p class="mt-2">Example problem (this difficulty): 'Write a function to delete the Nth node from the end of a singly linked list in one pass. Handle edge cases where N equals list length.'</p>
              <p class="mt-2">For each problem: function signature, problem description, expected time/space complexity, 2-3 test cases including edge case.</p>
              <p class="mt-2">Do NOT provide solutions. Include hints for common mistakes."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Example problem calibrates difficulty. Without it, AI produces uneven problem sets. Specifying NO solutions prevents accidental learning short-circuit. Hints guide without solving.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Knowledge Assessment and Gap Analysis</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Effective assessment reveals what learner doesn't know, not just what they do. Design assessments to identify specific gaps. Then use AI to generate targeted remediation content.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Diagnostic Assessment Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"Create diagnostic assessment for database normalization (1NF through BCNF).</p>
              <p class="mt-2">Format: Present 3 table schemas with functional dependencies. For each, ask: 1) What normal form is it in? 2) If not BCNF, what's the violation? 3) How to normalize?</p>
              <p class="mt-2">Difficulty gradient: Schema 1 (obvious 2NF violation), Schema 2 (subtle 3NF violation), Schema 3 (BCNF vs 3NF distinction).</p>
              <p class="mt-2">After I respond, analyze my answers to identify gaps: Do I understand functional dependencies? Can I identify minimal cover? Do I know decomposition algorithms?</p>
              <p class="mt-2">Based on gap analysis, recommend which specific topics to review."</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Spaced Repetition and Long-term Retention</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            AI can generate spaced repetition schedules and review problems. Integrate with learning systems: after initial learning, periodically generate review problems targeting previously covered material.
          </p>
          
          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Retention-Focused Review</h3>
            <p class="text-sm text-[var(--text-muted)] mb-4">Example prompt for systematic review:</p>
            <p class="text-sm text-[var(--text-muted)] font-mono mb-4">"Topics studied 2 weeks ago: [list]. Generate 5 mixed review problems covering these topics. Difficulty: slightly harder than original problems (tests retention + synthesis). Include 1-2 problems requiring combining multiple concepts."</p>
            <ul class="space-y-2 text-sm text-[var(--text-muted)]">
                <li>
                    <strong>Key principle:</strong> Retrieval practice is more effective than re-reading. Generate problems, don't re-generate explanations.
                </li>
                <li>
                    <strong>Spacing:</strong> Review at increasing intervals: 1 day, 3 days, 1 week, 2 weeks, 1 month. AI generates appropriately difficult problems for each interval.
                </li>
                <li>
                    <strong>Interleaving:</strong> Mix topics in review sessions. AI can randomize problem order and combine concepts.
                </li>
            </ul>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Limitations and Risks</h3>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Hallucination in educational content:</strong> AI may generate plausible but incorrect explanations, especially in specialized domains. Always verify technical content.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Over-reliance:</strong> AI tutoring supplements human instruction, doesn't replace it. For complex topics, human mentorship remains essential.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Assessment validity:</strong> AI-generated problems may not align with course learning objectives. Human review required for high-stakes assessment.
            </p>
            <p class="text-xs text-yellow-700 mt-2">
              Best practice: Use AI for practice and explanation, but verify correctness through authoritative sources or expert review.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Course Complete</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              You've covered principles, frameworks, advanced techniques, and domain applications. Next steps: apply these to your use cases, measure results, iterate. Prompt engineering is empirical: test, measure, refine.
            </p>
            <NuxtLink to="/guides" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Return to Course Overview
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
  title: 'Chapter 7: AI for Education & Learning - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn how to use AI as a personal tutor. Craft prompts for conceptual understanding, Socratic dialogue, knowledge testing, and practical skill development.'
    },
    {
      name: 'keywords',
      content: 'AI for education, AI tutor, learning prompts, Socratic method, personalized learning, educational prompts, AI for learning'
    }
  ]
})
</script>
