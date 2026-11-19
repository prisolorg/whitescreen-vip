import type { ToolFaq } from '../types'

/** A tool page's reading content in one language. Color screens only need the answer block. */
export type LocalizedToolContent = {
  glance: { answer: string; features: string[]; benefits: string[] }
  steps?: string[]
  useCases?: { title: string; description: string }[]
  faqs?: ToolFaq[]
}

export type ToolTranslations = Record<string, LocalizedToolContent>
