import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomeDashboard from './pages/home/HomeDashboard';
import {Routes} from '../../shared/const/routes';
import LayoutDashboard from './layout/LayoutDashboard';

function DashboardRouter() {
    return (
        <div>
            <LayoutDashboard/>
            <Switch>
                <Route exact path={Routes.DASHBOARD.ROOT_HOME} component={HomeDashboard}/>

                <Redirect to={Routes.DASHBOARD.ROOT_HOME}/>
            </Switch>
        </div>
    );
}

export default DashboardRouter;
