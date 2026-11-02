/**
 * Per-page SEO metadata. Used by the app at runtime (App.tsx keeps <head> in sync on client
 * navigation) and by scripts/prerender.mjs, which writes it into each page's static HTML.
 * Keep this module free of React and browser globals.
 */
import { TRANSLATIONS } from './i18n'
import { SUPPORTED_LOCALES, getLocalizedPath, type LanguageCode } from './locale-routing'
import { siteConfig } from './site'
import { getColorBySlug, SCREEN_COLORS } from './screen-colors'
import { getColorPageContent } from './color-pages'
import { TOOLS } from './tools'
import { getLocalizedTool, TOOL_TRANSLATIONS } from './tool-translations'
import { getToolContent } from './tool-content'
import { GUIDES, GUIDE_SLUG_ALIASES, getGuideBySlug } from './guides-content'
import { BACKGROUND_ITEMS, getBackgroundBySlug } from './backgrounds-data'
import { SCREEN_PROBLEMS, getScreenProblemBySlug } from './screen-problems-data'
import { GLOSSARY_ITEMS, getGlossaryBySlug } from './glossary-data'
import {
  ABOUT_TRANSLATIONS,
  CONTACT_TRANSLATIONS,
  DISCLAIMER_TRANSLATIONS,
  FEEDBACK_TRANSLATIONS,
  NOT_FOUND_TRANSLATIONS,
  PRIVACY_TRANSLATIONS,
  TERMS_TRANSLATIONS,
} from './content-pages-translations'

export const SITE_URL = siteConfig.url.replace(/\/+$/, '')
export const OG_IMAGE = `${SITE_URL}/og-image.png`
const SUFFIX = ' | WhiteScreen.vip'
/** Adds the brand suffix only while the title stays within the ~60 characters search results show. */
const withSuffix = (title: string) => {
  const base = title.endsWith(SUFFIX) ? title.slice(0, -SUFFIX.length) : title
  return base.length + SUFFIX.length <= 60 ? base + SUFFIX : base
}

/** Sections whose body copy exists only in English. Other locales point their canonical at the English page. */
const ENGLISH_ONLY_PREFIXES = ['/guides', '/backgrounds', '/screen-problems', '/glossary']

/**
 * /white-screen and the homepage serve the same intent ("white screen"), so the homepage is the
 * one page that ranks for it and /white-screen points its canonical there.
 */
const CANONICAL_ALIASES: Record<string, string> = { '/white-screen': '/' }

export type Alternate = { hreflang: string; href: string }

export type PageSeo = {
  title: string
  description: string
  canonical: string
  alternates: Alternate[]
  robots: string
  ogType: 'website' | 'article'
  ogImage: string
  lang: LanguageCode
  notFound: boolean
  /** Extra JSON-LD for <head>. Page components render their own page-specific schema. */
  jsonLd: Record<string, unknown>[]
}

