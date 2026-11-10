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
    // Reserved units keep their exact size from the first paint, so the ad arriving seconds later never
    // pushes the page down (no layout shift); with no ad to show, the space stays but Google's blank frame is hidden. Unreserved units stay closed until Google reports a real ad;
    // clipped rather than display:none, because AdSense needs their size.
    <aside
      data-ad-unit=""
      aria-label={t('advertisement', 'Advertisement')}
      className={cn('flex-col items-center', reserve && '[&_ins[data-ad-status=unfilled]]:opacity-0', ADSENSE_CLIENT && !reserve && 'max-h-0 overflow-hidden has-[[data-ad-status=filled]]:max-h-none has-[[data-ad-status=filled]]:overflow-visible', className)}
    >
      <p className="mb-1 text-center text-[11px] uppercase tracking-wider text-muted-foreground">{t('advertisement', 'Advertisement')}</p>
      {ADSENSE_CLIENT ? (
        <div
          // Reserved units: the holder has the ad's exact size, so Google resizing its own box (e.g. 90px to 63px
          // when it collapses an unfilled slot) can never move the page.
          className={cn(reserve && 'overflow-hidden', reserve && sizeClass)}
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
 * The unit straight under the tool, on every screen: 320×100 on phones, 728×90 from 800px, 468×60 on small desktops
 * where the tool column beside the rail is narrower than 728px (1024–1099px), and 728×90 again from 1100px.
 * Placed by ToolWithAds, or by hand inside a grid. Its space is reserved, so the ad arriving never moves the page.
 */
export function UnderAd({ className }: { className?: string }) {
  if (!SHOW_ADS) return null
  return (
    <AdUnit
      slot={AD_SLOTS.under}
      sizeClass="h-[100px] w-[320px] min-[800px]:h-[90px] min-[800px]:w-[728px] min-[1024px]:h-[60px] min-[1024px]:w-[468px] min-[1100px]:h-[90px] min-[1100px]:w-[728px]"
      label="Ad 728×90 / 468×60 / 320×100"
      className={cn('flex', className)}
      reserve
    />
  )
}

/**
 * Puts a tool's ads around it without ever moving the tool down:
 * - desktop (≥1024px): a 300×600 half-page unit to the right, sticky while the page scrolls
 *   (allowed for units ≤300px wide, and it is the page's only sticky ad);
 * - every screen: a unit straight under the tool's controls (see UnderAd for its sizes).
 * With an ad blocker the units and their space are removed (html.ad-blocked, set in Base.astro).
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
    <div data-ad-grid="" className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex min-w-0 flex-col gap-3">
        {children}
        {under && <UnderAd />}
        {rating && <RatingStrip />}
      </div>
      <AdUnit slot={AD_SLOTS.rail} sizeClass="h-[600px] w-[300px]" label="Ad 300×600" className="sticky top-20 hidden lg:flex" reserve />
    </div>
  )
}
