import React from 'react';
import {Route} from 'react-router-dom';
import { DashboardLayout } from './layouts';



const CustomAdminRoute = ({component:Component, ...rest}) => { 
     return (
        <Route {...rest} render={(props)=>{
            // console.log("props",props)
            return (
                <React.Fragment>
                   {<DashboardLayout><Component {...props} /></DashboardLayout>} 
                 {/* {rest.auth.isLoggedIn ? <DashboardLayout><Component {...props} /></DashboardLayout> :  <Redirect to={Routes.LOGIN} />} */}
                </React.Fragment>
            )
        }} />
    );
};

export default CustomAdminRoute;