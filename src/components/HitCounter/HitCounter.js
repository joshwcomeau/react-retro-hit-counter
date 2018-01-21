// @flow
import React, { PureComponent } from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';

type Props = {
  hits: number,
  minLength: number,
  size: number,
  backgroundColor: string,
  padding: number,
  digitSpacing: number,
  segmentThickness: number,
  segmentSpacing: number,
  segmentActiveColor: string,
  segmentInactiveColor: string,
};

class HitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 1,
    size: 40,
    segmentThickness: 4,
    segmentSpacing: 0.5,
    segmentActiveColor: '#00C853',
    segmentInactiveColor: 'rgba(0, 0, 0, 0.08)',
    digitSpacing: 3,
    padding: 4,
  };

  render() {
    const {
      hits,
      minLength,
      size,
      backgroundColor,
      padding,
      segmentThickness,
      segmentSpacing,
      segmentActiveColor,
      segmentInactiveColor,
      digitSpacing,
    } = this.props;

    const characterHeight = size - segmentThickness;
    const characterWidth = characterHeight * 0.5;

    const paddedValue = padStart(hits.toString(), minLength, '0');
    const individualDigits = paddedValue.split('');

    const totalWidth =
      // Total width is each number's width,
      characterWidth * individualDigits.length +
      // Plus spacing between them (eg 3x the spacing for 4 digits)
      digitSpacing * (individualDigits.length - 1);

    return (
      <div style={styles.wrapper(backgroundColor, padding, totalWidth)}>
        {individualDigits.map((digit, index) => (
          <Digit
            value={Number(digit)}
            width={characterWidth}
            height={characterHeight}
            segmentThickness={segmentThickness}
            segmentSpacing={segmentSpacing}
            segmentActiveColor={segmentActiveColor}
            segmentInactiveColor={segmentInactiveColor}
          />
        ))}
      </div>
    );
  }
}

const styles = {
  wrapper: (backgroundColor, padding, width) => ({
    display: 'inline-flex',
    justifyContent: 'space-between',
    width,
    backgroundColor,
    padding,
  }),
};

export default HitCounter;
