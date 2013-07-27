var productFilter = require('./../../middleware/products'),
    should = require('should'),
    http = require('supertest'),
    express = require('express'),
    app;
//
//app = express();
//app.use(express.bodyParser());
//
//app.use(function(req, res){
//    res.end(JSON.stringify(req.body));
//});
//
describe('Products route', function() {

//    it('should default to {}', function(done){
//        http(app)
//            .post('/')
//            .end(function(res){
//                res.body.should.equal('{}');
//                done();
//            })
//    })


    it('respond with json', function(){
        var res = { locals: {} };

        productFilter.getProductsFilter({}, res,  function() {
            should.equal(res.locals.productsView.length, 100);
            //done();
        });

        //setTimeout(done, 10000);
        //done();
//        console.log(res.locals.productsView.length);
//        console.log("in 1234");
//        productFilter.getProductsFilter({}, res, test);
//        should.equal(res.locals.productsView.length, 5);
//        console.log("in 12346666");

    })

});
//////////////////////////////////////////////

//var express = require('express'),
//    request = require('supertest'),
//    productFilter = require('./../../middleware/products')
//
//
//
//describe('GET /users', function(){
//    it('respond with json', function(done){
//        var app = express();
//
//        app.get('/user', productFilter.getProductsFilter, function(req, res){
//            res.send(200, { name: 'tobi' });
//        });
//        //app.get('/user', productFilter.getProductsFilter);
//
//        request(app)
//            .get('/user')
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(200, done);
//    })
//})
//
//
