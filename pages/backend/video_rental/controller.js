'use strict';

angular.module('RESTAURANT.video_rental', ['ngRoute'])

.controller('VideoRentalController', ['$rootScope', '$scope', '$window', '$cookies', 'VideoRentalService', function($rootScope, $scope, $window, $cookies, VideoRentalService) {
	
	
}])
.service('VideoRentalService', ['$http', '$q',function ($http, $q) {
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