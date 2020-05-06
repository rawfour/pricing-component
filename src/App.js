import React from 'react';
import MainTemplate from './templates/MainTemplate';
import GlobalStyle from './theme/GlobalStyle';
import Background from './components/Background';

const App = () => {
  return (
    <MainTemplate>
      <Background />

      <GlobalStyle />
    </MainTemplate>
  );
};

export default App;
