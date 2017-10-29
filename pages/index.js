'use strict';

angular.module('RESTAURANT.index', ['ngRoute'])

.controller('IndexController', ['$rootScope', '$scope', '$location', '$timeout', '$cookies', '$window', 'DrinkPOService', 'DrinkPOReceiptService', 'DrinkService', function($rootScope, $scope, $location, $timeout, $cookies, $window, DrinkPOService, DrinkPOReceiptService, DrinkService) {
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.isLoggedIn = $rootScope.isLoggedIn;
	$scope.privacyAccess = $rootScope.privacyAccess;
    $scope.empID = $rootScope.empID;
    $scope.empPosID = $rootScope.empPosID;

    $scope.newDrinkPO = 0;
    $scope.newDrinkPOReceipt = 0;
    $scope.drinkNoti = 0;

	$scope.logout = function () {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'คุณต้องออกจากระบบใช่หรือไม่?',
            buttons : [
            {
                addClass : 'btn btn-danger',//คลาสของbootstrap
                text : 'ยกเลิก',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();
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
				        text : 'กำลังออกจากระบบ...',
				        timeout: 1000,
				        callback: {
				        	afterClose: function () {
				        		$cookies.remove('isLoggedIn');
				        		$cookies.remove('privacyAccess');
                                $cookies.remove('empID');
                                $cookies.remove('empPosID');
				        		$rootScope.resetAll();
				        		$scope.isLoggedIn = false;
				        		$scope.privacyAccess = '';
                                $scope.empID = '';
                                $scope.empPosID = '';

				        		$window.location.href = 'restaurant-web/#/backend/admin_login'; // หน้าแรกหลังจาก Logout
				        	}
				        }
				    });

                }
            }]
         });
	};

	var hideLoginShowMenu = $rootScope.$on('IndexController.hideLoginShowMenu', function (event, data) {
        $timeout(function () {
            $scope.isLoggedIn = $rootScope.isLoggedIn; // ดึงค่าการ login จาก root
            $scope.empID = $rootScope.empID;
            $scope.empPosID = $rootScope.empPosID;
            if ($scope.privacyAccess == '') {
            	$scope.privacyAccess = $rootScope.privacyAccess; // ดึงค่าการ สิทธิ์ จาก root
            }
        });
    });

    var notiPO = $rootScope.$on('IndexController.notiPO', function (event, data) {
        $timeout(function () {
            if ($rootScope.privacyAccess.indexOf('admin_drink_po') != -1) {
                DrinkPOService.getAllDrinkPONumber().then(function (result) {
                    if (result.data.status == 200) {
                        $scope.newDrinkPO = result.data.new_drink_po;
                    }
                });
            }
        });
    });

    var notiPOReceipt = $rootScope.$on('IndexController.notiPOReceipt', function (event, data) {
        $timeout(function () {
            if ($rootScope.privacyAccess.indexOf('admin_drink_po_receipt') != -1) {
                DrinkPOReceiptService.getAllDrinkPOReceiptNumber().then(function (result) {
                    if (result.data.status == 200) {
                        $scope.newDrinkPOReceipt = result.data.new_drink_po_receipt;
                    }
                });
            }
        });
    });

    var notiDrink = $rootScope.$on('IndexController.notiDrink', function (event, data) {
        $timeout(function () {
            if ($rootScope.privacyAccess.indexOf('admin_drink') != -1) {
                DrinkService.getDrinkNoti().then(function (result) {
                    if (result.data.status == 200) {
                        $scope.drinkNoti = result.data.drink_noti;
                    }
                });
            }
        });
    });

    $scope.$on('$destroy', function () {
        hideLoginShowMenu();
        notiPO();
        notiPOReceipt();
    });
}]);