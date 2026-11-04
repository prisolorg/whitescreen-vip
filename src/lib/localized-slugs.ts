/**
 * Translated URL slugs. Tool pages take their slug from the tool's translated name
 * (e.g. /es/generador-de-ruido-blanco/), and the main static pages have hand-picked slugs.
 * English-only sections (backgrounds, legal pages) keep their English URLs.
 *
 * Internally the site always works with the English path; locale-routing converts at the edges,
 * using the map the page embeds (messages.ts) so browsers never load every language.
 */
import { TOOL_TRANSLATIONS } from './tool-translations'
import { GUIDE_TRANSLATIONS } from './guide-i18n'
import { GUIDES_SECTION_SLUG } from './guide-i18n/types'
import { PROBLEM_SLUGS, SECTION_SLUGS, TERM_SLUGS } from './article-i18n/slugs'
import { HUB_SLUGS } from './hubs'
import type { LanguageCode } from './locale-routing'

const STATIC_SLUGS: Partial<Record<LanguageCode, Record<string, string>>> = {
  es: { tools: 'herramientas', about: 'acerca-de', contact: 'contacto', feedback: 'comentarios', 'privacy-policy': 'politica-de-privacidad', terms: 'terminos', disclaimer: 'aviso-legal' },
  'pt-br': { tools: 'ferramentas', about: 'sobre', contact: 'contato', feedback: 'feedback', 'privacy-policy': 'politica-de-privacidade', terms: 'termos', disclaimer: 'aviso-legal' },
  de: { tools: 'werkzeuge', about: 'ueber-uns', contact: 'kontakt', feedback: 'feedback', 'privacy-policy': 'datenschutz', terms: 'nutzungsbedingungen', disclaimer: 'haftungsausschluss' },
  fr: { tools: 'outils', about: 'a-propos', contact: 'contact', feedback: 'avis', 'privacy-policy': 'politique-de-confidentialite', terms: 'conditions', disclaimer: 'avertissement' },
  it: { tools: 'strumenti', about: 'chi-siamo', contact: 'contatti', feedback: 'feedback', 'privacy-policy': 'informativa-privacy', terms: 'termini', disclaimer: 'disclaimer' },
  nl: { tools: 'tools', about: 'over-ons', contact: 'contact', feedback: 'feedback', 'privacy-policy': 'privacybeleid', terms: 'voorwaarden', disclaimer: 'disclaimer' },
  id: { tools: 'alat', about: 'tentang', contact: 'kontak', feedback: 'masukan', 'privacy-policy': 'kebijakan-privasi', terms: 'ketentuan', disclaimer: 'penafian' },
  tr: { tools: 'araclar', about: 'hakkimizda', contact: 'iletisim', feedback: 'geri-bildirim', 'privacy-policy': 'gizlilik-politikasi', terms: 'kosullar', disclaimer: 'sorumluluk-reddi' },
}

/** Lowercase ASCII slug: strips accents and Turkish/German letters, drops anything in brackets. */
export function slugify(text: string, lang?: LanguageCode) {
  // German convention: ä → ae, ö → oe, ü → ue (other languages just drop the accent).
  const base = lang === 'de' ? text.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue') : text
  return base
    .replace(/\(.*?\)/g, '')
    .replace(/ß/g, 'ss')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const cache = /* @__PURE__ */ new Map<LanguageCode, Map<string, string>>()

/** English first-level slug → translated slug for `lang`. Build-time only (it reads every tool name). */
export function buildSlugMap(lang: LanguageCode): Map<string, string> {
  const cached = cache.get(lang)
  if (cached) return cached
  const toLocal = new Map<string, string>()
  const used = new Set<string>()
  const add = (english: string, local: string) => {
    // A translated slug must be unique and must not be another page's English slug.
    if (!local || local === english || used.has(local)) return
    toLocal.set(english, local)
    used.add(local)
  }
  if (lang !== 'en') {
    for (const [english, local] of Object.entries({ ...STATIC_SLUGS[lang], ...HUB_SLUGS[lang] })) add(english, local)
    const englishSlugs = new Set(Object.keys(TOOL_TRANSLATIONS.en))
    for (const [english, text] of Object.entries(TOOL_TRANSLATIONS[lang] ?? {})) {
      if (english === 'white-screen') continue // the homepage
      const local = slugify(text.name, lang)
      if (!englishSlugs.has(local)) add(english, local)
    }
    // Translated guides: the section slug, and "guides/<english>" → that guide's translated slug.
    const guides = GUIDE_TRANSLATIONS[lang]
    if (guides && Object.keys(guides).length) {
      add('guides', GUIDES_SECTION_SLUG[lang] ?? 'guides')
      for (const [english, guide] of Object.entries(guides)) toLocal.set(`guides/${english}`, guide.slug)
    }
    // Screen problems and glossary terms work the same way.
    const sections = SECTION_SLUGS[lang]
    if (sections) {
      add('screen-problems', sections.problems)
      add('glossary', sections.glossary)
      for (const [english, local] of Object.entries(PROBLEM_SLUGS[lang] ?? {})) toLocal.set(`screen-problems/${english}`, local)
      for (const [english, local] of Object.entries(TERM_SLUGS[lang] ?? {})) toLocal.set(`glossary/${english}`, local)
    }
  }
  cache.set(lang, toLocal)
  return toLocal
}

/** Every [english, translated] pair for a language, for redirects from the old English-slug URLs. */
export function translatedSlugPairs(lang: LanguageCode): [string, string][] {
  return [...buildSlugMap(lang).entries()]
}
