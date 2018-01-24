// @flow
import React, { PureComponent } from 'react';

type Props = {
  initialData: any,
  loadedData: any,
  delay: number,
  children: (data: any) => React$Node,
};

type State = {
  data: number,
};

class AsyncSimulator extends PureComponent<Props, State> {
  static defaultProps = {
    delay: 1000,
  };

  state = {
    data: this.props.initialData,
  };

  timeoutId: number;

  componentDidMount() {
    this.timeoutId = window.setInterval(this.load, this.props.delay);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeoutId);
  }

  load = () => {
    this.setState({ data: this.props.loadedData });
  };

  render() {
    return this.props.children(this.state.data);
  }
}

export default AsyncSimulator;
