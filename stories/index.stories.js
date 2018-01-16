import React from 'react';
import { storiesOf } from '@storybook/react';

import HitCounter from '../src/index.js';

storiesOf('Basic', module)
  .add('0', () => <HitCounter hits={0} />)
  .add('543', () => <HitCounter hits={543} />)
  .add('12345', () => <HitCounter hits={12345} />);
