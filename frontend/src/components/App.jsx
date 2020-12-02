import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main_page/main';

const App = () => (
    <Switch>
        <Route path="/" component={MainPage} />
    </Switch>
);

export default App;