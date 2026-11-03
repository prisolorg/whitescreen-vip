/**
 * Google AdSense settings, from build-time environment variables:
 *   PUBLIC_ADSENSE_CLIENT   ca-pub-XXXXXXXXXXXXXXXX
 *   PUBLIC_ADSENSE_SLOT_TOP, PUBLIC_ADSENSE_SLOT_CONTENT   ad unit IDs for the two slots
 * Without a client ID no ad markup or script is output at all.
 */
export const ADSENSE_CLIENT = (import.meta.env.PUBLIC_ADSENSE_CLIENT as string | undefined)?.trim() || ''

export const AD_SLOTS = {
  /** Directly under the tool or the page's opening answer: seen by nearly every visitor, never above the tool. */
  top: (import.meta.env.PUBLIC_ADSENSE_SLOT_TOP as string | undefined)?.trim() || '',
  /** In the middle of the reading content, before the FAQ. */
  content: (import.meta.env.PUBLIC_ADSENSE_SLOT_CONTENT as string | undefined)?.trim() || '',
} as const

export type AdPlacement = keyof typeof AD_SLOTS

