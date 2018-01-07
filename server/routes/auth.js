const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');


const APP_KEY = config.secretKey;

// validate login credentials
router.post('/', function(req, res, next) {
    console.log('req.body', req.body);

    User.findOne({ email: req.body.email })
        .exec(function (err, user) {
            if (err) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid credentials'}
                })
            } else if (!user) {
                let err = new Error('User not found.');
                return err.status = 401;
            }
//            let isValidPassword = bcrypt.compareSync(req.body.password, user.password);
            if (user) {
                let token = jwt.sign({user: user}, APP_KEY, {expiresIn: 36000});

                // TODO: update lastlogin date and number of logins for user

                // TODO: need to create a refresh token and send it along as well

                res.status(200).json({
                    message: 'Successful login',
                    token: token,
                    expiresIn: 3600
                })
            } else {
                return res.status(401).json({
                    title: 'User not found',
                    error: {message: 'No user found'}
                })
            }

            console.log('isValidUser', user);
            res.end();
        });
});



module.exports = router;