import React from 'react';

import Aux from './../../hoc/Aux/Aux';
import Navigation from './../../components/Navigation/Navigation';
import Progress from './../../components/Common/Progress/Progress';
import TopHeader from './../../components/Common/TopHeader';

import classes from './Layout.css';

let wrapperClass = "gray-bg ";

const layout = ( props ) => (

    <Aux>
        <Progress />
        <Navigation />

        <div id="page-wrapper" className={classes.mainLayoutStyling}>
            <TopHeader />

            <main style={{margin: 0, padding: 0}}>
                {props.children}
            </main>
        </div>
    </Aux>

);

export default layout;