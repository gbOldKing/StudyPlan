/**
/**
 * Created by Administrator on 2018/1/26.
 */
'use strict';
angular.module('app').directive('appHead',['cache',function(cache){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html',
        link:function($scope){
        	$scope.name=cache.get('name') || '';
        }
    }
}]);
