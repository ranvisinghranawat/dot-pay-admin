import {BrowserRouter as Router, Switch } from 'react-router-dom';
import CustomAdminRoute from './CustomAdminRoute';
import { Dashboard, Merchants ,MerchantDetail } from './Components/admin';
import { Routes } from './constants';

 
import './App.css';

function App() {
  return (
    <Router>
        <Switch> 
          <CustomAdminRoute exact  path={Routes.DEFAULT} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.MERCHANT} component={Merchants} />
          <CustomAdminRoute exact path={Routes.MERCHANTDETAILS+"/:userId"} component={MerchantDetail} />
        </Switch>  
    </Router>
  );
}

export default App;
