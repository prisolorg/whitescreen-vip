import { ADSENSE_CLIENT, AD_SLOTS, type AdPlacement } from '@/lib/ads'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/**
 * One responsive AdSense unit, in the page flow below the tool (never above it or over it).
 * Space is reserved up front so the ad loading later cannot shift the page (CLS). The script
 * itself loads after the page is interactive; see the loader in Base.astro.
 */
export function AdSlot({ placement, className }: { placement: AdPlacement; className?: string }) {
  const { t } = useTranslation()
  const slot = AD_SLOTS[placement]
  if (!ADSENSE_CLIENT && !import.meta.env.DEV) return null
  return (
    <aside aria-label={t('advertisement', 'Advertisement')} className={cn('mx-auto w-full max-w-[970px] px-4 py-6 sm:px-6', className)}>
      <p className="mb-1.5 text-center text-[11px] uppercase tracking-wider text-muted-foreground">{t('advertisement', 'Advertisement')}</p>
      {ADSENSE_CLIENT ? (
        // Raw HTML so that, inside hydrated islands, React never touches the ad Google injects.
        <div
          dangerouslySetInnerHTML={{
            __html: `<ins class="adsbygoogle" style="display:block" data-ad-client="${ADSENSE_CLIENT}"${slot ? ` data-ad-slot="${slot}"` : ''} data-ad-format="auto" data-full-width-responsive="true"></ins>`,
          }}
          className="min-h-[280px] sm:min-h-[250px] lg:min-h-[280px]"
        />
      ) : (
        <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground sm:min-h-[250px] lg:min-h-[280px]">
          Ad slot “{placement}” (dev preview; set PUBLIC_ADSENSE_CLIENT to show ads)
        </div>
      )}
    </aside>
  )
}
