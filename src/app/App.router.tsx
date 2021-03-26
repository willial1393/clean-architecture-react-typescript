import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Routes} from './shared/const/routes';

const DashboardRouter = lazy(() => import('./modules/dashboard/Dashboard.router'));

const loading = () => (<div>Loading...</div>);

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path={Routes.DASHBOARD.ROOT} render={() => (
                        <Suspense fallback={loading}>
                            <DashboardRouter/>
                        </Suspense>
                    )}>

                    </Route>

                    <Redirect to={Routes.DASHBOARD.ROOT}/>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
