/**
 * Created by Administrator on 2017/8/19.
 */
(function (angular) {
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.in_theaters',[
		'ngRoute',
	]);
	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/in_theaters', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheatersController'
		});
	}]);
	module.controller('InTheatersController',[
		'$scope',
		'$http',
		function ($scope,$http) {
		$scope.subjects=[];
		$scope.message='';
		//控制器分为两步；1、设计暴露的数据 2、设计暴露的行为
		$http.get('data.json').then(function (result) {
			console.log(result);
			if(result.status==200){
				$scope.subjects=result.data.subjects;
			}else{
				$scope.message='亲，没有找到相关电影'
			}
		}, function () {
			$scope.message='亲，没有找到相关电影'
		})
	}])
})(angular);
