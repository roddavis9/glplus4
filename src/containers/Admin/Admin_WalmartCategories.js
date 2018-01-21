import React, {Component} from 'react';

import { connect } from 'react-redux';
import { Link, Location, withRouter } from 'react-router-dom';

import Layout from './../../components/Layouts/Layout';
import Blank from './../../hoc/Layouts/Blank';
import Aux from './../../hoc/Aux/Aux';
import WalmartCategory from './walmartCategory';
import classes from './Walmart.css';

import * as actions from './../../store/actions/index';

class Admin_WalmartCategories extends Component {


    constructor(props) {
        super(props);

        this.props.getAllCategories();

    }

    componentWillMount() {






    }

    componentDidMount() {

      //  console.log('test',this.props);

        // this.setState({categoryArray: this.props.getAllCategories()});


    }


    submitHandler = ( event ) => {
      console.log(event);

    };



    render() {
        let walmartComponent = '';

        //console.log('this.props.allCategories',this.props.allCategories);

        if (this.props.allCategories.length > 0) {
            walmartComponent = (
                <WalmartCategory categoriesArray={this.props.allCategories}/>
            )
        }

        return (
            <Layout>
                <Aux style={{backgroundColor:'#fff !important', background:'none !important', backgroundImage:''}}>
                <div>
                    <form className="m-t" role="form" onSubmit={this.submitHandler}>
                        {walmartComponent}
                    </form>

                </div>
                </Aux>

            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        allCategories: state.walmart.allCategories,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin_WalmartCategories));


