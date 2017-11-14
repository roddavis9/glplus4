import React, { Component } from 'react';
import { Link, Location } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layouts/Layout';

import classes from './Home.css'

class Home extends Component {

    render() {
        console.log(classes.Hometest);

        return (
            <Aux>
                <Layout>
                    <div className={classes.Hometest}>
test
                    </div>
                </Layout>
            </Aux>
        )
    }

}

export default Home;