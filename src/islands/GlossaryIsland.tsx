import { Providers } from './Providers'
import { GlossaryIndexPage } from '@/views/GlossaryIndexPage'
import type { TermIndexProps } from '@/lib/article-i18n/index-items'

export default function GlossaryIsland({ url, ...props }: { url: string } & TermIndexProps) {
  return (
    <Providers url={url}>
      <GlossaryIndexPage {...props} />
    </Providers>
  )
}
