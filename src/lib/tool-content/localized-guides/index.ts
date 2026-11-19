import type { LanguageCode } from '@/lib/locale-routing'
import type { LanguageGuides, LocalizedGuide } from './types'
import { de } from './de'
import { es } from './es'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { ptbr } from './pt-br'
import { id } from './id'
import { tr } from './tr'

export type { LanguageGuides, LocalizedGuide } from './types'

/**
 * Keyword-led guides translated into other languages, one file per language (so each language can be edited
 * on its own). A page with an entry shows the guide and its FAQs (and FAQPage schema) instead of the generic
 * translated steps and use cases, like the English page. Guide components live in src/components/home/i18n/<lang>/;
 * links are written with English paths and the Link shim localizes them.
 */
const BY_LANGUAGE: Partial<Record<LanguageCode, LanguageGuides>> = { de, es, fr, it, nl, 'pt-br': ptbr, id, tr }

export const localizedToolGuide = (language: LanguageCode, slug: string): LocalizedGuide | undefined => BY_LANGUAGE[language]?.tools?.[slug]
export const localizedColorGuide = (language: LanguageCode, colorId: string): LocalizedGuide | undefined => BY_LANGUAGE[language]?.colors?.[colorId]
export const localizedGlanceHeading = (language: LanguageCode, slug: string): string | undefined => BY_LANGUAGE[language]?.glanceHeadings?.[slug]
