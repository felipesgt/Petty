/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Especialidades from './pages/Especialidades';
import Agendamento from './pages/Agendamento';
import Contato from './pages/Contato';
import Serviços from './pages/Serviços';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Especialidades} path="/especialidades" />
      <Route component={Serviços} path="/servicos" />
      <Route component={Agendamento} path="/agendamento" />
      <Route component={Contato} path="/contato" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
