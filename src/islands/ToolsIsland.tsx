import { Providers } from './Providers'
import { ToolsPage } from '@/views/ToolsPage'

export default function ToolsIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <ToolsPage />
    </Providers>
  )
}
