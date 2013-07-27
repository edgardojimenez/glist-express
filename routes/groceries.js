
/*
 * GET home page.
 */

var repo = require('./../repos/glistdbmongo');

exports.index = function(req, res){
    repo.getGroceries(function (err, docs) {
        var error;

        if (err)
            error = err.message;

        res.render('groceries', {
            groceries: docs.sort(),
            message: (req.flash('message', 'error: ' + error))
        });
    });
};

exports.create = function(req, res){
    var product = req.params.name;
    if (!product) {
        req.flash('message', 'info: The product is required');
    } else {
        repo.addGrocery(product, function(err) {
            if (err)
                req.flash('message', 'error: ' + err.message);

            res.redirect('/products');
        });
    }
};

exports.delete = function(req, res){
    var product = req.params.name;
    if (!product) {
        req.flash('message', 'info: The product is required');
    } else {
        repo.deleteGrocery(product, function (err) {
            if (err)
                req.flash('message', 'error: ' + err.message);

            res.redirect('/groceries');
        });
    }
};