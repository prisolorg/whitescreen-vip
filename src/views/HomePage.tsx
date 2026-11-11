import { HomeTool } from '@/components/home/home-tool'
import { TryNextGallery } from '@/components/try-next-gallery'

/** The interactive part of the homepage (hydrated): the white screen tool and the tool gallery. */
export function HomePage() {
  return (
    <>
      <HomeTool />
      <div className="mx-auto max-w-7xl px-3 pb-10 pt-2 sm:px-6">
        <TryNextGallery currentSlug="white-screen" />
      </div>
    </>
  )
}
