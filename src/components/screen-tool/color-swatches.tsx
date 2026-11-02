import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
import { useTranslation } from '@/lib/i18n'

type ColorSwatchesProps = {
  selectedId: string
  onSelect: (id: string) => void
}

export function ColorSwatches({ selectedId, onSelect }: ColorSwatchesProps) {
  const { t } = useTranslation()

  return (
    <nav aria-label={t('screenColors', 'Screen Colors')} className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {SCREEN_COLORS.map((color, index) => {
        const isSelected = color.id === selectedId
        const localizedName = t(color.id, color.name)
        return (
          <Link
            key={color.id}
            href={color.path}
            scroll={false}
            onClick={() => onSelect(color.id)}
            aria-current={isSelected ? 'page' : undefined}
            aria-keyshortcuts={String(index + 1)}
            title={`${localizedName} (${index + 1})`}
            className={cn(
              'group flex h-8 sm:h-9 items-center gap-1.5 sm:gap-2 rounded-lg border bg-background pl-1.5 pr-2.5 sm:pr-3 text-xs sm:text-sm transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 shadow-xs shrink-0',
              isSelected && 'border-foreground/40 bg-accent font-semibold ring-1 ring-foreground/20',
            )}
          >
            <span
              className="flex size-5 sm:size-6 items-center justify-center rounded-md ring-1 ring-black/10 shrink-0"
              style={{ backgroundColor: color.hex }}
            >
              {isSelected && (
                <Check
                  className={cn('size-3 sm:size-3.5', isLightColor(color.hex) ? 'text-black' : 'text-white')}
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="font-medium whitespace-nowrap">{localizedName}</span>
          </Link>
        )
      })}
    </nav>
  )
}
