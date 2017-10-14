'use strict';

angular.module('RESTAURANT.admin_promotion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_promotion', {
		templateUrl: 'pages/backend/promotion/promotion.html',
		controller: 'PromotionController',
		cache: false
	});
}])

.controller('PromotionController', ['$scope', function($scope) {
	$scope.test = function() {
		alert(116)
	}
}]);