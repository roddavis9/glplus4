import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import loading from '../assets/loading.svg';
import Auth from '../Auth/Auth.js';
import Blank from '../hoc/layouts/Blank';
import { connect } from 'react-redux';


import * as actions from '../store/actions/index';

let jwtDecode = require('jwt-decode');


class CbLogin extends Component {



    componentWillMount() {

        console.log('componentWillMount() -- CbLogin.js');

        const auth = new Auth();
        auth.handleAuthentication();

        // TODO: replace this with a promise


        setTimeout(function(){
            let tempToken = localStorage.getItem('id_token');
            let profileInfo = jwtDecode(tempToken);

            this.props.onAuth(profileInfo.email);


            setTimeout(function() {
                this.props.history.replace("/home")
              //  this.setState({ doRedirect: true });
            }.bind(this), 1000)

        }.bind(this), 800);

    }


    render() {

        const style = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#f3f3f4'
        };


        return (
            <Blank>
                <div className="text-center">
                    <img
                        src={ require("../../src/assets/img/GLP_Web.gif")} alt="Grocery List Plus desktop and mobile grocery shopping application logo"
                        style={{width: '600px'}}
                    />
                </div>

                <div className="middle-box text-center loginscreen">
                    <div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CbLogin));

