// controllers.js
'use strict';

var labMonitorControllers = angular.module('labMonitorControllers', []);

labMonitorControllers.controller('LabDetailCtrl' ['$scope', 'Lab', 
  function($scope, Lab) {
    $scope.lab = Lab;
    $scope.toggleComputer = function(computer) {
      if (computer['status'] == 'free') {
        computer['status'] = 'Reserved';
      } else if (computer['status'] == 'Reserved') {
        computer['status'] = 'free';
      }
    };
  }]);

labMonitorControllers.controller('LabListCtrl', ['$scope', '$log', 'Labs',
  function($scope, $log, Labs){
    $log.log(Labs);
    $scope.labs = Labs.labs;
  }]);

labMonitorControllers.controller('RecommendLabCtrl', ['$scope', 'Labs',
  function($scope, Labs){
    $scope.labs = Lab.labs;
    $scope.divisions = Lab.divisions
  }]);
