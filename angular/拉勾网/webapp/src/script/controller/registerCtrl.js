'use strict';
angular.module('app').controller('registerCtrl',['$scope','$http','$state','$interval',function($scope,$http,$state,$interval){
	$scope.user={};
	$scope.submit=function(){
		$http.post('data/regist.json',$scope.user).success(function(resp){
			if(localStorage.getItem($scope.user.phone)){
				layer.open({
			    content: '该手机已注册'
			    ,skin: 'msg'
			    ,time: 2
			  });
				return;
			}
			var user=JSON.stringify($scope.user);
			localStorage.setItem($scope.user.phone,user)//模拟数据库将注册信息存于本地localstorage中
			layer.open({
			    content: '注册成功，即将跳转到登陆页面'
			    ,skin: 'msg'
			    ,time: 2
			  });
			$interval(function(){
				$state.go('login')
			},2500)
		})
	}
	var count;
	$scope.send=function(){
		$http.get('data/code.json').then(function(response){

			if(1==response.data.state){
				count = 60;
				$scope.time='60s';
				var timer = $interval(function(){
					if(count<=0){
						$interval.cancel(timer);
						$scope.time = '';
						return;
					}else{
						count--;
						$scope.time=count+'s';
					}	
				},1000)
			}
		},function(){

		})
	}
}]);
