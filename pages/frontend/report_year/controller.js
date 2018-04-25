'use strict';

angular.module('RESTAURANT.user_report_year', ['ngRoute'])

.controller('ReportyearController', ['$rootScope', '$scope', '$location', 'ReportyearService', '$window', function($rootScope, $scope, $location, ReportyearService, $window) {
	var route = 'user_report_year';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];
	 $scope.totalPrice = 0;

	 $('#report-list').css('display', 'none');

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

									$scope.calculateTotalPrice();

									ReportyearService.getAllOrderDrink().then(function (result) {
										$scope.reportOrderDrinkObject = result.data.order;
										
										$scope.calculateTotalPrice();
										
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

	$scope.calculateTotalPrice = function () {
		$scope.totalPrice = 0;
		if ($scope.reportOrderObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderObject[i].price * $scope.reportOrderObject[i].number);
			}
		}
		if ($scope.reportOrderDrinkObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderDrinkObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderDrinkObject[i].price * $scope.reportOrderDrinkObject[i].number);
			}
		}
	}

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

							$scope.calculateTotalPrice();

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

						$scope.calculateTotalPrice();

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

	$scope.printReport = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


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