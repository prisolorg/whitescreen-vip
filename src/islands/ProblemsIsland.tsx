import { Providers } from './Providers'
import { ScreenProblemsIndexPage } from '@/views/ScreenProblemsIndexPage'

export default function ProblemsIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <ScreenProblemsIndexPage />
    </Providers>
  )
}
