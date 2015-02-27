angular.module('AngularPoc', ['ngRoute']).config(function($routeProvider){    
    $routeProvider.when('/foo',{
        controller: FooController,
        templateUrl: 'templates/fooController.html'
    });
    
    $routeProvider.when('/test',{
        controller: TestController,
        templateUrl: 'templates/testController.html'
    });
});