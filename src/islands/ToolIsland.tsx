import { Providers } from './Providers'
import { ToolDetailPage } from '@/views/ToolDetailPage'

export default function ToolIsland({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <ToolDetailPage slug={slug} />
    </Providers>
  )
}
