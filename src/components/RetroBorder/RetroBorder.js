// @flow
import React, { PureComponent } from 'react';

import { scaleCanvas } from './RetroBorder.helpers';

type Props = {
  width: number,
  height: number,
  thickness: number,
  children: React$Node,
};

class RetroBorder extends PureComponent<Props> {
  static defaultProps = {
    thickness: 4,
  };

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  handleRef = (canvas: ?HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    scaleCanvas(this.canvas, this.ctx);
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
    background: 'palevioletred',
  }),
  canvas: () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
};

export default RetroBorder;
