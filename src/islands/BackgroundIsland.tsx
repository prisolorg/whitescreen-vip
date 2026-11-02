import { Providers } from './Providers'
import { BackgroundDetailPage } from '@/views/BackgroundDetailPage'

export default function BackgroundIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <BackgroundDetailPage slug={slug} />
    </Providers>
  )
}
