import type { BackgroundItem } from './backgrounds-data'

/**
 * Paints a background onto a canvas at any size, for the PNG downloads. Gradients run corner to
 * corner like the 135° CSS previews; patterns (graph paper) scale their grid with the image.
 */
export function paintBackground(ctx: CanvasRenderingContext2D, item: Pick<BackgroundItem, 'type' | 'primaryHex' | 'secondaryHex' | 'accentHex'>, width: number, height: number) {
  if (item.type === 'gradient' && item.secondaryHex) {
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, item.primaryHex)
    if (item.accentHex) grad.addColorStop(0.5, item.accentHex)
    grad.addColorStop(1, item.secondaryHex)
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)
    return
  }

  ctx.fillStyle = item.primaryHex
  ctx.fillRect(0, 0, width, height)
  if (item.type !== 'pattern' || !item.secondaryHex) return

  // Same proportions as the preview: 20 px squares on a 1080-high screen, bold line every 5th.
  const minor = Math.max(8, Math.round(Math.min(width, height) / 54))
  const line = Math.max(1, Math.round(minor / 20))
  const drawGrid = (step: number, color: string) => {
    ctx.fillStyle = color
    for (let x = 0; x < width; x += step) ctx.fillRect(x, 0, line, height)
    for (let y = 0; y < height; y += step) ctx.fillRect(0, y, width, line)
  }
  drawGrid(minor, item.secondaryHex)
  drawGrid(minor * 5, item.accentHex ?? item.secondaryHex)
}
