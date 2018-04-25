'use strict';

angular.module('RESTAURANT.user_report_expense', ['ngRoute'])

.controller('ReportexpenseController', ['$rootScope', '$scope', '$location', 'ReportexpenseService', '$window', function($rootScope, $scope, $location, ReportexpenseService, $window) {
	var route = 'user_report_expense';
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
								ReportexpenseService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.order;

									$scope.calculateTotalPrice();
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
				$scope.totalPrice = $scope.totalPrice + parseInt($scope.reportOrderObject[i].dpd_total_price);
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
					ReportexpenseService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.order;

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
		
		var month =  $("#month").val();

		   
				ReportexpenseService.getAllOrderFoodReport(month).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;

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
.service('ReportexpenseService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report_expense.php', {
        }, function(data, status) {
            return data;
        });
	};

	
	this.getAllOrderFoodReport = function (month) {
		return $http.post('restaurant-api/api_get_order_time_report_expense.php', {
			'month' : month, 
        	 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);