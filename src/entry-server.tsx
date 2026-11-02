// Server entry used only by scripts/prerender.mjs to turn every route into static HTML.
import { prerenderToNodeStream } from 'react-dom/static'
import App from './App'

export { getPageSeo, renderHeadTags, getAllRoutes, getAliasRoutes, getIndexableRoutes, isEnglishOnlyPath, SITE_URL } from './lib/seo'
export { SUPPORTED_LOCALES, getLocalizedPath } from './lib/locale-routing'
export { TOOLS } from './lib/tools'
export { TOOL_CATEGORIES } from './lib/tool-categories'
export { SCREEN_COLORS } from './lib/screen-colors'
export { GUIDES } from './lib/guides-content'
export { SCREEN_PROBLEMS } from './lib/screen-problems-data'
export { GLOSSARY_ITEMS } from './lib/glossary-data'
export { BACKGROUND_ITEMS } from './lib/backgrounds-data'
export { siteConfig } from './lib/site'

/** Renders a URL (with locale prefix) to HTML, waiting for lazy pages and Suspense boundaries. */
export async function render(url: string): Promise<string> {
  // React outlines large Suspense boundaries into a hidden block swapped in by a script.
  // Crawlers that don't run JavaScript need the content in place, so never outline.
  const { prelude } = await prerenderToNodeStream(<App url={url} />, { progressiveChunkSize: Infinity })
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}
