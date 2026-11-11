/**
 * The current language's strings. During the build they come straight from the dictionaries;
 * in the browser they are read from the JSON the page embeds (#ws-messages), so the client
 * bundle never carries all nine languages.
 */
import type { LanguageCode } from './locale-routing'
import { buildClientMessages, type ClientMessages } from './i18n-messages'

export type { ClientMessages }

const EMPTY: ClientMessages = { lang: 'en', ui: {}, tools: {}, categories: {}, slugs: {}, guideLabels: {}, problemLabels: {}, termLabels: {} }
let embedded: ClientMessages | null = null

function readEmbedded(): ClientMessages {
  if (embedded) return embedded
  try {
    const element = document.getElementById('ws-messages')
    embedded = element?.textContent ? (JSON.parse(element.textContent) as ClientMessages) : EMPTY
  } catch {
    embedded = EMPTY
  }
  return embedded
}

/** Strings for `lang`. In the browser only the page's own language is available. */
export function getMessages(lang: LanguageCode): ClientMessages {
  if (import.meta.env.SSR) return buildClientMessages(lang)
  const page = readEmbedded()
  return page.lang === lang ? page : { ...EMPTY, lang }
}

/** JSON for the page's <script id="ws-messages">, safe to inline in HTML. Tool text only goes to pages with a tool. */
export function serializeMessages(lang: LanguageCode, withToolText = false) {
  const { toolUi, ...messages } = buildClientMessages(lang)
  return JSON.stringify(withToolText ? { ...messages, toolUi } : messages).replace(/</g, '\\u003c')
}
