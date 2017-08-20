/**
 * Author:oldking
 * Created by Administrator on 2017/8/20.
 */

(function (window, document, undefined) {
	'use strict';
	window.okJsonp= function (url, data, callback) {
		//挂载回调函数
		var cbFunName='my_jsonp_'+Math.random().toString().replace('.','');
		window[cbFunName]=callback;
		var querystring=url.indexOf('?')==-1?'?':'&';
		//将data转换为URL字符串形式
		for(var key in data){
			querystring += key +'='+data[key] + '&';
		}
		//处理URL中的回调参数
		querystring+='callback='+cbFunName;

		//创建script标签
		var scriptElement=document.createElement('script');
		scriptElement.src=url+querystring;

		//将script标签放到页面中
		document.body.appendChild(scriptElement);
	}
})(window,document,undefined);
