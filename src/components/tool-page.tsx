import type { ReactNode } from 'react'
import { AdSlot } from '@/components/ad-slot'
import { ToolGlanceBlock, ToolSources } from '@/components/tool-glance'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { StageHeadingContext } from '@/components/screen-stage/stage-parts'
import { RichText, plainText } from '@/components/rich-text'
import { getLearnMoreLinks } from '@/lib/learn-more'
import Link from 'next/link'
import { getTool, toolPath } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'
import { getToolContent } from '@/lib/tool-content'
import { getToolGlance } from '@/lib/tool-content/glance'
import { TOOL_CONTENT_TRANSLATIONS } from '@/lib/tool-content/i18n'
import { TOOL_META } from '@/lib/tool-content/meta'
import { AUTHOR } from '@/lib/author'
import { getLocalizedPath } from '@/lib/locale-routing'
import { COLOR_HUB_NAMES, hubForTool } from '@/lib/hubs'
import { absoluteUrl, siteConfig } from '@/lib/site'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'

export function toolMetadata(slug: string): Record<string, unknown> {
  const tool = getTool(slug)
  const content = getToolContent(slug)
  const path = toolPath(slug)
  return {
    title: { absolute: content.title },
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: content.title, description: tool.description, url: path },
    twitter: { card: 'summary_large_image', title: content.title, description: tool.description },
  }
}

/** schema.org applicationCategory per tool category. */
const APP_CATEGORY: Record<string, string> = {
  'screen-tests': 'UtilitiesApplication',
  effects: 'MultimediaApplication',
  screensavers: 'MultimediaApplication',
  'fake-screens': 'EntertainmentApplication',
  utilities: 'UtilitiesApplication',
}

/** The interactive part of a tool page (hydrated): breadcrumbs, the tool itself and next links. */
export function ToolPage({ slug, children }: { slug: string; children: ReactNode }) {
  const { t, language } = useTranslation()
  const tool = getTool(slug)
  const localizedTool = getLocalizedTool(tool, language)
  const category = getCategory(tool.category)
  const localizedCat = getLocalizedCategory(category, language)
  const hub = hubForTool(tool)
  const hubName = language === 'en' && hub ? hub.name : hub?.group === 'colors' ? COLOR_HUB_NAMES[language][0] : localizedCat.name

  return (
    <>
      <section aria-labelledby="screen-heading" className="pb-2 pt-3 sm:pt-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
          <Breadcrumbs
            items={[
              { label: t('home', 'Home'), href: '/' },
              { label: hubName, href: hub?.path ?? `/tools#${category.id}` },
              { label: localizedTool.name, href: toolPath(slug) },
            ]}
          />
          {/* The stage shows the page title on itself, like the color screens. */}
          <StageHeadingContext.Provider value={{ title: localizedTool.name, intro: localizedTool.description }}>
            {children}
          </StageHeadingContext.Provider>
        </div>
      </section>

    </>
  )
}

