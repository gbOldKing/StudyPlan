/**
 * Created by Administrator on 2017/8/19.
 */
(function (angular) {
	'use strict';
	//创建正在热映模块
	var module = angular.module('moviecat.movie_detail', [
		'ngRoute',
		'moviecat.services.http'
	]);
	//配置模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailController',
		});
	}]);
	module.controller('MovieDetailController', [
		'$scope',
		'$route',
		'$routeParams',//获取路由参数
		'HttpService',
		'APPConfig',
		function ($scope,$route, $routeParams, HttpService,APPConfig) {
			$scope.movie={};
			$scope.loading=true;
			HttpService.jsonp(APPConfig.detaiApiAddress+$routeParams.id,{}, function (data) {
				$scope.movie=data;
				$scope.loading=false;
				$scope.$apply();
			})
		}])
})(angular);


/*//在Angular中使用JSONP的方式做跨域请求，必须给当前地址加上一个参数 callback=JSON_CALLBACK
 $http.jsonp(doubanApi+'?callback=JSON_CALLBACK').then(function (result) {
 console.log(result);
 if(result.status==200){
 $scope.subjects=result.data.subjects;
 }else{
 $scope.message='亲，没有找到相关电影'
 }
 }, function () {
 $scope.message='亲，没有找到相关电影'
 })*/
