import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  position: relative;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: 0.3s;
    z-index: -1;
    border-radius: 5px;
    background-image: ${({ theme }) => theme.colors.gradient};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    &:before {
      opacity: 0;
    }
  }
  ${({ awarded }) =>
    awarded &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      &:before {
        display: none;
      }
      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.white};
      }
    `}
`;

const Button = ({ children, awarded }) => {
  return (
    <StyledButton type="button" awarded={awarded}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  awarded: PropTypes.bool,
};

Button.defaultProps = {
  awarded: false,
};

export default Button;
