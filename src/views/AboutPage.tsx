import Link from 'next/link'
import { ContentPage } from '@/components/content-page'
import { useTranslation } from '@/lib/i18n'
import { ABOUT_TRANSLATIONS } from '@/lib/content-pages-translations'

export function AboutPage() {
  const { language } = useTranslation()
  const content = ABOUT_TRANSLATIONS[language] || ABOUT_TRANSLATIONS.en

  return (
    <ContentPage title={content.title} description={content.description}>
      <p>{content.intro1}</p>
      <h2>{content.beliefsHeading}</h2>
      <ul>
        <li>{content.belief1}</li>
        <li>{content.belief2}</li>
        <li>{content.belief3}</li>
      </ul>
      <h2>{content.offersHeading}</h2>
      <p>{content.offersText}</p>
      <h2>{content.howHeading}</h2>
      <p>{content.howText1}</p>
      <p>{content.howText2}</p>
      <p>
        {content.suggestionText}{' '}
        <Link href="/feedback">{content.sendFeedbackLink}</Link> {content.or}{' '}
        <Link href="/contact">{content.getInTouchLink}</Link>.
      </p>
    </ContentPage>
  )
}
