import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * A short card pointing to the White Screen (the homepage), shown on tool, guide, background,
 * problem and glossary pages so the main tool is always one click away.
 * Only the button is a link, so the homepage anchor text stays short (not the whole card's text).
 */
export function WhiteScreenCta({ className }: { className?: string }) {
  const { t, language } = useTranslation()
  return (
    <aside className={cn('mx-auto max-w-7xl px-3 sm:px-6', className)}>
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border bg-card p-3 pr-4 shadow-sm sm:flex-nowrap sm:p-4">
        <span aria-hidden="true" className="size-12 shrink-0 rounded-xl bg-white ring-1 ring-black/10 sm:size-14" />
        <div className="min-w-0 flex-1 basis-48">
          <p className="text-sm font-bold sm:text-base">{t('ctaWhiteScreenTitle', 'Need a bright white screen?')}</p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {t('ctaWhiteScreenText', 'Open the White Screen online in full screen for Zoom lighting, monitor cleaning, tracing and dead pixel tests. Free.')}
          </p>
        </div>
        <Link
          href="/"
          className="group inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-xl sm:w-auto bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          {language === 'en' ? 'Open the tool' : t('homeTitle', 'White Screen')}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  )
}
