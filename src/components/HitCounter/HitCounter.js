// @flow
import React, { PureComponent } from 'react';

import { padStart } from '../../utils';

import Digit from '../Digit';

type Props = {
  hits: number,
  minLength: number,
};

class HitCounter extends PureComponent<Props> {
  static defaultProps = {
    minLength: 4,
  };

  render() {
    const { hits, minLength } = this.props;

    const paddedValue = padStart(hits.toString(), minLength, '0');

    return (
      <div style={styles.wrapper}>
        {paddedValue
          .split('')
          .map((digit, index) => <Digit key={index} value={Number(digit)} />)}
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
