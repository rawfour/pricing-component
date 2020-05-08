import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/MainTheme';

const MainTemplate = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object]).isRequired,
};

export default MainTemplate;
