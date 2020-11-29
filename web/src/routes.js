import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

const Routes = () => {  
  return (
    <BrowserRouter>
      <Route component={Main} path="/" exact />
      <Route component={Login} path="/login" />
    </BrowserRouter>
  )
}

export default Routes
