import React from 'react';
import { Link, Location, Route } from 'react-router-dom';


import Progress from '../../components/common/Progress';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/common/Footer';
import TopHeader from '../../components/common/TopHeader';
import { correctHeight, detectBody } from '../../components/layouts/Helpers';

class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg ";
        return (
            <div id="wrapper">
                <Progress />
                <Navigation />

                <div id="page-wrapper" className={wrapperClass}>

                    <TopHeader />
                    <Main>
                        {this.props.children}
                    </Main>


                    <Footer />

                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default Main