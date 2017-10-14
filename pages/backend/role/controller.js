'use strict';

angular.module('RESTAURANT.admin_role', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_role', {
		templateUrl: 'pages/backend/role/role.html',
		controller: 'RoleController',
		cache: false
	});
}])

.controller('RoleController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);