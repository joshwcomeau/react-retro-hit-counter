import React from 'react';
import { storiesOf } from '@storybook/react';

import HitCounter from '../src/index.js';
import RetroBorder from '../src/components/RetroBorder';

import AutoIncrement from './helpers/AutoIncrement';
import AsyncSimulator from './helpers/AsyncSimulator';

storiesOf('Basic', module)
  .add('0', () => <HitCounter hits={0} />)
  .add('543', () => <HitCounter hits={543} />)
  .add('12345', () => <HitCounter hits={12345} />);

storiesOf('RetroBorder alone', module).add('hello world', () => (
  <RetroBorder width={200} height={100}>
    Hello World
  </RetroBorder>
));

storiesOf('With Border', module)
  .add('default', () => (
    <RetroBorder>
      <HitCounter withBorder minLength={6} hits={12345} />
    </RetroBorder>
  ))
  .add('default, with glow', () => (
    <RetroBorder glowColor={HitCounter.defaultProps.segmentActiveColor}>
      <HitCounter minLength={6} hits={12345} />
    </RetroBorder>
  ))
  .add('thicker', () => (
    <RetroBorder thickness={10}>
      <HitCounter minLength={6} hits={12345} />
    </RetroBorder>
  ))
  .add('thicker, with glow', () => (
    <RetroBorder
      glowColor={HitCounter.defaultProps.segmentActiveColor}
      thickness={10}
    >
      <HitCounter minLength={6} hits={12345} />
    </RetroBorder>
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
  ))
  .add('transparent background (null)', () => (
    <HitCounter
      hits={1234}
      segmentActiveColor="transparent"
      segmentInactiveColor="transparent"
      backgroundColor={null}
    />
  ))
  .add('transparent background ("transparent")', () => (
    <HitCounter
      hits={1234}
      segmentActiveColor="black"
      segmentInactiveColor="transparent"
      backgroundColor="transparent"
    />
  ));

storiesOf('Thicknesses', module)
  .add('2', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={2} />
    </RetroBorder>
  ))
  .add('4', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={4} />
    </RetroBorder>
  ))
  .add('6', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={6} />
    </RetroBorder>
  ))
  .add('8', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={8} />
    </RetroBorder>
  ))
  .add('10', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={10} />
    </RetroBorder>
  ))
  .add('12', () => (
    <RetroBorder>
      <HitCounter hits={1337} segmentThickness={12} />
    </RetroBorder>
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

storiesOf('Async data', module)
  .add('within 4 digits', () => (
    <AsyncSimulator initialData={{ hits: 0 }} loadedData={{ hits: 514 }}>
      {({ hits }) => <HitCounter withBorder hits={hits} />}
    </AsyncSimulator>
  ))
  .add('from 4 to 6 digits', () => (
    <AsyncSimulator initialData={{ hits: 0 }} loadedData={{ hits: 123456 }}>
      {({ hits }) => <HitCounter withBorder hits={hits} />}
    </AsyncSimulator>
  ));
