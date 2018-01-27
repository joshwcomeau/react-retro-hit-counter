// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import RetroHitCounter from 'react-retro-hit-counter';

import Checkbox from '../Checkbox';
import Slider from '../Slider';
import Input from '../Input';

type Props = {};
type State = {
  withBorder: boolean,
  withGlow: boolean,
  size: number,
  minLength: number,
  padding: number,
  digitSpacing: number,
  segmentThickness: number,
  segmentSpacing: number,
  segmentActiveColor: string,
  segmentInactiveColor: string,
  backgroundColor: string,
  borderThickness: number,
  glowSize: number,
  glowStrength: number,
};

class Demo extends PureComponent<Props, State> {
  state = {
    hits: 1337,
    withBorder: true,
    withGlow: false,
    size: 40,
    minLength: 4,
    padding: 4,
    digitSpacing: 3,
    segmentThickness: 4,
    segmentSpacing: 0.5,
    segmentActiveColor: '#76FF03',
    segmentInactiveColor: '#315324',
    backgroundColor: '#222222',
    borderThickness: 7,
    glowSize: 2,
    glowStrength: 0.4,
  };

  updateFromInput = (key: string) => (ev: SyntheticInputEvent<*>) =>
    this.setState({ [key]: ev.target.value });

  updateFromCheckbox = (key: string) => (ev: SyntheticInputEvent<*>) =>
    this.setState({ [key]: ev.target.checked });

  updateFromSlider = (key: string) => (value: number | string | boolean) =>
    this.setState({ [key]: value });

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
            <Checkbox
              label="withBorder"
              isChecked={this.state.withBorder}
              onChange={this.updateFromCheckbox('withBorder')}
            />
            <Checkbox
              label="withGlow"
              isChecked={this.state.withGlow}
              onChange={this.updateFromCheckbox('withGlow')}
            />
          </Row>

          <Row>
            <Input
              type="number"
              label="hits"
              value={this.state.hits}
              onChange={this.updateFromInput('hits')}
            />

            <Slider
              label="size"
              min={12}
              max={128}
              value={this.state.size}
              onChange={this.updateFromSlider('size')}
            />
          </Row>

          <Row>
            <Input
              type="color"
              value={this.state.segmentActiveColor}
              label="segmentActiveColor"
              onChange={this.updateFromInput('segmentActiveColor')}
            />
            <Input
              type="color"
              value={this.state.segmentInactiveColor}
              label="segmentInactiveColor"
              onChange={this.updateFromInput('segmentInactiveColor')}
            />
            <Input
              type="color"
              value={this.state.backgroundColor}
              label="backgroundColor"
              onChange={this.updateFromInput('backgroundColor')}
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

          <Row>
            <Slider
              label="segmentThickness"
              min={1}
              max={24}
              value={this.state.segmentThickness}
              onChange={this.updateFromSlider('segmentThickness')}
            />
            <Slider
              label="segmentSpacing"
              min={0}
              max={10}
              step={0.5}
              value={this.state.segmentSpacing}
              onChange={this.updateFromSlider('segmentSpacing')}
            />
          </Row>

          <Row>
            <Slider
              label="borderThickness"
              min={1}
              max={20}
              value={this.state.borderThickness}
              onChange={this.updateFromSlider('borderThickness')}
            />
            <Slider
              label="glowSize"
              min={0}
              max={10}
              step={0.5}
              value={this.state.glowSize}
              onChange={this.updateFromSlider('glowSize')}
            />
            <Slider
              label="glowStrength"
              min={0}
              max={1}
              step={0.05}
              value={this.state.glowStrength}
              onChange={this.updateFromSlider('glowStrength')}
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

  margin-bottom: 2rem;

  & > * {
    flex: 1;
    padding-right: 1rem;
  }

  & > *:last-of-type {
    padding-right: 0;
  }
`;

export default Demo;
