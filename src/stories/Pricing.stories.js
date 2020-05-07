import React from 'react';
import { storiesOf } from '@storybook/react';
import CardCompare from '../components/CardCompare';
import Pricing from '../components/Pricing';

storiesOf('Pricing', module)
  .add('Card compare', () => <CardCompare />)
  .add('Pricing', () => <Pricing />);
