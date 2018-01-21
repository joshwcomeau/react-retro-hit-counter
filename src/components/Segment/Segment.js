// @flow
import React from 'react';

import type { SegmentId } from '../../types';

type Props = {
  segmentId: SegmentId,
  thickness: number,
  activeColor: string,
  inactiveColor: string,
  parentWidth: number,
  parentHeight: number,
  isActive: boolean,
};

const Segment = ({
  segmentId,
  thickness,
  activeColor,
  inactiveColor,
  parentWidth,
  parentHeight,
  isActive,
}: Props) => {
  const halfThickness = thickness / 2;

  const segmentLength = parentWidth - thickness;

  // Segments can either be vertical or horizontal, depending on their ID.
  const orientation = ['a', 'd', 'g'].includes(segmentId)
    ? 'horizontal'
    : 'vertical';

  // TODO: Should this be configurable?
  const segmentPadding = 1;

  const sharedProps = {
    // backgroundColor: isActive ? activeColor : inactiveColor,
  };
  // The segments are based on seven-segment displays
  // https://en.wikipedia.org/wiki/Seven-segment_display

  const segments = {
    a: {
      top: 0,
      left: halfThickness,
    },
    b: {
      top: halfThickness,
      left: segmentLength + thickness,
      transform: 'rotate(90deg)',
      transformOrigin: 'top left',
    },
    c: {
      top: halfThickness + segmentLength,
      left: segmentLength + thickness,
      transform: 'rotate(90deg)',
      transformOrigin: 'top left',
    },
    d: {
      top: segmentLength * 2,
      left: halfThickness,
    },
    e: {
      top: halfThickness + segmentLength,
      left: thickness,
      transform: 'rotate(90deg)',
      transformOrigin: 'top left',
    },
    f: {
      top: halfThickness,
      left: thickness,
      transform: 'rotate(90deg)',
      transformOrigin: 'top left',
    },
    g: {
      top: segmentLength,
      left: halfThickness,
    },
  };

  return (
    <div style={{ position: 'absolute', ...segments[segmentId] }}>
      <svg
        width={segmentLength}
        height={thickness}
        style={{ display: 'block' }}
      >
        {[inactiveColor, activeColor].map((color, index) => (
          <path
            key={index}
            fill={color}
            style={{
              opacity: color === activeColor ? (isActive ? 1 : 0) : 1,
              transition: 'opacity 500ms',
            }}
            d={`
              M ${segmentPadding} ${halfThickness}
              L ${halfThickness + segmentPadding} 0
              L ${segmentLength - halfThickness - segmentPadding} 0
              L ${segmentLength - segmentPadding} ${halfThickness}
              L ${segmentLength - halfThickness - segmentPadding} ${thickness}
              L ${halfThickness + segmentPadding} ${thickness}
            `}
          />
        ))}
      </svg>
    </div>
  );
};

const styles = {};

export default Segment;
