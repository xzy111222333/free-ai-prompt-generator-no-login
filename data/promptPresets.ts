import type { PromptCategory } from '@/types/prompt'

export const promptCatalog: Record<string, PromptCategory[]> = {
  studio: [
    {
      id: 'frameworks',
      label: 'Prompt Generation Frameworks',
      summary: 'Choose from various structured frameworks for generating high-quality prompts.',
      presets: [
        {
          id: 'standard-prompt',
          label: 'Standard Prompt',
          description: 'For general use prompt generation',
          template: 'You are a prompt engineering expert. Create a detailed prompt for: {{input}}'
        },
        {
          id: 'reasoning-prompt',
          label: 'Reasoning Prompt',
          description: 'For reasoning tasks and complex problem solving',
          template: 'You are a logical reasoning specialist. Build a reasoning framework for: {{input}}'
        },
        {
          id: 'race-prompt',
          label: 'Race Prompt',
          description: 'RACE Framework [Role,Action,Context,Explanation]',
          template: 'You are a RACE framework architect. Design a prompt for: {{input}}'
        },
        {
          id: 'care-prompt',
          label: 'Care Prompt',
          description: 'CARE Framework [Context,Action,Result,Example]',
          template: 'You are a CARE framework specialist. Create a prompt for: {{input}}'
        },
        {
          id: 'ape-prompt',
          label: 'Ape Prompt',
          description: 'APE Framework [Action,Purpose,Execution]',
          template: 'You are an APE framework expert. Build a prompt for: {{input}}'
        },
        {
          id: 'create-prompt',
          label: 'Create Prompt',
          description: 'CREATE Framework [Character,Request,Examples,Adjustments,Type,Extras]',
          template: 'You are a CREATE framework designer. Develop a prompt for: {{input}}'
        },
        {
          id: 'tag-prompt',
          label: 'Tag Prompt',
          description: 'TAG Framework [Task,Action,Goal]',
          template: 'You are a TAG framework consultant. Create a prompt for: {{input}}'
        },
        {
          id: 'creo-prompt',
          label: 'Creo Prompt',
          description: 'CREO Framework [Context,Request,Explanation,Outcome]',
          template: 'You are a CREO framework strategist. Design a prompt for: {{input}}'
        },
        {
          id: 'rise-prompt',
          label: 'Rise Prompt',
          description: 'RISE Framework [Role,Input,Steps,Execution]',
          template: 'You are a RISE framework instructor. Build a prompt for: {{input}}'
        },
        {
          id: 'pain-prompt',
          label: 'Pain Prompt',
          description: 'PAIN Framework [Problem,Action,Information,Next Steps]',
          template: 'You are a PAIN framework problem solver. Create a prompt for: {{input}}'
        },
        {
          id: 'coast-prompt',
          label: 'Coast Prompt',
          description: 'COAST Framework [Context,Objective,Actions,Scenario,Task]',
          template: 'You are a COAST framework workflow expert. Design a prompt for: {{input}}'
        },
        {
          id: 'roses-prompt',
          label: 'Roses Prompt',
          description: 'ROSES Framework [Role,Objective,Scenario,Expected Solution,Steps]',
          template: 'You are a ROSES framework analyst. Build a prompt for: {{input}}'
        }
      ]
    }
  ],
  checker: [
    {
      id: 'quality',
      label: 'Quality Review',
      summary: 'Assess clarity, inclusivity and completeness before sending prompts to the model.',
      presets: [
        {
          id: 'clarity-check',
          label: 'Clarity & Context',
          description: 'Ensures the prompt includes role, goal, context and output format.',
          template: 'You are a prompt quality reviewer. Analyze and improve: {{input}}'
        }
      ]
    }
  ],
  optimizer: [
    {
      id: 'frameworks',
      label: 'Optimization Frameworks',
      summary: 'Transform and enhance your prompts using proven optimization frameworks.',
      presets: [
        {
          id: 'optimizer-standard',
          label: 'Standard',
          description: 'Basic prompt optimization without specific framework',
          template: 'You are a prompt optimization specialist. Optimize: {{input}}'
        },
        {
          id: 'optimizer-resee',
          label: 'RESEE',
          description: 'Role,Elaboration,Scenario,Example,Elaboration framework',
          template: 'You are a RESEE framework optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-race',
          label: 'RACE',
          description: 'Role,Action,Context,Expectation framework',
          template: 'You are a RACE optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-tag',
          label: 'TAG',
          description: 'Task,Action,Goal framework',
          template: 'You are a TAG optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-rise',
          label: 'RISE',
          description: 'Role,Input,Steps,Execution framework',
          template: 'You are a RISE optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-ape',
          label: 'APE',
          description: 'Action,Purpose,Expectation framework',
          template: 'You are an APE optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-roses',
          label: 'ROSES',
          description: 'Role,Objective,Scenario,Expected Solution,Steps framework',
          template: 'You are a ROSES optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-creo',
          label: 'CREO',
          description: 'Context,Request,Explanation,Outcome framework',
          template: 'You are a CREO optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-care',
          label: 'CARE',
          description: 'Context,Action,Result,Example framework',
          template: 'You are a CARE optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-coast',
          label: 'COAST',
          description: 'Context,Objective,Actions,Scenario,Task framework',
          template: 'You are a COAST optimizer. Restructure: {{input}}'
        },
        {
          id: 'optimizer-create',
          label: 'CREATE',
          description: 'Character,Request,Examples,Adjustment,Type of output,Extras',
          template: 'You are a CREATE optimizer. Restructure: {{input}}'
        }
      ]
    },
    {
      id: 'refinement',
      label: 'Refinement',
      summary: 'Transform rough ideas into refined prompts tailored to your brand voice.',
      presets: [
        {
          id: 'tone-polisher',
          label: 'Tone Polisher',
          description: 'Rewrites prompts to align with a target tone while maintaining intent.',
          template: 'You are a tone adjustment specialist. Rewrite: {{input}}'
        },
        {
          id: 'structure-upgrade',
          label: 'Structure Upgrade',
          description: 'Adds role, steps and output structure for better model responses.',
          template: 'You are a prompt structure consultant. Restructure: {{input}}'
        }
      ]
    }
  ],
  chatgpt: [
    {
      id: 'conversational',
      label: 'Conversational AI',
      summary: 'Optimized prompts for ChatGPT\'s conversational capabilities.',
      presets: [
        {
          id: 'chatgpt-default',
          label: 'ChatGPT Optimized',
          description: 'Creates prompts optimized for ChatGPT\'s strengths in conversation and reasoning.',
          template: 'You are a ChatGPT optimization expert. Create a prompt for: {{input}}'
        },
        {
          id: 'chatgpt-creative',
          label: 'Creative Assistant',
          description: 'Leverages ChatGPT\'s creative writing and brainstorming abilities.',
          template: 'You are a creative assistant designer. Build a prompt for: {{input}}'
        }
      ]
    }
  ],
  gemini: [
    {
      id: 'analytical',
      label: 'Analytical Processing',
      summary: 'Leverage Gemini\'s analytical and multimodal capabilities.',
      presets: [
        {
          id: 'gemini-default',
          label: 'Gemini Optimized',
          description: 'Creates prompts optimized for Gemini\'s analytical and reasoning capabilities.',
          template: 'You are a Gemini optimization specialist. Create an analytical prompt for: {{input}}'
        },
        {
          id: 'gemini-multimodal',
          label: 'Multimodal Analysis',
          description: 'Optimized for Gemini\'s ability to process text, images, and other media.',
          template: 'You are a multimodal prompt designer. Build a prompt for: {{input}}'
        }
      ]
    }
  ],
  midjourney: [
    {
      id: 'visual-storytelling',
      label: 'Visual Storytelling',
      summary: 'Generate detailed Midjourney prompts with lighting, mood and camera cues.',
      presets: [
        {
          id: 'midjourney-default',
          label: 'Cinematic Visual',
          description: 'Creates a cinematic Midjourney prompt with styling, lighting and aspect ratio tips.',
          template: 'You are a Midjourney prompt expert. Generate a visual prompt for: {{input}}'
        }
      ]
    }
  ],
  claude: [
    {
      id: 'enterprise-writing',
      label: 'Enterprise Writing',
      summary: 'Structure thoughtful Claude prompts with compliance and tone guidance.',
      presets: [
        {
          id: 'claude-default',
          label: 'Structured Analysis',
          description: 'Formats Claude prompts with policy-safe language, tone controls and step plans.',
          template: 'You are a Claude prompt architect. Design an enterprise prompt for: {{input}}'
        }
      ]
    }
  ]
}
