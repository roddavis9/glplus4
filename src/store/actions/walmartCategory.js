import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../../server/config';
let cors = require('cors');

let jwtDecode = require('jwt-decode');
import Auth from '../../Auth/Auth.js';

const authService = new Auth();

export const walmartGetAllCategories = () => {
    return dispatch => {

        axios.get('http://api.walmartlabs.com/v1/taxonomy?apiKey=' + config.walmartApiKey + '&format=json', cors())
            .then(response => {
                console.log(response);

                dispatch(walmartGetAllSuccess(response.data.categories));

            })
            .catch(error => {
                console.log('**** walmart taxonomy request failed', error.response.data.error);

            });
    }


};

export const walmartGetAllSuccess = (data) => {

    console.log('walmart categories array', data);

    return {
        type: actionTypes.WALMART_GET_ALL_CATEGORIES,
        allCategories: data
    };


};