import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Route, Router, IndexRedirect, browserHistory} from 'react-router';
import Auth from './Auth/Auth';






import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Login from './containers/Login/Login';
import Callback from './Callback/Callback';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/friends' component={Friends} />
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path="/callback" component={Callback} />
                <Route exact path='/' component={Landing} />
            </Switch>


        );
    }
}

export default App;
