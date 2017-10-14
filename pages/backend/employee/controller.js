'use strict';

angular.module('RESTAURANT.admin_employee', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_employee', {
		templateUrl: 'pages/backend/employee/employee.html',
		controller: 'EmployeeController',
		cache: false
	});
}])

.controller('EmployeeController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);