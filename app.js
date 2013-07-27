
var express = require('express'),
    mongoose = require('mongoose'),
    http = require('http'),
    path = require('path'),
    flash = require('connect-flash'),
    products = require('./routes/products'),
    groceries = require('./routes/groceries'),
    productsFilter = require('./middleware/products'),
    config;

var app = express();

if (!process.env.mongodbConnection)
    config = require('./config');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('isProduction', 'development' !== app.get('env'));
app.set('mongo-connection', config.mongodbConnection);

// Middleware
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(flash())
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if (!app.get('isProduction')) {
    app.use(express.errorHandler());
}

// groceries
app.get('/', groceries.index);
app.get('/groceries', groceries.index);
app.get('/groceries/add/:name', groceries.create);
app.get('/groceries/del/:name', groceries.delete);

// products
app.get('/products', productsFilter.getProductsFilter, products.index);
app.get('/products/add', function(req, res) { res.render('add'); });
app.post('/products/add', productsFilter.createFilter, products.create);
app.get('/products/del/:name', productsFilter.deleteFilter, products.delete);

app.locals.menu = ['list', 'products', 'add'];

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

    mongoose.connect(app.get('mongo-connection'));
    mongoose.connection
        .on('error', console.error.bind(console, 'connection error:'))
        .on('open', function callback () { console.log("successful connection to Mongodb")});

});
