// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import RetroHitCounter from 'react-retro-hit-counter';

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
    hits: 1337,
    size: 40,
    minLength: 4,
    padding: 4,
    digitSpacing: 3,
  };

  updateFromSlider = (key: string) => (value: number | string | boolean) =>
    this.setState({ [key]: value });

  updateFromCheckbox = (key: string) => (ev: SyntheticInputEvent<*>) =>
    this.setState({ [key]: ev.target.checked });

  render() {
    return (
      <Wrapper>
        <CounterOuterWrapper>
          <CounterInnerWrapper>
            <RetroHitCounter {...this.state} />
          </CounterInnerWrapper>
        </CounterOuterWrapper>
        <Controls>
          <Row>
            <label>
              <input
                type="checkbox"
                onChange={this.updateFromCheckbox('withBorder')}
              />{' '}
              withBorder
            </label>
            <label>
              <input
                type="checkbox"
                onChange={this.updateFromCheckbox('withGlow')}
              />{' '}
              withGlow
            </label>
          </Row>
          <Row>
            <Slider
              label="size"
              min={12}
              max={128}
              value={this.state.size}
              onChange={this.updateFromSlider('size')}
            />
          </Row>
          <Row>
            <Slider
              label="minLength"
              min={0}
              max={12}
              value={this.state.minLength}
              onChange={this.updateFromSlider('minLength')}
            />
            <Slider
              label="padding"
              min={0}
              max={12}
              value={this.state.padding}
              onChange={this.updateFromSlider('padding')}
            />
            <Slider
              label="digitSpacing"
              min={0}
              max={12}
              value={this.state.digitSpacing}
              onChange={this.updateFromSlider('digitSpacing')}
            />
          </Row>
        </Controls>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  background: rgba(0, 0, 0, 0.75);

  font-family: Courier New, monospaced;
  font-weight: bold;
`;

const CounterOuterWrapper = styled.div`
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterInnerWrapper = styled.div`
  padding: 2rem;
  background: #fff;
`;

const Controls = styled.div`
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;

  margin-bottom: 1rem;

  & > * {
    flex: 1;
    padding-right: 1rem;
  }

  & > *:last-of-type {
    padding-right: 0;
  }
`;

export default Demo;
