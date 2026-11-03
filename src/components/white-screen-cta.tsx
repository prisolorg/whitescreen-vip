import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * A short card pointing to the White Screen (the homepage), shown on tool, guide, background,
 * problem and glossary pages so the main tool is always one click away.
 */
export function WhiteScreenCta({ className }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <aside className={cn('mx-auto max-w-7xl px-3 sm:px-6', className)}>
      <Link
        href="/"
        className="group flex items-center gap-4 rounded-2xl border bg-card p-3 pr-4 shadow-sm transition-colors hover:bg-accent sm:p-4"
      >
        <span aria-hidden="true" className="size-12 shrink-0 rounded-xl bg-white ring-1 ring-black/10 sm:size-14" />
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold sm:text-base">{t('ctaWhiteScreenTitle', 'Need a plain white screen?')}</span>
          <span className="block text-xs text-muted-foreground sm:text-sm">
            {t('ctaWhiteScreenText', 'Open the free fullscreen White Screen for lighting, cleaning, tracing and pixel checks.')}
          </span>
        </span>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background sm:inline-flex">
          {t('homeTitle', 'White Screen')}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </aside>
  )
}
