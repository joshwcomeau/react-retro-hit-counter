// @flow
import React, { PureComponent } from 'react';

type Props = {
  children: number,
};

type State = {
  activeDigit: number,
  queue: Array<number>,
};

class Digit extends PureComponent<Props, State> {
  render() {
    return <div style={styles.wrapper}>{this.props.children}</div>;
  }
}

const styles = {
  wrapper: {},
};

export default Digit;
