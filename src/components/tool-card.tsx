import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toolPath, type Tool } from '@/lib/tools'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedTool } from '@/lib/tool-translations'

export function ToolIcon({ tool, className }: { tool: Tool; className?: string }) {
  const Icon = tool.icon
  if (tool.swatch) {
    return (
      <span
        aria-hidden="true"
        className={cn('flex size-10 shrink-0 rounded-lg ring-1 ring-black/10', className)}
        style={{ backgroundColor: tool.swatch }}
      />
    )
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-b from-background to-muted text-foreground',
        className,
      )}
    >
      <Icon className="size-5" />
    </span>
  )
}

export function ToolCard({ tool, headingLevel = 'h3' }: { tool: Tool; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  const { language } = useTranslation()
  const localized = getLocalizedTool(tool, language)

  return (
    <Link
      href={toolPath(tool.slug)}
      className="group flex h-full flex-col gap-3 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolIcon tool={tool} />
        <ArrowUpRight
          className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div>
        <Heading className="font-medium">{localized.name}</Heading>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{localized.description}</p>
      </div>
    </Link>
  )
}

export function ToolGrid({ tools, className }: { tools: readonly Tool[]; className?: string }) {
  return (
    <ul className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', className)}>
      {tools.map((tool) => (
        <li key={tool.slug}>
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  )
}
