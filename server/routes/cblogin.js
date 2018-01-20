const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serverConfig = require('dotenv').config();


const APP_KEY = process.env.SECRET_KEY;

console.log('in cblogin route');


// validate login credentials
router.get('/', function(req, res, next) {
    console.log('req.body', req.body);

    console.log('in cblogin route get');


});



module.exports = router;