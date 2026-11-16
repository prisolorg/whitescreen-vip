import type { LanguageCode } from '@/lib/locale-routing'
import type { LocalizedSubtitles } from './types'
import { de } from './de'
import { es } from './es'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { ptbr } from './pt-br'
import { id } from './id'
import { tr } from './tr'

export { TOOL_SUBTITLE_EN, BACKGROUND_SUBTITLE_EN } from './en'

/** Translated one-line subtitles, kept apart from the guides because hydrated tool pages import them. */
const BY_LANGUAGE: Partial<Record<LanguageCode, LocalizedSubtitles>> = { de, es, fr, it, nl, 'pt-br': ptbr, id, tr }

export const localizedSubtitle = (language: LanguageCode, slug: string) => BY_LANGUAGE[language]?.tools[slug]
export const localizedBackgroundSubtitle = (language: LanguageCode, slug: string) => BY_LANGUAGE[language]?.backgrounds[slug]
