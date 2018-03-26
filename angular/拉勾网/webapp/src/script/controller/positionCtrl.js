/**
 * Created by Administrator on 2018/1/26.
 */

angular.module('app').controller('positionCtrl', ['$scope', '$http', '$state', '$q', 'cache', '$log', function($scope, $http, $state, $q, cache, $log) {
    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin ? '投简历' : '去登陆';

    function getPosition() {
        var def = $q.defer();
        $http.get('/data/position.json', {
            params: {
                id: $state.params.id
            }
        }).then(function(response) {
            $scope.position = response.data;
            if (response.data.posted) {
                $scope.message = "已投递";
            }
            def.resolve(response);
        }, function(err) {
            def.reject(err);
        });
        return def.promise;
    }

    function getCompany(id) {
        $http.get('/data/company.json?id=' + id).then(function(response) {
            $scope.company = response.data;
        })
    }
    getPosition().then(function(obj) {
        getCompany(obj.data.companyId);
    }, function() {
        alert('获取数据失败')
    })
    $scope.go = function() {
        if ($scope.message !== '已投递') {
            if ($scope.isLogin) {
                $http.post('/data/handle.json', {
                    id: $scope.position.id
                }).success(function(response) {
                    $log.info(response)
                    $scope.message = "已投递"
                })
            } else {
                $state.go('login');
            }
        }

    }
}]);