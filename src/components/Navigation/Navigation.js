import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

import { connect } from 'react-redux';


import Aux from '../../hoc/Aux/Aux'
import './Navigation.css';

class Navigation extends Component {


    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    render() {
        let userFullName = this.props.user.firstName + ' ' + this.props.user.lastName;

        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                             </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{userFullName}</strong>
                             </span> <span className="text-muted text-xs block">User Options<b className="caret"></b></span> </span> </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#"> Logout</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            GL+
                        </div>
                    </li>
                    <li>
                        <NavLink to="/home" exact><i className="fa fa-home fa-lg"></i> <span className="nav-label">Home</span></NavLink>
                        {/*
                        <ul className="nav nav-second-level">
                            <li><a href="index.html">Dashboard v.1</a></li>
                            <li><a href="dashboard_2.html">Dashboard v.2</a></li>
                            <li className="active"><a href="dashboard_3.html">Dashboard v.3</a></li>
                            <li><a href="dashboard_4_1.html">Dashboard v.4</a></li>
                            <li><a href="dashboard_5.html">Dashboard v.5 </a></li>
                        </ul>
                        */}
                    </li>
                    <li>
                        <NavLink to="/friends"><i className="fa fa-user fa-lg"></i> <span className="nav-label">Friends</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/glists"><i className="fa fa-files-o fa-lg"></i> <span className="nav-label">Grocery Lists</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/groups"><i className="fa fa-users fa-lg"></i> <span className="nav-label">Groups</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/history"><i className="fa fa-history fa-lg"></i> <span className="nav-label">History</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/maker"><i className="fa fa-shopping-basket fa-lg"></i> <span className="nav-label">Meal Maker</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/planner"><i className="fa fa-calendar fa-lg"></i> <span className="nav-label">Meal Planner</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/gitems"><i className="fa fa-list-ol fa-lg"></i> <span className="nav-label">My Items</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipes"><i className="fa fa-newspaper-o fa-lg"></i> <span className="nav-label">Recipes</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/reports"><i className="fa fa-line-chart fa-lg"></i> <span className="nav-label">Reports</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/search"><i className="fa fa-search fa-lg"></i> <span className="nav-label">Search</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/suggested"><i className="fa fa-lightbulb-o fa-lg"></i> <span className="nav-label">Suggested Items</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings"><i className="fa fa-cogs fa-lg"></i> <span className="nav-label">Settings</span></NavLink>
                    </li>


                </ul>
                </div>
            </nav>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(Navigation);

