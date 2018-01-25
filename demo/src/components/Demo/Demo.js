// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Slider from '../Slider';

type Props = {};
type State = {
  size: number,
  minLength: number,
  padding: number,
  digitSpacing: number,
};

class Demo extends PureComponent<Props, State> {
  state = {
    size: 40,
    minLength: 4,
    padding: 4,
    digitSpacing: 3,
  };

  updateValue = (key: string) => (value: number | string) =>
    this.setState({ [key]: value });

  render() {
    return (
      <Wrapper>
        <Controls>
          <Row>
            <Slider
              label="size"
              min={12}
              max={128}
              value={this.state.size}
              onChange={this.updateValue('size')}
            />
          </Row>
          <Row>
            <Slider
              label="minLength"
              min={0}
              max={12}
              value={this.state.minLength}
              onChange={this.updateValue('minLength')}
            />
            <Slider
              label="padding"
              min={0}
              max={12}
              value={this.state.padding}
              onChange={this.updateValue('padding')}
            />
            <Slider
              label="digitSpacing"
              min={0}
              max={12}
              value={this.state.digitSpacing}
              onChange={this.updateValue('digitSpacing')}
            />
          </Row>
        </Controls>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  font-family: Courier New, monospaced;
  font-weight: bold;
`;

const Controls = styled.div``;

const Row = styled.div`
  display: flex;
  max-width: 600px;
  margin: auto;
  margin-bottom: 1rem;

  & > div {
    padding-right: 1rem;
  }

  & > div:last-of-type {
    padding-right: 0;
  }
`;

export default Demo;
