import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-family: 'Montserrat', Arial, sans-serif;
  }

`;

export default GlobalStyle;
