import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedItems: [],
    listEditMode: false

};

const checkboxChange = (state, action) => {

    return updateObject(state, { allCategories: action.allCategories });
};

const getListEditMode = (state) => {
    return updateObject(state, { listEditMode: state.listEditMode });
};

const toggleListDisplay = (state) => {
    return updateObject(state, { listEditMode: !state.listEditMode });
};

const commonReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.COMMON_CHECKBOX_CHANGED:
            return checkboxChange(state, action);
        case actionTypes.COMMON_GET_LIST_EDIT_MODE:
            return getListEditMode(state, action);
        case actionTypes.COMMON_TOGGLE_LIST_DISPLAY:
            return toggleListDisplay(state, action);
        default:
            return state;
    }

};

export default commonReducer;