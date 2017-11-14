import React, { Component } from 'react';
import Progress from '../../components/common/Progress';
import { Link, Location } from 'react-router-dom';

import Blank from '../../hoc/layouts/Blank';


class Register extends Component {

    render() {
        return (
            <Blank>
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>

                            <h1 className="logo-name">GL+</h1>

                        </div>
                        <h3>Register for Grocery List Plus</h3>
                        <p>Create your FREE account and get started today.</p>
                        <form className="m-t" role="form" action="login.html">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" required="" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" required="" />
                            </div>
                            <div className="form-group">
                                <div className="checkbox i-checks"><label> <input type="checkbox" /><i></i>I Agree to the Terms and Conditions </label></div>
                            </div>
                            <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

                            <p className="text-muted text-center"><small>Already have an account?</small></p>
                            <a className="btn btn-sm btn-white btn-block" href="login.html">Login</a>
                        </form>
                    </div>
                </div>
            </Blank>
        )

    }
}

export default Register
