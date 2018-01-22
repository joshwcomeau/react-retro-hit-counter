// @flow
import React from 'react';

import type { SegmentId } from '../../types';

type Props = {
  segmentId: SegmentId,
  thickness: number,
  spacing: number,
  activeColor: string,
  inactiveColor: string,
  parentWidth: number,
  parentHeight: number,
  isActive: boolean,
};

const Segment = ({
  segmentId,
  thickness,
  spacing,
  activeColor,
  inactiveColor,
  parentWidth,
  parentHeight,
  isActive,
}: Props) => {
  const halfThickness = thickness / 2;
  const segmentLength = parentWidth - thickness;

  // TODO: Should this be configurable?
  const animationDuration = 250;

  // The segments are based on seven-segment displays.
  // IDs are calculated going clockwise from the top:
  //
  //     A
  //  F     B
  //     G
  //  E     C
  //     D
  //
  // More info: https://en.wikipedia.org/wiki/Seven-segment_display
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
      bottom: 0,
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
              transition: `opacity ${animationDuration}ms`,
            }}
            d={`
              M ${spacing} ${halfThickness}
              L ${halfThickness + spacing} 0
              L ${segmentLength - halfThickness - spacing} 0
              L ${segmentLength - spacing} ${halfThickness}
              L ${segmentLength - halfThickness - spacing} ${thickness}
              L ${halfThickness + spacing} ${thickness}
            `}
          />
        ))}
      </svg>
    </div>
  );
};

export default Segment;
