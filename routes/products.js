
exports.index = function(req, res) {
    res.render('products', {
        products: res.locals.productsView,
        message: req.flash('error', res.locals.error)
    });
};

exports.create = function(req, res){
    res.render('add', res.locals.model);
};

exports.delete = function(req, res){
    res.redirect('/products');
};




