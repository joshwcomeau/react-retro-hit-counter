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

// From React Motion
// https://raw.githubusercontent.com/chenglou/react-motion/master/src/stepper.js
//
// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the
// array reference around.
let reusedTuple: [number, number] = [0, 0];
export function stepper(
  x: number,
  v: number,
  destX: number,
  k: number = 210,
  b: number = 20,
  precision: number = 0.01
): [number, number] {
  const msPerFrame = 1000 / 60;

  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  const Fspring = -k * (x - destX);

  // Damping, in kg / s
  const Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  const a = Fspring + Fdamper;

  const newV = v + a * msPerFrame;
  const newX = x + newV * msPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}
