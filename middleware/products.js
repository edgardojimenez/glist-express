
var repo = require('./../repos/glistdbmongo'),
    utils = require('./../support/utility').Utils;

exports.getProductsFilter = function(req, res, next) {
    res.locals.productsView = [];
    res.locals.error = '';

    repo.getProducts(function (err, products) {
        if (err) {
            res.locals.error = 'error: ' + err.message;
            next();
            return;
        }

        repo.getGroceries(function(err, groceries) {
            var glist, plist;

            if (err) {
                res.locals.error = 'error: ' + err.message;
                next();
                return;
            }

            glist = groceries.map(function(item) { return item.name; });
            plist = utils.addTitleToList(products);

            plist.forEach(function(item) {
                res.locals.productsView.push({product: item, selected: (glist.indexOf(item) !== -1) });
            });

            next();
        });
    });
};

exports.createFilter = function(req, res, next) {
    var product = utils.toTitleCase(req.body.productName);
        res.locals.model = {
            message: ''
        };

    if (!product) {
        res.locals.model.message = 'info: No product was entered!';
        next();
        return;
    }

    repo.findProduct(product, function(err, doc) {
        if (err) {
            res.locals.model.message = 'error: ' + err.message;
            next();
            return;
        }

        if (doc) {
            res.locals.model.message = 'info: \'' + doc.name + '\' Product already exists!';
            next();
        } else {
            repo.addProduct(product, function(err, product) {
                res.locals.model.message = 'success: Product \'' + product.name + '\' was added';

                if (req.body.addToList) {
                    repo.addGrocery(product.name, function (err) {
                        if (err)
                            res.locals.model.message = 'error: ' + err.message;

                        next();
                    });
                } else {
                    next();
                }
            });
        }
    });
};

exports.deleteFilter = function(req, res, next) {
    var product = req.params.name;
    if (!product) {
        req.flash('message', 'info: The product is required');
        next();
    } else {
        repo.deleteProduct(product, function(err){
            if (err)
                req.flash('message', 'error: ' + err.message);

            next()
        });
    }
};
