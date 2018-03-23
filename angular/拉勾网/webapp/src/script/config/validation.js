'use strict';
angular.module('app').config(['$validationProvider', function($validationProvider) {
	var expression = {
		phone: /^1[\d]{10}$/,
		password: function(value) {
	      	var str=value+'';
	      	return str.length > 5;
		},
		required:function(value){
			return !!value;
		}
	};
	var defaultMsg = {
		phone: {
			success: '',
			error: '必须是11位手机号'
		},
		password: {
			success: '',
			error: '密码长度必须大于6位'
		},
		required:{
			success:'',
			error:'验证码不能为空'
		}

	};
	$validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
