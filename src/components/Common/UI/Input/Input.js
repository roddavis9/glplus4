import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = ['form-control'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('has-error');
    }

    switch ( props.elementType ) {
        case ('checkbox'):
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    let validationError = null;
    if (props.invalid  && props.touched) {
        validationError = <p style={{color: 'red'}}>Please enter a valid value!</p>
    }

    return (
        <div className="form-group">
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );

};

export default input;