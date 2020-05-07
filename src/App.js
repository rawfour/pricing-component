import React from 'react';
import MainTemplate from './templates/MainTemplate';
import GlobalStyle from './theme/GlobalStyle';
import Background from './components/Background';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <MainTemplate>
      <Background />
      <Pricing />
      <GlobalStyle />
    </MainTemplate>
  );
};

export default App;
