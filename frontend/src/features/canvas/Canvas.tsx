import { useCanvasResize } from './hooks/useCanvasResize'

function Canvas() {
  const { containerRef, canvasRef } = useCanvasResize()

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-neutral-50"
      data-testid="canvas-container"
    >
      <canvas
        ref={canvasRef}
        className="block touch-none"
        aria-label="Whiteboard canvas"
        role="img"
      />
    </div>
  )
}

export default Canvas
