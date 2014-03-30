'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Lab = mongoose.model('Lab');

/**
 * Find lab by name
 */
exports.lab = function(req, res, next, name, room) {
    Lab.load([name, room], function(err, lab) {
        if (err) return next(err);
        if (!lab) return next(new Error('Failed to load lab ' + name + ' ' + room));
        req.lab = lab;
        next();
    });
};

/**
 * Create an lab
 */
exports.create = function(req, res) {
    var lab = new Lab(req.body);

    lab.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                lab: lab
            });
        } else {
            res.jsonp(lab);
        }
    });
};

/**
 * Show an lab
 */
exports.show = function(req, res) {
    res.jsonp({
        'lab': {
            'name': req.params.labName,
            'room': req.params.labRoom
        }
    });
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Lab.find().exec(function(err, labs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(labs);
        }
    });
};

