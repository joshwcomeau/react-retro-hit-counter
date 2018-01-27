// @flow
// Figure out our backing scale.
// This ensures canvas looks crisp on retina displays, where there are
// in fact 4 on-screen pixels for every 1 calculated pixel.
export function scaleCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  width?: number,
  height?: number
) {
  // If we're rendering on the server, do nothing.
  if (typeof window === 'undefined') {
    return;
  }

  width = typeof width === 'number' ? width : canvas.width;
  height = typeof height === 'number' ? height : canvas.height;

  const backingStoreRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  // $FlowFixMe - apparently backingStoreRatio can contain non-numbers?
  const ratio = (window.devicePixelRatio || 1) / backingStoreRatio;

  if (ratio > 1) {
    /* eslint-disable no-param-reassign */
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    /* eslint-enable */

    ctx.scale(ratio, ratio);
  }
}
