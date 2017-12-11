const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', function(req, res, next) {
    Category.find()
        .then(function(category){
            res.send(category);
        })
        .catch(next);

});


// get list of categories
router.get('/categories', function(req, res, next) {
    Category.find()
        .then(function(category){
            res.send(category);
        })
        .catch(next);

});

// add a category
router.post('/categories', function(req, res, next) {
    Category.create(req.body)
        .then(function(category){
            res.send(category);
        })
        .catch(next);
});

// update a category
router.put('/categories/:id', function(req, res, next) {
    Category.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function(){
            Category.findOne({_id: req.params.id})
                .then(function(category){
                    res.send(category);
                })
                .catch(next);

        })
        .catch(next);
});

// delete a category
router.delete('/categories/:id', function(req, res, next) {
    Category.findByIdAndRemove({_id: req.params.id})
        .then(function(category){
            res.send(category);
        })
        .catch(next);
});


module.exports = router;