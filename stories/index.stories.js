import React from 'react';
import { storiesOf } from '@storybook/react';

import RetroHitCounter from '../src/index.js';
import RetroBorder from '../src/components/RetroBorder';

import AutoIncrement from './helpers/AutoIncrement';
import AsyncSimulator from './helpers/AsyncSimulator';

storiesOf('Basic', module)
  .add('0', () => <RetroHitCounter hits={0} />)
  .add('543', () => <RetroHitCounter hits={543} />)
  .add('12345', () => <RetroHitCounter hits={12345} />);

storiesOf('RetroBorder alone', module).add('hello world', () => (
  <RetroBorder width={200} height={100}>
    Hello World
  </RetroBorder>
));

storiesOf('Border and Glow', module)
  .add('withBorder', () => (
    <RetroHitCounter withBorder minLength={6} hits={12345} />
  ))
  .add('withGlow', () => (
    <RetroHitCounter withGlow minLength={6} hits={12345} />
  ))
  .add('with both', () => (
    <RetroHitCounter withBorder withGlow minLength={6} hits={12345} />
  ))
  .add('with large glow', () => (
    <RetroHitCounter
      withBorder
      withGlow
      glowSize={4}
      minLength={6}
      hits={12345}
    />
  ))
  .add('with large border and glow', () => (
    <RetroHitCounter
      withBorder
      withGlow
      borderThickness={12}
      glowSize={5}
      minLength={6}
      hits={12345}
    />
  ))
  .add('with different segment color', () => (
    <RetroHitCounter
      withBorder
      withGlow
      minLength={6}
      segmentActiveColor="#00FFFF"
      hits={12345}
    />
  ));

storiesOf('Sizes', module)
  .add('small', () => (
    <RetroHitCounter
      hits={1234}
      size={32}
      segmentSpacing={0.5}
      segmentThickness={4}
      digitSpacing={2}
    />
  ))
  .add('medium', () => (
    <RetroHitCounter
      hits={1234}
      size={64}
      segmentSpacing={1}
      segmentThickness={6}
      digitSpacing={4}
    />
  ))
  .add('large', () => (
    <RetroHitCounter
      hits={1234}
      size={128}
      segmentSpacing={1}
      segmentThickness={10}
      digitSpacing={6}
    />
  ));

storiesOf('Colors', module)
  .add('light', () => (
    <RetroHitCounter
      hits={1234}
      segmentActiveColor="#00C853"
      segmentInactiveColor="rgba(0, 0, 0, 0.08)"
      backgroundColor="white"
    />
  ))
  .add('blue', () => (
    <RetroHitCounter
      hits={1234}
      segmentActiveColor="#82B1FF"
      segmentInactiveColor="#1565C0"
      backgroundColor="#0D47A1"
    />
  ))
  .add('transparent background (null)', () => (
    <RetroHitCounter
      hits={1234}
      segmentActiveColor="transparent"
      segmentInactiveColor="transparent"
      backgroundColor={null}
    />
  ))
  .add('transparent background ("transparent")', () => (
    <RetroHitCounter
      hits={1234}
      segmentActiveColor="black"
      segmentInactiveColor="transparent"
      backgroundColor="transparent"
    />
  ));

storiesOf('Thicknesses', module)
  .add('2', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={2} />
    </RetroBorder>
  ))
  .add('4', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={4} />
    </RetroBorder>
  ))
  .add('6', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={6} />
    </RetroBorder>
  ))
  .add('8', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={8} />
    </RetroBorder>
  ))
  .add('10', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={10} />
    </RetroBorder>
  ))
  .add('12', () => (
    <RetroBorder>
      <RetroHitCounter hits={1337} segmentThickness={12} />
    </RetroBorder>
  ));

storiesOf('Incrementing', module)
  .add('From 0', () => (
    <AutoIncrement>{val => <RetroHitCounter hits={val} />}</AutoIncrement>
  ))
  .add('From 500', () => (
    <AutoIncrement initialValue={500}>
      {val => <RetroHitCounter hits={val} />}
    </AutoIncrement>
  ))
  .add('From 999', () => (
    <AutoIncrement initialValue={999}>
      {val => <RetroHitCounter hits={val} />}
    </AutoIncrement>
  ));

storiesOf('Async data', module)
  .add('within 4 digits', () => (
    <AsyncSimulator initialData={{ hits: 0 }} loadedData={{ hits: 514 }}>
      {({ hits }) => <RetroHitCounter withBorder hits={hits} />}
    </AsyncSimulator>
  ))
  .add('from 4 to 6 digits', () => (
    <AsyncSimulator initialData={{ hits: 0 }} loadedData={{ hits: 123456 }}>
      {({ hits }) => <RetroHitCounter withBorder hits={hits} />}
    </AsyncSimulator>
  ));
