import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import loading from '../assets/loading.svg';
import Auth from '../Auth/Auth.js';
import Blank from '../hoc/layouts/Blank';
import { connect } from 'react-redux';


import * as actions from '../store/actions/index';

let jwtDecode = require('jwt-decode');


class CbRegister extends Component {



    componentWillMount() {

        console.log('componentWillMount() -- cbregister.js');

        const auth = new Auth();






    }


    render() {

        const style = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff'
        };


        return (
            <Blank>
                <div className="text-center loginscreen" style={{backgroundColor: '#fff', minHeight: '500px'}}>

                    <div style={{backgroundColor: '#fff'}}>
                        <div style={{backgroundColor: '#fff'}}>
                            <img
                                src={ require("../../src/assets/img/GLP_Web.jpg")} alt="Grocery List Plus desktop and mobile grocery shopping application logo"
                                style={{width: '600px'}}
                            />
                        </div>
                        <div style={style}>
                            <img src={loading} alt="loading" />
                        </div>
                    </div>
                </div>
            </Blank>



        );
    }
}



const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        hasProfile: state.auth.hasProfile,
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email) => dispatch(actions.auth(email))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CbRegister));

