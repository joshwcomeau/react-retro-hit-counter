// @flow
import React, { PureComponent } from 'react';
import RcSlider, { createSliderWithTooltip } from 'rc-slider';
import { injectGlobal } from 'styled-components';

import { COLORS, IS_MOBILE_USER_AGENT } from '../../constants';

import InputLabel from '../InputLabel';

type Props = {
  width: number,
  label: string,
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  defaultValue?: number,
  onChange: (val: number) => void,
};

const RcSliderWithTooltip = createSliderWithTooltip(RcSlider);

class Slider extends PureComponent<Props> {
  render() {
    const { label, ...delegatedProps } = this.props;

    return (
      <div style={{ flex: 1 }}>
        <InputLabel label={label} style={{ marginBottom: 12 }} />

        <RcSliderWithTooltip
          {...delegatedProps}
          tipProps={{ placement: 'bottom' }}
        />
      </div>
    );
  }
}

// HACK: RC Slider uses specific class names for styling, so we'll just use
// those.
const SLIDER_HEIGHT = IS_MOBILE_USER_AGENT ? 28 : 16;
const SLIDER_BAR_HEIGHT = 4;

injectGlobal`
  .rc-slider {
    position: relative;
    height: ${SLIDER_HEIGHT + 'px'};
    padding-top: ${SLIDER_HEIGHT / 2 + 'px'};
  }

  .rc-slider .rc-slider-rail, .rc-slider .rc-slider-track {
    position: absolute;
    height: ${SLIDER_BAR_HEIGHT + 'px'};
  }

  .rc-slider .rc-slider-rail {
    width: 100%;
    background: ${COLORS.tertiary[900]};
  }

  .rc-slider.rc-slider-disabled .rc-slider-rail {
    background: ${COLORS.gray[900]};
  }

  .rc-slider .rc-slider-track {
    background: ${COLORS.tertiary[500]};
  }

  .rc-slider.rc-slider-disabled .rc-slider-track {
    background: ${COLORS.gray[500]};
  }

  .rc-slider .rc-slider-handle {
    position: absolute;
    top: ${SLIDER_HEIGHT / 2 + SLIDER_BAR_HEIGHT / 2 + 'px'};
    background: ${COLORS.pink[500]};
    width: ${SLIDER_HEIGHT + 'px'};
    height: ${SLIDER_HEIGHT + 'px'};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: grab;
    touch-action: pan-x;
  }

  .rc-slider.rc-slider-disabled .rc-slider-handle {
    background: ${COLORS.gray[300]};
    cursor: not-allowed;
  }

  .rc-slider .rc-slider-handle:active {
    cursor: grabbing;
  }

  .rc-slider-tooltip {
    position: absolute;
    opacity: 1;
    will-change: opacity;
    transition: opacity 500ms;
    border-radius: 2px;
  }

  .rc-slider-tooltip-content {
    height: 21px;
    line-height: 21px;
    padding: 4px;
    background: ${COLORS.tertiary[700]};
    font-size: 11px;
    font-weight: 300;
    transform: translateY(5px);

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-bottom: 3px solid ${COLORS.tertiary[700]};
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      transform: translateY(-100%);
    }
  }

  .rc-slider-tooltip-hidden {
    opacity: 0;
  }
`;

export default Slider;
