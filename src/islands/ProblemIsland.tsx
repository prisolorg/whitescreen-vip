import { Providers } from './Providers'
import { ScreenProblemDetailPage } from '@/views/ScreenProblemDetailPage'

export default function ProblemIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <ScreenProblemDetailPage slug={slug} />
    </Providers>
  )
}
