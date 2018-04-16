'use strict';

angular.module('RESTAURANT.user_report_year', ['ngRoute'])

.controller('ReportyearController', ['$rootScope', '$scope', '$location', 'ReportyearService', function($rootScope, $scope, $location, ReportyearService) {
	var route = 'user_report_year';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReportyearService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.orderlist;

									ReportyearService.getAllOrderDrink().then(function (result) {
										$scope.reportOrderDrinkObject = result.data.order;
										
										
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
	});

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReportyearService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.orderlist;

							//$scope.apply(function(){});
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
	}

	$scope.loadAddReportForm = function() {
		
		var  year =  $("#year").val();

		   
				ReportyearService.getAllOrderFoodReport(year).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;
						$scope.reportOrderDrinkObject = result.data.order_drink;
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

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		//$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
		
	};


	// END Delete Unit
}])
.service('ReportyearService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report_year.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink_report_year.php', {
        }, function(data, status) {
            return data;
        });
	};
	
	this.getAllOrderFoodReport = function (year) {
		return $http.post('restaurant-api/api_get_order_time_report_year.php', {
			'year' : year, 
        	 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);