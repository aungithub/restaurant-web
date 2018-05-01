'use strict';

angular.module('RESTAURANT.promotion_movie_group_manager', ['ngRoute'])

.controller('PromotionMovieGroupManagerController', ['$rootScope', '$scope', '$window', '$cookies', 'PromotionMovieGroupManagerService', function($rootScope, $scope, $window, $cookies, PromotionMovieGroupManagerService) {
	
	
}])
.service('PromotionMovieGroupManagerService', ['$http', '$q',function ($http, $q) {
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