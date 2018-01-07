import React, { Component } from 'react';
import { Link, Location } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Layout from '../Layouts/Layout';
import GroceryList from '../../containers/GroceryList/GroceryList';
import Auth from '../../Auth/Auth.js';

import classes from './Home.css'
let jwtDecode = require('jwt-decode');


class Home extends Component {


    render() {

        return (
            <Aux>
                <Layout>
                    <div className={classes.Hometest}>
                        <GroceryList></GroceryList>
                    </div>
                </Layout>
            </Aux>
        )
    }



}

export default Home;