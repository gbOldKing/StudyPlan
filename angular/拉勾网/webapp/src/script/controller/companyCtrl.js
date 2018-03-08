/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('companyCtrl',['$scope','$state','$http',function($scope,$state,$http){
	$http.get('/data/company.json?id='+$state.params.id).then(function(response){
		$scope.company=response.data;
	})
}]);
