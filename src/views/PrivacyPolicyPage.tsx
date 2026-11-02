import { ContentPage } from '@/components/content-page'
import { useTranslation } from '@/lib/i18n'
import { PRIVACY_TRANSLATIONS } from '@/lib/content-pages-translations'

export function PrivacyPolicyPage() {
  const { language } = useTranslation()
  const content = PRIVACY_TRANSLATIONS[language] || PRIVACY_TRANSLATIONS.en

  return (
    <ContentPage title={content.title} description={content.description} updated={content.updated}>
      <h2>{content.infoHeading}</h2>
      <p>{content.infoText}</p>

      <h2>{content.cameraHeading}</h2>
      <p>{content.cameraText}</p>

      <h2>{content.analyticsHeading}</h2>
      <p>{content.analyticsText}</p>

      <h2>{content.cookiesHeading}</h2>
      <p>{content.cookiesText}</p>

      <h2>{content.thirdPartiesHeading}</h2>
      <p>{content.thirdPartiesText}</p>

      <h2>{content.contactHeading}</h2>
      <p>{content.contactText}</p>
    </ContentPage>
  )
}
