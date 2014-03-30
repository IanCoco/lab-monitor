'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    should = require('should'),
    Lab = mongoose.model('Lab');

// Globals
var labOne,
    labTwo,
    labThree,
    labFour;

// The tests
describe('<Unit Test>', function() {
    describe('Model Lab:', function() {
        beforeEach(function() {
            labOne = new Lab({
                name: 'Test',
                room: '1331'
            });
            labTwo = new Lab({
                name: 'Test',
                room: '1332'
            });
            labThree = new Lab({
                name: 'Test',
                room: '1333'
            });
            labFour = new Lab({
                name: 'Test',
                room: '1334'
            });

            labOne.save();
            labTwo.save();
            labThree.save();
        });

        describe('Method List', function() {
            it('Should list all the labs', function(done) {
                Lab.find({}, function(err, labs) {
                    labs.should.have.length(3);
                    done();
                });
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return labFour.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            labOne.remove();
            labTwo.remove();
            labThree.remove();
            labFour.remove();
            done();
        });
    });
});