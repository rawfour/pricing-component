import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCardWrapper = styled.div`
  display: inline-grid;
  width: 315px;
  grid-gap: 20px;
  padding: 40px 28px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const StyledName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
`;

const StyledPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const StyledCurrency = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: 8px;
`;

const StyledBenefitsWrapper = styled.div`
  display: grid;
  grid-gap: 3px;
  margin-top: 4px;
`;

const StyledBenefit = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
  padding: 14px 0;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const Card = () => {
  return (
    <StyledCardWrapper>
      <StyledName>Basic</StyledName>
      <StyledPrice>
        <StyledCurrency>$</StyledCurrency>19.99
      </StyledPrice>
      <StyledBenefitsWrapper>
        <StyledBenefit>500 GB Storage</StyledBenefit>
        <StyledBenefit>2 Users Allowed</StyledBenefit>
        <StyledBenefit>Send up to 3GB</StyledBenefit>
      </StyledBenefitsWrapper>
      <Button>Learn more</Button>
    </StyledCardWrapper>
  );
};

export default Card;
