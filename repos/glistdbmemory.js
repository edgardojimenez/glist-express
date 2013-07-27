var arrayUtil = require('array-extended'),
    products = ['apples'],
    groceries = [];

exports.getProducts = function(callback) {
    callback(null, products);
};

exports.getGroceries = function (callback) {
    callback(null, groceries);
};

exports.addProduct = function (name, callback) {
    callback(null, (products.push(name) >= 0 ? { name: name } : null));
};

exports.addGrocery = function (name, callback) {
    callback(null, (groceries.push(name) >= 0 ? { name: name } : null));
};

exports.deleteGrocery = function (name, callback) {
    groceries.splice(groceries.indexOf(name), 1);
    callback(null);
};

exports.deleteProduct = function (name, callback) {
    products.splice(products.indexOf(name), 1);
    callback(null);
};

exports.findProduct = function (name, callback) {
    callback(null, products.indexOf(name) >= 0 ? { name: name } : null);
};

exports.findGrocery = function (name, callback) {
    callback(null, groceries.indexOf(name) >= 0 ? { name: name } : null);
};
