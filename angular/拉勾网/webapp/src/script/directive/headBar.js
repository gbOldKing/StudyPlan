/**
 * Created by Administrator on 2018/1/26.
 */
'use strict';
angular.module('app').directive('appHeadBar',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            title: '@'
        },
        link:function($scope){
            $scope.back=function(){
                window.history.back();
            }
            /*接收广播*/
            /*$scope.$on('abc',function(event,data){
                console.log(event,data)
            })*/
        }
    }
}]);
