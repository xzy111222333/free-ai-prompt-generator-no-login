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
            Chapter 5
          </span>
          <span class="text-xs text-[var(--text-soft)]">15 min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
          AI as an Analyst: Business & Strategy
        </h1>
        
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
          AI can synthesize complex business information and apply analytical frameworks at scale. This chapter demonstrates how to use AI for competitive analysis, market research, and strategic planning with verifiable outputs.
        </p>
      </div>

      <!-- Article Content -->
      <div class="card-surface rounded-3xl border border-[var(--surface-border)]/80 p-8 lg:p-12 elegant-shadow">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Business Analysis with AI: Capabilities and Limits</h2>
          
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            AI excels at applying structured frameworks to provided data but cannot access real-time market information or proprietary data. Effective business analysis combines AI's pattern recognition with human domain expertise and current data. The output is a starting point, not a final decision.
          </p>

          <div class="bg-[var(--surface-50)] rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Real Scenario: SaaS Product Expansion</h3>
            <p class="text-base text-[var(--text-muted)]">
              B2B analytics platform with 500 US customers ($2M ARR) evaluating European expansion. Decision: UK vs Germany for initial market. Constraint: 6-month timeline, $200k budget. Need framework-based analysis to present to board.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Framework Application: Comparative Market Analysis</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            SWOT analysis requires specific market data. Generic SWOT outputs are useless. Provide: product specs, target customer profile, competitive landscape data, regional business conditions. AI synthesizes this into structured analysis.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Data-Backed SWOT Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are a market expansion consultant specializing in B2B SaaS.</p>
              <p class="mt-2">Task: Comparative SWOT for UK vs Germany market entry.</p>
              <p class="mt-2">Product context: B2B analytics platform, $400/user/month, targets mid-market (100-1000 employees), requires data integration (Salesforce, HubSpot, etc.).</p>
              <p class="mt-2">Current metrics: 500 US customers, 85% retention, 35% from direct sales, 65% product-led growth.</p>
              <p class="mt-2">Market data provided: [paste market research: competitor analysis, market size, regulatory environment, payment preferences, sales cycle data]</p>
              <p class="mt-2">Output: Side-by-side SWOT for both markets. For each point, cite specific data. Prioritize factors affecting 6-month launch timeline and $200k budget.</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Critical: AI cannot invent market data. You must provide current competitive intelligence, pricing benchmarks, regulatory requirements. AI's value is structured synthesis, not data creation.
          </p>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Competitive Intelligence Synthesis</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            AI can process competitor websites, product documentation, pricing pages, and reviews to create structured competitive profiles. More valuable than generic comparisons: identifying positioning gaps and feature differentiation opportunities.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Competitive Analysis Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are a competitive intelligence analyst for B2B SaaS.</p>
              <p class="mt-2">Task: Analyze 3 competitors in UK analytics market: Competitor A, B, C.</p>
              <p class="mt-2">Data provided: [paste their pricing pages, key feature lists, G2 reviews (50+ reviews each), LinkedIn About pages, recent funding announcements]</p>
              <p class="mt-2">Analysis requirements:</p>
              <p>1. Feature comparison matrix: which features are table stakes vs differentiators</p>
              <p>2. Pricing positioning: extract pricing tiers, identify pricing strategy (usage-based, seat-based, etc.)</p>
              <p>3. Customer pain points: extract from reviews - what do users complain about consistently</p>
              <p>4. Go-to-market approach: infer from website messaging and LinkedIn presence</p>
              <p class="mt-2">Output: Structured analysis identifying 2-3 clear market gaps our product can exploit."</p>
            </div>
          </div>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            This is information synthesis, not intelligence gathering. AI cannot scrape websites or access databases. You provide raw data; AI structures it into actionable insights.
          </p>

          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Go-to-Market Strategy Development</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            After analysis, use AI to generate strategic options. Provide: analysis outputs, business constraints (budget, timeline, team size), success metrics. AI generates multiple strategies with tradeoff analysis.
          </p>
          <div class="bg-white rounded-lg p-6 border mb-8">
            <h4 class="font-semibold text-[var(--text-strong)] mb-4">Strategy Generation Prompt</h4>
            <div class="text-sm text-[var(--text-muted)] font-mono leading-relaxed">
              <p>"You are a B2B SaaS go-to-market strategist.</p>
              <p class="mt-2">Context: Based on completed analysis, UK market shows: lower regulatory friction, English language advantage, but higher competition. Germany: larger market size, GDPR familiarity advantage, but requires German-language support.</p>
              <p class="mt-2">Constraints: 6-month timeline, $200k budget, 2-person expansion team, no local office initially.</p>
              <p class="mt-2">Task: Propose 3 distinct GTM strategies for UK entry. For each:</p>
              <p>1. Customer acquisition approach (PLG vs sales-led vs hybrid)</p>
              <p>2. Month-by-month milestone plan (0-6 months)</p>
              <p>3. Budget allocation across channels</p>
              <p>4. Success metrics (leading and lagging indicators)</p>
              <p>5. Key risks and mitigation strategies</p>
              <p class="mt-2">Format: Decision matrix comparing the 3 strategies across: speed to first customer, scalability, resource requirements, risk level."</p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-[var(--text-strong)] mb-6">Verification and Fact-Checking</h2>
          <p class="text-base text-[var(--text-muted)] leading-relaxed mb-6">
            AI outputs require verification. Common errors: outdated information (training data cutoff), confabulated statistics, misapplied frameworks. Establish verification workflow: cross-check numbers, validate assumptions, test recommendations against domain expertise.
          </p>
          
          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-[var(--text-strong)] mb-3">Quality Control Process</h3>
            <ul class="space-y-2 text-sm text-[var(--text-muted)]">
                <li><strong>1. Source verification:</strong> Any statistics or market data in AI output must be verified against primary sources. AI cannot access real-time data.</li>
                <li><strong>2. Framework application check:</strong> Review that frameworks are applied correctly. AI sometimes generates plausible but incorrect analyses.</li>
                <li><strong>3. Assumption validation:</strong> List all assumptions in the analysis. Validate with domain experts or market data.</li>
                <li><strong>4. Scenario testing:</strong> Test recommendations against edge cases and worst-case scenarios.</li>
                <li><strong>5. Bias detection:</strong> AI may reflect biases in training data. Check for geographical, industry, or temporal biases.</li>
            </ul>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Real-World Results</h3>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Time savings:</strong> Market analysis that traditionally takes 2-3 weeks (research, synthesis, presentation) reduced to 3-4 days with AI assistance.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Quality trade-offs:</strong> AI analysis is comprehensive but requires 20-30% more fact-checking than human analysis. Net time savings: 50-60%.
            </p>
            <p class="text-base text-yellow-700 mb-4">
              <strong>Best use case:</strong> Rapid hypothesis generation and option exploration. Not recommended for final decision-making without human validation.
            </p>
          </div>

          <div class="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-teal)]/10 rounded-2xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-[var(--text-strong)] mb-4">Next: Model Selection</h3>
            <p class="text-lg text-[var(--text-muted)] mb-6">
              Different AI models have different strengths for analytical vs creative tasks. The next chapter covers how to choose and optimize for specific models: GPT-4, Claude, and others.
            </p>
            <NuxtLink to="/guides/6-platform-nuances" class="btn-primary hover-lift text-lg px-8 py-4 inline-flex items-center justify-center">
              Chapter 6: Platform Nuances
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
  title: 'Chapter 5: AI for Business & Strategy - PromptRule',
  meta: [
    {
      name: 'description',
      content: 'Learn how to use AI as a business analyst. Apply frameworks like SWOT and PESTLE to generate strategic insights, competitor analysis, and market entry strategies.'
    },
    {
      name: 'keywords',
      content: 'AI business analysis, strategic planning, SWOT analysis prompt, PESTLE analysis, AI for business, competitor analysis, market entry strategy'
    }
  ]
})
</script>
