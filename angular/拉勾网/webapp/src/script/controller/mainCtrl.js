/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('mainCtrl',['$scope',function($scope){
    $scope.jobList=[{
        id:'1',
        name:'前端开发工程师',
        imgSrc:'images/company-2.png',
        companyName:'千度（上海）互联网',
        city:'上海',
        industry:'互联网',
        time:'2018-02-02 15:42'
    },{
        id:'2',
        name:'高级Java开发',
        imgSrc:'images/company-1.png',
        companyName:'鹏微（深圳）科技有限公司',
        city:'深圳',
        industry:'互联网',
        time:'2018-02-05 15:42'
    },{
        id:'3',
        name:'服务器运维工程师',
        imgSrc:'images/company-3.png',
        companyName:'鹏微（深圳）科技有限公司',
        city:'深圳',
        industry:'互联网',
        time:'2018-02-05 15:42'
    },{
        id:'4',
        name:'研发总监',
        imgSrc:'images/company-2.png',
        companyName:'广西神宁科技有限公司',
        city:'南宁',
        industry:'互联网',
        time:'2018-01-05 15:42'
    }]
}]);
