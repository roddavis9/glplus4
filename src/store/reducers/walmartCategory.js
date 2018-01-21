import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    allCategories: []

};

const walmartGetAllCategories = (state, action) => {

    return updateObject(...state, { allCategories: action.allCategories });
};

const walmartCategoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.WALMART_GET_ALL_CATEGORIES:
            return walmartGetAllCategories(state, action);
        default:
            return state;
    }

};

export default walmartCategoryReducer;