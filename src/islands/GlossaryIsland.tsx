import { Providers } from './Providers'
import { GlossaryIndexPage } from '@/views/GlossaryIndexPage'

export default function GlossaryIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <GlossaryIndexPage />
    </Providers>
  )
}
