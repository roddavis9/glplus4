import React from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import { smoothlyMenu } from '../Layouts/Helpers';
import Auth from '../../Auth/Auth.js';


class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    logout(e) {
        e.preventDefault();
        const auth = new Auth();
        auth.logout();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <div>
                        <CategoryDropdown />
                    </div>

                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="#" onClick={this.logout}>
                                <i className="fa fa-sign-out"></i> Log Out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(TopHeader);