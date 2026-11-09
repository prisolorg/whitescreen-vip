import type { ReactNode } from 'react'
import { RatingStrip } from '@/components/tool-rating'
import { ADSENSE_CLIENT, AD_SLOTS } from '@/lib/ads'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export const SHOW_ADS = Boolean(ADSENSE_CLIENT) || import.meta.env.DEV

/**
 * One fixed-size AdSense unit. The `ins` is raw HTML so React never touches what Google injects,
 * and its exact size is set by CSS per screen width.
 */
function AdUnit({
  slot,
  sizeClass,
  label,
  className,
  reserve = false,
}: {
  slot: string
  sizeClass: string
  label: string
  className?: string
  /** Keep the unit's space and label even before (or without) an ad, like the dedicated desktop rail. */
  reserve?: boolean
}) {
  const { t } = useTranslation()
  return (
    // Units under the tool stay closed (label included) until Google reports a real ad, so a slow, empty
    // or blocked ad never leaves a blank band. Clipped rather than display:none, because AdSense needs
    // its size. The desktop rail is a dedicated column, so it always keeps its 300×600 space.
    <aside
      aria-label={t('advertisement', 'Advertisement')}
      className={cn('flex-col items-center', ADSENSE_CLIENT && !reserve && 'max-h-0 overflow-hidden has-[[data-ad-status=filled]]:max-h-none has-[[data-ad-status=filled]]:overflow-visible', className)}
    >
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

/** The tablet / phone unit (hidden on desktop, where the rail takes over). Placed by ToolWithAds, or by hand inside a grid. */
export function UnderAd({ className }: { className?: string }) {
  if (!SHOW_ADS) return null
  return <AdUnit slot={AD_SLOTS.under} sizeClass="h-[100px] w-[320px] min-[800px]:h-[90px] min-[800px]:w-[728px]" label="Ad 728×90 / 320×100" className={cn('flex lg:hidden', className)} />
}

/**
 * Puts a tool's ads around it without ever moving the tool down:
 * - desktop (≥1024px): a 300×600 half-page unit to the right, sticky while the page scrolls
 *   (allowed for units ≤300px wide, and it is the page's only sticky ad);
 * - tablet: a 728×90 straight under the tool's controls; phones: a 320×100 there.
 * Native fullscreen covers everything, and the fallback fullscreen layer sits above these.
 * Without an AdSense client ID nothing extra is output.
 */
/** The tool column with its ads; `rating` adds the visitor rating row under the tool controls. */
export function ToolWithAds({ children, under = true, rating = true }: { children: ReactNode; under?: boolean; rating?: boolean }) {
  if (!SHOW_ADS)
    return (
      <>
        {children}
        {rating && <RatingStrip />}
      </>
    )
  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex min-w-0 flex-col gap-3">
        {children}
        {rating && <RatingStrip />}
        {under && <UnderAd />}
      </div>
      <AdUnit slot={AD_SLOTS.rail} sizeClass="h-[600px] w-[300px]" label="Ad 300×600" className="sticky top-20 hidden lg:flex" reserve />
    </div>
  )
}
