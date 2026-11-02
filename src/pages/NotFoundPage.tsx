import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ActionButton } from '@/components/tool-kit/controls'
import { Compass, Home, Search } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { NOT_FOUND_TRANSLATIONS } from '@/lib/content-pages-translations'

export function NotFoundPage() {
  const { language, t } = useTranslation()
  const content = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 text-center">
      <Breadcrumbs
        items={[
          { label: t('home', 'Home'), href: '/' },
          { label: content.title, href: '#' },
        ]}
      />

      <div className="mt-10 flex flex-col items-center">
        <div className="size-20 rounded-2xl bg-muted/60 flex items-center justify-center text-primary mb-6">
          <Compass className="size-10" />
        </div>
        <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">{content.errorBadge}</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{content.title}</h1>
        <p className="mt-4 max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
          {content.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <ActionButton variant="primary">
              <Home aria-hidden="true" />
              {content.backHome}
            </ActionButton>
          </Link>
          <Link href="/tools">
            <ActionButton>
              <Search aria-hidden="true" />
              {content.exploreTools}
            </ActionButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
