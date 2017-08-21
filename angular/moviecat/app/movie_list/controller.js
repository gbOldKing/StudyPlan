/**
 * Created by Administrator on 2017/8/19.
 */
(function (angular) {
	'use strict';
	//创建正在热映模块
	angular.module('moviecat.movie_list', [
		'ngRoute',
		'moviecat.services.http'
	])
	//配置模块的路由
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}])
	.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',//获取路由参数
		'HttpService',
		'APPConfig',
		function ($scope,$route, $routeParams, HttpService,APPConfig) {
			var count = APPConfig.pageSize;
			$scope.pageIndex=parseInt($routeParams.page);
			var start = $scope.pageIndex * count;//当前页从哪里开始
			$scope.subjects = [];
			$scope.loading=true;
			$scope.message = '';
			$scope.totalCount = 0;
			$scope.totalPages=0;
			$scope.title='Loading';
			//控制器分为两步；1、设计暴露的数据 2、设计暴露的行为
			HttpService.jsonp(APPConfig.listApiAddress+$routeParams.category, {
				start:start,
				count:count,
				city:'南宁',
				q:$routeParams.q  //匹配搜索模块参数 $routeParams数据来源：1、匹配路由 2、‘？’参数
			}, function (data) {
				$scope.title=data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;
				console.log($scope.totalCount);
				$scope.totalPages=Math.ceil($scope.totalCount/count);
				$scope.loading=false;
				$scope.$apply('subjects');
			});
			$scope.goPage= function (page) {
				if(page>=0 && page<=$scope.totalPages-1)
				$route.updateParams({page:page})
			}
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
