'use strict';

angular.module('RESTAURANT.admin_employee', ['ngRoute'])

.controller('EmployeeController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);