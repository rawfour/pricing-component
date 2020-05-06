import { keyframes } from 'styled-components';

const animations = {
  fadeIn: keyframes`100% {opacity: 1;}`,
};

const fontSizes = {
  s: '1.3rem',
  m: '1.5rem',
  l: '1.7rem',
  xl: '2rem',
  xxl: '3.5rem',
};

const breakpoints = {
  sm: '(min-width: 600px)',
  md: '(min-width: 900px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1920px)',
};

export const theme = {
  colors: {
    veryLightGray: 'hsl(240, 78%, 98%)',
    lighGary: 'hsl(234, 14%, 74%)',
    gray: 'hsl(233, 13%, 49%)',
    darkGary: 'hsl(232, 13%, 33%)',
  },
  grdient: 'hsl(236, 72%, 79%) to hsl(237, 63%, 64%)',
  fontSizes,
  animations,
  breakpoints,
};
