import { Providers } from './Providers'
import { ScreenProblemsIndexPage } from '@/views/ScreenProblemsIndexPage'
import type { ProblemIndexProps } from '@/lib/article-i18n/index-items'

export default function ProblemsIsland({ url, ...props }: { url: string } & ProblemIndexProps) {
  return (
    <Providers url={url}>
      <ScreenProblemsIndexPage {...props} />
    </Providers>
  )
}
