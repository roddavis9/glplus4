import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from './history';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthToken from './store/utils/setAuthToken';

import categoryReducer from './store/reducers/reducer';
import authReducer from './store/reducers/auth';


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
    categories: categoryReducer
})

const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
));

setAuthToken(localStorage.token);

const app = (
    <Provider store={store}>
        <IntlProvider locale="en">
            <Router history={history}>
                <App />
            </Router>
        </IntlProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();


