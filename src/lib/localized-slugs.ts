/**
 * Translated URL slugs. Tool pages take their slug from the tool's translated name
 * (e.g. /es/generador-de-ruido-blanco/), and the main static pages have hand-picked slugs.
 * English-only sections (guides, backgrounds, problems, glossary) keep their English URLs.
 *
 * Internally the site always works with the English path; these maps convert at the edges.
 */
import { TOOL_TRANSLATIONS } from './tool-translations'
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

type SlugMaps = { toLocal: Map<string, string>; toEnglish: Map<string, string> }
const cache = new Map<LanguageCode, SlugMaps>()

function maps(lang: LanguageCode): SlugMaps {
  const cached = cache.get(lang)
  if (cached) return cached
  const toLocal = new Map<string, string>()
  const toEnglish = new Map<string, string>()
  const add = (english: string, local: string) => {
    // A translated slug must be unique and must not be another page's English slug.
    if (!local || local === english || toEnglish.has(local)) return
    toLocal.set(english, local)
    toEnglish.set(local, english)
  }
  for (const [english, local] of Object.entries(STATIC_SLUGS[lang] ?? {})) add(english, local)
  const tools = TOOL_TRANSLATIONS[lang] ?? {}
  const englishSlugs = new Set(Object.keys(TOOL_TRANSLATIONS.en))
  for (const [english, text] of Object.entries(tools)) {
    if (english === 'white-screen') continue // the homepage
    const local = slugify(text.name, lang)
    if (englishSlugs.has(local)) continue
    add(english, local)
  }
  const result = { toLocal, toEnglish }
  cache.set(lang, result)
  return result
}

/** English first-level slug → the slug used in `lang` (unchanged if it has no translation). */
export function localizeSlug(slug: string, lang: LanguageCode) {
  if (lang === 'en') return slug
  return maps(lang).toLocal.get(slug) ?? slug
}

/** Translated first-level slug in `lang` → English slug (unchanged if it is not a translated one). */
export function englishSlug(slug: string, lang: LanguageCode) {
  if (lang === 'en') return slug
  return maps(lang).toEnglish.get(slug) ?? slug
}

/** Every [english, translated] pair for a language, for redirects from the old English-slug URLs. */
export function translatedSlugPairs(lang: LanguageCode): [string, string][] {
  return lang === 'en' ? [] : [...maps(lang).toLocal.entries()]
}
