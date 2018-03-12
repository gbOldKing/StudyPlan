'use strict';
angular.module('app').controller('postCtrl',['$scope','$http','$state',function($scope,$http,$state){
    $scope.tabList=[{
        id:'all',
        name:'全部'
    },{
        id:'pass',
        name:'面试邀请'
    },{
        id:'fail',
        name:'不合适'
    }]
}]);
