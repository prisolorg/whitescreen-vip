// Turns every route in every language into static HTML with its own <head>, and writes
// sitemap.xml, robots.txt, llms.txt and 404.html. Runs after the client and SSR builds.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssr = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const {
  render, getPageSeo, renderHeadTags, getAllRoutes, getAliasRoutes, getIndexableRoutes, isEnglishOnlyPath, LEGACY_REDIRECTS,
  SUPPORTED_LOCALES, getLocalizedPath, SITE_URL,
} = ssr

// The menu keeps its own short list of problem links; fail the build if it drifts from the data.
const navProblems = ssr.PROBLEM_NAV_LINKS.map((item) => item.slug).join(',')
const allProblems = ssr.SCREEN_PROBLEMS.map((item) => item.slug).join(',')
if (navProblems !== allProblems) throw new Error(`PROBLEM_NAV_LINKS is out of date with SCREEN_PROBLEMS:\n${navProblems}\n${allProblems}`)

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
const today = new Date().toISOString().slice(0, 10)
const hreflang = (lang) => (lang === 'pt-br' ? 'pt-BR' : lang)

function fillTemplate(seo, appHtml) {
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${hreflang(seo.lang)}"`)
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, renderHeadTags(seo))
    .replace(/<div id="root"><!--app:start-->[\s\S]*?<!--app:end--><\/div>/, `<div id="root" data-prerendered>${appHtml}</div>`)
}

// "/red-screen" -> red-screen.html, which static hosts serve at the extensionless URL without a
// redirect, so the served URL matches the canonical. Locale roots ("/es/") use es/index.html.
function outFile(url) {
  const clean = url.replace(/^\/+|\/+$/g, '')
  if (!clean) return path.join(dist, 'index.html')
  return url.endsWith('/') ? path.join(dist, clean, 'index.html') : path.join(dist, `${clean}.html`)
}

let pages = 0
for (const lang of SUPPORTED_LOCALES) {
  for (const route of [...getAllRoutes(), ...getAliasRoutes()]) {
    const url = getLocalizedPath(route, lang)
    const seo = getPageSeo(route, '', lang)
    const html = fillTemplate(seo, await render(url))
    const file = outFile(url)
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, html)
    pages++
  }
}

// 404 page for hosts that serve /404.html for unknown paths.
const missing = '/__page-not-found__'
await fs.writeFile(path.join(dist, '404.html'), fillTemplate(getPageSeo(missing, '', 'en'), await render(missing)))

// Sitemap with hreflang alternates for translated pages.
const urls = []
for (const lang of SUPPORTED_LOCALES) {
  for (const route of getIndexableRoutes(lang)) {
    const loc = `${SITE_URL}${getLocalizedPath(route, lang)}`
    const alternates = isEnglishOnlyPath(route)
      ? ''
      : [...SUPPORTED_LOCALES.map((alt) => [hreflang(alt), alt]), ['x-default', 'en']]
          .map(([code, alt]) => `\n    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${getLocalizedPath(route, alt)}"/>`)
          .join('')
    urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>${alternates}\n  </url>`)
  }
}
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
)

await fs.writeFile(
  path.join(dist, 'robots.txt'),
  `# https://whitescreen.vip — every page is free to crawl, including by AI crawlers.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

await fs.writeFile(path.join(dist, 'llms.txt'), buildLlmsTxt())

// 301s from the old WordPress URLs: _redirects (Netlify, Cloudflare Pages), vercel.json (Vercel),
// and a small redirect page at each old path for hosts without redirect rules (GitHub Pages).
const redirects = Object.entries(LEGACY_REDIRECTS)
await fs.writeFile(path.join(dist, '_redirects'), redirects.map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n')
await fs.writeFile(
  path.join(dist, 'vercel.json'),
  JSON.stringify({ trailingSlash: true, redirects: redirects.map(([source, destination]) => ({ source, destination, permanent: true })) }, null, 2),
)
for (const [from, to] of redirects) {
  const target = `${SITE_URL}${to}`
  const file = path.join(dist, from.replace(/^\/+|\/+$/g, ''), 'index.html')
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(
    file,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${target}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><p>This page has moved to <a href="${to}">${target}</a>.</p></body></html>\n`,
  )
}

function buildLlmsTxt() {
  const { TOOLS, TOOL_CATEGORIES, GUIDES, SCREEN_PROBLEMS, GLOSSARY_ITEMS, siteConfig } = ssr
  const link = (name, href, description) => `- [${name}](${SITE_URL}${href})${description ? `: ${description}` : ''}`
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
    lines.push('', `## ${category.name}`, '', `${category.description}`, '', ...tools.map((tool) => link(tool.name, `/${tool.slug}`, tool.description)))
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

console.log(`Prerendered ${pages} pages, ${urls.length} sitemap URLs, ${redirects.length} legacy redirects, plus 404.html, robots.txt and llms.txt.`)
