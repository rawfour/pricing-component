import React from 'react';
import styled from 'styled-components';
import bgBottom from '../assets/img/bg-bottom.svg';
import bgTop from '../assets/img/bg-top.svg';

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const StyledTopImage = styled.img`
  display: block;
  position: absolute;
  top: -40px;
  right: -195px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    top: -10px;
    right: -25px;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    top: 0;
    right: 0;
  }
`;

const StyledBottomImage = styled.img`
  display: none;
  @media ${({ theme }) => theme.breakpoints.lg} {
    display: block;
    position: absolute;
    bottom: -25px;
    left: -30px;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    bottom: 0;
    left: 0;
  }
`;

const Background = () => {
  return (
    <StyledBackground>
      <StyledTopImage src={bgTop} />
      <StyledBottomImage src={bgBottom} />
    </StyledBackground>
  );
};

export default Background;
