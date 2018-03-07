/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q',function($scope,$http,$state,$q){
    $scope.isLogin=false;
    function getPosition(){
        var def=$q.defer();
        $http.get('/data/position.json?id='+$state.params.id).then(function(response){
            $scope.position=response;
            def.resolve(response);
        },function(err){
            def.reject(err);
        });
        return def.promise;
    }
    getPosition().then(function(obj){
        console.log(obj)
    },function(){

    })
}]);
