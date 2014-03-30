'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Labs',
        'link': 'labs'
    }, {
        'title': 'Create New Lab',
        'link': 'labs/create'
    }];
    
    $scope.isCollapsed = false;
}]);