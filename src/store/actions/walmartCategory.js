import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../../server/config';
let cors = require('cors');

let jwtDecode = require('jwt-decode');
import Auth from '../../Auth/Auth.js';

const authService = new Auth();

export const walmartGetAllCategories = () => {
    return dispatch => {
/*
        axios({
            baseURL: 'http://api.walmartlabs.com',
            url: '/v1/taxonomy',
            method: 'get',
            header: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            params: {
                apiKey: 'ntuy6v466fwhpxftt2dve4qm',
                format: 'json'
            }
        }).then(response => {
            console.log(response);

            dispatch(walmartGetAllSuccess(response.data.categories));

        })
            .catch(error => {
                console.log('**** walmart taxonomy request failed', error.response.data.error);

        });
*/

        axios.get('./server/mock-data/sampleWalmartCategories.json')
            .then(response => {
                dispatch(walmartGetAllSuccess(response.data.categories));
            })
            .catch(error => {
                console.log('**** walmart taxonomy request failed', error.response.data.error);
            });

    }


};

export const walmartGetAllSuccess = (data) => {

    // console.log('walmart categories array -- in action', data);

    return {
        type: actionTypes.WALMART_GET_ALL_CATEGORIES,
        allCategories: data
    };


};