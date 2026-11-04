import type { LanguageCode } from '../locale-routing'
import type { GuideTranslation } from './types'
import { es } from './es'
import { ptBr } from './pt-br'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { id } from './id'
import { tr } from './tr'

/** Translated guides by language and English guide slug. Build-time only: guide pages ship no JS. */
export const GUIDE_TRANSLATIONS: Partial<Record<LanguageCode, Record<string, GuideTranslation>>> = {
  es,
  'pt-br': ptBr,
  de,
  fr,
  it,
  nl,
  id,
  tr,
}
