import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCardsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 25px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
    grid-gap: 0;
  }
`;

const basic = {
  name: 'Basic',
  price: '19.99',
  currency: '$',
  benefits: ['500 GB Storage', '2 Users Allowed', 'Send up to 3GB'],
};

const pro = {
  name: 'Professional',
  price: '24.99',
  currency: '$',
  benefits: ['1 TB Storage', '5 Users Allowed', 'Send up to 10GB'],
};

const master = {
  name: 'Master',
  price: '39.99',
  currency: '$',
  benefits: ['2 TB Storage', '10 Users Allowed', 'Send up to 20GB'],
};

const CardCompare = () => {
  return (
    <StyledCardsWrapper>
      <Card roundedLeft content={basic} />
      <Card awarded content={pro} />
      <Card roundedRight content={master} />
    </StyledCardsWrapper>
  );
};

export default CardCompare;
