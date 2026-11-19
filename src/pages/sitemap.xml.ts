import { buildSitemap } from '@/lib/crawl-files'

export const GET = () => new Response(buildSitemap(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
