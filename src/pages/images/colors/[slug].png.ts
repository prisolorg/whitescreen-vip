import type { APIRoute } from 'astro'
import { SCREEN_COLORS } from '@/lib/screen-colors'
import { solidColorPng } from '@/lib/og-image'

/** /images/colors/black-screen.png etc.: the solid color images shown on color pages. */
export function getStaticPaths() {
  return SCREEN_COLORS.map((color) => ({
    params: { slug: color.path === '/' ? 'white-screen' : color.path.slice(1) },
    props: { hex: color.hex },
  }))
}

export const GET: APIRoute = ({ props }) =>
  new Response(new Uint8Array(solidColorPng(props.hex as string)), { headers: { 'Content-Type': 'image/png' } })
