import { ScreenTool } from '@/components/screen-tool/screen-tool'
import { TryNextGallery } from '@/components/try-next-gallery'
import { useTranslation } from '@/lib/i18n'

type HeroProps = {
  colorId?: string
  title?: string
  intro?: string
}

export function Hero({ colorId = 'white', title, intro }: HeroProps) {
  const { t } = useTranslation()

  const defaultTitle =
    colorId === 'white'
      ? t('heroTitle', 'White Screen')
      : `${t(colorId, colorId.charAt(0).toUpperCase() + colorId.slice(1))} ${t('colorScreenSuffix', 'Screen')}`

  return (
    <section id="tool" aria-labelledby="hero-heading" className="scroll-mt-16 pb-8 pt-3 sm:pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 sm:px-6">
        <ScreenTool key={colorId} initialColorId={colorId} title={title ?? defaultTitle} intro={intro} />
        <TryNextGallery currentSlug={`${colorId}-screen`} />
      </div>
    </section>
  )
}
