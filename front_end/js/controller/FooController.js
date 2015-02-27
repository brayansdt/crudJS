function FooController($scope) {
    'use strict';
    
    $scope.elementos = [];
    $scope.add50000Elements = function(){
        for(var count = 0; count < 5000; count++){
            $scope.elementos.push(count);
        }
    }
}

//geting angular module
angular.module('AngularPoc',[]).controller('FooController', ['$scope', FooController]); 