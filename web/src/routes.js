/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Especialidades from './pages/Especialidades';

const Routes = () => (
  <BrowserRouter>
    <Route component={Main} path="/" exact />
    <Route component={Especialidades} path="/especialidades" />

  </BrowserRouter>
);

export default Routes;
