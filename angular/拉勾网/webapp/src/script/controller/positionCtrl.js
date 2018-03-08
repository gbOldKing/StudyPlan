/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q',function($scope,$http,$state,$q){
    $scope.isLogin=false;
    function getPosition(){
        var def=$q.defer();
        $http.get('/data/position.json?id='+$state.params.id).then(function(response){
            $scope.position=response.data;
            def.resolve(response);
        },function(err){
            def.reject(err);
        });
        return def.promise;
    }
    function getCompany(id){
        $http.get('/data/company.json?id='+id).then(function(response){
            $scope.company=response.data;
        })
    }
    getPosition().then(function(obj){
        getCompany(obj.data.companyId);
    },function(){
        alert('获取数据失败')
    })
}]);
