import { HomeTool } from '@/components/home/home-tool'
import { ScreenStudio } from '@/components/screen-studio/screen-studio'
import { InlineAd } from '@/components/tool-ads'
import { TryNextGallery } from '@/components/try-next-gallery'
import { useTranslation } from '@/lib/i18n'
import { usesStudioLayout } from '@/lib/studio-layout'

/** The interactive part of the homepage (hydrated): the white screen tool and the tool gallery. */
export function HomePage() {
  const { t } = useTranslation()
  if (usesStudioLayout('white')) {
    return (
      <section aria-labelledby="screen-heading" data-wide-page data-compact-header className="mx-auto flex max-w-[1316px] flex-col gap-3 px-3 pb-8 sm:px-6">
        {/* Trial: no colour row; the related screens sit under the tool beside the ad, as on tool pages. */}
        <ScreenStudio
          initialColorId="white"
          title={t('homeTitle', 'White Screen')}
          focus
          rail
          grown
          attached
          swatches={false}
          belowTool={<TryNextGallery currentSlug="white-screen" className="mt-3" defaultTab="colors" video toolLayout />}
        />
        {/* First ad on desktop and tablet, after the gallery; phones get theirs after the first content section. */}
        <InlineAd className="mt-6 hidden md:flex" />
      </section>
    )
  }
  return (
    <>
      <HomeTool />
      <div className="mx-auto max-w-7xl px-3 pb-10 pt-2 sm:px-6">
        <TryNextGallery currentSlug="white-screen" />
      </div>
    </>
  )
}
