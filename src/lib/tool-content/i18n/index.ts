import type { ToolTranslations } from './types'
import { es } from './es'
import { ptBr } from './pt-br'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { id } from './id'
import { tr } from './tr'

/** Translated tool page content, by language then tool slug. English lives in the tool-content files. */
export const TOOL_CONTENT_TRANSLATIONS: Record<string, ToolTranslations> = { es, 'pt-br': ptBr, de, fr, it, nl, id, tr }

/**
 * Whether a tool page has full reading content (steps, uses, FAQ) in `language`. Tool pages
 * without it are kept out of the index in that language, so no page mixes in English text.
 */
export function hasToolTranslation(slug: string, language: string): boolean {
  return language === 'en' || Boolean(TOOL_CONTENT_TRANSLATIONS[language]?.[slug]?.steps)
}
