import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Switcher from './Switcher';
import CardCompare from './CardCompare';

const StyledPricingWrapper = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  grid-gap: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
