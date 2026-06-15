import type { ResolvedCanvasDimensions } from '../types/canvas.types'

export function resolveCanvasDimensions(
  container: HTMLElement,
): ResolvedCanvasDimensions {
  const { width, height } = container.getBoundingClientRect()
  const devicePixelRatio = window.devicePixelRatio || 1

  return {
    width,
    height,
    pixelWidth: Math.max(1, Math.floor(width * devicePixelRatio)),
    pixelHeight: Math.max(1, Math.floor(height * devicePixelRatio)),
  }
}
