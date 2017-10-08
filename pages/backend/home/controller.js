'use strict';

angular.module('RESTAURANT.admin_home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/admin_home', {
		templateUrl: 'pages/backend/home/home.html',
		controller: 'HomeController',
		cache: false
	});
}])

.controller('HomeController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);