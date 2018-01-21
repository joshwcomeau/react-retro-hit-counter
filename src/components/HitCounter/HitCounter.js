// @flow
import React, { PureComponent } from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';

type Props = {
  hits: number,
  minLength: number,
  size: number,
  segmentThickness: number,
  segmentSpacing: number,
  backgroundColor: string,
  segmentActiveColor: string,
  segmentInactiveColor: string,
  digitSpacing: number,
};

class HitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 1,
    size: 128,
    segmentThickness: 6,
    segmentSpacing: 1,
    segmentActiveColor: '#00C853',
    segmentInactiveColor: 'rgba(0, 0, 0, 0.08)',
    digitSpacing: 5,
  };

  render() {
    const {
      hits,
      minLength,
      size,
      segmentThickness,
      segmentActiveColor,
      segmentInactiveColor,
      digitSpacing,
    } = this.props;

    const characterHeight = size;
    const characterWidth = characterHeight * 0.5;

    const paddedValue = padStart(hits.toString(), minLength, '0');
    const individualDigits = paddedValue.split('');

    return (
      <div style={styles.wrapper(this.props)}>
        {individualDigits.map((digit, index) => (
          <div
            key={index}
            style={{
              marginLeft: index !== 0 && digitSpacing / 2,
              marginRight:
                index !== individualDigits.length && digitSpacing / 2,
            }}
          >
            <Digit
              value={Number(digit)}
              width={characterWidth}
              height={characterHeight}
              segmentThickness={segmentThickness}
              segmentActiveColor={segmentActiveColor}
              segmentInactiveColor={segmentInactiveColor}
            />
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  wrapper: (props: Props) => ({
    display: 'flex',
    backgroundColor: props.backgroundColor,
  }),
};

export default HitCounter;
