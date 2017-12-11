import React, {Component} from 'react';
import { Link, Location } from 'react-router-dom';
import { connect } from 'react-redux';


import { validationRules } from '../../components/common/validationRules';
import Input from '../../components/common/UI/Input/Input';
import Spinner from '../../components/common/UI/Spinner/Spinner';

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
                    placeholder: 'Password'
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
        this.props.onAuth(this.state.loginForm.email.value, this.state.loginForm.password.value);

    };


    render() {
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
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (
            <Blank>
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>

                            <h1 className="logo-name">GL+</h1>

                        </div>
                        <h3>Welcome to Grocery List Plus</h3>

                        <p>Login in and start shopping now.</p>
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

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
};

export default connect(null, mapDispatchToProps)(Auth);