// @flow
import React, { PureComponent } from 'react';

type Props = {
  value: number,
};

type State = {
  currentValue: number,
  queue: Array<number>,
  isFlipping: boolean,
};

class Digit extends PureComponent<Props, State> {
  state = {
    currentValue: this.props.value,
    queue: [],
    isFlipping: false,
  };

  componentWillReceiveProps(nextProps: Props) {
    // A concern for components like this is interruption. When a new value is
    // received while an animation is in progress, care needs to be taken to
    // avoid glitchy behaviour.
    //
    // The solution is a queue of upcoming values. Each digit will increment 1
    // value at a time until it's reached the desired value. If a new value
    // is received mid-progress, it's simply added to the queue.
    const { currentValue, isFlipping } = this.state;
  }

  render() {
    return <div style={styles.wrapper}>{this.state.currentValue}</div>;
  }
}

const styles = {
  wrapper: {},
};

export default Digit;
