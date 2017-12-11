import React, { Component } from 'react';
import { Link, Location } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layouts/Layout';
import GroceryList from '../../containers/GroceryList/GroceryList';

import classes from './Home.css'

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