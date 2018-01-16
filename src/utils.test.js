// @flow
import { padStart } from './utils';

describe('padStart', () => {
  it('pads using the native implementation', () => {
    expect(padStart('12', 4, '0', true)).toEqual('0012');
  });

  it('pads using the fallback implementation', () => {
    expect(padStart('12', 4, '0', false)).toEqual('0012');
  });

  it('does not pad when at the target length', () => {
    expect(padStart('1234', 4, '0', false)).toEqual('1234');
  });

  it('does not pad when larger than the target length', () => {
    expect(padStart('12345', 4, '0', false)).toEqual('12345');
  });
});
