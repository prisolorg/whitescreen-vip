/**
 * Translates text inside the tools. Components are written in English and wrap visible strings
 * in tx('…'); the page's language dictionary (embedded with the page's other strings) maps the
 * English text to the translation. Unknown strings stay in English.
 *
 * On the server each island renders synchronously inside an I18nProvider, which sets the
 * language here first; in the browser a page only ever has one language.
 */
import type { LanguageCode } from './locale-routing'
import { getMessages } from './messages'

let serverLanguage: LanguageCode = 'en'

export function setToolTextLanguage(language: LanguageCode) {
  serverLanguage = language
}

export function tx(text: string): string {
  if (!text) return text
  const messages = getMessages(import.meta.env.SSR ? serverLanguage : (document.documentElement.lang.toLowerCase() as LanguageCode))
  // PUBLIC_DEBUG_TX=1 marks every translated string (⟦…⟧) to find text that is not wrapped yet.
  return import.meta.env.PUBLIC_DEBUG_TX ? `⟦${text}⟧` : messages.toolUi?.[text] ?? text
}
