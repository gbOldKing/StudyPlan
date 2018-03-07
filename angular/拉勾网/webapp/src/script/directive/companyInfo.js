'use strict';
angular.module('app').directive('appCompanyInfo',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/companyInfo.html'
    }
}]);