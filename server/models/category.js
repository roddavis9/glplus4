const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    catColor: {type: String, required: [true, 'category cat color is required'], default: '#808080'},
    dateCreated: { type: Date, required: [true, 'category date created is required'] },
    description: {type: String, required: [true, 'category description is required']},
    displayName: {type: String, required: [true, 'category display name is required']},
    lastUpdated: { type: Date, default: Date.now },
    systemCategory: {type:Boolean, required: true, default: false},
    userId: [{type: Schema.Types.ObjectId, ref: 'Users', required: true}]

});

module.exports = mongoose.model('Category', categorySchema);