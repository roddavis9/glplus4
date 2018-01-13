import React, { Component } from 'react';
import { Location, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../../Auth/Auth.js';


import Aux from '../../hoc/Aux/Aux';
import Layout from '../Layouts/Layout';
import GroceryList from '../../containers/GroceryList/GroceryList';


import classes from './Home.css'
let jwtDecode = require('jwt-decode');
import * as actions from '../../store/actions/index';

class Home extends Component {

    constructor(props) {
        super(props);

        console.log('constructor() -- Home.js');



        const expirationDate = new Date(parseInt(localStorage.getItem('expires_at')));

        console.log('Expires:  ', expirationDate);

    }

    componentWillMount() {

        // check authentication for validity
        console.log('componentWillMount() -- Home.js');

        const idToken = localStorage.getItem('id_token');
        const glpToken = localStorage.getItem('glp_token');
        const profileInfo = jwtDecode(idToken);

        if(!glpToken) {
            this.props.onAuth(profileInfo.email);
        }

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
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email) => dispatch(actions.auth(email))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
