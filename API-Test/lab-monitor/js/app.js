// app.js
'use strict';

var labMonitorApp = angular.module('labMonitorApp', [
  'ngRoute',
  'labMonitorControllers',
  'labMonitorServices'
]);

labMonitorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/labs', {
        templateUrl: 'partials/lab-list.html',
        controller: 'LabListCtrl'
      }).
      when('/lab/:labName/:labRoom', {
        templateUrl: 'partials/lab-detail.html',
        controller: 'LabDetailCtrl'
      }).
      when('/labs/find', {
        templateUrl: 'partials/find-software.html',
        controller: 'FindSoftwareCtrl'
      }).
      otherwise({
        redirectTo: '/labs'
      });
  }]);


