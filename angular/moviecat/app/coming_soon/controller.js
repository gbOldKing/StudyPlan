/**
 * Created by Administrator on 2017/8/19.
 */
(function (angular) {
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.coming_soon',['ngRoute']);
	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/coming_soon', {
			templateUrl: 'coming_soon/view.html',
			controller: 'ComingSoonController'
		});
	}]);
	module.controller('ComingSoonController',['$scope',function ($scope) {
	}])
})(angular);
