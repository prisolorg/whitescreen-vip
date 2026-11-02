import { Providers } from './Providers'
import { GuideDetailPage } from '@/views/GuideDetailPage'

export default function GuideIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <GuideDetailPage slug={slug} />
    </Providers>
  )
}
