// @flow
import { getInBetweenDigits } from './Digit.helpers';

describe('Digit Helpers', () => {
  describe('getInBetweenDigits', () => {
    it('returns an empty array on same-value', () => {
      const expectedVal = [];
      const actualVal = getInBetweenDigits(4, 4);

      expect(actualVal).toEqual(expectedVal);
    });

    it('captures a single value difference', () => {
      const expectedVal = [5];
      const actualVal = getInBetweenDigits(4, 5);

      expect(actualVal).toEqual(expectedVal);
    });

    it('captures a single value difference from zero', () => {
      const expectedVal = [1];
      const actualVal = getInBetweenDigits(0, 1);

      expect(actualVal).toEqual(expectedVal);
    });

    it('captures two-value difference', () => {
      const expectedVal = [5, 6];
      const actualVal = getInBetweenDigits(4, 6);

      expect(actualVal).toEqual(expectedVal);
    });

    it('captures a wide spread', () => {
      const expectedVal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actualVal = getInBetweenDigits(0, 9);

      expect(actualVal).toEqual(expectedVal);
    });

    it('rolls over the top', () => {
      const expectedVal = [9, 0, 1, 2];
      const actualVal = getInBetweenDigits(8, 2);

      expect(actualVal).toEqual(expectedVal);
    });
  });
});
