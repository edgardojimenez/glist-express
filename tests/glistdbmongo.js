var should = require('should'),
    repo = require('../repos/glistdbmongo'),
    mongoose = require('mongoose'),
    db;


describe('glistdbmongo repo tests', function() {

    before(function(done){
        mongoose.connect('mongodb://glistsa:Glistsa001!@ds027758.mongolab.com:27758/glist-test');
        db = mongoose.connection;
        db.on('open', function(err) {
            if (err) return done(err);

            done();
        });
    });

    describe('products test', function() {
        var product = 'Apples';

        before(function(done){
            db.collections['products'].drop(function(err) {
                if (err) return done(err);

                done();
            });
        });

        it('add product', function(done){
            repo.addProduct(product, function(err, doc) {
                if (err) return done(err);
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('find product', function(done){
            repo.findProduct(product, function(err, doc) {
                if (err) return done(err);
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('get all products', function(done){
            repo.getProducts(function(err, docs) {
                if (err) return done(err);
                docs.should.not.be.empty;
                docs.should.have.length(1);
                docs[0].name.should.be.equal(product);
                done();
            });
        });

        it('remove product', function(done){
            repo.deleteProduct(product, function(err) {
                if (err) return done(err);

                repo.findProduct(product, function(err, doc) {
                    if (err) return done(err);
                    should.equal(doc, null);
                    done();
                });
            });
        });

    });

    describe('groceries test', function() {
        var product = 'Apples';

        before(function(done){
            db.collections['groceries'].drop(function(err) {
                if (err) return done(err);

                done();
            });
        });

        it('add grocery', function(done){
            repo.addGrocery(product, function(err, doc) {
                if (err) return done(err);
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('find grocery', function(done){
            repo.findGrocery(product, function(err, doc) {
                if (err) return done(err);
                doc.name.should.be.equal(product);
                done();
            });
        });

        it('get all groceries', function(done){
            repo.getGroceries(function(err, docs) {
                if (err) return done(err);
                docs.should.not.be.empty;
                docs.should.have.length(1);
                docs[0].name.should.be.equal(product);
                done();
            });
        });

        it('remove grocery', function(done){
            repo.deleteGrocery(product, function(err) {
                if (err) return done(err);

                repo.findGrocery(product, function(err, doc) {
                    if (err) return done(err);
                    should.equal(doc, null);
                    done();
                });
            });
        });

    });

    after(function(done){
        db.close(function (err) {
            if (err) return done(err);

            done();
        });
    });
});

