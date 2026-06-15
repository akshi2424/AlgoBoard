import { useEffect, useRef, useState } from 'react'

import type {
  CanvasDimensions,
  UseCanvasResizeReturn,
} from '../types/canvas.types'
import { resolveCanvasDimensions } from '../utils/canvas.utils'

const INITIAL_DIMENSIONS: CanvasDimensions = { width: 0, height: 0 }

export function useCanvasResize(): UseCanvasResizeReturn {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] =
    useState<CanvasDimensions>(INITIAL_DIMENSIONS)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) {
      return
    }

    const syncCanvasSize = () => {
      const { width, height, pixelWidth, pixelHeight } =
        resolveCanvasDimensions(container)

      canvas.width = pixelWidth
      canvas.height = pixelHeight
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      setDimensions({ width, height })
    }

    syncCanvasSize()

    const resizeObserver = new ResizeObserver(syncCanvasSize)
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return { containerRef, canvasRef, dimensions }
}
