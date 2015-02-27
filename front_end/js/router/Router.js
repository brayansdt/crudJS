angular.module('AngularPoc', ['ngRoute']).config(function($routeProvider){    
    $routeProvider.when('/foo',{
        controller: FooController,
        templateUrl: 'templates/fooController.html'
    });
    
    $routeProvider.when('/test',{
        controller: TestController,
        templateUrl: 'templates/testController.html'
    });  
	
	$routeProvider.when('/mauricio',{
        controller: MauricioController,
        templateUrl: 'templates/mauricio.html'
    });
    
    $routeProvider.when('/gabriel',{
        controller: GabrielController,
        templateUrl: 'templates/gabrielController.html' 
    })
});