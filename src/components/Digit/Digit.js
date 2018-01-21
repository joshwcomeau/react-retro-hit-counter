// @flow
import React from 'react';

import { isSegmentActive } from './Digit.helpers';

const DIGIT_ASPECT_RATIO = 0.5;

const segments = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

type Props = {
  value: number,
  size: number,
  segmentWidth: number,
};

const defaultProps = {
  size: 48,
  segmentWidth: 6,
};

const Digit = (props: Props) => (
  <div style={styles.wrapper(props)}>
    {segments.map(segmentId => (
      <div style={styles.segment(props, segmentId)} />
    ))}
  </div>
);

const styles = {
  wrapper: (props: Props) => ({
    position: 'relative',
    width: props.size * DIGIT_ASPECT_RATIO,
    height: props.size,
  }),

  segment: ({ size, value, segmentWidth }: Props, segmentId: string) => {
    const halfSegmentWidth = segmentWidth / 2;

    const verticalSegmentHeight = (size - segmentWidth) / 2;

    const sharedProps = {
      position: 'absolute',
      backgroundColor: isSegmentActive(segmentId, value) ? 'red' : 'black',
    };
    // The segments are based on seven-segment displays
    // https://en.wikipedia.org/wiki/Seven-segment_display

    const segments = {
      a: {
        top: 0,
        left: halfSegmentWidth,
        right: halfSegmentWidth,
        height: segmentWidth,
      },
      b: {
        top: halfSegmentWidth,
        right: 0,
        height: verticalSegmentHeight,
        width: segmentWidth,
      },
      c: {
        top: halfSegmentWidth + verticalSegmentHeight,
        right: 0,
        height: verticalSegmentHeight,
        width: segmentWidth,
      },
      d: {
        bottom: 0,
        left: halfSegmentWidth,
        right: halfSegmentWidth,
        height: segmentWidth,
      },
      e: {
        top: halfSegmentWidth + verticalSegmentHeight,
        left: 0,
        height: verticalSegmentHeight,
        width: segmentWidth,
      },
      f: {
        top: halfSegmentWidth,
        left: 0,
        height: verticalSegmentHeight,
        width: segmentWidth,
      },
      g: {
        top: verticalSegmentHeight,
        left: halfSegmentWidth,
        right: halfSegmentWidth,
        height: segmentWidth,
      },
    };

    return { ...sharedProps, ...segments[segmentId] };
  },
};

Digit.defaultProps = defaultProps;

export default Digit;
