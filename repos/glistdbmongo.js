var Product = require('./../models/product').Product,
    Grocery = require('./../models/grocery').Grocery;

var remove = function(model, name, callback) {
    model.remove( { name: name }, callback);
};

var find = function(model, name, callback) {
    model.findOne({ name: name }, callback);
};

var getAll = function(model, callback) {
    model.find({}, 'name', callback);
};

var add = function(Model, name, callback) {
    var model = new Model({ name: name });
    model.save(callback);
};

exports.getProducts = function(callback) {
    getAll(Product, callback);
};

exports.getGroceries = function (callback) {
    getAll(Grocery, callback);
};

exports.addProduct = function (name, callback) {
    add(Product, name, callback);
};

exports.addGrocery = function (name, callback) {
    add(Grocery, name, callback);
};

exports.deleteGrocery = function (name, callback) {
    remove(Grocery, name, callback);
};

exports.deleteProduct = function (name, callback) {
    remove(Product, name, callback);
};

exports.findProduct = function (name, callback) {
    find(Product, name, callback);
};

exports.findGrocery = function (name, callback) {
    find(Grocery, name, callback);
};