export function isEnglishOnlyPath(cleanPath: string): boolean {
  return ENGLISH_ONLY_PREFIXES.some((prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`))
}

function translator(language: LanguageCode) {
  return (key: string, fallback: string) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || fallback
}

const BACKGROUND_CATEGORY_META: Record<string, [string, string]> = {
  solid: [
    'Solid Color Backgrounds – Free 1080p to 4K PNGs',
    'Download pure solid color backgrounds in lossless PNG: white, true black, royal blue, orange, red and deep navy, from 1080p up to 4K.',
  ],
  gradient: [
    'Gradient Backgrounds – Free 4K Desktop & Phone Gradients',
    'High-resolution linear and radial gradient backgrounds for desktops and phones. Free 1080p and 4K PNG downloads that double as banding tests.',
  ],
  'video-call': [
    'Video Call Backgrounds for Zoom, Meet & Teams',
    'Virtual office, soft studio and green screen backdrops for Zoom, Google Meet and Microsoft Teams. Free to download in HD.',
  ],
  'dark-oled': [
    'Dark & OLED Backgrounds – True Black Wallpapers',
    'True 0% black and near-black backgrounds that save battery on OLED screens and help you check backlight bleed. Free 4K downloads.',
  ],
  neon: [
    'Neon & Glow Backgrounds – Cyberpunk 4K Wallpapers',
    'Electric cyan and hot magenta neon backgrounds for gaming setups, motion tests and HDR displays. Free 1080p and 4K downloads.',
  ],
  minimal: [
    'Minimal & Aesthetic Backgrounds – Calm Wallpapers',
    'Earthy, pastel and low-contrast minimalist backgrounds for a calm, distraction-free desktop. Free high-resolution downloads.',
  ],
}

type Meta = {
  title: string
  description: string
  ogType?: 'website' | 'article'
  notFound?: boolean
  /** schema.org type for the page itself, for pages without their own schema. */
  pageType?: 'AboutPage' | 'ContactPage' | 'WebPage'
}

function resolveMeta(cleanPath: string, search: string, language: LanguageCode): Meta {
  const t = translator(language)
  const notFound = (): Meta => {
    const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
    return { title: c.title + SUFFIX, description: c.description, notFound: true }
  }
  const page = (dict: Record<string, { title: string; description: string }>, pageType: Meta['pageType'] = 'WebPage'): Meta => {
    const c = dict[language] || dict.en
    return { title: c.title + SUFFIX, description: c.description, pageType }
  }

  switch (cleanPath) {
    case '/':
      return {
        title: t('homeMetaTitle', 'White Screen Online – Free Fullscreen White Screen Tool'),
        description: t(
          'homeMetaDesc',
          'Open a free fullscreen white screen online. Switch colors, test your display, adjust brightness, and download white screen PNG images.',
        ),
      }
    case '/tools':
      return {
        title: t('allTools', 'All Tools') + ' – 50+ Free Screen Tests & Effects' + SUFFIX,
        description: t(
          'allToolsDesc',
          'Browse all free screen tools, monitor diagnostic checkups, solid color screens, and visual effects.',
        ),
      }
    case '/about':
      return page(ABOUT_TRANSLATIONS, 'AboutPage')
    case '/contact':
      return page(CONTACT_TRANSLATIONS, 'ContactPage')
    case '/feedback':
      return page(FEEDBACK_TRANSLATIONS)
    case '/privacy-policy':
      return page(PRIVACY_TRANSLATIONS)
    case '/terms':
      return page(TERMS_TRANSLATIONS)
    case '/disclaimer':
      return page(DISCLAIMER_TRANSLATIONS)
    case '/guides':
      return {
        title: 'Screen Testing & Monitor Guides' + SUFFIX,
        description:
          'Step-by-step guides to dead pixel testing, monitor cleaning, screen uniformity, OLED burn-in prevention and using your screen as a light.',
      }
    case '/backgrounds': {
      const category = new URLSearchParams(search).get('category') ?? ''
      const [title, description] = BACKGROUND_CATEGORY_META[category] ?? [
        'Free Screen Backgrounds – Solid, Gradient & 4K Wallpapers',
        'Download free high-resolution backgrounds: solid colors, gradients, video call backdrops, OLED black and neon wallpapers in 1080p and 4K.',
      ]
      return { title: title + SUFFIX, description }
    }
    case '/screen-problems':
      return {
        title: 'Screen Problems: Diagnose & Fix Display Issues' + SUFFIX,
        description:
          'Diagnose stuck pixels, backlight bleed, flickering, tearing, burn-in, ghosting and color banding, with a free test for each problem.',
      }
    case '/glossary':
      return {
        title: 'Display & Monitor Glossary' + SUFFIX,
        description:
          'Plain-English explanations of display specs: refresh rate, OLED vs LCD, HDR, resolution and chroma key, with practical examples.',
      }
  }

  if (cleanPath.startsWith('/guides/')) {
    const guide = getGuideBySlug(cleanPath.slice('/guides/'.length))
    return guide ? { title: withSuffix(guide.metaTitle), description: guide.metaDescription, ogType: 'article' } : notFound()
  }
  if (cleanPath.startsWith('/backgrounds/')) {
    const bg = getBackgroundBySlug(cleanPath.slice('/backgrounds/'.length))
    return bg ? { title: withSuffix(bg.metaTitle), description: bg.metaDescription } : notFound()
  }
  if (cleanPath.startsWith('/screen-problems/')) {
    const problem = getScreenProblemBySlug(cleanPath.slice('/screen-problems/'.length))
    return problem ? { title: withSuffix(problem.metaTitle), description: problem.metaDescription, ogType: 'article' } : notFound()
  }
  if (cleanPath.startsWith('/glossary/')) {
    const term = getGlossaryBySlug(cleanPath.slice('/glossary/'.length))
    return term ? { title: withSuffix(term.metaTitle), description: term.metaDescription, ogType: 'article' } : notFound()
  }

  const slug = cleanPath.slice(1)
  const color = getColorBySlug(slug)
  if (color) {
    const name =
      TOOL_TRANSLATIONS[language]?.[`${color.id}-screen`]?.name ??
      `${t(color.id, color.name)} ${t('colorScreenSuffix', 'Screen')}`
    return {
      title: t('colorMetaTitle', '{name} – Free Fullscreen {name} Tool').replaceAll('{name}', name) + SUFFIX,
      description: getColorPageContent(color.id, language).description,
    }
  }

  const tool = TOOLS.find((item) => item.slug === slug)
  if (tool) {
    const localized = getLocalizedTool(tool, language)
    // English tool pages have hand-written titles; other languages use the translated tool name.
    const title =
      language === 'en'
        ? getToolContent(slug).title
        : t('toolMetaTitle', '{name} – Free Online Screen Tool').replace('{name}', localized.name)
    return { title: withSuffix(title), description: localized.description }
  }

  return notFound()
}

/** Lengthens very short descriptions with a localized one-line summary of what the site offers. */
function completeDescription(description: string, language: LanguageCode): string {
  if (description.length >= 110) return description
  const tail = translator(language)('metaTail', 'Free, no sign-up, works in any browser.')
  const base = /[.!?…]$/.test(description) ? description : `${description}.`
  const longer = `${base} ${tail}`
  return longer.length <= 160 ? longer : description
}

/** Old guide and background slugs still resolve; they point their canonical at the real URL. */
function resolveAlias(cleanPath: string): string {
  if (cleanPath.startsWith('/guides/')) {
    const guide = getGuideBySlug(cleanPath.slice('/guides/'.length))
    if (guide) return `/guides/${guide.slug}`
  }
  if (cleanPath.startsWith('/backgrounds/')) {
    const bg = getBackgroundBySlug(cleanPath.slice('/backgrounds/'.length))
    if (bg) return `/backgrounds/${bg.slug}`
  }
  return cleanPath
}

export function getPageSeo(cleanPath: string, search: string, language: LanguageCode): PageSeo {
  const resolved = resolveMeta(cleanPath, search, language)
  const meta = { ...resolved, title: withSuffix(resolved.title), description: completeDescription(resolved.description, language) }
  const englishOnly = isEnglishOnlyPath(cleanPath)
  const canonicalPath = CANONICAL_ALIASES[cleanPath] ?? resolveAlias(cleanPath)
  const canonicalLang: LanguageCode = englishOnly ? 'en' : language
  const canonical = `${SITE_URL}${getLocalizedPath(canonicalPath, canonicalLang)}`

  const alternates: Alternate[] =
    meta.notFound || englishOnly
      ? []
      : [
          ...SUPPORTED_LOCALES.map((locale) => ({
            hreflang: locale === 'pt-br' ? 'pt-BR' : locale,
            href: `${SITE_URL}${getLocalizedPath(canonicalPath, locale)}`,
          })),
          { hreflang: 'x-default', href: `${SITE_URL}${getLocalizedPath(canonicalPath, 'en')}` },
        ]

  const jsonLd: Record<string, unknown>[] = []
  if (cleanPath === '/') {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: siteConfig.name,
        url: `${SITE_URL}/`,
        description: siteConfig.description,
        inLanguage: SUPPORTED_LOCALES.map((locale) => (locale === 'pt-br' ? 'pt-BR' : locale)),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: siteConfig.name,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/apple-icon.png`,
        email: siteConfig.contactEmail,
      },
    )
  }

  if (meta.pageType) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': meta.pageType,
      name: meta.title,
      description: meta.description,
      url: canonical,
      inLanguage: language === 'pt-br' ? 'pt-BR' : language,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: `${SITE_URL}/` },
    })
  }

  return {
    title: meta.title,
    description: meta.description,
    canonical,
    alternates,
    robots: meta.notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    ogType: meta.ogType ?? 'website',
    ogImage: OG_IMAGE,
    lang: language,
    notFound: Boolean(meta.notFound),
    jsonLd,
  }
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** JSON for a <script type="application/ld+json"> body, safe against `</script>` in strings. */
export const jsonLdText = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')

