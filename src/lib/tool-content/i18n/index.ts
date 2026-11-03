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
import { es as es3 } from './batch3/es'
import { ptBr as ptBr3 } from './batch3/pt-br'
import { de as de3 } from './batch3/de'
import { fr as fr3 } from './batch3/fr'
import { it as it3 } from './batch3/it'
import { nl as nl3 } from './batch3/nl'
import { id as id3 } from './batch3/id'
import { tr as tr3 } from './batch3/tr'
import { es as es4 } from './batch4/es'
import { ptBr as ptBr4 } from './batch4/pt-br'
import { de as de4 } from './batch4/de'
import { fr as fr4 } from './batch4/fr'
import { it as it4 } from './batch4/it'
import { nl as nl4 } from './batch4/nl'
import { id as id4 } from './batch4/id'
import { tr as tr4 } from './batch4/tr'

/**
 * Translated tool page content, by language then tool slug. English lives in the tool-content files.
 * Batch 1: white/black screen answers, dead pixel, refresh rate, touch screen, white noise, BSOD, Pomodoro.
 * Batch 2: monitor test, screen resolution, brown noise, pink noise, broken screen, countdown timer.
 * Batch 3: uniformity test, stopwatch, Matrix, DVD, fake Windows 10 update, ring light.
 * Batch 4: every remaining tool (display tests, effects, screensavers, fake screens).
 */
export const TOOL_CONTENT_TRANSLATIONS: Record<string, ToolTranslations> = {
  es: { ...es, ...es2, ...es3, ...es4 },
  'pt-br': { ...ptBr, ...ptBr2, ...ptBr3, ...ptBr4 },
  de: { ...de, ...de2, ...de3, ...de4 },
  fr: { ...fr, ...fr2, ...fr3, ...fr4 },
  it: { ...it, ...it2, ...it3, ...it4 },
  nl: { ...nl, ...nl2, ...nl3, ...nl4 },
  id: { ...id, ...id2, ...id3, ...id4 },
  tr: { ...tr, ...tr2, ...tr3, ...tr4 },
}

/**
 * Whether a tool page has full reading content (steps, uses, FAQ) in `language`. Tool pages
 * without it are kept out of the index in that language, so no page mixes in English text.
 */
export function hasToolTranslation(slug: string, language: string): boolean {
  return language === 'en' || Boolean(TOOL_CONTENT_TRANSLATIONS[language]?.[slug]?.steps)
}
