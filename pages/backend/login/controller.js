'use strict';

angular.module('RESTAURANT.admin_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/admin_login', {
		templateUrl: 'pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false
	});
}])

.controller('LoginController', [function() {
	
}]);