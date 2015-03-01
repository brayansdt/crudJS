function MauricioController($scope) {
    'use strict';
    $scope.dados = {};
	
	$scope.cadastrar = function(dados){
		dados.fruta = dados.fruta;
		var dataToStore = JSON.stringify(dados);
		var _p1 = JSON.parse(dataToStore);

		localStorage.setItem('dados', _p1);
	}
  
}
