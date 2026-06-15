import type { RefObject } from 'react'

export interface CanvasDimensions {
  width: number
  height: number
}

export interface ResolvedCanvasDimensions extends CanvasDimensions {
  pixelWidth: number
  pixelHeight: number
}

export interface UseCanvasResizeReturn {
  containerRef: RefObject<HTMLDivElement | null>
  canvasRef: RefObject<HTMLCanvasElement | null>
  dimensions: CanvasDimensions
}
