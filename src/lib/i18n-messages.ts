/**
 * Builds the per-language bundle of strings a page needs in the browser. Server-side only:
 * it imports every dictionary, but each page embeds just its own language (see messages.ts).
 */
import type { LanguageCode } from './locale-routing'
import { translationsFor } from './base-translations'
import { CATEGORY_TRANSLATIONS, TOOL_TRANSLATIONS, type CategoryText, type ToolText } from './tool-translations'
import { buildSlugMap } from './localized-slugs'
import { GUIDE_TRANSLATIONS } from './guide-i18n'

export type ClientMessages = {
  lang: LanguageCode
  ui: Record<string, string>
  tools: Record<string, ToolText>
  categories: Record<string, CategoryText>
  /** English first-level slug → this language's slug. */
  slugs: Record<string, string>
  /** Guide slug → short menu label in this language. */
  guideLabels: Record<string, string>
}

const cache = /* @__PURE__ */ new Map<LanguageCode, ClientMessages>()

export function buildClientMessages(lang: LanguageCode): ClientMessages {
  const cached = cache.get(lang)
  if (cached) return cached
  const messages: ClientMessages = {
    lang,
    ui: translationsFor(lang),
    tools: lang === 'en' ? {} : (TOOL_TRANSLATIONS[lang] ?? {}),
    categories: lang === 'en' ? {} : (CATEGORY_TRANSLATIONS[lang] ?? {}),
    slugs: Object.fromEntries(buildSlugMap(lang)),
    guideLabels: Object.fromEntries(Object.entries(GUIDE_TRANSLATIONS[lang] ?? {}).map(([slug, guide]) => [slug, guide.navLabel])),
  }
  cache.set(lang, messages)
  return messages
}
