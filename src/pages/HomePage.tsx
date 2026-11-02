import { HomeTool } from '@/components/home/home-tool'
import { HomeSections, HOMEPAGE_FAQS } from '@/components/home/home-sections'
import { Benefits } from '@/components/home/benefits'
import { UseCases } from '@/components/home/use-cases'
import { HowToUse } from '@/components/home/how-to-use'
import { Faq } from '@/components/home/faq'
import { ToolSections } from '@/components/home/tool-sections'
import { ColorScreenLinks } from '@/components/color-screen-links'
import { TryNextGallery } from '@/components/try-next-gallery'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'

export function HomePage() {
  const { language, t } = useTranslation()
  const isEnglish = language === 'en'
  // The long-form HomeSections copy only exists in English; other locales use the translated sections.
  const faqs = isEnglish ? HOMEPAGE_FAQS : getHomeContent(language).faqs

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('homeTitle', 'White Screen Online'),
    url: absoluteUrl(getLocalizedPath('/', language)),
    description: t(
      'homeMetaDesc',
      'Open a free fullscreen white screen online. Switch colors, test your display, adjust brightness, and download white screen PNG images.',
    ),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      <HomeTool />
      <div className="mx-auto max-w-5xl px-3 pb-10 sm:px-6">
        <TryNextGallery currentSlug="white-screen" />
      </div>
      {isEnglish ? (
        <HomeSections />
      ) : (
        <>
          <Benefits />
          <UseCases />
          <HowToUse />
          <ToolSections />
          <ColorScreenLinks currentId="white" />
          <Faq />
        </>
      )}
    </>
  )
}
