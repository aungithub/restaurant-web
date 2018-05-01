'use strict';

angular.module('RESTAURANT.movie_manager', ['ngRoute'])

.controller('MovieManagerController', ['$rootScope', '$scope', '$window', '$cookies', 'MovieManagerService', function($rootScope, $scope, $window, $cookies, MovieManagerService) {
	
	$scope.movieList = [];
	$scope.cat = null;
	$scope.movieEdit = null;

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

	$scope.loadAddMovieForm = function () {
		MovieManagerService.loadAddOption().then(function (result) {
			if (result.data.status == 200) {
				$scope.cat = result.data.cate;
			}
		});
	}

	$scope.deleteMovie = function (mov_id) {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'คุณต้องการลบภาพยนต์นี้ใช่หรือไม่?',
            buttons : [
            {
                addClass : 'btn btn-danger',//คลาสของbootstrap
                text : 'ยกเลิก',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
                }
            },
            {
            	id : 'btn_confirm',
                addClass: 'btn btn-primary',
                text : 'ยืนยัน',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();
        
                    noty({
                        type : 'alert',
                        layout : 'top',
                        modal : true,
                        closeWith : [],
                        text : 'กำลังลบข้อมูลภาพยนต์...',
                        callback : {
                            afterShow : function () {

                                MovieManagerService.deleteMovie(mov_id).then(function (result) {
                                	$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : result.data.message,
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		// refresh หน้าจอ
							                		//location.reload();
							                		//$scope.refreshList();
							                	}
							                }
							            });
									}
									else {
										noty({
							                type : 'error',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'ลบข้อมูลภาพยนต์ไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();
							                	}
							                }
							            });
									}
								});
                            }
                        }
                    });
                }
            }]
        });
	}

	$scope.search = function () {
		var search = $('#search_name').val();

		if ($.trim(search).length > 0) {
			MovieManagerService.search(search).then(function (result) {
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

	$scope.addMovie = function () {
		var add_movie_id = $('#add_movie_id').val(),
			add_movie_name = $('#add_movie_name').val(),
			add_movie_stories = $('#add_movie_stories').val(),
			add_movie_cat = $('#add_movie_cat').val(),
			add_movie_numcopy = $('#add_movie_numcopy').val(),
			add_movie_status = $('#add_movie_status').val(),
			add_movie_barcode = $('#add_movie_barcode').val();

		if (add_movie_id != '' && add_movie_name != '' && add_movie_stories != '' && add_movie_cat != '' && add_movie_numcopy != '' && add_movie_status != '') {
			MovieManagerService.addMovie(add_movie_id, add_movie_name, add_movie_stories, add_movie_cat, add_movie_numcopy, add_movie_status, add_movie_barcode).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll(); // clear noty

				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000, // 3 seconds
		                text : "เพิ่มภาพยนต์สำเร็จ",
		                callback: {
		                	afterClose: function () {
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
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

	$scope.editMovie = function (mov_id) {
		MovieManagerService.getMovieEdit(mov_id).then(function (result) {
			if (result.data.status == 200) {
				$scope.movieEdit = result.data.movie[0];
				$scope.cat = result.data.cate;
				
				setTimeout(function() {
					$('#edit_movie_cat').val($scope.movieEdit.cate_id);
				}, 100);
			}
		});
	}
	
	$scope.updateMovie = function (mov_id) {
		var edit_movie_name = $('#edit_movie_name').val(),
			edit_movie_stories = $('#edit_movie_stories').val(),
			edit_movie_cat = $('#edit_movie_cat').val(),
			edit_movie_numcopy = $('#edit_movie_numcopy').val(),
			edit_movie_status = $('#edit_movie_status').val(),
			edit_movie_barcode = $('#edit_movie_barcode').val();

		if (edit_movie_name != '' && edit_movie_stories != '' && edit_movie_cat != '' && edit_movie_numcopy != '' && edit_movie_status != '') {
			MovieManagerService.updateMovie(mov_id, edit_movie_name, edit_movie_stories, edit_movie_cat, edit_movie_numcopy, edit_movie_status, edit_movie_barcode).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll(); // clear noty

				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000, // 3 seconds
		                text : "อัพเดทภาพยนต์สำเร็จ",
		                callback: {
		                	afterClose: function () {
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
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
}])
.service('MovieManagerService', ['$http', '$q',function ($http, $q) {
	this.getAllMovie = function () {
		return $http.get('restaurant-api/movie_system/api_get_all_movie.php', {
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

	this.search = function (search) {
		return $http.post('restaurant-api/movie_system/api_search_movie.php', {
			'search': search
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