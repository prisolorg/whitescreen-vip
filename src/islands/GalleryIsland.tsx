import { Providers } from './Providers'
import { TryNextGallery } from '@/components/try-next-gallery'
import { InlineAd } from '@/components/tool-ads'
import { STUDIO_TOOL_PAGES } from '@/lib/studio-layout'

/** "Try next" tool gallery right under a tool, above the fold; hydrates when it comes into view. */
export default function GalleryIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <section className="pb-8 pt-1">
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <TryNextGallery currentSlug={slug} video={STUDIO_TOOL_PAGES} className={STUDIO_TOOL_PAGES ? 'mt-4' : undefined} />
          {/* Studio layout: the first ad on desktop and tablet comes after the gallery; phones get theirs later. */}
          {STUDIO_TOOL_PAGES && <InlineAd className="mt-6 hidden md:flex" />}
        </div>
      </section>
    </Providers>
  )
}
