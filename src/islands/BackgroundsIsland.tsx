import { Providers } from './Providers'
import { BackgroundsIndexPage } from '@/views/BackgroundsIndexPage'
import type { BackgroundIndexProps } from '@/lib/article-i18n/background-props'

export default function BackgroundsIsland({ url, ...props }: { url: string } & BackgroundIndexProps) {
  return (
    <Providers url={url}>
      <BackgroundsIndexPage {...props} />
    </Providers>
  )
}
