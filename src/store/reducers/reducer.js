import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {

            };
        default:
            return state;
    }

};

export default reducer;