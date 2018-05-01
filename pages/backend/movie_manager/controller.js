'use strict';

angular.module('RESTAURANT.movie_manager', ['ngRoute'])

.controller('MovieManagerController', ['$rootScope', '$scope', '$window', '$cookies', 'MovieManagerService', function($rootScope, $scope, $window, $cookies, MovieManagerService) {
	
	
}])
.service('MovieManagerService', ['$http', '$q',function ($http, $q) {
	this.login = function (username, password) {
		$http.defaults.headers.common = { 'Content-type' : 'application/json'};

		return $http.post('restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};
}]);