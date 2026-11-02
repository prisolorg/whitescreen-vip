import { Providers } from './Providers'
import { BackgroundsIndexPage } from '@/views/BackgroundsIndexPage'

export default function BackgroundsIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <BackgroundsIndexPage />
    </Providers>
  )
}
