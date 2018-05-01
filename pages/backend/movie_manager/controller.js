'use strict';

angular.module('RESTAURANT.movie_manager', ['ngRoute'])

.controller('MovieManagerController', ['$rootScope', '$scope', '$window', '$cookies', 'MovieManagerService', function($rootScope, $scope, $window, $cookies, MovieManagerService) {
	
	$scope.movieList = [];

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				MovieManagerService.getAllMovie().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.movieList = result.data.movie;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});
	
}])
.service('MovieManagerService', ['$http', '$q',function ($http, $q) {
	this.getAllMovie = function () {
		return $http.get('restaurant-api/movie_system/api_get_all_movie.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);