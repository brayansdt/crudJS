function TestController($scope) {
    'use strict';
    $scope.elementos = [];
    
    $scope.addElements = function(){
        for(var count = 0; count < 5000; count++){
            $scope.elementos.push(count);
        }
    }
}

//geting angular module
angular.module("AngularPoc", []).controller('TestController', ['$scope', FooController]);