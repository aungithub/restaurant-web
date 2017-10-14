'use strict';

angular.module('RESTAURANT.admin_food', ['ngRoute'])

.controller('FoodController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);