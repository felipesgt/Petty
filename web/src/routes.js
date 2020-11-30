/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';

const Routes = () => (
  <BrowserRouter>
    <Route component={Main} path="/" exact />
  </BrowserRouter>
);

export default Routes;
