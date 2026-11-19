import { Providers } from './Providers'
import { FeedbackPage } from '@/views/FeedbackPage'

export default function FeedbackIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <FeedbackPage />
    </Providers>
  )
}
