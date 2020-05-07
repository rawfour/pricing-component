import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Switcher from './Switcher';
import CardCompare from './CardCompare';

const StyledPricingWrapper = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  grid-gap: 30px;
  padding: 55px 0;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 65px 0;
    grid-gap: 35px;
  }
`;

const Pricing = () => {
  return (
    <StyledPricingWrapper>
      <Title>Our Pricing</Title>
      <Switcher />
      <CardCompare />
    </StyledPricingWrapper>
  );
};

export default Pricing;
