'use strict';
angular.module('app').directive('appCompanyInfo',[function(){
    return{
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/companyInfo.html',
        link:function($scope){
        	$scope.showPositionList=function(index){
        		$scope.positionList=$scope.com.positionClass[index].positionList;
        		console.log(index)
        		$scope.isActive=index;
        	}
        }
    }
}]);