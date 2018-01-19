// @flow
import React, { PureComponent } from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';

type Props = {
  hits: number,
  minLength: number,
  size: number,
};

class HitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 4,
    size: 128,
  };

  render() {
    const { hits, size, minLength } = this.props;

    const paddedValue = padStart(hits.toString(), minLength, '0');

    return (
      <div style={styles.wrapper}>
        {paddedValue
          .split('')
          .map((digit, index) => (
            <Digit key={index} value={Number(digit)} size={size} />
          ))}
      </div>
    );
  }
}

const styles = {
  wrapper: {
    display: 'flex',
  },
};

export default HitCounter;
