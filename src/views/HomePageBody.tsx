import { HomeSections, HOMEPAGE_FAQS } from '@/components/home/home-sections'
import { InlineAd } from '@/components/tool-ads'
import { usesStudioLayout } from '@/lib/studio-layout'
import { Benefits } from '@/components/home/benefits'
import { UseCases } from '@/components/home/use-cases'
import { HowToUse } from '@/components/home/how-to-use'
import { Faq } from '@/components/home/faq'
import { ToolSections } from '@/components/home/tool-sections'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'
import { ColorImage } from '@/components/color-image'
import { ToolGlanceBlock } from '@/components/tool-glance'
import { aggregateRating, ratingFor } from '@/lib/rating-snapshot'
import { getToolGlance } from '@/lib/tool-content/glance'
import { SCREEN_COLORS } from '@/lib/screen-colors'
import { Section } from '@/components/section'
import { FaqList } from '@/components/faq-list'
import { plainText } from '@/components/rich-text'
import { localizedColorGuide, localizedGlanceHeading } from '@/lib/tool-content/localized-guides'

/** The reading part of the homepage, rendered to static HTML with no JavaScript. */
export function HomePageBody() {
  const { language, t } = useTranslation()
  const isEnglish = language === 'en'
  // The long-form HomeSections copy only exists in English; other locales use the translated sections.
  const glance = getToolGlance('white-screen', language)
  // A translated keyword-led white screen guide, where one exists, replaces the older translated sections.
  const homeGuide = isEnglish ? undefined : localizedColorGuide(language, 'white')
  const faqs = isEnglish ? HOMEPAGE_FAQS : (homeGuide?.faqs ?? getHomeContent(language).faqs)

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
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    browserRequirements: 'Requires a modern web browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    ...aggregateRating('/'),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(faq.answer) },
    })),
  }

  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      {isEnglish ? (
        <HomeSections />
      ) : homeGuide ? (
        <>
          {glance && (
            <ToolGlanceBlock name={t('homeTitle', 'White Screen')} heading={localizedGlanceHeading(language, 'white-screen')} glance={glance} rating={ratingFor('/')} />
          )}
          {usesStudioLayout('white') && <InlineAd className="mx-auto my-6 px-3 md:hidden" />}
          <ColorImage color={SCREEN_COLORS[0]} name={t('homeTitle', 'White Screen')} />
          <homeGuide.Guide />
          <Section id="faq" title="FAQ" className="border-t">
            <div className="max-w-3xl">
              <FaqList faqs={homeGuide.faqs} />
            </div>
          </Section>
        </>
      ) : (
        <>
          {glance && <ToolGlanceBlock name={t('homeTitle', 'White Screen')} glance={glance} rating={ratingFor('/')} />}
          {usesStudioLayout('white') && <InlineAd className="mx-auto my-6 px-3 md:hidden" />}
          <ColorImage color={SCREEN_COLORS[0]} name={t('homeTitle', 'White Screen')} />
          <Benefits />
          <UseCases />
          <HowToUse />
          <ToolSections />
          <Faq />
        </>
      )}
    </>
  )
}
