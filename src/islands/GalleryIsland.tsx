import { Providers } from './Providers'
import { TryNextGallery } from '@/components/try-next-gallery'
import { WhiteScreenCta } from '@/components/white-screen-cta'

/** "Try next" tool gallery under a page's reading content; hydrates only when scrolled into view. */
export default function GalleryIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <section className="border-t pb-10 pt-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <TryNextGallery currentSlug={slug} />
        </div>
        {slug !== 'white-screen' && <WhiteScreenCta className="mt-6" />}
      </section>
    </Providers>
  )
}
