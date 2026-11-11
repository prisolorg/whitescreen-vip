import { buildLlmsTxt } from '@/lib/crawl-files'

export const GET = () => new Response(buildLlmsTxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
