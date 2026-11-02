'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { LANGUAGES, type LanguageCode, useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageSelector({ className, compact }: { className?: string; compact?: boolean }) {
  const { language, setLanguage, languageInfo, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handlePointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const selectLanguage = (code: LanguageCode) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={menuRef} className={cn('relative inline-block text-start', className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language, current: ${languageInfo.formattedLabel}`}
        className={cn(
          'inline-flex h-9 items-center gap-1 sm:gap-1.5 rounded-lg border border-border bg-background px-2 sm:px-2.5 text-xs font-semibold tracking-wider text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 shrink-0',
          isOpen && 'border-primary/50 bg-accent text-foreground shadow-xs ring-1 ring-primary/20',
        )}
      >
        <Globe className="size-3.5 sm:size-4 shrink-0 text-foreground/80" aria-hidden="true" />
        <span className="font-semibold">{languageInfo.displayCode}</span>
        <ChevronDown
          className={cn('size-3 text-foreground/70 transition-transform', isOpen && 'rotate-180', compact && 'hidden')}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full z-50 mt-1.5 w-64 max-w-[calc(100vw-2rem)] rounded-xl border bg-popover p-1.5 shadow-xl ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95"
        >
          <div className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t('selectLanguage', 'Select Language')}
          </div>
          <div className="max-h-80 overflow-y-auto">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === language
              return (
                <button
                  key={item.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectLanguage(item.code)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-colors hover:bg-accent text-left',
                    isSelected ? 'bg-accent font-semibold text-foreground' : 'text-foreground/85',
                  )}
                >
                  <span className="truncate">{item.formattedLabel}</span>
                  {isSelected && <Check className="size-3.5 text-primary shrink-0 ml-2" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
