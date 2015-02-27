angular.module('AngularPoc', ['ngRoute']).config(function ($routeProvider) {
    'use strict';
	$routeProvider.when('/mauricio', {
        controller : MauricioController,
        templateUrl : 'templates/mauricio.html'
    });
    
    $routeProvider.when('/gabriel', {
        controller : GabrielController,
        templateUrl : 'templates/gabrielController.html'
    });
});