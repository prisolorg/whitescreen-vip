import type { ReactNode } from 'react'
import { ADSENSE_CLIENT, AD_SLOTS } from '@/lib/ads'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const SHOW_ADS = Boolean(ADSENSE_CLIENT) || import.meta.env.DEV

/**
 * One fixed-size AdSense unit. The `ins` is raw HTML so React never touches what Google injects,
 * and its exact size is set by CSS per screen width, so the space is reserved before the ad loads.
 */
function AdUnit({ slot, sizeClass, label, className }: { slot: string; sizeClass: string; label: string; className?: string }) {
  const { t } = useTranslation()
  return (
    <aside aria-label={t('advertisement', 'Advertisement')} className={cn('flex-col items-center', className)}>
      <p className="mb-1 text-center text-[11px] uppercase tracking-wider text-muted-foreground">{t('advertisement', 'Advertisement')}</p>
      {ADSENSE_CLIENT ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `<ins class="adsbygoogle block ${sizeClass}" data-ad-client="${ADSENSE_CLIENT}"${slot ? ` data-ad-slot="${slot}"` : ''}></ins>`,
          }}
        />
      ) : (
        <div className={cn('flex items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground', sizeClass)}>
          {label} (dev preview)
        </div>
      )}
    </aside>
  )
}

/**
 * Puts a tool's ads around it without ever moving the tool down:
 * - desktop (≥1024px): a 300×600 half-page unit to the right, sticky while the page scrolls
 *   (allowed for units ≤300px wide, and it is the page's only sticky ad);
 * - tablet: a 728×90 straight under the tool's controls; phones: a 320×100 there.
 * Native fullscreen covers everything, and the fallback fullscreen layer sits above these.
 * Without an AdSense client ID nothing extra is output.
 */
export function ToolWithAds({ children }: { children: ReactNode }) {
  if (!SHOW_ADS) return <>{children}</>
  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex min-w-0 flex-col gap-3">
        {children}
        <AdUnit slot={AD_SLOTS.under} sizeClass="h-[100px] w-[320px] md:h-[90px] md:w-[728px]" label="Ad 728×90 / 320×100" className="flex lg:hidden" />
      </div>
      <AdUnit slot={AD_SLOTS.rail} sizeClass="h-[600px] w-[300px]" label="Ad 300×600" className="sticky top-20 hidden lg:flex" />
    </div>
  )
}