const OG_LOCALES: Record<LanguageCode, string> = {
  en: 'en_US', es: 'es_ES', 'pt-br': 'pt_BR', de: 'de_DE', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', id: 'id_ID', tr: 'tr_TR',
}

/** The <head> tags for a page, as HTML. Used by the prerenderer. */
export function renderHeadTags(seo: PageSeo): string {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    `<link rel="canonical" href="${seo.canonical}" />`,
    ...seo.alternates.map((alt) => `<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`),
    `<meta property="og:site_name" content="${siteConfig.name}" />`,
    `<meta property="og:type" content="${seo.ogType}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${seo.canonical}" />`,
    `<meta property="og:image" content="${seo.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${OG_LOCALES[seo.lang]}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.ogImage}" />`,
    ...seo.jsonLd.map((data) => `<script type="application/ld+json" data-seo>${jsonLdText(data)}</script>`),
  ]
  return tags.join('\n    ')
}

/** Every indexable route, without a locale prefix. */
export function getAllRoutes(): string[] {
  return [
    '/',
    '/tools',
    '/about',
    '/contact',
    '/feedback',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    ...SCREEN_COLORS.map((color) => color.path),
    ...TOOLS.filter((tool) => !tool.swatch).map((tool) => `/${tool.slug}`),
    '/guides',
    ...GUIDES.map((guide) => `/guides/${guide.slug}`),
    '/backgrounds',
    ...BACKGROUND_ITEMS.map((item) => `/backgrounds/${item.slug}`),
    '/screen-problems',
    ...SCREEN_PROBLEMS.map((item) => `/screen-problems/${item.slug}`),
    '/glossary',
    ...GLOSSARY_ITEMS.map((item) => `/glossary/${item.slug}`),
  ]
}

