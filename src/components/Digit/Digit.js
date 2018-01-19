// @flow
import React, { Fragment, PureComponent } from 'react';

import { getInBetweenDigits } from './Digit.helpers';

type Props = {
  value: number,
  size: number,
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
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div style={styles.wrapper}>
        {digits.map(digit => {
          const topStyles =
            digit <= this.state.currentValue
              ? styles.topHalf
              : styles.topHalfFlipped;

          return (
            <div
              style={{
                position: 'relative',
                zIndex: digit === this.state.currentValue ? 5 : 2,
              }}
            >
              <div style={topStyles}>{digit}</div>
              <div style={styles.bottomHalf}>
                <span style={styles.bottomHalfDigit}>{digit}</span>
              </div>
            </div>
          );
        })}
        {/*
          The current value. When the digit isn't flipping, this is just
          sitting there. When it IS flipping, it's behind the "old" value doing
          the flipping
        */}
      </div>
    );
  }
}

const topHalf = {
  position: 'absolute',
  zIndex: 1,
  lineHeight: '128px',
  height: 64,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'black',
  overflow: 'hidden',
};

const styles = {
  wrapper: {
    position: 'relative',
    width: 32,
    height: 128,
    color: 'white',
    fontSize: '64px',
  },

  topHalf,
  topHalfFlipped: {
    ...topHalf,
    transformOrigin: 'bottom center',
    transform: 'rotateX(180deg)',
    transition: 'transform 500ms',
  },

  bottomHalf: {
    position: 'absolute',
    zIndex: 2,
    lineHeight: '128px',
    height: 64,
    top: 64,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    background: 'black',
    color: 'red',
  },

  bottomHalfDigit: {
    display: 'inline-block',
    transform: 'translateY(-64px)',
  },
};

export default Digit;
