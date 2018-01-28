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
  hits: number,
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
          <br />
          <br />

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

          <br />
          <br />
          <Row>
            <Checkbox
              label="withBorder"
              isChecked={this.state.withBorder}
              onChange={this.updateFromCheckbox('withBorder')}
            />
            <div style={{ flex: 2 }}>
              <Slider
                label="borderThickness"
                disabled={!this.state.withBorder}
                min={1}
                max={20}
                value={this.state.borderThickness}
                onChange={this.updateFromSlider('borderThickness')}
              />
            </div>
          </Row>

          <Row>
            <Checkbox
              label="withGlow"
              isChecked={this.state.withGlow}
              onChange={this.updateFromCheckbox('withGlow')}
            />

            <Slider
              label="glowSize"
              disabled={!this.state.withGlow}
              min={0}
              max={10}
              step={0.5}
              value={this.state.glowSize}
              onChange={this.updateFromSlider('glowSize')}
            />
            <Slider
              label="glowStrength"
              disabled={!this.state.withGlow}
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
  max-width: 750px;
  margin: auto;
  background: rgba(0, 0, 0, 0.75);
  font-family: Courier New, monospaced;
  font-weight: bold;
`;

const CounterOuterWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
`;

const CounterInnerWrapper = styled.div`
  padding: 2rem;
  height: 175px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Controls = styled.div`
  position: relative;
  z-index: 1;
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

  @media (max-width: 600px) {
    display: block;

    & > * {
      padding-right: 0;
      padding-bottom: 1rem;
    }
  }
`;

export default Demo;
