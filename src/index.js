import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, ConnectedRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthToken from './store/utils/setAuthToken';

import categoryReducer from './store/reducers/categoryReducer';
import authReducer from './store/reducers/auth';
import commonReducer from './store/reducers/commonReducer';
import walmartCategoryReducer from "./store/reducers/walmartCategory";
import groceryListReducer from "./store/reducers/groceryListReducer";


import { IntlProvider } from 'react-intl';


import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';


// import './js/cbpAnimatedHeader.js';

import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    auth: authReducer,
    walmart: walmartCategoryReducer,
    common: commonReducer,
    grocerylist: groceryListReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[middleware dispatching]', action);
            const result = next(action);
            console.log('[middleware] next state', store.getState());
            return result;
        }
    }
};


const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
));

setAuthToken(localStorage.token);

const app = (
    <Provider store={store}>
            <IntlProvider locale="en">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IntlProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();


