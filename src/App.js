import {BrowserRouter as Router, Switch } from 'react-router-dom';
import CustomAdminRoute from './CustomAdminRoute';
import { Dashboard, Merchants } from './Components/admin';
import { Routes } from './constants';

 
import './App.css';

function App() {
  return (
    <Router>
        <Switch> 
          <CustomAdminRoute exact  path={Routes.DEFAULT} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.MERCHANT} component={Merchants} />
        </Switch>  
    </Router>
  );
}

export default App;
