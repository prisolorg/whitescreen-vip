import { Providers } from './Providers'
import { TryNextGallery } from '@/components/try-next-gallery'

/** "Try next" tool gallery right under a tool, above the fold; hydrates when it comes into view. */
export default function GalleryIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <section className="pb-8 pt-1">
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <TryNextGallery currentSlug={slug} />
        </div>
      </section>
    </Providers>
  )
}
