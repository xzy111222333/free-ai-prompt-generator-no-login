import type { PromptCategory, PromptPreset, PromptRequestPayload } from '@/types/prompt'

interface BuildPromptContext {
  payload: PromptRequestPayload
  preset?: PromptPreset & { category?: Pick<PromptCategory, 'id' | 'label' | 'summary'> }
}

export const renderPresetTemplate = (template: string, userInput: string) =>
  template.replace(/{{\s*input\s*}}/gi, userInput.trim())

export const buildPromptInstruction = ({ payload, preset }: BuildPromptContext) => {
  const { engine, userInput, options } = payload

  // Engine-specific instruction builders
  const buildClaude = () => {
    const structure = String(options?.structure || 'non-xml').toLowerCase()

    if (structure === 'xml') {
      const xmlSpec = [
        'Output exactly one XML snippet with the following tags only (no markdown, no extra text):',
        '<role>, <experience_years>, <specialization>, <task_description>, <details> with repeated <detail>, <examples> with repeated <example>, and <focus>.',
        'Fill values based on the user request. Keep tags in lowercase. Do not add attributes.'
      ].join(' ')

      return [
        'You are designing an enterprise-grade Claude prompt based on the request below.',
        preset ? `Preset focus: ${preset.label}.` : undefined,
        `User request: ${userInput}`,
        xmlSpec
      ]
        .filter(Boolean)
        .join('\n\n')
    }

    // Non-XML structured paragraphs matching the sample style
    return [
      'Craft a single, production-ready Claude prompt in clear paragraphs (no markdown).',
      preset ? `Preset focus: ${preset.label}.` : undefined,
      `User request: ${userInput}`,
      'Structure as:',
      '1) Persona sentence: "You are an experienced [role] with [X] years..."',
      '2) Task sentence: "Your task is to ..."',
      '3) Details block starting with "Here are some important details to consider:" followed by 3–5 bullet-like lines (plain sentences).',
      '4) Examples block starting with "To guide you further, here are examples:" with at least 2 examples.',
      '5) Final focus line starting with "Finally," stating what to emphasize.'
    ]
      .filter(Boolean)
      .join('\n\n')
  }

  const buildMidjourney = () => {
    const orientation = String(options?.orientation || 'horizontal').toLowerCase()
    const aspect = orientation === 'square' ? '1:1' : orientation === 'vertical' ? '9:16' : '16:9'
    const stylize = orientation === 'horizontal' ? 100 : 150
    const negative = orientation === 'horizontal' ? '--no humans' : '--no text'

    return [
      'Generate a single-line Midjourney prompt with cinematic detail for the idea below.',
      'Use vivid subject, environment, lighting, mood, color palette, shot type/lens, and quality cues.',
      `Append parameters: --ar ${aspect} --s ${stylize} ${negative}.`,
      'Avoid quotes, markdown, or explanations. Return the prompt only.',
      `Idea: ${userInput}`
    ].join('\n\n')
  }

  const buildChecker = () => {
    const useCase = options?.useCase ? `Intended use case: ${options.useCase}` : undefined
    return [
      'Rewrite the following prompt to be clearer, more complete, and more actionable while preserving intent.',
      'Minimize verbosity, remove ambiguity, specify role, goal, inputs, constraints, and output format.',
      useCase,
      `Original prompt: ${userInput}`,
      'IMPORTANT: Format the improved prompt with clear line breaks between sections for better readability. Return ONLY the improved prompt text with no commentary.'
    ]
      .filter(Boolean)
      .join('\n\n')
  }

  const buildOptimizer = () => {
    return [
      'Improve the prompt using the specified optimization framework while preserving the original intent.',
      preset ? `Framework: ${preset.label}. Guidance: ${renderPresetTemplate(preset.template, '{{USER_REQUEST}}')}` : undefined,
      `Original prompt: ${userInput}`,
      'IMPORTANT: Format the optimized prompt with clear line breaks between sections for better readability. Return ONLY the improved prompt text with no commentary.'
    ]
      .filter(Boolean)
      .join('\n\n')
  }

  const buildGeneric = () => {
    const sections: string[] = []
    sections.push(
      'You are a senior prompt engineer who crafts production-ready prompts for large language models. '
        + 'Analyse the request and produce a polished prompt that the end user can copy into their AI assistant.'
    )

    if (preset) {
      sections.push(`Preset focus: ${preset.label}.`)
      if (preset.description) {
        sections.push(`Preset summary: ${preset.description}`)
      }
      sections.push(`Preset template guidance: ${renderPresetTemplate(preset.template, '{{USER_REQUEST}}')}`)
    }

    sections.push(`User request: ${userInput}`)
    if (options && Object.keys(options).length) {
      sections.push(`Additional options: ${JSON.stringify(options)}`)
    }

    sections.push('IMPORTANT: Format the output prompt with clear line breaks between different sections (Role, Objective, Steps, Constraints, Output format). Use proper paragraph breaks to make it readable and well-structured.')
    return sections.join('\n\n')
  }

  switch (engine) {
    case 'claude':
      return buildClaude()
    case 'midjourney':
      return buildMidjourney()
    case 'checker':
      return buildChecker()
    case 'optimizer':
      return buildOptimizer()
    default:
      return buildGeneric()
  }
}

export const findPresetById = (catalog: Record<string, PromptCategory[]>, engine: string, presetId: string) => {
  const engineCatalog = catalog[engine]

  if (!engineCatalog) {
    return undefined
  }

  for (const category of engineCatalog) {
    const preset = category.presets.find((item) => item.id === presetId)
    if (preset) {
      return {
        ...preset,
        category: {
          id: category.id,
          label: category.label,
          summary: category.summary
        }
      }
    }
  }

  return undefined
}
