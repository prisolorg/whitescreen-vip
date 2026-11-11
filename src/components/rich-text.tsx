import { Fragment } from 'react'
import Link from 'next/link'

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g

/** Content strings may carry inline links as `[anchor text](/path)`; this strips them to plain text. */
export function plainText(text: string): string {
  return text.replace(LINK_PATTERN, '$1')
}

const LINK_CLASS = 'font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground'

/** Renders a content string, turning `[anchor text](/path)` into links. Outside sites open in a new tab. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LINK_PATTERN)) {
    const [whole, label, href] = match
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      href.startsWith('http') || href.startsWith('mailto:') ? (
        <a key={match.index} href={href} className={LINK_CLASS} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener' })}>
          {label}
        </a>
      ) : (
        <Link key={match.index} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      ),
    )
    last = match.index + whole.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <Fragment>{parts}</Fragment>
}
