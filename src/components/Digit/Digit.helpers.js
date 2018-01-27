// @flow
const segmentsByValue = {
  [0]: ['a', 'b', 'c', 'd', 'e', 'f'],
  [1]: ['b', 'c'],
  [2]: ['a', 'b', 'g', 'e', 'd'],
  [3]: ['a', 'b', 'g', 'c', 'd'],
  [4]: ['f', 'g', 'b', 'c'],
  [5]: ['a', 'f', 'g', 'c', 'd'],
  [6]: ['a', 'f', 'g', 'c', 'd', 'e'],
  [7]: ['a', 'b', 'c'],
  [8]: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  [9]: ['a', 'b', 'c', 'd', 'f', 'g'],
};

export const isSegmentActive = (segmentId: string, value: number) =>
  segmentsByValue[value].indexOf(segmentId) !== -1;
