// services.js
'use strict';

var labMonitorServices = angular.module('labMonitorServices', ['ngResource']);

labMonitorServices.factory('Labs', ['$resource', '$log',
  function($resource){
    return $resource('data/labs.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
