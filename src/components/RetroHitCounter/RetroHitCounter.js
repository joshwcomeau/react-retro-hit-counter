// @flow
import React, { PureComponent } from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';
import RetroBorder from '../RetroBorder';

type Props = {
  hits: number,
  minLength: number,
  size: number,
  padding: number,
  digitSpacing: number,
  segmentThickness: number,
  segmentSpacing: number,
  segmentActiveColor: string,
  segmentInactiveColor: string,
  backgroundColor: string,
  withBorder: boolean,
  borderThickness: number,
  withGlow: boolean,
  glowSize: number,
  glowStrength: number,
};

class RetroHitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 4,
    size: 40,
    padding: 4,
    digitSpacing: 3,
    segmentThickness: 4,
    segmentSpacing: 0.5,
    segmentActiveColor: '#76FF03',
    segmentInactiveColor: '#315324',
    backgroundColor: '#222222',
    withBorder: true,
    borderThickness: 7,
    withGlow: false,
    glowSize: 2,
    glowStrength: 0.4,
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
      borderThickness,
      withGlow,
      glowSize,
      glowStrength,
    } = this.props;

    // NOTE: Each segment in each digit is exactly the same size. This means a
    // very specific aspect ratio is necessary.
    //
    // The "base" aspect ratio is 0.5: there are 2 vertical segments and 1
    // horizontal one, so the width should be half of the height.
    // This gets messed up with segment spacing: both the horizontal and
    // vertical directions have 1 `segmentThickness` worth of additional space.
    // The vertical ('side') segments don't quite reach the top/bottom, and the
    // horizontal ones don't quite reach the sides.
    //
    // To fix this, we need to multiply the base aspect ratio, 0.5, by the ratio
    // between height and segment thickness. The thicker the segment is, the
    // further from that 0.5 default we get.
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

    const shouldShowGlow = withGlow && glowStrength > 0;

    const counter = (
      <div style={styles.wrapper()}>
        <div style={styles.counter(backgroundColor, padding, totalWidth)}>
          {individualDigits.map((digit, index) => (
            <Digit
              key={index}
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

        {shouldShowGlow && (
          <div
            style={styles.glow({
              strength: glowStrength,
              color: segmentActiveColor,
              size: glowSize,
            })}
          />
        )}
      </div>
    );

    if (!withBorder) {
      return counter;
    }

    return (
      <RetroBorder
        width={totalWidth + padding * 2 + borderThickness * 2}
        height={characterHeight + padding * 2 + borderThickness * 2}
        thickness={borderThickness}
        glowColor={segmentActiveColor}
        glowStrength={glowStrength}
      >
        {counter}
      </RetroBorder>
    );
  }
}

const styles = {
  wrapper: () => ({
    position: 'relative',
    display: 'inline-block',
  }),
  counter: (backgroundColor, padding, width) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    width,
    backgroundColor,
    padding,
    boxSizing: 'content-box',
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
    boxSizing: 'content-box',
  }),

  glow: ({ strength, color, size }) => ({
    position: 'absolute',
    zIndex: 1,
    top: -size,
    left: -size,
    right: -size,
    bottom: -size,
    background: color,
    filter: `blur(${size}px)`,
    opacity: strength,
  }),
};

export default RetroHitCounter;
