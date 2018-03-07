/**
 * Created by Administrator on 2018/1/25.
 */
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('position',{
        url:'/position/:id',
        templateUrl:'view/position.html',
        controller:'positionCtrl'
    }).state('company',{
        url:'/company/:id',
        templateUrl:'view/company.html',
        controller:'companyCtrl'
    });
    $urlRouterProvider.otherwise('main');
}]);