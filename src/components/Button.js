import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  background-image: ${({ theme }) => theme.colors.gradient};
  padding: 12px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-top: 10px;
`;

const Button = ({ children }) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
