/**
 * Created by Administrator on 2018/2/2.
 */
'use strict';
angular.module('app').directive('appPositionList',['$http',function($http){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope: {
            data: '=',
            filterObj:'=',
            isFavorite:'='
        },
        link:function($scope){
        	$scope.selected=function(item){
        		$http.post('/data/favorite.json',{
        			id:item.id,
        			select:!item.select
        		}).success(function(response){
        			item.select=!item.select;
        		})
        	};
        }
    };
}]);
