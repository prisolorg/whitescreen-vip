import Link from 'next/link'
import { getGuides } from '@/lib/guides-content'
import { useTranslation } from '@/lib/i18n'

/** Guide cards under the all-tools grid, in the page's language. Static HTML, no JavaScript. */
export function ToolsGuides() {
  const { t, language } = useTranslation()
  const guides = getGuides(language).slice(0, 6)
  return (
    <section className="mx-auto max-w-7xl border-t px-4 pb-16 pt-10 sm:px-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('guidesHeading', 'Display guides & tutorials')}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t('guidesIntro', 'Practical, step-by-step guides to monitor cleaning, dead pixel checks, display calibration and using your screen as a light.')}</p>
        </div>
        <Link href="/guides" className="shrink-0 text-xs font-semibold text-primary hover:underline">
          {t('browseAllGuides', 'Browse all guides →')}
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xs"
          >
            <span className="text-[11px] font-semibold uppercase text-primary">{guide.category}</span>
            <h3 className="mt-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary">{guide.title}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{guide.metaDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
