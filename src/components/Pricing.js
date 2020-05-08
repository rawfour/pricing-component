import React, { useState } from 'react';
import styled from 'styled-components';
import { SwitcherContext } from '../context';
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
    position: fixed;
    padding: 65px 0;
    grid-gap: 35px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Pricing = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <SwitcherContext.Provider value={{ checked, action: handleChange }}>
      <StyledPricingWrapper>
        <Title>Our Pricing</Title>
        <Switcher />
        <CardCompare />
      </StyledPricingWrapper>
    </SwitcherContext.Provider>
  );
};

export default Pricing;
