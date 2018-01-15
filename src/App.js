import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Login from './containers/Login/Login';
import CbLogin from './Callback/CbLogin';
import Admin_WalmartCategories from './containers/Admin/Admin_WalmartCategories';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/friends' component={Friends} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path="/cblogin" component={CbLogin} />
                <Route exact path="/admin-walmart-categories" component={Admin_WalmartCategories} />
                <Route exact path='/' component={Admin_WalmartCategories} />
            </Switch>


        );
    }
}



export default withRouter(App);

