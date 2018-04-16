'use strict';

angular.module('RESTAURANT.user_report_expense', ['ngRoute'])

.controller('ReportexpenseController', ['$rootScope', '$scope', '$location', 'ReportexpenseService', function($rootScope, $scope, $location, ReportexpenseService) {
	var route = 'user_report_expense';
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
								ReportexpenseService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.order;


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
					ReportexpenseService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.order;

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