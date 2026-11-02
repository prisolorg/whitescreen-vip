import { ContentPage } from '@/components/content-page'
import { useTranslation } from '@/lib/i18n'
import { DISCLAIMER_TRANSLATIONS } from '@/lib/content-pages-translations'

export function DisclaimerPage() {
  const { language } = useTranslation()
  const content = DISCLAIMER_TRANSLATIONS[language] || DISCLAIMER_TRANSLATIONS.en

  return (
    <ContentPage title={content.title} description={content.description} updated={content.updated}>
      <h2>{content.generalHeading}</h2>
      <p>{content.generalText}</p>

      <h2>{content.healthHeading}</h2>
      <p>{content.healthText}</p>

      <h2>{content.hardwareHeading}</h2>
      <p>{content.hardwareText}</p>

      <h2>{content.trademarksHeading}</h2>
      <p>{content.trademarksText}</p>

      <h2>{content.liabilityHeading}</h2>
      <p>{content.liabilityText}</p>
    </ContentPage>
  )
}
