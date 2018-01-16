import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Location } from 'react-router-dom';
import Auth from '../../Auth/Auth.js';
import { AUTH_CONFIG } from '../../Auth/auth_variables';
import history from '../../history';


import { validationRules } from '../../components/common/validationRules';
import Input from '../../components/common/UI/Input/Input';
import loading from '../../assets/loading.svg';

import Blank from '../../hoc/layouts/Blank';

import config from '../../../server/config';
import axios from 'axios';

class Register extends Component {
    state = {
        registerForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Username',
                    autoComplete: 'username'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 15,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    autoComplete: 'new-password'
                },
                value: '',
                validation: {
                    required: true,
                    isPassword: true,
                    mustMatch: false
                },
                valid: false,
                touched: false
            },
            passwordConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Re-Type Password',
                    autoComplete: 'new-password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    mustMatch: true,
                    mustMatchField: 'password',
                    mustMatchValue: ''
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    };

    componentWillMount() {


    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegisterForm = {
            ...this.state.registerForm
        };
        const updatedFormElement = {
            ...updatedRegisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;

        if (updatedFormElement.validation.mustMatch === true) {
            updatedFormElement.validation.mustMatchValue = this.state.registerForm[updatedFormElement.validation.mustMatchField].value;
        }

        updatedFormElement.valid = validationRules(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({registerForm: updatedRegisterForm, formIsValid: formIsValid});
    };

    registerHandler = ( event ) => {
        event.preventDefault();
        this.setState((state) => ({loading: true}));

        const formData = {};
        let authResponseData = null;


        let webAuth = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
        });

        webAuth.signup({
            connection: AUTH_CONFIG.connection,
            email: this.state.registerForm['email'].value,
            password: this.state.registerForm['password'].value,
            username: this.state.registerForm['username'].value,
            user_metadata: {
                firstName: this.state.registerForm['firstName'].value,
                lastName: this.state.registerForm['lastName'].value,
                zipCode: this.state.registerForm['zipCode'].value
            }
        }, function (err, res) {
            if (err) {
                return alert('Something went wrong: ' + err.message)
            } else {
                return authResponseData = res;
            }

        });

        for (let formElementIdentifier in this.state.registerForm) {
            formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
        }

        setTimeout( function() {
            formData.auth0Id = authResponseData.Id;

            axios.post(config.remotePath + '/register', formData)
                .then(response => {
                    webAuth.redirect.loginWithCredentials({
                        connection: AUTH_CONFIG.connection,
                        username: formData.email,
                        password: formData.password,
                        audience: AUTH_CONFIG.audience,
                        responseType: AUTH_CONFIG.responseType,
                        scope: AUTH_CONFIG.scope,
                        redirectUri: AUTH_CONFIG.loginCallbackUrl,

                    });
                })
                .catch(error => console.log(error))


        }, 1500);

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
        for ( let key in this.state.registerForm ) {
            formElementsArray.push( {
                id: key,
                config: this.state.registerForm[key]
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
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );


        if (this.state.loading) {
            form = (<div style={style}><img src={loading} alt="loading"/></div>);
        }

        return (
            <Blank>
                <div className="text-center">
                    <img
                        src={ require("../../assets/img/GLP_Web.gif")} alt="Grocery List Plus desktop and mobile grocery shopping application logo"
                        style={{width: '600px'}}
                    />
                </div>

                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <h3 style={{marginTop: '-20px', color:'#F3752C'}}>
                        Register for
                        Grocery List Plus
                    </h3>
                        <p className="text-muted text-center"><small>Already have an account?</small></p>
                            <Link to="/login" className="btn btn-sm btn-success btn-block">Login</Link>
                        <br />
                        <p>OR</p>
                        <p>Create your FREE account and get started today.</p>
                        <form className="m-t" role="form" onSubmit={this.registerHandler}>
                            {form}
                            <div className="form-group">
                                <div className="checkbox i-checks"><label> <input type="checkbox" /><i></i>I Agree to the Terms and Conditions </label></div>
                            </div>
                            <button type="submit" className="btn btn-primary block full-width m-b" disabled={!this.state.formIsValid}>Register</button>
                        </form>
                </div>
                <div style={{paddingTop:'37px'}}>
                    &nbsp;
                </div>
            </Blank>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
    }
};


export default connect(mapStateToProps)(Register);