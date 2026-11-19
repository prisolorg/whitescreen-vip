import { buildRobotsTxt } from '@/lib/crawl-files'

export const GET = () => new Response(buildRobotsTxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
