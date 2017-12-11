const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', function(req, res, next) {
    User.find()
        .then(function(user){
            res.send(user);
        })
        .catch(next);

});


// get list of users
router.get('/register', function(req, res, next) {
    User.find()
        .then(function(user){
            res.send(user);
        })
        .catch(next);

});

// add a user
router.post('/', function(req, res, next) {

    let userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        zipCode: req.body.zipCode,
        password: req.body.password

    };

    User.create(userData)
        .then(function(user){
            res.send(user);
        })
        .catch(next);

});

module.exports = router;