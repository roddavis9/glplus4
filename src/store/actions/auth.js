import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../../server/config';
import setAuthToken from '../utils/setAuthToken';
let jwtDecode = require('jwt-decode');
import Auth from '../../Auth/Auth.js';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    localStorage.setItem('glp_token', token);
    setAuthToken(token);
    let profileInfo = jwtDecode(token).user;

    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: profileInfo
    };


};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = () => {
    const auth = new Auth();

    return dispatch => {
        if (!auth.isAuthenticated) {
            dispatch(auth.logout());
        }
    };
};

export const auth = (email) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            returnSecureToken: true
        };

        axios.post(config.localPath + '/signin', authData)
            .then(response => {
                console.log(response);
                const token = response.data.token;
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout());

            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
                console.log('**** login failed', error.response.data.error);

            })
    }
}
