import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isAuthenticated: false,
    hasProfile: false,
    token: null,
    user: '',
    userPreferences: {},
    error: null,
    loading: false
};

const authSetProfile = (state, action) => {
    return updateObject(state, { user: action.user });
};


const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {

    return updateObject(state, { isAuthenticated: true, hasProfile: true, token: action.token, user: action.user, error: null, loading: false });
};

const authFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, user: {} });
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SET_PROFILE:
            return authSetProfile(state, action);
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }

};

export default authReducer;