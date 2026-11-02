import { Providers } from './Providers'
import { GuidesIndexPage } from '@/views/GuidesIndexPage'

export default function GuidesIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <GuidesIndexPage />
    </Providers>
  )
}
