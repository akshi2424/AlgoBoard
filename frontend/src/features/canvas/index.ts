export { default as Canvas } from './components/Canvas'
export { useCanvas } from './hooks/useCanvas'
export type { UseCanvasOptions, UseCanvasReturn } from './hooks/useCanvas'
export { useCanvasResize } from './hooks/useCanvasResize'
export { useCanvasTools } from './hooks/useCanvasTools'
export { useHistory } from './hooks/useHistory'
export {
  BRUSH_COLORS,
  CANVAS_BACKGROUND_COLOR,
  DEFAULT_BRUSH_COLOR,
  DEFAULT_BRUSH_CONFIG,
  DEFAULT_BRUSH_SIZE,
  DEFAULT_LINE_CAP,
  DEFAULT_LINE_JOIN,
  ERASER_COLOR,
  MAX_BRUSH_SIZE,
  MIN_BRUSH_SIZE,
} from './constants/canvas.constants'
export { MAX_HISTORY_SIZE } from './constants/history.constants'
export type {
  CanvasDimensions,
  ResolvedCanvasDimensions,
  UseCanvasResizeReturn,
} from './types/canvas.types'
export type {
  BrushConfig,
  CanvasDrawingEventHandlers,
  CanvasPoint,
} from './types/drawing.types'
export type {
  CanvasHistory,
  HistoryControlsProps,
  Point,
  Stroke,
  UseHistoryReturn,
} from './types/history.types'
export type {
  ActionButtonsProps,
  BrushColorOption,
  BrushColorValue,
  BrushSizeSliderProps,
  CanvasToolActions,
  CanvasToolState,
  ColorPickerProps,
  ToolbarProps,
  UseCanvasToolsReturn,
} from './types/tools.types'
