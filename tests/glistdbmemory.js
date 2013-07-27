
var should = require('should'),
    repo = require('../repos/glistdbmemory'),
    product = 'Apple';

describe('glistdbmongo repo tests', function() {

    describe('products test', function() {
        it('add a product product', function(done){

            repo.addProduct(product, function(err, doc) {
                doc.name.should.be.eql(product);
                done();
            });
        });

        it('get all product', function(done){
            repo.getProducts(function(err, docs) {
                docs.should.not.be.empty;
                docs.should.have.length(1);
                docs[0].should.be.equal(product);
                done();
            });
        });

        it('find product', function(done){
            repo.findProduct(product, function(err, doc) {
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('remove product', function(done){
            repo.deleteProduct(product, function(err) {
                repo.getProducts(function (err, docs) {
                    docs.should.be.empty
                    done();
                });
            });
        });
    });

    describe('groceries test', function() {
        it('add a grocery', function(done){
            repo.addGrocery(product, function(err, doc) {
                doc.name.should.be.eql(product);
                done();
            });
        });

        it('get all groceries', function(done){
            repo.getGroceries(function(err, docs) {
                docs.should.not.be.empty;
                docs.should.have.length(1);
                docs[0].should.be.equal(product);
                done();
            });
        });

        it('find grocery', function(done){
            repo.findGrocery(product, function(err, doc) {
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('remove grocery', function(done){
            repo.deleteGrocery(product, function(err) {
                repo.getGroceries(function (err, docs) {
                    docs.should.be.empty
                    done();
                });
            });
        });
    });

});

