import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';

const Routes = () => {  
  return (
    <BrowserRouter>
      <Route component={Main} path="/" exact />
    </BrowserRouter>
  )
}

export default Routes
