import Link from 'next/link'
import { Monitor } from 'lucide-react'

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 sm:gap-2.5 rounded-md font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90 shrink-0 text-sm sm:text-base"
      aria-label="WhiteScreen.vip home"
    >
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-lg border bg-background shadow-xs text-foreground shrink-0"
      >
        <Monitor className="size-4" />
      </span>
      <span>
        WhiteScreen<span className="text-muted-foreground">.vip</span>
      </span>
    </Link>
  )
}

