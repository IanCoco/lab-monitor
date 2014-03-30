'use strict';

// Articles routes use labs controller
var labs = require('../controllers/labs');

module.exports = function(app) {

    app.get('/labs', labs.all);
    app.post('/labs', labs.create);
    app.get('/labs/:labName/:labRoom', labs.show);

    app.param('labName', labs.lab);
    app.param('labRoom', labs.lab);

};