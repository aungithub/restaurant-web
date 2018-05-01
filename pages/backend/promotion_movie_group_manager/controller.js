'use strict';

angular.module('RESTAURANT.promotion_movie_group_manager', ['ngRoute'])

.controller('PromotionMovieGroupManagerController', ['$rootScope', '$scope', '$window', '$cookies', 'PromotionMovieGroupManagerService', function($rootScope, $scope, $window, $cookies, PromotionMovieGroupManagerService) {
	$scope.promotionList = null;

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				PromotionMovieGroupManagerService.getAllPromotion().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.promotionList = result.data.promotion;
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


	$scope.searchPromotion = function () {
		var search_promotion_id = $('#search_promotion_id').val();

		if ($.trim(search_promotion_id).length > 0) {
			PromotionMovieGroupManagerService.searchPromotion(search_promotion_id).then(function (result) {
				if (result.data.status == 200) {
					$scope.promotionList =  result.data.promotion;
				}
			});
		}
	}
	
}])
.service('PromotionMovieGroupManagerService', ['$http', '$q',function ($http, $q) {
	this.getAllPromotion = function () {
		return $http.get('restaurant-api/movie_system/api_get_all_promotion.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.searchPromotion = function (search) {
		return $http.post('restaurant-api/movie_system/api_search_promotion.php', {
			'search': search
        }, function(data, status) {
            return data;
        });
	};

	this.loadAddOption = function () {
		return $http.get('restaurant-api/movie_system/api_get_add_option.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.deleteMovie = function (mov_id) {
		return $http.post('restaurant-api/movie_system/api_delete_movie.php', {
			'mov_id': mov_id
        }, function(data, status) {
            return data;
        });
	};	

	this.addMovie = function (add_movie_id, add_movie_name, add_movie_stories, add_movie_cat, add_movie_numcopy, add_movie_status, add_movie_barcode) {
		return $http.post('restaurant-api/movie_system/api_add_movie.php', {
			'mov_id': add_movie_id,
			'movie_name': add_movie_name,
			'movie_stories': add_movie_stories,
			'movie_cat': add_movie_cat,
			'movie_numcopy': add_movie_numcopy,
			'movie_status': add_movie_status,
			'movie_barcode': add_movie_barcode,
        }, function(data, status) {
            return data;
        });
	};


	this.getMovieEdit = function (mov_id) {
		return $http.post('restaurant-api/movie_system/api_get_movie_edit.php', {
			'mov_id' : mov_id
        }, function(data, status) {
            return data;
        });
	};	

	this.updateMovie = function (add_movie_id, add_movie_name, add_movie_stories, add_movie_cat, add_movie_numcopy, add_movie_status, add_movie_barcode) {
		return $http.post('restaurant-api/movie_system/api_update_movie.php', {
			'mov_id': add_movie_id,
			'movie_name': add_movie_name,
			'movie_stories': add_movie_stories,
			'movie_cat': add_movie_cat,
			'movie_numcopy': add_movie_numcopy,
			'movie_status': add_movie_status,
			'movie_barcode': add_movie_barcode,
        }, function(data, status) {
            return data;
        });
	};
}]);