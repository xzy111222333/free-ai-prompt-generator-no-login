import { defineEventHandler, readBody, createError } from 'h3'
import { useRuntimeConfig } from '#imports'
import { promptCatalog } from '@/data/promptPresets'
import type { PromptRequestPayload, PromptResponse } from '@/types/prompt'
import { DoubaoClient } from '../utils/doubaoClient'
import { buildPromptInstruction, findPresetById } from '../utils/promptBuilder'

export default defineEventHandler(async (event) => {
  const payload = await readBody<PromptRequestPayload>(event)

  if (!payload) {
    throw createError({ statusCode: 400, statusMessage: 'Missing request body' })
  }

  if (!payload.userInput?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'User input is required' })
  }

  const config = useRuntimeConfig()
  const doubaoConfig = config.doubao || {}

  const buildMock = () => {
    const u = payload.userInput.trim()
    const opts = payload.options || {}

    if (payload.engine === 'claude') {
      const structure = String(opts.structure || 'non-xml').toLowerCase()
      if (structure === 'xml') {
        return [
          '<role>Expert Specialist</role>',
          '<experience_years>8</experience_years>',
          `<specialization>${u}</specialization>`,
          `<task_description>Your task is to deliver a precise, production-ready prompt for: ${u}.</task_description>`,
          '<details>',
          '  <detail>Include role, goal, context, constraints and output format.</detail>',
          '  <detail>Ask for missing inputs only if critical to proceed.</detail>',
          '  <detail>Be concise, specific and action-oriented.</detail>',
          '</details>',
          '<examples>',
          `  <example>Clarify goal, required inputs, steps, and verification for: ${u}.</example>`,
          '  <example>Provide a final output section with formatting guidance.</example>',
          '</examples>',
          '<focus>Clarity, measurability and direct usability by Claude.</focus>'
        ].join('\n')
      }

      return [
        'You are an experienced specialist with 10 years of expertise.',
        '',
        `Your task is to produce a production-grade Claude prompt for: ${u}.`,
        '',
        'Here are some important details to consider:',
        'Ensure the prompt specifies role, goal, context, constraints and output format.',
        'Ask for missing inputs only if they are critical to proceed.',
        'Keep instructions concise, specific and action-oriented.',
        '',
        'To guide you further, here are examples:',
        `Example 1: Clearly define the role and objective for "${u}".`,
        'Example 2: Provide a final output section with formatting guidance.',
        '',
        'Finally, focus on clarity, measurability and direct usability in Claude.'
      ].join('\n')
    }

    if (payload.engine === 'midjourney') {
      const orientation = String(opts.orientation || 'horizontal').toLowerCase()
      const aspect = orientation === 'square' ? '1:1' : orientation === 'vertical' ? '9:16' : '16:9'
      const stylize = orientation === 'horizontal' ? 100 : 150
      const negative = orientation === 'horizontal' ? '--no humans' : '--no text'
      return `A detailed ${u}, cinematic lighting, rich colors, shallow depth of field, high dynamic range, ultra-detailed, photography aesthetics --ar ${aspect} --s ${stylize} ${negative}`
    }

    if (payload.engine === 'checker' || payload.engine === 'optimizer') {
      return `**Role:** You are a senior prompt engineer specializing in clarity and precision.\n\n**Goal:** ${u}\n\n**Instructions:**\n1. Analyze the user's requirement\n2. Structure the response with clear sections\n3. Ensure actionable and specific language\n\n**Constraints:** Keep intent intact while improving clarity\n\n**Output Format:** Structured prompt with proper line breaks between sections`
    }

    // Default generic
    return [
      '# Prompt Blueprint',
      '',
      '## Role',
      'You are a domain expert who excels at structured, actionable outputs.',
      '',
      '## Goal',
      u,
      '',
      '## Steps',
      '1. Clarify assumptions and required inputs.\n2. Provide a concise, verifiable plan.\n3. Produce the final deliverable.',
      '',
      '## Output',
      'Return a clear, concise deliverable with headings and bullet points.'
    ].join('\n')
  }

  const preset = findPresetById(promptCatalog, payload.engine, payload.promptPresetId)
  const instruction = buildPromptInstruction({ payload, preset })

  if (!doubaoConfig.apiKey) {
    const mockPrompt = buildMock()
    const response: PromptResponse = {
      prompt: mockPrompt,
      meta: {
        engine: payload.engine,
        preset: preset
          ? { id: preset.id, label: preset.label, category: preset.category?.label }
          : undefined,
        model: 'mock-local',
        usage: { total_tokens: 0, prompt_tokens: 0, completion_tokens: 0 },
        mock: true,
        note: 'Set DOUBAO_API_KEY to enable real model generation.'
      }
    }
    return response
  }

  const client = new DoubaoClient({
    apiKey: doubaoConfig.apiKey,
    model: doubaoConfig.model || 'doubao-seed-1-6-flash-250828',
    apiBase: doubaoConfig.apiBase,
    systemPrompt: doubaoConfig.systemPrompt || 'use English all the time.'
  })

  // Engine-specific system message
  const systemByEngine: Record<string, string> = {
    claude: 'Return ONLY the final prompt with proper formatting. If XML structure is requested, output a properly formatted XML snippet with line breaks. Otherwise, output well-structured paragraphs with clear line breaks between sections. Never include markdown or explanations.',
    midjourney: 'Return ONLY a single-line Midjourney prompt. No quotes, no markdown, no extra text.',
    checker: 'Return ONLY the improved prompt text with proper formatting and line breaks between sections. No analysis or commentary.',
    optimizer: 'Return ONLY the improved prompt text with clear formatting and line breaks between sections. No commentary.',
    default: 'Respond with a well-formatted prompt ready for direct use. Use clear line breaks between sections (Role, Instructions, etc.) and proper formatting. Do not include explanations outside the prompt.'
  }

  const systemMessage = systemByEngine[payload.engine] || systemByEngine.default

  const completion = await client.createChatCompletion({
    messages: [
      { role: 'system', content: systemMessage },
      { role: 'user', content: instruction }
    ],
    thinking: { type: 'disabled' }
  })

  const response: PromptResponse = {
    prompt: completion.content,
    meta: {
      engine: payload.engine,
      preset: preset
        ? {
            id: preset.id,
            label: preset.label,
            category: preset.category?.label
          }
        : undefined,
      model: doubaoConfig.model || 'Doubao-Seed-1.6-flash',
      usage: completion.usage
    }
  }

  return response
})
