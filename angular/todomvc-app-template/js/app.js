(function (angular) {
	'use strict';
	//启用严格模式
	/**
	 * MyTodoMvc
	 * 应用程序的主要模块
	 */
	var myApp=angular.module('MyTodoMvc',[]);
	//注册一个主要的控制器
	myApp.controller('MainController',['$scope', function ($scope) {
		function getId(){
			var id=Math.random();
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id===id){
					id=getId();
					break;
				}
			}
			return id;
		}

		//文本框模型
		$scope.text='';

		//任务列表模型
		$scope.todos=[
			{id:1,text:'HTML',completed:true},
			{id:2,text:'javascript',completed:true},
			{id:3,text:'jquery',completed:false},
			{id:4,text:'bootstrap',completed:false},
			{id:5,text:'angular',completed:false}
		];
		//添加
		$scope.add= function () {
			if(!$scope.text){
				return;
			}
			$scope.todos.push({
				id:getId(),
				text:$scope.text,
				completed:false
			});
			$scope.text='';
		};

		//删除
		$scope.remove= function (id) {
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id===id){
					$scope.todos.splice(i,1);
				}
			}
		};
		//清空已完成
		$scope.clear= function () {
			var result=[];
			for(var i=0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i])
				}
			}
			$scope.todos=result;
		};
		//是否有已经完成的任务
		$scope.existCompleted= function () {
			for(var i=0;i<$scope.todos.length;i++) {
				if ($scope.todos[i].completed) {
					return true
				}
			}
			return false
		};
		//当前正在编辑的元素
		$scope.currentEditingId=-1;
		$scope.editing= function (id) {
			$scope.currentEditingId=id;
		};
		//取消编辑状态
		$scope.save= function () {
			$scope.currentEditingId=-1;
		};

		//全选
		/*$scope.checkall=false;
		$scope.$watch('checkall', function (now, old) {
			for(var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed=now;
			}
		})*/
		var now=false;
		$scope.toggleAll= function () {
			for(var i=0;i<$scope.todos.length;i++) {
				$scope.todos[i].completed = now;
			}
			now=!now;
		}

	}])
})(angular);
