import type { ToolTranslations } from './types'
import { es } from './es'
import { ptBr } from './pt-br'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { id } from './id'
import { tr } from './tr'
import { es as es2 } from './batch2/es'
import { ptBr as ptBr2 } from './batch2/pt-br'
import { de as de2 } from './batch2/de'
import { fr as fr2 } from './batch2/fr'
import { it as it2 } from './batch2/it'
import { nl as nl2 } from './batch2/nl'
import { id as id2 } from './batch2/id'
import { tr as tr2 } from './batch2/tr'

/**
 * Translated tool page content, by language then tool slug. English lives in the tool-content files.
 * Batch 1: white/black screen answers, dead pixel, refresh rate, touch screen, white noise, BSOD, Pomodoro.
 * Batch 2: monitor test, screen resolution, brown noise, pink noise, broken screen, countdown timer.
 */
export const TOOL_CONTENT_TRANSLATIONS: Record<string, ToolTranslations> = {
  es: { ...es, ...es2 },
  'pt-br': { ...ptBr, ...ptBr2 },
  de: { ...de, ...de2 },
  fr: { ...fr, ...fr2 },
  it: { ...it, ...it2 },
  nl: { ...nl, ...nl2 },
  id: { ...id, ...id2 },
  tr: { ...tr, ...tr2 },
}

/**
 * Whether a tool page has full reading content (steps, uses, FAQ) in `language`. Tool pages
 * without it are kept out of the index in that language, so no page mixes in English text.
 */
export function hasToolTranslation(slug: string, language: string): boolean {
  return language === 'en' || Boolean(TOOL_CONTENT_TRANSLATIONS[language]?.[slug]?.steps)
}
