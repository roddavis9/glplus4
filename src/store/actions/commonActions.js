import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../../server/config';

let jwtDecode = require('jwt-decode');
import Auth from '../../Auth/Auth.js';

const authService = new Auth();

export const checkboxChange = () => {
    return dispatch => {
        console.log('[checkboxChange] -- commonActions.js');
    }
};

export const getListEditMode = () => {
    return {
        type: actionTypes.COMMON_GET_LIST_EDIT_MODE
    }
}

export const toggleListDisplay = () => {
    console.log('[toggleListDisplay] -- commonActions.js');
    return {
        type: actionTypes.COMMON_TOGGLE_LIST_DISPLAY
    };
};

