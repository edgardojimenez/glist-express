var should = require('should'),
    utils = require('./../../support/utility').Utils;

describe('Test for Utility.js module', function() {

    describe('When calling toTitleCase on a "hello world"', function() {

        it('Should title case to "Hello World"', function(){
            should.equal(utils.toTitleCase('hello world'), 'Hello World')
        });

    });

    describe('When calling toTitleCase on a "hello"', function() {

        it('Should title case to "Hello"', function(){
            should.equal(utils.toTitleCase('hello'), 'Hello')
        });

    });

    describe('When calling toTitleCase on a "HELLO"', function() {

        it('Should title case to "Hello"', function(){
            should.equal(utils.toTitleCase('HELLO'), 'Hello')
        });

    });

    describe('When calling toTitleCase on a "" empty', function() {

        it('Should title return empty', function(){
            should.equal(utils.toTitleCase(''), '')
        });

    });

    describe('When calling addTitleToList on array [{ name: "Apples"}]', function() {

        it('Should return array ["A","Apples"]', function(){
            var array = utils.addTitleToList([{ name: "Apples"}]);
            array.should.not.be.empty;
            array.should.have.length(2);
            array[0].should.be.equal("A");
            array[1].should.be.equal("Apples");
        });

    });

    describe('When calling addTitleToList on array []', function() {

        it('Should return array []', function(){
            var array = utils.addTitleToList([]);
            array.should.be.empty;
            array.should.have.length(0);
        });

    });
});

