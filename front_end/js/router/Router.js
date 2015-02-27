angular.module('AngularPoc', ['ngRoute']).config(function ($routeProvider) {
    'use strict';

	/*Mauricio routes*/
	$routeProvider.when('/mauricio', {
        controller : MauricioController,
        templateUrl : 'templates/mauricio/mauricio.html'
    });
	
	$routeProvider.when('/mauricio/cadastrarFrutas', {
        controller : MauricioController,
        templateUrl : 'templates/mauricio/cadastrarFrutas.html'
	});
	
	/*Gabriel routes*/
    $routeProvider.when('/gabriel', {
        controller : GabrielController,
        templateUrl : 'templates/gabrielController.html'

    });
});