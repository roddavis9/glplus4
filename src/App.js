import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Route, Router, IndexRedirect, browserHistory} from 'react-router';



import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Auth from './containers/Auth/Auth';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/friends' component={Friends} />
                <Route path='/home' component={Home} />
                {/*<Route exact path='/' component={Landing} />*/}
                <Route path='/login' component={Auth} />
                <Route path='/register' component={Register} />
                <Route exact path='/' component={Auth} />
            </Switch>


        );
    }
}

export default App;
