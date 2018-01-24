// @flow
import React, { PureComponent } from 'react';

type Props = {
  initialValue: number,
  tickSpeed: number,
  children: (initialValue: number) => React$Node,
};

type State = {
  value: number,
};

class AutoIncrement extends PureComponent<Props, State> {
  static defaultProps = {
    initialValue: 0,
    tickSpeed: 1000,
  };

  intervalId: number;

  state = {
    value: this.props.initialValue,
  };

  componentDidMount() {
    this.intervalId = window.setInterval(this.increment, this.props.tickSpeed);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }));
  };

  render() {
    return this.props.children(this.state.value);
  }
}

export default AutoIncrement;
