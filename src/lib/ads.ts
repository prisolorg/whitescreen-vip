/**
 * Google AdSense settings, from build-time environment variables:
 *   PUBLIC_ADSENSE_CLIENT   ca-pub-XXXXXXXXXXXXXXXX
 *   PUBLIC_ADSENSE_SLOT_RAIL, PUBLIC_ADSENSE_SLOT_UNDER   ad unit IDs beside / under a tool
 * Without a client ID no ad markup or script is output at all. Production values are in .env.production.
 * Only tool, color, home and background pages show ads; reading pages (guides, problems, glossary) have none.
 */
export const ADSENSE_CLIENT = (import.meta.env.PUBLIC_ADSENSE_CLIENT as string | undefined)?.trim() || ''

const env = (value: string | undefined) => value?.trim() || ''

export const AD_SLOTS = {
  /** 300×600 beside the tool on desktop (sticky). */
  rail: env(import.meta.env.PUBLIC_ADSENSE_SLOT_RAIL),
  /** 728×90 (tablet) / 320×100 (phone) straight under the tool's controls. */
  under: env(import.meta.env.PUBLIC_ADSENSE_SLOT_UNDER),
} as const
