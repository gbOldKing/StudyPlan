/**
 * Created by Administrator on 2018/1/26.
 */
angular.module('app').directive('appFoot',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    }
}]);