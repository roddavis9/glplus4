import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';


import './js/cbpAnimatedHeader.js';


import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './index.css'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();


