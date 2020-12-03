import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Routes from './routes';
import GlobalStyles from './components/GlobalStyles';

const App = () => (
  <>
    <StylesProvider injectFirst>
      <GlobalStyles />
      <Routes />
    </StylesProvider>

  </>
);

export default App;
