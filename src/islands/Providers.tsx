import type { ReactNode } from 'react'
import { I18nProvider } from '@/lib/i18n'
import { RouterProvider } from '@/lib/next-shim'

/** Language and router context for one Astro island, starting from the URL its page was built for. */
export function Providers({ url, children }: { url: string; children: ReactNode }) {
  return (
    <I18nProvider initialUrl={url}>
      <RouterProvider initialUrl={url}>{children}</RouterProvider>
    </I18nProvider>
  )
}
