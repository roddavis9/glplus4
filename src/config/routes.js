import React from 'react'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router';


import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import Register from '../components/Register/Register';
import Welcome from '../components/Welcome/Welcome';


import MainView from '../views/Main';
import MinorView from '../views/Minor';



const routes = (
    <Router history={browserHistory}>

        <Route component={Blank}>
            <IndexRedirect to="/welcome" />
            <Route path="/" component={Welcome}></Route>
            <Route path="register" component={Register}> </Route>
        </Route>
        <Route component={Main}>
            <Route path="main" component={MainView}> </Route>

        </Route>
    </Router>

    /*
    <Router history={browserHistory}>

        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
        </Route>
        <Route path="/" component={Main}>
            <IndexRedirect to="/welcome" />
            <Route path="welcome" component={Welcome}> </Route>
        </Route>

    </Router>
    */
);

export default routes;