// @flow
import React from 'react';

import Segment from '../Segment';
import { isSegmentActive } from './Digit.helpers';

import type { SegmentId } from '../../types';

const segments: Array<SegmentId> = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

type Props = {
  value: number,
  width: number,
  height: number,
  segmentThickness: number,
  segmentSpacing: number,
  segmentActiveColor: string,
  segmentInactiveColor: string,
};

const Digit = ({
  value,
  width,
  height,
  segmentThickness,
  segmentSpacing,
  segmentActiveColor,
  segmentInactiveColor,
}: Props) => (
  <div style={styles.wrapper(width, height)}>
    {segments.map(segmentId => (
      <Segment
        key={segmentId}
        segmentId={segmentId}
        thickness={segmentThickness}
        spacing={segmentSpacing}
        activeColor={segmentActiveColor}
        inactiveColor={segmentInactiveColor}
        parentWidth={width}
        parentHeight={height}
        isActive={isSegmentActive(segmentId, value)}
      />
    ))}
  </div>
);

const styles = {
  wrapper: (width: number, height: number) => ({
    position: 'relative',
    width: width,
    height: height,
  }),
};

export default Digit;
