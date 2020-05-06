import { keyframes } from 'styled-components';

const animations = {
  fadeIn: keyframes`100% {opacity: 1;}`,
};

const fontSizes = {
  s: '1.2rem',
  m: '1.4rem',
  l: '1.6rem',
  xl: '3.5rem',
  xxl: '6.2rem',
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
    background: '#f7f7ff',
    gradient: 'linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    white: '#ffffff',
  },
  fontSizes,
  animations,
  breakpoints,
};
