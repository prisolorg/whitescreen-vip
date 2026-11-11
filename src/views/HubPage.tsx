import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { ToolGrid } from '@/components/tool-card'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import { COLOR_HUB_NAMES, HUBS, getHub, hubTools } from '@/lib/hubs'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'
import { absoluteUrl } from '@/lib/site'
import { getCategory } from '@/lib/tool-categories'
import { toolPath } from '@/lib/tools'
import Link from 'next/link'
import { TOPIC_TRANSLATIONS } from '@/lib/topic-i18n'

/**
 * A topic hub: the plain-keyword H1, a direct answer, every tool in the topic, then the longer
 * explanation and FAQ (English pages). Static HTML, no JavaScript.
 */
export function HubPage({ path }: { path: string }) {
  const { language, t } = useTranslation()
  const hub = getHub(path)!
  const isEnglish = language === 'en'
  const localizedCategory = hub.group === 'colors' ? undefined : getLocalizedCategory(getCategory(hub.group), language)
  // Translated hub text where it exists; otherwise the translated category description.
  const translated = isEnglish ? undefined : TOPIC_TRANSLATIONS[language]?.hubs[hub.path]
  const content = isEnglish ? { intro: hub.intro, details: hub.details, faqs: hub.faqs } : translated
  const name = isEnglish ? hub.name : hub.group === 'colors' ? COLOR_HUB_NAMES[language][0] : localizedCategory!.name
  const summary = content?.intro ?? (hub.group === 'colors' ? COLOR_HUB_NAMES[language][1] : localizedCategory!.description)
  const tools = hubTools(hub)
  const pageUrl = absoluteUrl(getLocalizedPath(hub.path, language))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description: summary,
    url: pageUrl,
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: getLocalizedTool(tool, language).name,
        url: absoluteUrl(getLocalizedPath(toolPath(tool.slug), language)),
      })),
    },
  }
  const faqSchema = content && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  }

  return (
    <>
      <JsonLd data={schema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: name, href: hub.path },
          ]}
        />
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{name}</h1>
        <p className="mt-3 max-w-3xl text-pretty text-lg leading-relaxed text-foreground/85">{summary}</p>
      </section>
      <section aria-label={name} className="mx-auto max-w-7xl px-4 sm:px-6">
        <ToolGrid tools={tools} />
      </section>
      {content && (
        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          {content.details.map((detail, index) => (
            <div key={detail.heading} className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">{detail.heading}</h2>
              <p className="mt-3 text-pretty leading-relaxed text-foreground/85">{detail.text}</p>
            </div>
          ))}
          <h2 className="mb-6 mt-4 text-2xl font-semibold tracking-tight">
            {isEnglish ? `${hub.name} FAQ` : t('faqTitle', 'Frequently asked questions')}
          </h2>
          <FaqList faqs={content.faqs} />
        </section>
      )}
      <nav aria-label="More topics" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <ul className="flex flex-wrap gap-2">
          {HUBS.filter((other) => other.path !== hub.path).map((other) => {
            const otherName = isEnglish
              ? other.name
              : other.group === 'colors'
                ? COLOR_HUB_NAMES[language][0]
                : getLocalizedCategory(getCategory(other.group), language).name
            return (
              <li key={other.path}>
                <Link href={other.path} className="inline-flex rounded-full border px-3.5 py-1.5 text-sm font-medium hover:bg-accent">
                  {otherName}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {hub.group !== 'colors' && <WhiteScreenCta className="mb-12" />}
    </>
  )
}
