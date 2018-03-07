/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('mainCtrl',['$scope','$http',function($scope,$http){
    $http.get('/data/positionList.json').then(function(response){
        $scope.positionList=response.data;
    },function(){
        alert('获取数据失败，请稍后再试')
    })
}]);
