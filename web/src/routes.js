/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Especialidades from './pages/Especialidades';
import Agendamento from './pages/Agendamento';
import Contato from './pages/Contato';

const Routes = () => (
  <BrowserRouter>
    <Route component={Main} path="/" exact />
    <Route component={Especialidades} path="/especialidades" />
    <Route component={Agendamento} path="/agendamento" />
    <Route component={Contato} path="/contato" />
  </BrowserRouter>
);

export default Routes;
