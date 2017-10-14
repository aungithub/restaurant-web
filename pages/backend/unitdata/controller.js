'use strict';

angular.module('RESTAURANT.admin_unitdata', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_unitdata', {
		templateUrl: 'pages/backend/unitdata/unitdata.html',
		controller: 'UnitdataController',
		cache: false
	});
}])

.controller('UnitdataController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);