import { ContentPage } from '@/components/content-page'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'
import { TERMS_TRANSLATIONS } from '@/lib/content-pages-translations'

export function TermsPage() {
  const { language } = useTranslation()
  const content = TERMS_TRANSLATIONS[language] || TERMS_TRANSLATIONS.en

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      updated={content.updated}
    >
      <h2>{content.acceptanceHeading}</h2>
      <p>{content.acceptanceText}</p>

      <h2>{content.educationalHeading}</h2>
      <p>{content.educationalText}</p>
      <ul>
        <li>{content.educationalItem1}</li>
        <li>{content.educationalItem2}</li>
      </ul>

      <h2>{content.safetyHeading}</h2>
      <p>{content.safetyText}</p>

      <h2>{content.disclaimerHeading}</h2>
      <p>{content.disclaimerText}</p>

      <h2>{content.liabilityHeading}</h2>
      <p>{content.liabilityText}</p>

      <h2>{content.questionsHeading}</h2>
      <p>
        {content.questionsText}{' '}
        <Link href="/contact">{content.contactLink}</Link>.
      </p>
    </ContentPage>
  )
}
