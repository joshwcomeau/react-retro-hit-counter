// @flow
import React, { PureComponent } from 'react';

import { getInBetweenDigits } from './Digit.helpers';

type Props = {
  value: number,
  flipDuration: number,
};

type State = {
  currentValue: number,
  queue: Array<number>,
  isFlipping: boolean,
};

class Digit extends PureComponent<Props, State> {
  static defaultProps = {
    flipDuration: 1000,
  };

  state = {
    currentValue: this.props.value,
    queue: [],
    isFlipping: false,
  };

  timeoutId: number;

  componentWillReceiveProps(nextProps: Props) {
    // A concern for components like this is interruption. When a new value is
    // received while an animation is in progress, care needs to be taken to
    // avoid glitchy behaviour.
    //
    // The solution is a queue of upcoming values. Each digit will increment 1
    // value at a time until it's reached the desired value. If a new value
    // is received mid-progress, it's simply added to the queue.
    const { currentValue, isFlipping } = this.state;

    if (this.props.value === nextProps.value) {
      return;
    }

    const newValues = getInBetweenDigits(this.props.value, nextProps.value);

    // If this is an interruption (the digit is already flipping), all we have
    // to do is add the new values to the queue.
    if (isFlipping) {
      this.setState(state => ({
        queue: [...state.queue, ...newValues],
      }));

      return;
    }

    // If we aren't yet flipping, we can set these values as the queue, and
    // begin flipping.
    this.setState(
      state => ({
        queue: newValues,
        isFlipping: true,
      }),
      this.flip
    );
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  flip = () => {
    const { queue } = this.state;

    // If the queue is empty, our work is done!
    if (queue.length === 0) {
      this.setState({ isFlipping: false });
      return;
    }

    const [nextValue, ...remainingValues] = queue;

    this.setState(
      {
        currentValue: nextValue,
        queue: remainingValues,
      },
      () => {
        this.timeoutId = window.setTimeout(this.flip, this.props.flipDuration);
      }
    );
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.topHalf}>{this.state.currentValue}</div>
        <div style={styles.bottomHalf}>
          <span style={styles.bottomHalfDigit}>{this.state.currentValue}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    width: 16,
    height: 48,
  },

  topHalf: {
    position: 'relative',
    zIndex: 1,
    lineHeight: '48px',
    height: 24,
    overflow: 'hidden',
  },

  bottomHalf: {
    position: 'absolute',
    zIndex: 2,
    lineHeight: '48px',
    height: 24,
    top: 24,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    color: 'red',
  },

  bottomHalfDigit: {
    display: 'inline-block',
    transform: 'translateY(-24px)',
  },
};

export default Digit;
