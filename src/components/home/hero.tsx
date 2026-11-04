import { ScreenTool } from '@/components/screen-tool/screen-tool'
import { TryNextGallery } from '@/components/try-next-gallery'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ToolWithAds } from '@/components/tool-ads'
import { COLOR_HUB_NAMES } from '@/lib/hubs'
import { useTranslation } from '@/lib/i18n'

type HeroProps = {
  colorId?: string
  title?: string
  intro?: string
}

export function Hero({ colorId = 'white', title, intro }: HeroProps) {
  const { t, language } = useTranslation()

  const defaultTitle =
    colorId === 'white'
      ? t('heroTitle', 'White Screen')
      : `${t(colorId, colorId.charAt(0).toUpperCase() + colorId.slice(1))} ${t('colorScreenSuffix', 'Screen')}`

  return (
    <section id="tool" aria-labelledby="screen-heading" className="scroll-mt-16 pb-8 pt-3 sm:pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
        <Breadcrumbs
          items={[
            { label: t('home', 'Home'), href: '/' },
            { label: COLOR_HUB_NAMES[language][0], href: '/color-screens' },
            { label: title ?? defaultTitle, href: `/${colorId}-screen` },
          ]}
        />
        <ToolWithAds>
          <ScreenTool key={colorId} initialColorId={colorId} title={title ?? defaultTitle} intro={intro} />
        </ToolWithAds>
        <TryNextGallery currentSlug={`${colorId}-screen`} className="mt-2" />
      </div>
    </section>
  )
}
