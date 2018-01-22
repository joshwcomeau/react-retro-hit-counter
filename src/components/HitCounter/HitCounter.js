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
  withBorder: boolean,
  borderWidth: number,
};

class HitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 1,
    size: 40,
    segmentThickness: 4,
    segmentSpacing: 0.5,
    segmentActiveColor: '#76FF03',
    segmentInactiveColor: '#33691E',
    backgroundColor: '#222222',
    digitSpacing: 3,
    padding: 4,
    borderWidth: 5,
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
      withBorder,
      borderWidth,
    } = this.props;

    // HACK: Right now, each segment is exactly the same size. This means a very
    // specific aspect ratio is necessary.
    // The "base" aspect ratio is 0.5, since the width should be half of the
    // height. But, there's a problem: there are 2 full segment lengths in the
    // height, and only 1 in the width. This means that the ratio depends on
    // the segment thickness: if the lines are really thick, the width needs to
    // be larger.
    const aspectRatio = 0.5 * (1 + segmentThickness / size);

    const characterHeight = size;
    const characterWidth = characterHeight * aspectRatio;

    const paddedValue = padStart(hits.toString(), minLength, '0');
    const individualDigits = paddedValue.split('');

    const totalWidth =
      // Total width is each number's width,
      characterWidth * individualDigits.length +
      // plus spacing between them (eg 3x the spacing for 4 digits)
      digitSpacing * (individualDigits.length - 1);

    const counter = (
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

    if (!withBorder) {
      return counter;
    }

    return (
      <div style={styles.withBorderWrapper(borderWidth)}>
        <div style={styles.counterWrapper()}>{counter}</div>

        <div style={styles.borderPieces()}>
          <div style={styles.borderTop(borderWidth)} />
          <div style={styles.borderLeft(borderWidth)} />
          <div style={styles.borderRight(borderWidth)} />
          <div style={styles.borderBottom(borderWidth)} />
        </div>
      </div>
    );
  }
}

const sharedBorderStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderStyle: 'solid',
};

const styles = {
  wrapper: (backgroundColor, padding, width) => ({
    display: 'inline-flex',
    justifyContent: 'space-between',
    width,
    backgroundColor,
    padding,
  }),

  withBorderWrapper: borderWidth => ({
    position: 'relative',
    display: 'inline-block',
    padding: borderWidth,
    background: '#CCC',
  }),

  counterWrapper: () => ({
    position: 'relative',
    zIndex: 1,
  }),

  borderPieces: () => ({
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),

  borderTop: borderWidth => ({
    ...sharedBorderStyle,
    borderWidth: `${20}px`,
    borderColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    // borderImage: 'linear-gradient(to bottom, red, green, blue) 1% 100%',
  }),

  borderLeft: borderWidth => ({}),
  borderRight: borderWidth => ({}),
  borderBottom: borderWidth => ({}),
};

export default HitCounter;
