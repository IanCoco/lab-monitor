'use strict';

//Labs service used for labs REST endpoint
angular.module('mean.labs').factory('Labs', ['$resource', function($resource) {
    return $resource('labs/:labName/:labRoom', {
        labName: '@name',
        labRoom: '@room'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);