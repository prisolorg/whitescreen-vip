import { Check, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import type { ToolGlance } from '@/lib/tool-content/glance'
import { AUTHOR } from '@/lib/author'
import { useTranslation } from '@/lib/i18n'
import type { RatingSummary } from '@/lib/rating-snapshot'
import { tx } from '@/lib/tx'

/**
 * The answer-first block directly under a tool: what it is in a few sentences, its key features
 * and why to use it. Written so a reader (or a search engine) gets the answer without scrolling.
 */
export function ToolGlanceBlock({
  name,
  glance,
  heading,
  rating,
}: {
  name: string
  glance: ToolGlance
  heading?: string
  /** Visitor rating at build time; shown here (on every screen) to match the page's AggregateRating data. */
  rating?: RatingSummary
}) {
  const { t } = useTranslation()
  return (
    <section aria-labelledby="answer-heading" className="pb-4 pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('quickAnswer', 'Quick answer')}</p>
        <h2 id="answer-heading" className="mt-1 text-2xl font-semibold tracking-tight">
          {heading ?? t('whatIsTool', 'What is the {tool}?').replace('{tool}', name)}
        </h2>
        {rating && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Star aria-hidden="true" className="size-4 fill-amber-400 text-amber-400" />
            {tx('{average} out of 5 · {count} ratings')
              .replace('{average}', rating.average.toFixed(1))
              .replace('{count}', rating.count.toLocaleString('en-US'))}
          </p>
        )}
        <p className="mt-3 max-w-3xl text-pretty text-lg leading-relaxed text-foreground/90">{glance.answer}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold">{t('keyFeatures', 'Key features')}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {glance.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold">{t('whyUseIt', 'Why use it')}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {glance.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {t('builtBy', 'Built and tested by')}{' '}
          <Link href={AUTHOR.path} rel="author" className="font-medium text-foreground underline-offset-4 hover:underline">
            {AUTHOR.name}
          </Link>
        </p>
      </div>
    </section>
  )
}

/** Outbound links to authoritative references (Wikipedia, MDN, W3C, vendor docs). */
export function ToolSources({ sources }: { sources: { label: string; url: string }[] }) {
  const { t } = useTranslation()
  if (!sources.length) return null
  return (
    <section aria-labelledby="sources-heading" className="pb-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="sources-heading" className="text-lg font-semibold tracking-tight">
          {t('sourcesHeading', 'Sources and further reading')}
        </h2>
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener" className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