/**
 * URLs from the previous WordPress site (whitescreen.vip page, post and category sitemaps) that
 * have no page with the same path here. Each gets a 301 to its closest equivalent.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/contact-us/': '/contact/',
  '/about-us/': '/about/',
  '/author-whitson-rao/': '/about/',
  '/windows-10-fake-update-screen/': '/fake-windows-10-update/',
  '/fake-broken-screen/': '/broken-screen/',
  '/how-to-check-dead-pixels-on-any-device/': '/guides/dead-pixel-test/',
  '/category/blog/': '/guides/',
  // Off-white shade pages: the homepage white screen (with its custom color picker) replaces them.
  ...Object.fromEntries(
    ['linen', 'oldlace', 'mint-cream', 'lavender-blush', 'ivory', 'honeydew', 'ghost-white', 'floralwhite', 'beige', 'azure', 'alice-blue', 'seashell', 'snow-white', 'white-smoke', 'white-solid'].map(
      (slug) => [`/${slug}/`, '/'],
    ),
  ),
}

/** Legacy URLs that still work. They are prerendered, canonicalize to the real page and stay out of the sitemap. */
export function getAliasRoutes(): string[] {
  return [
    ...Object.keys(GUIDE_SLUG_ALIASES).map((slug) => `/guides/${slug}`),
    ...BACKGROUND_ITEMS.flatMap((item) => (item.aliases ?? []).map((slug) => `/backgrounds/${slug}`)),
  ]
}

/** Routes that belong in the sitemap for a locale: translated pages, minus canonical aliases. */
export function getIndexableRoutes(language: LanguageCode): string[] {
  return getAllRoutes().filter(
    (path) => !(path in CANONICAL_ALIASES) && (language === 'en' || !isEnglishOnlyPath(path)),
  )
}
