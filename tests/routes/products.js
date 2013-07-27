var request = require('supertest'),
    express = require('express'),

    route = require('./../../routes/products');


describe('Products route', function() {

    it('respond with json', function(done){
        var letters = ['A','B','C','D','E','F','G','H','I'];
        var products = ['Apples','Bananas', 'Eggs'];
        var prodFlat = products.map(function (item) {
            return item.substring(0,1).toUpperCase();
        });

    });
//        app = express();
//        app.get('/', route.index);
//
////        app.get('/', function(req, res){
////            res.send('hello');
////        });
//
//        request(app)
//            .get('/')
//            .expect(200, done);
//    })

});
