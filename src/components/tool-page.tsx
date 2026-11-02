import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { TryNextGallery, TryNextStrip } from '@/components/try-next-gallery'
import { RichText, plainText } from '@/components/rich-text'
import { getLearnMoreLinks } from '@/lib/learn-more'
import Link from 'next/link'
import { getTool, toolPath } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'
import { getToolContent } from '@/lib/tool-content'
import { absoluteUrl, siteConfig } from '@/lib/site'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/tool-translations'

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

export function ToolPage({ slug, children }: { slug: string; children: ReactNode }) {
  const { t, language } = useTranslation()
  const tool = getTool(slug)
  const localizedTool = getLocalizedTool(tool, language)
  const content = getToolContent(slug)
  const category = getCategory(tool.category)
  const localizedCat = getLocalizedCategory(category, language)
  // Articles are English-only, so the cross-links only appear on English pages.
  const learnMore = language === 'en' ? getLearnMoreLinks(toolPath(slug)) : []

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: localizedTool.name,
    url: absoluteUrl(toolPath(slug)),
    description: localizedTool.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    isAccessibleForFree: true,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqSchema = {
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
      <JsonLd data={faqSchema} />

      <section aria-labelledby="tool-heading" className="pb-10 pt-4 sm:pt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: t('home', 'Home'), href: '/' },
              { label: localizedCat.name, href: `/tools#${category.id}` },
              { label: localizedTool.name, href: toolPath(slug) },
            ]}
          />
          <div className="mb-4 mt-3 max-w-3xl">
            <h1 id="tool-heading" className="text-balance text-2xl font-bold tracking-tight sm:text-4xl">
              {localizedTool.name}
            </h1>
            <p className="mt-2 line-clamp-2 text-pretty leading-relaxed text-muted-foreground sm:line-clamp-none">
              {language === 'en' ? <RichText text={content.intro} /> : localizedTool.description}
            </p>
          </div>
          {/* Next steps stay visible above the fold, before the tool itself. */}
          <TryNextStrip currentSlug={slug} className="mb-4" />
          {children}
          <TryNextGallery currentSlug={slug} className="mt-8" />
        </div>
      </section>

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

      <section aria-labelledby="faq-heading" className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-heading" className="mb-6 text-2xl font-semibold tracking-tight">
            {t('faqTitle', 'Frequently asked questions')}
          </h2>
          <FaqList faqs={content.faqs} />
        </div>
      </section>

    </>
  )
}
