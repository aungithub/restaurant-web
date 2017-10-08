'use strict';

angular.module('RESTAURANT.admin_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_login', {
		templateUrl: 'pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false
	});
}])

.controller('LoginController', ['$scope', 'UserLogin', function($scope, UserLogin) {
	$scope.loginClicked = function () {
		var username = $.trim($('#username').val());
		var password = $.trim($('#password').val());
		if (username == '' || password == '') {
			alert('กรอกไม่ครบ')
		} else {
			//alert('ไป login\n' + 'Username: ' + username + '\n' + 'Password: ' + password)
			UserLogin.login(username, password).then(function (result) {
				console.log('result', result);
			});
		}
	};
}])
.service('UserLogin', ['$http', '$q',function ($http, $q) {
	this.login = function (username, password) {
		return $http.post('http://localhost/restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};
}]);