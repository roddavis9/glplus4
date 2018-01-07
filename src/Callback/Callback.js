import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../history';
import loading from './loading.svg';
import Auth from '../Auth/Auth.js';
import Blank from '../hoc/layouts/Blank';
import { connect } from 'react-redux';
import { updateObject } from '../store/utility';

import * as actions from '../store/actions/index';

let jwtDecode = require('jwt-decode');


class Callback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doRedirect: false
        };
    }

    componentWillMount() {

        console.log('componentWillMount() -- Callback.js');

        const auth = new Auth();
        auth.handleAuthentication();

        // TODO: replace this with a promise
        setTimeout(function(){
            let tempToken = localStorage.getItem('id_token');
            let profileInfo = jwtDecode(tempToken);

            this.props.onAuth(profileInfo.email);

            setTimeout(function() {
                this.setState({ doRedirect: true });
            }.bind(this), 2000)

        }.bind(this), 1500);

    }


    render() {

        const style = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#f3f3f4',
        };

        let authRedirect = null;


        console.log('doRedirect', this.state.doRedirect);
        if (this.state.doRedirect) {
            authRedirect = <Redirect to='/home' />
        }



        return (
            <Blank>
                <div className="middle-box text-center loginscreen animated fadeInDown">

                    {authRedirect}
                    <div>
                        <div>
                            <h1 className="logo-name">GL+</h1>
                        </div>
                        <div style={style}>
                            <img src={loading} alt="loading"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Callback);

