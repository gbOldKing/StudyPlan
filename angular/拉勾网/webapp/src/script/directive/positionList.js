/**
 * Created by Administrator on 2018/2/2.
 */
'use strict';
angular.module('app').directive('appPositionList',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope: {
            data: '='
        }
    };
}]);
