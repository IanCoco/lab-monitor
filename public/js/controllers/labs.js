'use strict';

angular.module('mean.labs').controller('LabsController', ['$scope', '$stateParams', '$location', 'Global', 'Labs', function ($scope, $stateParams, $location, Global, Labs) {
    $scope.global = Global;

    $scope.create = function() {
        var lab = new Labs({
            'name': this.name,
            'room': this.room
        });
        lab.$save(function(response) {
            $location.path('labs/' + response.name + '/' + response.room);
        });

        this.name = '';
        this.room = '';
    };

    $scope.find = function() {
        Labs.query(function(labs) {
            $scope.labs = labs;
        });
    };

    $scope.findOne = function() {
        Labs.get({
            name: $stateParams.labName,
            room: $stateParams.labRoom
        }, function(lab) {
            $scope.lab = lab;
        });
    };
}]);