// @flow
/**
 * Add a 90s Retro Border to any children!
 * Uses Canvas, since not all border sides are the same. As such, it may look
 * more complicated than you expected, but this is necessary to get the right
 * aesthetic.
 */
import React, { PureComponent } from 'react';

import { scaleCanvas } from './RetroBorder.helpers';

type Props = {
  width: number,
  height: number,
  thickness: number,
  children: React$Node,
};

const GRADIENTS = {
  outer: [
    { stop: 0, color: '#394e6f' },
    { stop: 0.3, color: '#7695cc' },
    { stop: 0.6, color: '#b5c8f0' },
    { stop: 0.9, color: '#b5c4e1' },
    { stop: 1, color: '#98a9cb' },
  ],
  inner: [
    { stop: 0, color: '#394e6f' },
    { stop: 0.15, color: '#546f8c' },
    { stop: 0.5, color: '#b5c8f0' },
    { stop: 0.8, color: '#c5d8f9' },
    { stop: 1, color: '#7991bc' },
  ],
};

const BORDERS = [
  {
    // top
    gradientStops: GRADIENTS.outer,
    getGradientCoords: ({ width, height, thickness }) => [0, thickness, 0, 0],
    getPoints: ({ width, height, thickness }) => [
      [0, 0],
      [thickness, thickness],
      [width - thickness, thickness],
      [width, 0],
    ],
  },
  {
    // left
    gradientStops: GRADIENTS.outer,
    getGradientCoords: ({ width, height, thickness }) => [thickness, 0, 0, 0],
    getPoints: ({ width, height, thickness }) => [
      [0, 0],
      [thickness, thickness],
      [thickness, height - thickness],
      [0, height],
    ],
  },
  {
    // right
    gradientStops: GRADIENTS.inner,
    getGradientCoords: ({ width, height, thickness }) => [
      width,
      0,
      width - thickness,
      0,
    ],
    getPoints: ({ width, height, thickness }) => [
      [width, 0],
      [width - thickness, thickness],
      [width - thickness, height - thickness],
      [width, height],
    ],
  },
  {
    // bottom
    gradientStops: GRADIENTS.inner,
    getGradientCoords: ({ width, height, thickness }) => [
      0,
      height,
      0,
      height - thickness,
    ],
    getPoints: ({ width, height, thickness }) => [
      [0, height],
      [thickness, height - thickness],
      [width - thickness, height - thickness],
      [width, height],
    ],
  },
];

class RetroBorder extends PureComponent<Props> {
  parentElem: HTMLElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  static defaultProps = {
    thickness: 7,
  };

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      scaleCanvas(this.canvas, this.ctx, this.props.width, this.props.height);
    }

    this.draw();
  }

  handleRef = (canvas: ?HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    scaleCanvas(this.canvas, this.ctx);
  };

  draw = () => {
    let { width, height, thickness } = this.props;

    if (typeof width !== 'number' || typeof height !== 'number') {
      return;
    }

    BORDERS.forEach(({ gradientStops, getGradientCoords, getPoints }) => {
      const data = { width, height, thickness };

      const gradient = this.ctx.createLinearGradient(
        ...getGradientCoords(data)
      );

      gradientStops.forEach(({ stop, color }) =>
        gradient.addColorStop(stop, color)
      );

      const [startingPoint, ...connectedPoints] = getPoints(data);

      this.ctx.beginPath();
      this.ctx.moveTo(...startingPoint);

      connectedPoints.forEach(point => this.ctx.lineTo(...point));

      this.ctx.closePath();

      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    });
  };

  render() {
    const { width, height, thickness, children } = this.props;

    return (
      <div style={styles.wrapper(this.props)}>
        <div style={styles.childWrapper()}>{children}</div>

        <canvas
          width={width}
          height={height}
          style={styles.canvas({ width, height })}
          ref={this.handleRef}
        />
      </div>
    );
  }
}

const styles = {
  wrapper: ({ thickness }: Props) => ({
    display: 'inline-block',
    position: 'relative',
    padding: thickness,
  }),

  childWrapper: () => ({
    position: 'relative',
    zIndex: 3,
  }),

  canvas: ({ width, height }) => ({
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
};

export default RetroBorder;
