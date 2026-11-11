import { Providers } from './Providers'
import { ColorPage } from '@/views/ColorPage'
import { SCREEN_COLORS } from '@/lib/screen-colors'

export default function ColorIsland({ url, colorId }: { url: string; colorId: string }) {
  return (
    <Providers url={url}>
      <ColorPage color={SCREEN_COLORS.find((color) => color.id === colorId)!} />
    </Providers>
  )
}
