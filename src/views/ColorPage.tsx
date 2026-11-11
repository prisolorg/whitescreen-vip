import { Hero } from '@/components/home/hero'
import type { ScreenColor } from '@/lib/screen-colors'
import { getColorPageContent } from '@/lib/color-pages'
import { useTranslation } from '@/lib/i18n'
import { localizedToolName } from '@/lib/localized-tools'

/** The interactive part of a color page (hydrated): the screen and its controls. */
export function ColorPage({ color }: { color: ScreenColor }) {
  const { language, t } = useTranslation()
  const content = getColorPageContent(color.id, language)
  const localizedName = localizedToolName(`${color.id}-screen`, language) ?? `${t(color.id, color.name)} ${t('colorScreenSuffix', 'Screen')}`
  return <Hero colorId={color.id} title={localizedName} intro={content.intro} />
}
