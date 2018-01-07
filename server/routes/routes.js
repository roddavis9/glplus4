import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';

import App from './App';

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => <Callback {...props} />} />
            </div>
        </BrowserRouter>
    );
}