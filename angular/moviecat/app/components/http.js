/**
 * Created by Administrator on 2017/8/20.
 */
(function (angular) {
	var http=angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$window','$document', function ($window,$document) {
		this.jsonp= function (url, data, callback) {
			var cbFunName='my_jsonp_'+Math.random().toString().replace('.','');
			$window[cbFunName]=callback;
			var querystring=url.indexOf('?')==-1?'?':'&';
			for(var key in data){
				querystring += key +'='+data[key] + '&';
			}
			querystring+='callback='+cbFunName;
			var scriptElement=$document[0].createElement('script');
			scriptElement.src=url+querystring;
			$document[0].body.appendChild(scriptElement);
		}
	}])
})(angular);
