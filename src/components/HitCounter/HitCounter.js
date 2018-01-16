// @flow
import React from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';

type Props = {
  hits: number,
  minLength?: number,
};

export default ({ hits, minLength = 4 }: Props) => {
  const paddedNum = padStart(hits.toString(), minLength, '0');

  return (
    <div style={styles.wrapper}>
      {paddedNum
        .split('')
        .map((digit, index) => <Digit key={index}>{digit}</Digit>)}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
  },
};
