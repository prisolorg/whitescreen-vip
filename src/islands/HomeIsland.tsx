import { Providers } from './Providers'
import { HomePage } from '@/views/HomePage'

export default function HomeIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <HomePage />
    </Providers>
  )
}
