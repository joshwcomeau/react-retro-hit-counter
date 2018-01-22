// @flow
import React, { PureComponent } from 'react';

import { scaleCanvas } from './RetroBorder.helpers';

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

    const topGradient = this.ctx.createLinearGradient(0, thickness, 0, 0);
    topGradient.addColorStop(0, '#394e6f');
    topGradient.addColorStop(0.3, '#7695cc');
    topGradient.addColorStop(0.6, '#b5c8f0');
    topGradient.addColorStop(0.9, '#b5c4e1');
    topGradient.addColorStop(1, '#98a9cb');
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(thickness, thickness);
    this.ctx.lineTo(width - thickness, thickness);
    this.ctx.lineTo(width, 0);
    this.ctx.closePath();
    this.ctx.fillStyle = topGradient;
    this.ctx.fill();

    const leftGradient = this.ctx.createLinearGradient(thickness, 0, 0, 0);
    leftGradient.addColorStop(0, '#394e6f');
    leftGradient.addColorStop(0.3, '#7695cc');
    leftGradient.addColorStop(0.6, '#b5c8f0');
    leftGradient.addColorStop(0.9, '#b5c4e1');
    leftGradient.addColorStop(1, '#98a9cb');
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(thickness, thickness);
    this.ctx.lineTo(thickness, height - thickness);
    this.ctx.lineTo(0, height);
    this.ctx.closePath();
    this.ctx.fillStyle = leftGradient;
    this.ctx.fill();

    const rightGradient = this.ctx.createLinearGradient(
      width,
      0,
      width - thickness,
      0
    );
    rightGradient.addColorStop(0, '#394e6f');
    rightGradient.addColorStop(0.15, '#546f8c');
    leftGradient.addColorStop(0.5, '#b5c8f0');
    rightGradient.addColorStop(0.8, '#c5d8f9');
    rightGradient.addColorStop(1, '#7991bc');
    this.ctx.beginPath();
    this.ctx.moveTo(width, 0);
    this.ctx.lineTo(width - thickness, thickness);
    this.ctx.lineTo(width - thickness, height - thickness);
    this.ctx.lineTo(width, height);
    this.ctx.closePath();
    this.ctx.fillStyle = rightGradient;
    this.ctx.fill();

    const bottomGradient = this.ctx.createLinearGradient(
      0,
      height,
      0,
      height - thickness
    );
    bottomGradient.addColorStop(0, '#394e6f');
    bottomGradient.addColorStop(0.3, '#7695cc');
    bottomGradient.addColorStop(0.6, '#b5c8f0');
    bottomGradient.addColorStop(0.9, '#b5c4e1');
    bottomGradient.addColorStop(1, '#98a9cb');
    this.ctx.beginPath();
    this.ctx.moveTo(0, height);
    this.ctx.lineTo(thickness, height - thickness);
    this.ctx.lineTo(width - thickness, height - thickness);
    this.ctx.lineTo(width, height);
    this.ctx.closePath();
    this.ctx.fillStyle = bottomGradient;
    this.ctx.fill();
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
