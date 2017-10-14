'use strict';

angular.module('RESTAURANT.admin_home', ['ngRoute'])

.controller('HomeController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);