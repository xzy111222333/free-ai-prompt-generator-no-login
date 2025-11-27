import { createError } from 'h3'
import type { PromptCategory } from '@/types/prompt'

export interface DoubaoChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface DoubaoChatChoice {
  message: DoubaoChatMessage
  finish_reason?: string
  index?: number
}

interface DoubaoChatResponse {
  choices?: DoubaoChatChoice[]
  usage?: {
    total_tokens?: number
    prompt_tokens?: number
    completion_tokens?: number
  }
}

interface DoubaoClientConfig {
  apiKey: string
  model: string
  apiBase?: string
  systemPrompt: string
}

interface GeneratePromptArgs {
  messages: DoubaoChatMessage[]
  thinking?: { type: string } | undefined
}

const DEFAULT_API_BASE = 'https://ark.cn-beijing.volces.com/api/v3'

export class DoubaoClient {
  private readonly config: DoubaoClientConfig

  constructor(config: DoubaoClientConfig) {
    this.config = {
      ...config,
      apiBase: config.apiBase || DEFAULT_API_BASE
    }
  }

  async createChatCompletion({ messages, thinking }: GeneratePromptArgs) {
    const endpoint = `${this.config.apiBase}/chat/completions`

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: this.config.model,
        messages: [
          { role: 'system', content: this.config.systemPrompt },
          ...messages
        ],
        ...(thinking ? { thinking } : {})
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw createError({
        statusCode: response.status,
        statusMessage: 'Doubao API error',
        data: { response: errorText }
      })
    }

    const payload = (await response.json()) as DoubaoChatResponse
    const content = payload.choices?.[0]?.message?.content?.trim()

    if (!content) {
      throw createError({
        statusCode: 502,
        statusMessage: 'Empty response from Doubao API',
        data: payload
      })
    }

    return {
      content,
      usage: payload.usage
    }
  }
}

export interface PromptCatalogResponse extends PromptCategory {}
