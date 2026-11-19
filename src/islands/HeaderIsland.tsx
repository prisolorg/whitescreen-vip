import { Providers } from './Providers'
import { SiteHeader } from '@/components/site-header'

export default function HeaderIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <SiteHeader />
    </Providers>
  )
}
