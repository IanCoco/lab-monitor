'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Computer Schema
 */
var LabSchema = new Schema({
    'name': {
        type: String,
        trim: true,
        required: true
    },
    'room': {
        type: String,
        trim: true,
        required: true
    },
    'dims-x': {
        type: Number
    },
    'dims-y': {
        type: Number
    },
    'os': {
        type: Array
    },
    'software': {
        type: Array
    },
    'hardware': {
        type: Array
    }
});

    // Mongoose hates this
    // 'computers': [{
    //     'id': {
    //         type: { type: String }
    //     },
    //     'status': {
    //         type: { type: String }
    //     },
    //     'position-x': {
    //         type: { type: Number }
    //     },
    //     'position-y': {
    //         type: { type: Number }
    //     }
    // }],


/**
 * Validations
 */
LabSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

LabSchema.path('room').validate(function(room) {
    return room.length;
}, 'Room cannot be blank');

/**
 * Statics
 */
LabSchema.statics.load = function(labName, labRoom, cb) {
    this.findOne({
        name: labName,
        room: labRoom
    }).exec(cb);
};


mongoose.model('Lab', LabSchema);