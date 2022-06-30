import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../constants';
import { Dashboard } from '../components';

const AdminRoutes = () => {
    return (
        <Switch>
            <Route exact path={Routes.ADMIN} render={()=><Redirect to={Routes.DASHBOARD}/>} />
            <Route exact path={Routes.DASHBOARD} render={()=><Dashboard/>} />
        </Switch>
    );
};

export default AdminRoutes;