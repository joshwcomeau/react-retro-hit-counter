import React from 'react';
import { storiesOf } from '@storybook/react';

import HitCounter from '../src/index.js';

import AutoIncrement from './helpers/AutoIncrement';

storiesOf('Basic', module)
  .add('0', () => <HitCounter hits={0} />)
  .add('543', () => <HitCounter hits={543} />)
  .add('12345', () => <HitCounter hits={12345} />);

storiesOf('Incrementing', module)
  .add('From 0', () => (
    <AutoIncrement>{val => <HitCounter hits={val} />}</AutoIncrement>
  ))
  .add('From 500', () => (
    <AutoIncrement initialValue={500}>
      {val => <HitCounter hits={val} />}
    </AutoIncrement>
  ))
  .add('From 999', () => (
    <AutoIncrement initialValue={999}>
      {val => <HitCounter hits={val} />}
    </AutoIncrement>
  ));
