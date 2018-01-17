// @flow

/**
 * Produces an array of numbers between 0 and 9, between two values.
 * Excludes lower bound, includes upper bound
 *
 * @example getInBetweenDigits(3, 5) -> [4, 5]
 * @example getInBetweenDigits(7, 1) -> [8, 9, 0, 1]
 */
export const getInBetweenDigits = (
  currentValue: number,
  finalValue: number,
  digits: Array<number> = []
) => {
  if (currentValue === finalValue) {
    return digits;
  }

  // Modulo 10 so that our values always range 0-9.
  // This is necessary because we can cross that threshold;
  // If our value foes from 8 to 2, we need to capture 9, 0, 1.
  const nextValue = (currentValue + 1) % 10;

  return getInBetweenDigits(nextValue, finalValue, [...digits, nextValue]);
};
