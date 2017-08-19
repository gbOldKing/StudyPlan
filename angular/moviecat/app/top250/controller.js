/**
 * Created by Administrator on 2017/8/19.
 */
(function (angular) {
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.top250',['ngRoute']);
	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/top250', {
			templateUrl: 'top250/view.html',
			controller: 'Top250Controller'
		});
	}]);
	module.controller('Top250Controller',['$scope',function ($scope) {
	}])
})(angular);
