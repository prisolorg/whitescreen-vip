import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'
import { useTranslation } from '@/lib/i18n'

export type Crumb = { label: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { t } = useTranslation()

  const localizeLabel = (label: string) => {
    if (label.toLowerCase() === 'home') return t('home', 'Home')
    if (label.toLowerCase() === 'tools directory') return t('toolsDirectory', 'Tools Directory')
    return label
  }

  const localizedItems = items.map((item) => ({
    ...item,
    label: localizeLabel(item.label),
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: localizedItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
        {localizedItems.map((item, index) => {
          const isLast = index === localizedItems.length - 1
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
