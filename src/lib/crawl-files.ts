/** Text for /sitemap.xml, /robots.txt and /llms.txt, served by the endpoints in src/pages. */
import { SITE_URL, getIndexableRoutes, pageLocales } from './seo'
import { SUPPORTED_LOCALES, getLocalizedPath, type LanguageCode } from './locale-routing'
import { TOOLS } from './tools'
import { TOOL_CATEGORIES } from './tool-categories'
import { GUIDES } from './guides-content'
import { SCREEN_PROBLEMS } from './screen-problems-data'
import { GLOSSARY_ITEMS } from './glossary-data'
import { PROBLEM_NAV_LINKS } from './nav-links'
import { siteConfig } from './site'

const hreflang = (lang: LanguageCode) => (lang === 'pt-br' ? 'pt-BR' : lang)

export function buildSitemap(lastmod = new Date().toISOString().slice(0, 10)): string {
  // The menu keeps its own short list of problem links; fail the build if it drifts from the data.
  const navProblems = PROBLEM_NAV_LINKS.map((item) => item.slug).join(',')
  const allProblems = SCREEN_PROBLEMS.map((item) => item.slug).join(',')
  if (navProblems !== allProblems) throw new Error(`PROBLEM_NAV_LINKS is out of date with SCREEN_PROBLEMS:\n${navProblems}\n${allProblems}`)

  const urls: string[] = []
  for (const lang of SUPPORTED_LOCALES) {
    for (const route of getIndexableRoutes(lang)) {
      const locales = pageLocales(route)
      const alternates =
        locales.length < 2
          ? ''
          : [...locales.map((alt) => [hreflang(alt), alt] as const), ['x-default', 'en'] as const]
            .map(([code, alt]) => `\n    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${getLocalizedPath(route, alt)}"/>`)
            .join('')
      urls.push(`  <url>\n    <loc>${SITE_URL}${getLocalizedPath(route, lang)}</loc>\n    <lastmod>${lastmod}</lastmod>${alternates}\n  </url>`)
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
}

export function buildRobotsTxt(): string {
  return `# https://whitescreen.vip — every page is free to crawl, including by AI crawlers.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

export function buildLlmsTxt(): string {
  const link = (name: string, href: string, description?: string) =>
    `- [${name}](${SITE_URL}${getLocalizedPath(href, 'en')})${description ? `: ${description}` : ''}`
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    'Every tool runs entirely in the browser: no sign-up, no install and no uploads to a server. Pages are available in English, Spanish, Portuguese (Brazil), German, French, Italian, Dutch, Indonesian and Turkish under /es/, /pt-br/, /de/, /fr/, /it/, /nl/, /id/ and /tr/. Guides, screen problems, glossary and backgrounds are English-only.',
    '',
    '## Color screens',
    '',
    link('White Screen', '/', 'The homepage: a fullscreen white screen with 12 colors, brightness, color temperature and PNG downloads up to 8K.'),
    ...TOOLS.filter((tool) => tool.swatch && tool.slug !== 'white-screen').map((tool) => link(tool.name, `/${tool.slug}`, tool.description)),
  ]
  for (const category of TOOL_CATEGORIES) {
    const tools = TOOLS.filter((tool) => tool.category === category.id && !tool.swatch)
    if (!tools.length) continue
    lines.push('', `## ${category.name}`, '', category.description, '', ...tools.map((tool) => link(tool.name, `/${tool.slug}`, tool.description)))
  }
  lines.push('', '## Guides', '', ...GUIDES.map((guide) => link(guide.title, `/guides/${guide.slug}`, guide.metaDescription)))
  lines.push('', '## Screen problems', '', ...SCREEN_PROBLEMS.map((item) => link(item.title, `/screen-problems/${item.slug}`, item.metaDescription)))
  lines.push('', '## Display glossary', '', ...GLOSSARY_ITEMS.map((item) => link(item.title, `/glossary/${item.slug}`, item.metaDescription)))
  lines.push(
    '',
    '## Optional',
    '',
    link('All tools', '/tools', 'The full catalog grouped by category.'),
    link('Backgrounds', '/backgrounds', 'Free solid, gradient, video call, OLED and neon backgrounds in 1080p to 4K.'),
    link('About', '/about'),
    link('Contact', '/contact', siteConfig.contactEmail),
    link('Privacy Policy', '/privacy-policy'),
    '',
  )
  return lines.join('\n')
}
