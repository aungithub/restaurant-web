'use strict';

angular.module('RESTAURANT.admin_drink_po_print', ['ngRoute'])

.controller('DrinkPOPrintController', ['$rootScope', '$scope', '$location', '$routeParams', 'DrinkPOPrintService', function($rootScope, $scope, $location, $routeParams, DrinkPOPrintService) {
	var route = 'admin_drink_po_print';

	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOObject = null;
	$scope.total_price = 0;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	if (typeof $routeParams.dp_id != 'undefined' && typeof $routeParams.vendor_id != 'undefined') {
		// $routeParams.dp_id
		if (parseInt($routeParams.dp_id) > 0 && parseInt($routeParams.vendor_id) > 0) {
			noty({
		        type : 'alert', // alert, success, warning, error, confirm
		        layout : 'top',
		        modal : true,
		        text : 'กำลังโหลดใบเสนอซื้อ...',
		        callback: {
		        	afterShow: function () {
						DrinkPOPrintService.getDrinkPOPrint($routeParams.dp_id, $routeParams.vendor_id).then(function (result) {
							$.noty.clearQueue(); $.noty.closeAll();

							if (result.data.status == 200) {
								$scope.listDrinkPOObject = result.data.drinkPOs;
								$scope.listDrinkPOObject[0].dp_date

								for (var i = 0; i < $scope.listDrinkPOObject.length; i++) {
									$scope.total_price += $scope.listDrinkPOObject[i].dpd_number * $scope.listDrinkPOObject[i].dpd_unit_price;
								}
							}
							else {
								noty({
					                type : 'warning',
					                layout : 'top',
					                modal : true,
					                timeout: 3000, // 3 seconds
					                text : 'พบข้อผิดพลาด กรุณาลองใหม่ภายหลัง',
					                callback: {
					                	afterClose: function () {
					                		$.noty.clearQueue(); $.noty.closeAll();
					                		$location.path('/backend/admin_login');
					                	}
					                }
					            });
							}
						});
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
                text : 'ไม่พบใบเสนอซื้อ',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                		$location.path('/backend/admin_login');
                	}
                }
            });
		}
	}
	else {
		$location.path('/backend/admin_login');
	}

}])
.service('DrinkPOPrintService', ['$http', '$q',function ($http, $q) {

	this.getDrinkPOPrint = function (dp_id, vendor_id) {
		return $http.post('http://localhost/restaurant-api/api_get_drink_po_print.php', {
            'dp_id' : dp_id,
            'vendor_id' : vendor_id
        }, function(data, status) {
            return data;
        });
	};

}]);