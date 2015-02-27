angular.module('AngularPoc', ['ngRoute']).config(function($routeProvider){    
    $routeProvider.when('/foo',{
        controller: FooController,
        templateUrl: 'templates/fooController.html'
    });
    
    $routeProvider.when('/test',{
        controller: TestController,
        templateUrl: 'templates/testController.html'
    });  
	
	/*Rotas Mauricio*/
	$routeProvider.when('/mauricio',{
        controller: MauricioController,
        templateUrl: 'templates/mauricio/mauricio.html'
    });
	
	$routeProvider.when('/mauricio/cadastrarFrutas',{
        controller: MauricioController,
        templateUrl: 'templates/mauricio/cadastrarFrutas.html'
    });
    
    $routeProvider.when('/gabriel',{
        controller: GabrielController,
        templateUrl: 'templates/gabrielController.html' 
    })
});