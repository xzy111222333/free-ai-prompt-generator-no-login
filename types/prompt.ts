export interface PromptPreset {
  id: string
  label: string
  description?: string
  template: string
  tone?: string
}

export interface PromptCategory {
  id: string
  label: string
  summary: string
  presets: PromptPreset[]
}

export interface PromptRequestPayload {
  engine: string
  promptPresetId: string
  userInput: string
  options?: Record<string, any>
}

export interface PromptResponse {
  prompt: string
  meta?: Record<string, any>
}
