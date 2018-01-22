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
  thickness: number,
  glowColor: string,
  glowStrength: number,
  children: React$Node,
};

type State = {
  width?: number,
  height?: number,
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

class RetroBorder extends PureComponent<Props, State> {
  state = {};
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  static defaultProps = {
    glowStrength: 0.4,
    thickness: 7,
  };

  componentDidUpdate() {
    this.draw();
  }

  handleRef = (canvas: ?HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    const { width, height } = canvas.getBoundingClientRect();

    scaleCanvas(this.canvas, this.ctx);

    this.setState({ width, height }, this.draw);
  };

  draw = () => {
    let { thickness } = this.props;
    const { width, height } = this.state;

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
    const { thickness, glowStrength, glowColor, children } = this.props;
    const { width, height } = this.state;

    const shouldShowGlow = glowStrength > 0 && glowColor;

    return (
      <div style={styles.wrapper(this.props)}>
        <div style={styles.childWrapper()}>{children}</div>

        {shouldShowGlow && (
          <div
            style={styles.glow(
              glowStrength,
              glowColor,
              thickness,
              width,
              height
            )}
          />
        )}

        <canvas style={styles.canvas()} ref={this.handleRef} />
      </div>
    );
  }
}

const styles = {
  wrapper: ({ width, height, thickness }: Props) => ({
    display: 'inline-block',
    position: 'relative',
    padding: thickness,
  }),

  childWrapper: () => ({
    position: 'relative',
    zIndex: 3,
  }),

  glow: (strength, color, thickness, width, height) => ({
    position: 'absolute',
    zIndex: 2,
    top: thickness - thickness * 0.25,
    left: thickness - thickness * 0.25,
    right: thickness,
    bottom: thickness,
    background: color,
    filter: `blur(${thickness * 0.25}px)`,
    opacity: strength,
  }),

  canvas: () => ({
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  }),
};

export default RetroBorder;