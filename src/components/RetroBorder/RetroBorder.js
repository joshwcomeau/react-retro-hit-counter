// @flow
import React, { PureComponent } from 'react';

import { scaleCanvas } from './RetroBorder.helpers';

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
    side: 'top',
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
    side: 'left',
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
    side: 'right',
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
    side: 'bottom',
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

type Props = {
  width: number,
  height: number,
  thickness: number,
  children: React$Node,
};

type State = {
  width?: number,
  height?: number,
};

class RetroBorder extends PureComponent<Props, State> {
  static defaultProps = {
    thickness: 6,
  };

  state = {};

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

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
    return (
      <div style={styles.wrapper(this.props)}>
        <canvas style={styles.canvas()} ref={this.handleRef} />
        {this.props.children}
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
  canvas: () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  }),
};

export default RetroBorder;
