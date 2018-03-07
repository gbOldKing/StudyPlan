/**
 * Created by Administrator on 2018/3/6.
 */

angular.module('app').directive('appPositionClass',[function(){
   return{
       restrict:'A',
       replace:true,
       templateUrl:'view/template/positionClass.html'
   }
}]);
