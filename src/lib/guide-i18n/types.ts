/** A guide in another language. Sections and FAQs are in the same order as the English guide. */
export type GuideTranslation = {
  /** URL slug in this language, e.g. "prueba-de-pixeles-muertos". */
  slug: string
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  readingTime: string
  category: string
  intro: string
  warning?: string
  toolLabel: string
  toolDescription: string
  sections: { title: string; subtitle?: string; content: string[]; steps?: string[]; tips?: string[]; checklist?: string[] }[]
  faqs: { question: string; answer: string }[]
}

/** The /guides section's slug in each language. */
export const GUIDES_SECTION_SLUG: Record<string, string> = {
  es: 'guias',
  'pt-br': 'guias',
  de: 'ratgeber',
  fr: 'guides',
  it: 'guide',
  nl: 'gidsen',
  id: 'panduan',
  tr: 'rehberler',
}
