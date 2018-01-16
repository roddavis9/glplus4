import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../../server/config';
import setAuthToken from '../utils/setAuthToken';
let jwtDecode = require('jwt-decode');
import Auth from '../../Auth/Auth.js';

const authService = new Auth();

export const authSetProfile = () => {
    const idToken = localStorage.getItem('id_token');
    const glpToken = localStorage.getItem('glp_token');

    if (idToken) {
        const profileInfo = jwtDecode(idToken);


        if (!glpToken) {
            return dispatch => {
                dispatch(auth(profileInfo.email));
            }
        } else {
            const user = jwtDecode(glpToken);
            setAuthToken(glpToken);

            console.log('glp_userInfo', user.user);

            // set user info
            return {
                type: actionTypes.AUTH_SET_PROFILE,
                token: glpToken,
                user: user.user
            };

        }
    } else {
        authService.logout();
    }
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    localStorage.setItem('glp_token', token);
    setAuthToken(token);
    let profileInfo = jwtDecode(token).user;

    console.log('glp_userInfo', profileInfo);

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
    return dispatch => {
        if (!authService.isAuthenticated()) {
            dispatch(authService.logout());
        } else {
            return true;
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

                const token = response.data.token;
                dispatch(authSuccess(token));
                // dispatch(checkAuthTimeout());

            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
                console.log('**** login failed', error.response.data.error);

            })
    }
};
