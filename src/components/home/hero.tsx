import { ScreenTool } from '@/components/screen-tool/screen-tool'
import { useTranslation } from '@/lib/i18n'

type HeroProps = {
  colorId?: string
  title?: string
  intro?: string
}

export function Hero({
  colorId = 'white',
  title,
  intro,
}: HeroProps) {
  const { t } = useTranslation()

  const defaultTitle = colorId === 'white' ? t('heroTitle', 'White Screen') : `${t(colorId, colorId.charAt(0).toUpperCase() + colorId.slice(1))} Screen`
  const defaultIntro = colorId === 'white' ? t('heroIntro', 'Turn your display into a clean, bright white screen in one click. Use it as a light source, to test for dead pixels, or to clean your monitor — or switch to any other color.') : intro

  return (
    <section id="tool" aria-labelledby="hero-heading" className="scroll-mt-16 py-4 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 lg:items-center">
          {/* Left column – Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h1
              id="hero-heading"
              className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
            >
              {title ?? defaultTitle}
            </h1>
            <p className="mt-3 sm:mt-4 text-pretty text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              {intro ?? defaultIntro}
            </p>
          </div>

          {/* Right column – White Screen Tool */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0 w-full">
            <ScreenTool key={colorId} initialColorId={colorId} />
          </div>
        </div>
      </div>
    </section>
  )
}
