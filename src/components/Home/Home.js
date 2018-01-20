import React, { Component } from 'react';
import { Location, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../Layouts/Layout';
import GroceryList from '../../containers/GroceryList/GroceryList';


import classes from './Home.css'
import * as actions from '../../store/actions/index';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log('constructor() -- Home.js');

        const expirationDate = new Date(parseInt(localStorage.getItem('expires_at')));
        console.log('Expires:  ', expirationDate);

        if (this.props.onCheckTimeout()) {
            // make sure we have a profile and if not get it
            if( this.props.user === '') {
                console.log('no user data');
                this.props.onSetProfile();
            }
        } // this will logout from the action so no need for logout condition here
    }

    componentWillMount() {

        // check authentication for validity
        console.log('componentWillMount() -- Home.js');



    }



    render() {

        return (
            <Layout>
                <div className={classes.homeContainer}>
                   <GroceryList></GroceryList>
                </div>
            </Layout>

        )
    }



}




const mapStateToProps = state => {
    return {
        hasProfile: state.auth.hasProfile,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email) => dispatch(actions.auth(email)),
        onCheckTimeout: () => dispatch(actions.checkAuthTimeout()),
        onSetProfile: () => dispatch(actions.authSetProfile()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
