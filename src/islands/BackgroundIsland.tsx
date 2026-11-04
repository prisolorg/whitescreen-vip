import { Providers } from './Providers'
import { BackgroundDetailPage } from '@/views/BackgroundDetailPage'
import type { BackgroundToolProps } from '@/lib/article-i18n/background-props'

export default function BackgroundIsland({ url, ...props }: { url: string } & BackgroundToolProps) {
  return (
    <Providers url={url}>
      <BackgroundDetailPage {...props} />
    </Providers>
  )
}
