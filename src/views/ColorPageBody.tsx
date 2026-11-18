import type { ComponentType } from 'react'
import { Section } from '@/components/section'
import { InlineAd } from '@/components/tool-ads'
import { usesStudioLayout } from '@/lib/studio-layout'
import { ColorScreenLinks } from '@/components/color-screen-links'
import { JsonLd } from '@/components/json-ld'
import type { ScreenColor } from '@/lib/screen-colors'
import { getColorPageContent } from '@/lib/color-pages'
import { absoluteUrl } from '@/lib/site'
import { useTranslation } from '@/lib/i18n'
import { localizedToolName } from '@/lib/localized-tools'
import { TOOL_H1_EN } from '@/lib/tool-content/h1'
import { COLOR_GUIDES } from '@/lib/color-guides'
import { localizedColorGuide, localizedGlanceHeading } from '@/lib/tool-content/localized-guides'
import { FaqList } from '@/components/faq-list'
import { RichText, plainText } from '@/components/rich-text'
import { ToolGlanceBlock, ToolSources } from '@/components/tool-glance'
import { aggregateRating, ratingFor } from '@/lib/rating-snapshot'
import { ColorImage } from '@/components/color-image'
import { getToolGlance } from '@/lib/tool-content/glance'
import { getLocalizedPath } from '@/lib/locale-routing'
import { AUTHOR } from '@/lib/author'
import { BlackScreenGuide } from '@/components/home/black-screen-guide'
import { YellowScreenGuide } from '@/components/home/yellow-screen-guide'
import { GreenScreenGuide } from '@/components/home/green-screen-guide'
import { BlueScreenGuide } from '@/components/home/blue-screen-guide'
import { RedScreenGuide } from '@/components/home/red-screen-guide'
import { PinkScreenGuide } from '@/components/home/pink-screen-guide'
import { GreyScreenGuide } from '@/components/home/grey-screen-guide'
import { PurpleScreenGuide } from '@/components/home/purple-screen-guide'

/** The reading part of a color page, rendered to static HTML with no JavaScript. */
export function ColorPageBody({ color }: { color: ScreenColor }) {
  const { language, t } = useTranslation()
  const content = getColorPageContent(color.id, language)

  const toolSlug = `${color.id}-screen`
  const localizedName =
    (language === 'en' ? TOOL_H1_EN[toolSlug] : undefined) ??
    localizedToolName(toolSlug, language) ??
    `${t(color.id, color.name)} ${t('colorScreenSuffix', 'Screen')}`

  const glance = getToolGlance(toolSlug, language)
  const pageUrl = absoluteUrl(getLocalizedPath(color.path, language))
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['WebApplication', 'SoftwareApplication'],
    '@id': `${pageUrl}#app`,
    name: localizedName,
    url: pageUrl,
    description: content.description,
    abstract: glance?.answer,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows, macOS, Linux, ChromeOS, Android, iOS',
    browserRequirements: 'Requires a modern web browser with JavaScript',
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    image: absoluteUrl(`/images/colors/${toolSlug}.png`),
    featureList: glance?.features,
    isAccessibleForFree: true,
    creator: { '@type': 'Person', '@id': `${absoluteUrl(AUTHOR.path)}#person`, name: AUTHOR.name },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    ...aggregateRating(color.path),
  }

  // Long-form copy is English-only; other languages keep the translated intro and use cases.
  const localized = language === 'en' ? undefined : localizedColorGuide(language, color.id)
  const guide = language === 'en' ? COLOR_GUIDES[color.id] : localized && { sections: [], faqs: localized.faqs }
  // Keyword-led English pages replace the generic use-case grid, guide and colour links (the gallery above has them).
  const KeywordGuide =
    language === 'en'
      ? ({ black: BlackScreenGuide, yellow: YellowScreenGuide, green: GreenScreenGuide, blue: BlueScreenGuide, red: RedScreenGuide, pink: PinkScreenGuide, gray: GreyScreenGuide, purple: PurpleScreenGuide } as Record<string, ComponentType | undefined>)[color.id]
      : localized?.Guide
  const faqSchema = guide && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(faq.answer) },
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      {glance && <ToolGlanceBlock name={localizedName} heading={language === 'en' ? undefined : localizedGlanceHeading(language, `${color.id}-screen`)} glance={glance} rating={ratingFor(color.path)} />}
      {usesStudioLayout(color.id) && <InlineAd className="mx-auto my-6 px-3 md:hidden" />}
      <ColorImage color={color} name={localizedName} />
      {KeywordGuide && <KeywordGuide />}
      {!KeywordGuide && (
      <Section
        id="use-cases"
        eyebrow={t('useCasesEyebrow', 'Use cases')}
        title={t('commonUses', 'Common uses')}
        className="border-y bg-muted/40"
      >
        <ul className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {content.uses.map((use) => (
            <li key={use.title} className="bg-card p-6">
              <h3 className="font-medium">{use.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {use.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      )}
      {guide && guide.sections.length > 0 && (
        <Section id="guide" eyebrow={`${localizedName} guide`} title={`Getting the most from a ${color.name.toLowerCase()} screen`}>
          <div className="grid max-w-3xl gap-10">
            {guide.sections.map((section) => (
              <article key={section.heading}>
                <h3 className="text-xl font-semibold tracking-tight">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-3 text-pretty leading-relaxed text-foreground/85">
                    <RichText text={paragraph} />
                  </p>
                ))}
              </article>
            ))}
          </div>
        </Section>
      )}
      {guide && (
        <Section id="faq" title="FAQ" className="border-t">
          <div className="max-w-3xl">
            <FaqList faqs={guide.faqs} />
          </div>
        </Section>
      )}
      {glance?.sources && <ToolSources sources={glance.sources} />}
      {!KeywordGuide && <ColorScreenLinks currentId={color.id} />}
    </>
  )
}
