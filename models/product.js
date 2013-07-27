var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

exports.Product = mongoose.model('Product', productSchema);

