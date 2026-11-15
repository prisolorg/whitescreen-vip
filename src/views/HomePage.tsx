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
      <section aria-labelledby="screen-heading" data-wide-page className="mx-auto flex max-w-[1316px] flex-col gap-3 px-3 pb-8 sm:px-6">
        <ScreenStudio initialColorId="white" title={t('homeTitle', 'White Screen')} focus rail grown />
        <TryNextGallery currentSlug="white-screen" className="mt-4" defaultTab="colors" video />
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
