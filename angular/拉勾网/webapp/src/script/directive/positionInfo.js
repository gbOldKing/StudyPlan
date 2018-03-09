/**
 * Created by Administrator on 2018/1/26.
 */
'use strict';
angular.module('app').directive('appPositionInfo',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionInfo.html',
        scope:{
            pos:'='
        },
        link:function($scope){
            $scope.isActive=false;
            $scope.shoucang=function(){
                $scope.isActive=!$scope.isActive;
            }
        }

    }
}]);
