var mongoose = require('mongoose');

var grocerySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

exports.Grocery = mongoose.model('Grocery', grocerySchema);


