'use strict';

// Declare app level module which depends on views, and components
angular.module('RESTAURANT', [
	'ngRoute',
	'RESTAURANT.admin_login',
	'RESTAURANT.admin_home',
	'RESTAURANT.admin_unit'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({redirectTo: '/backend/admin_login'});
}]);
