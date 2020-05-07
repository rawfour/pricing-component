import { keyframes } from 'styled-components';

const animations = {
  fadeIn: keyframes`100% {opacity: 1;}`,
};

const fontSizes = {
  xs: '1.1rem',
  s: '1.3rem',
  m: '1.4rem',
  l: '1.6rem',
  xl: '2.8rem',
  xxl: '3.5rem',
  xxxl: '6.2rem',
};

const breakpoints = {
  sm: '(min-width: 600px)',
  md: '(min-width: 900px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1920px)',
};

export const theme = {
  colors: {
    primary: '#7d7db3',
    veryLightGray: 'hsl(240, 78%, 98%)',
    lighGary: 'hsl(234, 14%, 74%)',
    gray: 'hsl(233, 13%, 49%)',
    darkGary: 'hsl(232, 13%, 33%)',
    background: '#f7f7ff',
    gradient: 'linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    white: '#ffffff',
  },
  shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  buttonShadow: '0 0 2px 0 rgba(10, 10, 10, 0.29)',
  fontSizes,
  animations,
  breakpoints,
};
