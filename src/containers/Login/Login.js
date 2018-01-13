import React, {Component} from 'react';
import { Link, Location, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AUTH_CONFIG } from '../../Auth/auth_variables';

import { validationRules } from '../../components/common/validationRules';
import Input from '../../components/common/UI/Input/Input';
import loading from '../../assets/loading.svg';

import * as actions from '../../store/actions/index';

import Blank from '../../hoc/layouts/Blank';


class Auth extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false

            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    autoComplete: 'current-password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false

            }
        },
        formIsValid: false,
        loading: false
    };


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm,
            [inputIdentifier]: {
                ...this.state.loginForm[inputIdentifier],
                value: event.target.value,
                valid: validationRules(event.target.value, this.state.loginForm[inputIdentifier].validation),
                touched: true
            }
        };

        this.setState({loginForm: updatedLoginForm});
    };

    loginHandler = ( event ) => {
        event.preventDefault();
        let webAuth = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
        });


        webAuth.redirect.loginWithCredentials({
            connection: AUTH_CONFIG.connection,
            username: this.state.loginForm['email'].value,
            password: this.state.loginForm['password'].value,
            audience: AUTH_CONFIG.audience,
            responseType: AUTH_CONFIG.responseType,
            scope: AUTH_CONFIG.scope,
            redirectUri: AUTH_CONFIG.callbackUrl,

        });

    };


    render() {
        const style = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#f3f3f4',
        };



        const formElementsArray = [];
        for ( let key in this.state.loginForm ) {
            formElementsArray.push( {
                id: key,
                config: this.state.loginForm[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                autocomplete={formElement.config.autocomplete}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if (this.props.loading) {
            form = (<div style={style}><img src={loading} alt="loading"/></div>);
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p style={{color: 'red', fontSize: '16px'}}>{this.props.error.message}</p>
            )
        }

        let authRedirect = null;
        if (this.props.hasProfile) {
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
                        <h3>Welcome to Grocery List Plus</h3>

                        {errorMessage}

                        <form className="m-t" role="form" onSubmit={this.loginHandler}>
                            {form}
                            <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                            <a href="#"><small>Forgot password?</small></a>
                            <p className="text-muted text-center"><small>Need an account?</small></p>
                            <Link to="/register" className="btn btn-sm btn-success btn-block">Create Account</Link>
                        </form>
                    </div>
                </div>
            </Blank>
        );
    }
}

const mapStateToProps = state => {
    console.log('original state', state);
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      hasProfile: state.auth.token !== null
  }
};


export default connect(mapStateToProps)(Auth);