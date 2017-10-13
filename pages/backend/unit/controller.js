'use strict';

angular.module('RESTAURANT.admin_unit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_unit', {
		templateUrl: 'pages/backend/unit/unit.html',
		controller: 'UnitController',
		cache: false
	});
}])

.controller('UnitController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);