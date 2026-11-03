import type { ScreenColor } from '@/lib/screen-colors'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

/**
 * A real, downloadable PNG of the solid color (generated at build time, 1920×1080), so the page
 * can appear in Google Images for "<color> screen" searches.
 */
export function ColorImage({ color, name }: { color: ScreenColor; name: string }) {
  const slug = color.path === '/' ? 'white-screen' : color.path.slice(1)
  const src = `/images/colors/${slug}.png`
  const alt = `${name}: solid ${color.name.toLowerCase()} (${color.hex}) full HD 1920×1080 image`
  return (
    <figure className="mx-auto max-w-5xl px-4 pt-2 sm:px-6">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          contentUrl: absoluteUrl(src),
          name: `${color.name} screen image (${color.hex})`,
          description: alt,
          width: 1920,
          height: 1080,
          encodingFormat: 'image/png',
          creditText: 'WhiteScreen.vip',
          copyrightNotice: 'Free to use',
          license: absoluteUrl('/terms'),
          acquireLicensePage: absoluteUrl('/terms'),
        }}
      />
      <a href={src} download className="block overflow-hidden rounded-xl border">
        <img src={src} alt={alt} width={1920} height={1080} loading="lazy" decoding="async" className="aspect-video w-full" style={{ backgroundColor: color.hex }} />
      </a>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        {name} · {color.hex} · 1920 × 1080 PNG ↓
      </figcaption>
    </figure>
  )
}
