import React, {Component} from 'react';
import { Link, Location } from 'react-router-dom';

import { validationRules } from '../../components/common/validationRules';
import Input from '../../components/common/UI/Input/Input';
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

        let webAuth = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
        });




        const formData = {};
        for (let formElementIdentifier in this.state.registerForm) {
            formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
        }

        console.log('form data', formData);

        axios.post(config.localPath + '/register', formData)
            .then(response => {
                console.log(response);
                this.props.history.push("/home");
            })
            .catch(error => console.log(error))

    };

    render() {
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

        return (
            <Blank>
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>

                            <h1 className="logo-name">GL+</h1>

                        </div>
                        <h3>Register for Grocery List Plus</h3>
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
                </div>
            </Blank>
        );
    }
}


export default Register;