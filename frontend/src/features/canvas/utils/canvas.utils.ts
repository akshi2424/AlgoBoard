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

export function clearCanvas(canvas: HTMLCanvasElement | null): void {
  if (!canvas) {
    return
  }

  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export function clampBrushSize(size: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(size)))
}
