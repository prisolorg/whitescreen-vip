/**
 * Layout test: the "studio" tool layout (centered title above a full-width preview, no ads in the
 * first viewport, presets and keep-awake) runs only on these color pages. Every other page keeps the
 * classic layout. Add or remove color ids here to widen or roll back the test; all languages follow.
 *
 * Started 2026-11-14 on: / (white), /black-screen, /red-screen, /green-screen, /blue-screen, /yellow-screen;
 * extended 2026-11-15 to every color screen.
 */
export const STUDIO_LAYOUT_COLORS: ReadonlySet<string> = new Set(['white', 'black', 'red', 'green', 'blue', 'yellow', 'gray', 'orange', 'pink', 'purple', 'cyan', 'magenta'])

export const usesStudioLayout = (colorId: string) => STUDIO_LAYOUT_COLORS.has(colorId)

/** Every tool page (/dead-pixel-test etc.) and every background page uses the studio layout too. */
export const STUDIO_TOOL_PAGES = true
export const STUDIO_BACKGROUND_PAGES = true
