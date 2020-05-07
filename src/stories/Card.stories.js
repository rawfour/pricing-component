import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card';

const basic = {
  name: 'Basic',
  price: '19.99',
  currency: '$',
  benefits: ['500 GB Storage', '2 Users Allowed', 'Send up to 3GB'],
};

storiesOf('Card', module)
  .add('Normal', () => <Card content={basic} />)
  .add('Awarded', () => <Card awarded content={basic} />);
