import React, {Component} from 'react';
import { connect } from 'react-redux';

import Aux from './../../../../hoc/Aux/Aux';
import classes from './Checkbox.css';

import * as actions from './../../../../store/actions/index';

class checkbox extends Component {


    /*
    inputElement = <input
    className="form-control"
    {...props.elementConfig}
    value={props.value}
    onChange={props.changed} />;

        let validationError = null;
        if (props.invalid  && props.touched) {
            validationError = <p style={{color: 'red'}}>Please enter a valid value!</p>
        }
    */




    render() {
        let checkboxElement = (
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    onChange={this.props.checkboxChange}
                />
                <span className="checkbox-checkmark"></span>
            </label>
        );


        return (
            <Aux className="form-group">
                {checkboxElement}
            </Aux>
        );

    }

}

const mapDispatchToProps = dispatch => {
    return {
        checkboxChange: (source, value) => dispatch(actions.checkboxChange(source, value)),
        toggleListDisplay: () => dispatch(actions.toggleListDisplay())

    }
};

export default connect(null, mapDispatchToProps)(checkbox);