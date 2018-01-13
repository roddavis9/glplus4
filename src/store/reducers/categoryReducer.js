import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            console.log('[GET_CATEGORIES]');
            return {

        }
        case actionTypes.AUTH_SUCCESS:
            console.log('[AUTH_SUCCESS]');
            return {
                ...state,
                isAuthenticated: true
            }
    }
    return state;

};

export default rootReducer;