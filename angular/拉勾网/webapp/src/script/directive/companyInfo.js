'use strict';
angular.module('app').directive('appCompanyInfo',[function(){
    return{
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/companyInfo.html'
    }
}]);