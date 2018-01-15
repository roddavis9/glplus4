import React, {Component} from 'react';
import {AgGridReact} from "ag-grid-react";

import { connect } from 'react-redux';
import { Link, Location } from 'react-router-dom';
import Auth from '../../Auth/Auth.js';

import config from '../../../server/config';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import Blank from '../../hoc/layouts/Blank';
//import WalmartCategory from './walmartCategory';

import * as actions from '../../store/actions/index';

class Admin_WalmartCategories extends Component {
    constructor(props) {
        super(props);




        this.state = {
            categoryArray: [],
            totalNumCats: 0,
            temp: {}
        };

        this.props.getAllCategories();

    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    submitHandler = ( event ) => {
      console.log(event);

    };

    render() {

        const WalmartCategory = ({data}) => {
            return (
                <Aux key={data.id}>
                    {data.map(info => {
                        return (
                            <div key={info.id}>
                                <div style={{padding:'10px 0 5px 25px'}}>
                                    <input type="checkbox" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{info.name} -- {info.id}
                                {info.children && <WalmartCategory data={info.children} />}
                                </div>
                            </div>
                        );
                    })}
                </Aux>
            );
        };

        return (
            <Blank>
                <form className="m-t" role="form" onSubmit={this.submitHandler}>
                    <WalmartCategory data={this.state.categoryArray}/>
                </form>


            </Blank>
        )
    }
}

const mapStateToProps = state => {

    return {
        allCategories: state.walmartCategory.allCategories,
        hasProfile: state.auth.hasProfile,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckTimeout: () => dispatch(actions.checkAuthTimeout()),
        getAllCategories: () => dispatch(actions.walmartGetAllCategories()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin_WalmartCategories);


