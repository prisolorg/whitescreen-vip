import React from 'react'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import Link from 'next/link'
import { ArrowRight, ExternalLink, HelpCircle, Eye, Palette, Lightbulb, ShieldCheck, Monitor } from 'lucide-react'
import { getBackground, getBackgrounds } from '@/lib/article-i18n'
import { backgroundText } from '@/lib/article-i18n/background-text'
import { getLocalizedPath } from '@/lib/locale-routing'
import { useTranslation } from '@/lib/i18n'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

/** The article under a background's preview. Static: rendered to HTML with no page JavaScript. */
export function BackgroundBody({ slug }: { slug: string }) {
  const { language } = useTranslation()
  const item = getBackground(slug, language)
  if (!item) return null
  const text = backgroundText(language).body
  const related = getBackgrounds(language).filter((b) => b.slug !== item.slug && b.category === item.category).slice(0, 3)

  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: item.title,
    description: item.shortDescription,
    inLanguage: language,
    contentUrl: absoluteUrl(getLocalizedPath(`/backgrounds/${item.slug}`, language)),
    representativeOfPage: true,
  }

  const faqSchema =
    item.faqs && item.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: item.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <article className="bg-background pb-8">
      <JsonLd data={imageSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        {/* Section 1: About This Background */}
        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.about}</h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <p>{item.about.overview}</p>
            <p>{item.about.colorCharacteristics}</p>
            <p className="text-muted-foreground italic">{item.about.aestheticTone}</p>
          </div>
        </section>

        {/* Section 2: View in Full Screen */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Eye className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.viewFullscreen}</h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
            {item.fullscreenGuide.instruction}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm pt-2">
            <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
              <span className="font-semibold text-foreground block mb-1">{text.optimalUses}</span>
              <p className="text-muted-foreground">{item.fullscreenGuide.bestUsedFor}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
              <span className="font-semibold text-foreground block mb-1">{text.inspectionTip}</span>
              <p className="text-muted-foreground">{item.fullscreenGuide.inspectionTip}</p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Use This Background */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.howToUse}</h2>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {item.useCases.map((uc, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground mb-1.5">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
                {uc.linkHref && uc.linkText && (
                  <div className="mt-3 pt-2.5 border-t border-border/60">
                    <Link
                      href={uc.linkHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>{uc.linkText}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Choosing the Right Background */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.choosing}</h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">{text.whenToChoose}</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.whenToChoose}</p>
            </div>
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">{text.contrast}</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.contrastAndReadability}</p>
            </div>
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">{text.alternatives}</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.alternativeConsiderations}</p>
            </div>
          </div>
        </section>

        {/* Authoritative Reference Link (When applicable) */}
        {item.authoritativeLink && (
          <section className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <ExternalLink className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-semibold text-foreground block">
                  {text.reference.replace('{title}', item.authoritativeLink.title)}
                </span>
                <p className="text-muted-foreground mt-1">{item.authoritativeLink.note}</p>
                <a
                  href={item.authoritativeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
                >
                  <span>{text.officialGuidance.replace('{org}', item.authoritativeLink.organization)}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Contextual Internal Links */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground">{text.relatedGuides}</h2>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {item.contextualLinks.map((cl, i) => (
              <Link
                key={i}
                href={cl.href}
                className="group flex flex-col justify-between rounded-xl border border-border p-3.5 hover:border-primary/50 hover:bg-accent transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                    {cl.label}
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{cl.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-primary" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.faq}</h2>
            </div>
            <div className="space-y-3">
              {item.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border/70 p-4 bg-muted/20">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground">{faq.question}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 7: Related Tools */}
        {item.relatedTools && item.relatedTools.length > 0 && (
          <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Monitor className="size-5 text-primary" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{text.relevantTools}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {item.relatedTools.map((t, i) => (
                <Link
                  key={i}
                  href={t.path}
                  className="group rounded-xl border border-border p-3.5 hover:border-primary/50 hover:bg-accent transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.description}</p>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 8: More Backgrounds in this Collection */}
        {related.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                {text.moreInCategory.replace('{category}', item.categoryLabel)}
              </h2>
              <div className="flex items-center gap-2 text-xs">
                <Link
                  href={`/backgrounds?category=${item.category}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {text.viewAllCategory.replace('{category}', item.categoryLabel)}
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/backgrounds"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  {text.allBackgrounds}
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/backgrounds/${rel.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-2xs transition-all hover:border-foreground/30"
                >
                  <div className="aspect-video w-full" style={{ background: rel.cssBackground }} />
                  <div className="p-3">
                    <span className="font-semibold text-xs text-foreground group-hover:text-primary transition-colors">
                      {rel.title}
                    </span>
                    <span className="block font-mono text-[10px] text-muted-foreground mt-0.5">
                      {rel.primaryHex}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <WhiteScreenCta className="mt-12" />
    </article>
  )
}
