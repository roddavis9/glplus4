const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    zipCode: {type: String, required: true},
    billingInfo: {
        billingAddressLine1: {type: String},
        billingAddressLine2: {type: String},
        billingCity: {type: String},
        billingState: {type: String},
        billingZip: {type: String}
    },
    deliverySameAsBilling: {type: Boolean},
    deliveryInfo: {
        deliveryAddressLine1: {type: String},
        deliveryAddressLine2: {type: String},
        deliveryCity: {type: String},
        deliveryState: {type: String},
        deliveryZip: {type: String}
    },
    role: {type: String, default: 'customer'},
    createdDate: { type: Date, default: Date.now },
    numLogins: {type: Number, default: 0},
    lastLogin: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now }
});


//hashing a password before saving it to the database
schema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', schema, 'users');
