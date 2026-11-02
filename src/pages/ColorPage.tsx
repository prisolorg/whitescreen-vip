import { Hero } from '@/components/home/hero'
import { Section } from '@/components/section'
import { ColorScreenLinks } from '@/components/color-screen-links'
import { JsonLd } from '@/components/json-ld'
import type { ScreenColor } from '@/lib/screen-colors'
import { getColorPageContent } from '@/lib/color-pages'
import { absoluteUrl } from '@/lib/site'
import { useTranslation } from '@/lib/i18n'
import { TOOL_TRANSLATIONS } from '@/lib/tool-translations'
import { COLOR_GUIDES } from '@/lib/color-guides'
import { FaqList } from '@/components/faq-list'
import { RichText, plainText } from '@/components/rich-text'

export function ColorPage({ color }: { color: ScreenColor }) {
  const { language, t } = useTranslation()
  const content = getColorPageContent(color.id, language)

  const toolSlug = `${color.id}-screen`
  const localizedName =
    TOOL_TRANSLATIONS[language]?.[toolSlug]?.name ??
    `${t(color.id, color.name)} ${t('colorScreenSuffix', 'Screen')}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: localizedName,
    url: absoluteUrl(color.path),
    description: content.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  // Long-form copy is English-only; other languages keep the translated intro and use cases.
  const guide = language === 'en' ? COLOR_GUIDES[color.id] : undefined
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
      <Hero colorId={color.id} title={localizedName} intro={content.intro} />
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
      {guide && (
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
      <ColorScreenLinks currentId={color.id} />
      {guide && (
        <Section id="faq" title={`${localizedName} FAQ`} className="border-t">
          <div className="max-w-3xl">
            <FaqList faqs={guide.faqs} />
          </div>
        </Section>
      )}
    </>
  )
}
