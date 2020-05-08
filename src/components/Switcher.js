import React from 'react';
import styled from 'styled-components';
import { SwitcherContext } from '../context';

const StyledSwitcherWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: 18px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0;
    margin-bottom: 25px;
    grid-gap: 23px;
  }
`;

const StyledSwitcherButton = styled.span`
  content: '';
  position: absolute;
  top: 3.5px;
  left: 3.5px;
  width: 23px;
  height: 23px;
  border-radius: 45px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.buttonShadow};
`;

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 52px;
  height: 30px;
  background-image: ${({ theme }) => theme.colors.gradient};
  border-radius: 100px;
  position: relative;
  transition: 0.2s;
  &:before {
    content: '';
    position: absolute;
    transition: 0.2s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:hover:before {
    opacity: 0.6;
  }
  &:active ${StyledSwitcherButton} {
    width: 27px;
  }
`;

const StyledCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  &:checked + ${StyledLabel} {
    ${StyledSwitcherButton} {
      left: calc(100% - 3.5px);
      transform: translateX(-100%);
    }
  }
`;

const StyledOptions = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lighGary};
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0;
  }
`;

const Switcher = () => {
  return (
    <SwitcherContext.Consumer>
      {(switcher) => (
        <StyledSwitcherWrapper>
          <StyledOptions htmlFor="switch">Annually</StyledOptions>
          <StyledCheckbox
            checked={switcher.checked}
            onChange={switcher.action}
            id="switch"
            name="switch"
            type="checkbox"
          />
          <StyledLabel isOn={switcher.checked} htmlFor="switch">
            <StyledSwitcherButton />
          </StyledLabel>
          <StyledOptions htmlFor="switch">Monthly</StyledOptions>
        </StyledSwitcherWrapper>
      )}
    </SwitcherContext.Consumer>
  );
};

export default Switcher;
