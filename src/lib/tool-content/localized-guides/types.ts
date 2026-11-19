import type { ComponentType } from 'react'

export type Faq = { question: string; answer: string }
export type LocalizedGuide = { Guide: ComponentType; faqs: Faq[] }

/** Everything translated for one language. Every field is optional: untranslated pages fall back to the old content. */
export type LanguageGuides = {
  /** Keyword-led tool guides, keyed by tool slug (e.g. 'dead-pixel-test'). */
  tools?: Record<string, LocalizedGuide>
  /** Keyword-led colour guides, keyed by colour id ('white' is the home page, 'black', 'red', …). */
  colors?: Record<string, LocalizedGuide>
  /** "Quick answer" heading where the generic "What is the {tool}?" template reads badly, keyed by tool slug. */
  glanceHeadings?: Record<string, string>
}
