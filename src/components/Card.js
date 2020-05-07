import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';

const StyledCardWrapper = styled.div`
  display: inline-grid;
  width: 315px;
  grid-gap: 20px;
  padding: 30px 28px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ awarded }) =>
    awarded &&
    css`
      padding: 49px 28px;
      background-image: ${({ theme }) => theme.colors.gradient};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: none;
    `}
    ${({ roundedLeft }) =>
      roundedLeft &&
      css`
        border-radius: 10px 0 0 10px;
      `}

    ${({ roundedRight }) =>
      roundedRight &&
      css`
        border-radius: 0 10px 10px 0;
      `}
`;

const StyledName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
`;

const StyledPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;

const StyledCurrency = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
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
  border-top: 1px solid ${({ theme }) => theme.colors.lighGary};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lighGary};
  }
`;

const Card = ({ awarded, roundedLeft, roundedRight, content }) => {
  const { name, price, currency, benefits } = content;
  return (
    <StyledCardWrapper awarded={awarded} roundedLeft={roundedLeft} roundedRight={roundedRight}>
      <StyledName>{name}</StyledName>
      <StyledPrice>
        <StyledCurrency>{currency}</StyledCurrency>
        {price}
      </StyledPrice>
      <StyledBenefitsWrapper>
        {benefits.map((item) => (
          <StyledBenefit>{item}</StyledBenefit>
        ))}
      </StyledBenefitsWrapper>
      <Button awarded={awarded}>Learn more</Button>
    </StyledCardWrapper>
  );
};

Card.propTypes = {
  awarded: PropTypes.bool,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
  content: PropTypes.shape(),
};

Card.defaultProps = {
  awarded: false,
  roundedLeft: false,
  roundedRight: false,
  content: {
    name: '-',
    price: '-',
    currency: '-',
    benefits: ['-', '-', '-'],
  },
};

export default Card;
