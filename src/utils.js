// @flow

export const padStart = (
  str: string,
  targetLength: number,
  padString: string,
  // Allow the function to use String.prototype.padStart when the environment
  // supports it. Defaults to true, you'd really only want to set it to false
  // for testing the manual interpretation.
  useNative: boolean = true
) => {
  if (useNative && typeof String.prototype.padStart === 'function') {
    return str.padStart(targetLength, padString);
  }

  if (str.length >= targetLength) {
    return str;
  }

  const numToPad = targetLength - str.length;

  let padding = '';
  for (let i = 0; i < numToPad; i++) {
    padding = `${padString}${padding}`;
  }

  return `${padding}${str}`;
};
