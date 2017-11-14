import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Route, Router, IndexRedirect, browserHistory} from 'react-router';



import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/friends' component={Friends} />
                {/*<Route exact path='/' component={Landing} />*/}
                <Route exact path='/register' component={Register} />
                <Route exact path='/' component={Home} />
            </Switch>


        );
    }
}

export default App;