/** The reading part of a tool page, rendered to static HTML with no JavaScript: schema, about, how-to, links and FAQ. */
export function ToolPageBody({ slug }: { slug: string }) {
  const { t, language } = useTranslation()
  const tool = getTool(slug)
  const localizedTool = getLocalizedTool(tool, language)
  const english = getToolContent(slug)
  // Other languages show only text that has been translated; untranslated pages are noindexed.
  const translated = language === 'en' ? undefined : TOOL_CONTENT_TRANSLATIONS[language]?.[slug]
  const content = language === 'en' ? english : { ...english, steps: translated?.steps ?? [], useCases: translated?.useCases ?? [], faqs: translated?.faqs ?? [] }
  const category = getCategory(tool.category)
  const localizedCat = getLocalizedCategory(category, language)
  // Articles are English-only, so the cross-links only appear on English pages.
  const learnMore = language === 'en' ? getLearnMoreLinks(toolPath(slug)) : []

  const glance = getToolGlance(slug, language)
  const pageUrl = absoluteUrl(getLocalizedPath(toolPath(slug), language))
  const appSchema = {
    '@context': 'https://schema.org',
    // A web app that is also software: eligible for software app rich results.
    '@type': ['WebApplication', 'SoftwareApplication'],
    '@id': `${pageUrl}#app`,
    name: localizedTool.name,
    url: pageUrl,
    description: language === 'en' ? (TOOL_META[slug]?.[1] ?? localizedTool.description) : localizedTool.description,
    abstract: glance?.answer,
    applicationCategory: APP_CATEGORY[tool.category],
    applicationSubCategory: localizedCat.name,
    operatingSystem: 'Windows, macOS, Linux, ChromeOS, Android, iOS',
    browserRequirements: 'Requires a modern web browser with JavaScript',
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    image: absoluteUrl(`/og/${slug}.png`),
    screenshot: absoluteUrl(`/og/${slug}.png`),
    featureList: glance?.features,
    isAccessibleForFree: true,
    creator: { '@type': 'Person', '@id': `${absoluteUrl(AUTHOR.path)}#person`, name: AUTHOR.name, url: absoluteUrl(AUTHOR.path) },
    publisher: { '@type': 'Organization', '@id': `${absoluteUrl('/')}#organization`, name: siteConfig.name, url: absoluteUrl('/') },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    ...(glance?.sources?.some((source) => source.url.includes('wikipedia.org')) && {
      about: glance.sources.filter((source) => source.url.includes('wikipedia.org')).map((source) => ({ '@type': 'Thing', name: source.label.replace(' (Wikipedia)', ''), sameAs: source.url })),
    }),
  }

  const faqSchema = content.faqs.length > 0 && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(faq.answer) },
    })),
  }

  const howToUseHeading = t('howToUse', 'How to use the {tool}').replace('{tool}', localizedTool.name)

  return (
    <>
      <JsonLd data={appSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      {glance && <ToolGlanceBlock name={localizedTool.name} glance={glance} />}
      <AdSlot placement="top" />
      {language === 'en' && (
        <section aria-labelledby="about-heading" className="border-t py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 id="about-heading" className="text-2xl font-semibold tracking-tight">
              About the {localizedTool.name}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/85">
              <RichText text={content.intro} />
            </p>
            {content.details?.map((detail) => (
              <div key={detail.heading} className="mt-8">
                <h3 className="text-lg font-semibold tracking-tight">{detail.heading}</h3>
                {detail.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="mt-3 text-pretty leading-relaxed text-foreground/85">
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {content.steps.length > 0 && (
        <section aria-labelledby="how-heading" className="border-y bg-muted/40 py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 id="how-heading" className="text-2xl font-semibold tracking-tight">
                {howToUseHeading}
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {content.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs"
                    >
                      {index + 1}
                    </span>
                    <p className="pt-0.5 leading-relaxed text-foreground/85"><RichText text={step} /></p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t('commonUses', 'Common uses')}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.useCases.map((use) => (
                  <li key={use.title} className="rounded-xl border bg-card p-4">
                    <h3 className="font-medium">{use.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{use.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <AdSlot placement="content" className="pt-10" />

      {content.faqs.length > 0 && (
        <section aria-labelledby="faq-heading" className="py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 id="faq-heading" className="mb-6 text-2xl font-semibold tracking-tight">
              {t('faqTitle', 'Frequently asked questions')}
            </h2>
            <FaqList faqs={content.faqs} />
          </div>
        </section>
      )}
      {glance?.sources && <ToolSources sources={glance.sources} />}
      {learnMore.length > 0 && (
        <section aria-labelledby="learn-heading" className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="learn-heading" className="text-2xl font-semibold tracking-tight">
              Guides and fixes that use the {localizedTool.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {learnMore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex h-full flex-col gap-1.5 rounded-xl border bg-card p-4 transition-colors hover:border-foreground/25"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.kind === 'guide' ? 'Guide' : item.kind === 'problem' ? 'Screen problem' : 'Glossary'}
                    </span>
                    <span className="font-medium">{item.title}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
