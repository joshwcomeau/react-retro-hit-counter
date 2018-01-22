import React from 'react';
import { storiesOf } from '@storybook/react';

import HitCounter from '../src/index.js';

import AutoIncrement from './helpers/AutoIncrement';

storiesOf('Basic', module)
  .add('0', () => <HitCounter hits={0} />)
  .add('543', () => <HitCounter hits={543} />)
  .add('12345', () => <HitCounter hits={12345} />);

storiesOf('With Border', module).add('default', () => (
  <HitCounter hits={123} withBorder />
));

storiesOf('Sizes', module)
  .add('small', () => (
    <HitCounter
      hits={1234}
      size={32}
      segmentSpacing={0.5}
      segmentThickness={4}
      digitSpacing={2}
    />
  ))
  .add('medium', () => (
    <HitCounter
      hits={1234}
      size={64}
      segmentSpacing={1}
      segmentThickness={6}
      digitSpacing={4}
    />
  ))
  .add('large', () => (
    <HitCounter
      hits={1234}
      size={128}
      segmentSpacing={1}
      segmentThickness={10}
      digitSpacing={6}
    />
  ));

storiesOf('Colors', module)
  .add('light', () => (
    <HitCounter
      hits={1234}
      segmentActiveColor="#00C853"
      segmentInactiveColor="rgba(0, 0, 0, 0.08)"
      backgroundColor="white"
    />
  ))
  .add('blue', () => (
    <HitCounter
      hits={1234}
      segmentActiveColor="#82B1FF"
      segmentInactiveColor="#1565C0"
      backgroundColor="#0D47A1"
    />
  ));

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
