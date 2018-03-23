'use strict';
angular.module('app').controller('favoriteCtrl',['$scope','$http','$state',function($scope,$http,$state){
	$http.get('data/myFavorite.json').then(function(respones){
		$scope.favoriteList=respones.data;
	})
}]);
