import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers/reducer';

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

const store = createStore(reducer, composeEnhancers (
    applyMiddleware(thunk)
));

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


