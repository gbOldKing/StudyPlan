'use strict';
angular.module('app').controller('loginCtrl',['$scope','$state','cache',function($scope,$state,cache){
	$scope.login=function(){
		var user=JSON.parse(localStorage.getItem($scope.user.phone));
		if(user){ 
			if(user.password==$scope.user.password){
				layer.open({
			    content: '登陆成功'
			    ,skin: 'msg'
			    ,time: 2 
			  });
				cache.put('phone',user.phone);
				cache.put('name','王二小');
				cache.put('image','images/head.png');
				$state.go('main');
			}else{
				layer.open({
			    content: '密码错误'
			    ,skin: 'msg'
			    ,time: 2 
			  });
			}
		}else{
			layer.open({
			    content: '用户名不存在'
			    ,skin: 'msg'
			    ,time: 2 
			  });
		}
	}
}]);
