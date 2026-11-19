import type { LanguageCode } from '../locale-routing'
import { TOOL_UI_KEYS } from './keys'
import { es } from './es'
import { ptBr } from './pt-br'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { id } from './id'
import { tr } from './tr'

/** Pairs each language's list with the English keys; fails the build if a list is out of step. */
function zip(lang: string, values: readonly string[]): Record<string, string> {
  if (!values.length) return {}
  if (values.length !== TOOL_UI_KEYS.length) throw new Error(`tool-ui-i18n/${lang}: ${values.length} strings, expected ${TOOL_UI_KEYS.length}`)
  const map: Record<string, string> = {}
  TOOL_UI_KEYS.forEach((key, index) => {
    const value = values[index]
    // Placeholders must survive translation, so a shifted list cannot slip through.
    for (const token of key.match(/\{\w+\}/g) ?? []) {
      if (!value.includes(token)) throw new Error(`tool-ui-i18n/${lang}[${index}] "${value}" is missing ${token} (key "${key}")`)
    }
    if (value !== key) map[key] = value
  })
  return map
}

const LISTS: Partial<Record<LanguageCode, readonly string[]>> = { es, 'pt-br': ptBr, de, fr, it, nl, id, tr }
const cache = /* @__PURE__ */ new Map<LanguageCode, Record<string, string>>()

/**
 * Text inside the tools (buttons, sliders, options, on-screen messages) for `lang`, keyed by the
 * English text the components are written in. Built on first use (server only), so the browser
 * bundle never includes these lists; strings missing from a language fall back to English.
 */
export function toolUiTranslations(lang: LanguageCode): Record<string, string> {
  const cached = cache.get(lang)
  if (cached) return cached
  const map = zip(lang, LISTS[lang] ?? [])
  cache.set(lang, map)
  return map
}
