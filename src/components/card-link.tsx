import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * A clickable card. For links to the homepage, only the title is the anchor (stretched over the card with
 * CSS so the whole card stays clickable), so the anchor text is the short title, not title + description.
 * Every other card stays one link, unchanged. Pair with <CardTitle>.
 */
export function CardLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (href !== '/') {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return <div className={cn(className, 'relative')}>{children}</div>
}

/** The card title; becomes the link (stretched over the card) when the card points to the homepage. */
export function CardTitle({ href, children }: { href: string; children: ReactNode }) {
  if (href !== '/') return <>{children}</>
  return (
    <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
      {children}
    </Link>
  )
}
