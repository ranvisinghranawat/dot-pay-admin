import React from 'react';
import {Route} from 'react-router-dom';
import { AuthLayout } from './layouts';


const CustomAuthRoute = ({component:Component, ...rest}) => { 
   return (
        <Route {...rest} render={(props)=>{
            return (
                <React.Fragment>
                 {/* {rest.auth.isLoggedIn ? <Redirect to={Routes.DASHBOARD} /> : <AuthLayout><Component {...props} /></AuthLayout>} */}
                {<AuthLayout><Component {...props} /></AuthLayout>}
                </React.Fragment>
            )
        }} />
    );
};

export default CustomAuthRoute;