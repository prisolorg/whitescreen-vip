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
import { AdSlot } from '@/components/ad-slot'
import { ColorImage } from '@/components/color-image'
import { ToolGlanceBlock } from '@/components/tool-glance'
import { getToolGlance } from '@/lib/tool-content/glance'
import { SCREEN_COLORS } from '@/lib/screen-colors'

/** The interactive part of the homepage (hydrated): the white screen tool and the tool gallery. */
export function HomePage() {
  return (
    <>
      <HomeTool />
      <div className="mx-auto max-w-7xl px-3 pb-10 pt-2 sm:px-6">
        <TryNextGallery currentSlug="white-screen" />
      </div>
    </>
  )
}

/** The reading part of the homepage, rendered to static HTML with no JavaScript. */
export function HomePageBody() {
  const { language, t } = useTranslation()
  const isEnglish = language === 'en'
  // The long-form HomeSections copy only exists in English; other locales use the translated sections.
  const glance = getToolGlance('white-screen', language)
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
      {isEnglish ? (
        <HomeSections />
      ) : (
        <>
          {glance && <ToolGlanceBlock name={t('homeTitle', 'White Screen')} glance={glance} />}
          <ColorImage color={SCREEN_COLORS[0]} name={t('homeTitle', 'White Screen')} />
          <AdSlot placement="top" />
          <Benefits />
          <UseCases />
          <HowToUse />
          <ToolSections />
          <AdSlot placement="content" />
          <Faq />
          <ColorScreenLinks currentId="white" />
        </>
      )}
    </>
  )
}
