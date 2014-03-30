'use strict';

(function() {
    // Labs Controller Spec
    describe('MEAN controllers', function() {
        describe('LabsController', function() {
            // The $resource service augments the response object with methods for updating and deleting the resource.
            // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
            // the responses exactly. To solve the problem, we use a newly-defined toEqualData Jasmine matcher.
            // When the toEqualData matcher compares two objects, it takes only object properties into
            // account and ignores methods.
            beforeEach(function() {
                this.addMatchers({
                    toEqualData: function(expected) {
                        return angular.equals(this.actual, expected);
                    }
                });
            });

            // Load the controllers module
            beforeEach(module('mean'));

            // Initialize the controller and a mock scope
            var LabsController,
                scope,
                $httpBackend,
                $stateParams,
                $location;

            // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
            // This allows us to inject a service but then attach it to a variable
            // with the same name as the service.
            beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

                scope = $rootScope.$new();

                LabsController = $controller('LabsController', {
                    $scope: scope
                });

                $stateParams = _$stateParams_;

                $httpBackend = _$httpBackend_;

                $location = _$location_;

            }));

            it('$scope.find() should create an array with at least one lab object ' +
                'fetched from XHR', function() {

                    // test expected GET request
                    $httpBackend.expectGET('labs').respond([{
                        'name': 'Test',
                        'room': '1336'
                    }]);

                    // run controller
                    scope.find();
                    $httpBackend.flush();

                    // test scope value
                    expect(scope.labs).toEqualData([{
                        'name': 'Test',
                        'room': '1336'
                    }]);

                });

            it('$scope.findOne() should create an array with one lab object fetched ' +
                'from XHR using a labName and labRoom URL parameter', function() {
                    // fixture URL parament
                    $stateParams.labName = 'Test';
                    $stateParams.labRoom = '1335';

                    // fixture response object
                    var testLabData = function() {
                        return {
                            'name': 'Test',
                            'room': '1335'
                        };
                    };

                    // test expected GET request with response object
                    //$httpBackend.expectGET(/labs\/Test\/1335/).respond(testLabData());
                    $httpBackend.expectGET('labs?name=Test&room=1335').respond(testLabData());

                    // run controller
                    scope.findOne();
                    $httpBackend.flush();

                    // test scope value
                    expect(scope.lab).toEqualData(testLabData());

                });


        });
    });
}());