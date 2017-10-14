'use strict';

angular.module('RESTAURANT.admin_food', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_food', {
		templateUrl: 'pages/backend/food/food.html',
		controller: 'FoodController',
		cache: false
	});
}])

.controller('FoodController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);