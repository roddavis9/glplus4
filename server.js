const Express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

// const IntlWrapper = require('../client/modules/Intl/IntlWrapper');

// React And Redux Setup
// const configureStore = require('../client/store');
// const Provider = require('react-redux');
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import Helmet from 'react-helmet';

// const routes = require('../client/config/routes');
const serverConfig = require('./server/config');

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);
    app.use(WebpackDevServer(compiler, { publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        contentBase: "" }));
}

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    } else {
        console.log('*** db connected ***');
    }
});

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, './dist')));
// app.use('/api', posts);

/*
app.listen(4200, 'localhost', function (error) {
    if (error) {
        return console.log(error);
    }
    console.log('Server running at http://localhost:4200/');
});
*/

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './dist/index.html'))
});

app.listen(serverConfig.port, (error) => {
    if (!error) {
        console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
    }
});

module.exports = app;