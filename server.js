const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const logger = require('morgan');
const serverConfig = require('./server/config');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


// my routes
const authRoutes = require('./server/routes/auth');
const categoriesRoutes = require('./server/routes/categories');
const userRoutes = require('./server/routes/users');
const appRoutes = require('./server/routes/app');

const app = new express;

console.log('path', path);

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
mongoose.connect(serverConfig.mongoURL, { useMongoClient: true }).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('*** db connected ***');
    },
    err => {
        /** handle initial connection error */
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw err;
    }
);

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')));

app.use('/api/signin', authRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/register', userRoutes);



app.use((err, req, res, next) => {
    res.status(err.status || 422);
    res.send({error: err.message});

});

const server = http.createServer(app);

console.log('process.env.PORT', process.env.PORT);

server.listen(process.env.port || serverConfig.port, function() {
    console.log(`********MERN is running on port: ${serverConfig.port}! *********`); // eslint-disable-line
});

module.exports = app;