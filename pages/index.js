'use strict';

//cm กำหนดว่า โมดูลนี้ชื่อ index
angular.module('RESTAURANT.index', ['ngRoute'])

//cm กำหนดชื่อ Controller และ import ตัวแปรที่จะใช้เข้ามา
.controller('IndexController', ['$rootScope', '$scope', '$location', '$timeout', '$cookies', '$window', 'DrinkPOService', 'DrinkPOReceiptService', 'DrinkService', function($rootScope, $scope, $location, $timeout, $cookies, $window, DrinkPOService, DrinkPOReceiptService, DrinkService) {
	//cm โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	$rootScope.loadCookies();
    //cm ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย

    $scope.isBackend = false; // เอาไว้เช็คว่าเป็น backend หรือเปล่า

    if ($location.url().indexOf('backend') > -1) {
        $scope.isBackend = true;
    }

	$scope.isLoggedIn = $rootScope.isLoggedIn;
	$scope.privacyAccess = $rootScope.privacyAccess;
    $scope.empID = $rootScope.empID;
    $scope.empPosID = $rootScope.empPosID;

    $scope.isFrontendLoggedIn = $rootScope.isFrontendLoggedIn;

    $scope.newDrinkPO = 0;
    $scope.newDrinkPOReceipt = 0;
    $scope.drinkNoti = 0;

    //cm function ใช้สำหรับออกจากระบบ
	$scope.backendLogout = function () {
        //cm noty ออกมาให้ confirm
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
                                //cm ทำการลบ cookies ออกจาก browser และล้างข้อมูลตัวแปรทั้งหมด
				        		$cookies.remove('isLoggedIn');
				        		$cookies.remove('privacyAccess');
                                $cookies.remove('empID');
                                $cookies.remove('empPosID');
				        		$rootScope.resetAll(); //cm เรียกใช้ fuction ใน app.js เพื่อล้างข้อมูลทั้งหมด
				        		$scope.isLoggedIn = false;
				        		$scope.privacyAccess = '';
                                $scope.empID = '';
                                $scope.empPosID = '';

                                //cm ดีดกลับไปหน้า login
				        		$window.location.href = 'restaurant-web/#/backend/admin_login'; // หน้าแรกหลังจาก Logout
				        	}
				        }
				    });

                }
            }]
         });
	};

    //cm function ใช้สำหรับออกจากระบบ
    $scope.frontendLogout = function () {
        //cm noty ออกมาให้ confirm
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
                                //cm ทำการลบ cookies ออกจาก browser และล้างข้อมูลตัวแปรทั้งหมด
                                $cookies.remove('isFrontendLoggedIn');
                                $rootScope.resetAll(); //cm เรียกใช้ fuction ใน app.js เพื่อล้างข้อมูลทั้งหมด
                                $scope.isFrontendLoggedIn = false;

                                //cm ดีดกลับไปหน้า login
                                $window.location.href = 'restaurant-web/#/frontend/user_login'; // หน้าแรกหลังจาก Logout
                            }
                        }
                    });

                }
            }]
         });
    };

    //cm function ใช้สำหรับซ่อนเมนู login และแสดงเมนูต่างๆ
	var hideLoginShowMenu = $rootScope.$on('IndexController.hideLoginShowMenu', function (event, data) {
        $timeout(function () {
            $scope.isLoggedIn = $rootScope.isLoggedIn; // ดึงค่าการ login จาก root
            $scope.isFrontendLoggedIn = $rootScope.isFrontendLoggedIn; // ดึงค่าการ login จาก root
            $scope.empID = $rootScope.empID;
            $scope.empPosID = $rootScope.empPosID;
            if ($scope.privacyAccess == '') {
            	$scope.privacyAccess = $rootScope.privacyAccess; // ดึงค่าการ สิทธิ์ จาก root
            }
        });
    });

    //cm function ใช้สำหรับดึงการแจ้งเตือนหากมีการสั่งซื้อใหม่ๆ
    var notiPO = $rootScope.$on('IndexController.notiPO', function (event, data) {
        $timeout(function () {
            //cm เช็คสิทธิ์ว่ามีสิทธิ์ใช้งานเมนูการสั่งซื้อไหม
            if ($rootScope.privacyAccess.indexOf('admin_drink_po,') != -1) {
                DrinkPOService.getAllDrinkPONumber().then(function (result) {
                    if (result.data.status == 200) {
                        $scope.newDrinkPO = result.data.new_drink_po;
                    }
                });
            }
        });
    });

    //cm function ใช้สำหรับดึงการแจ้งเตือนหากมีการอนุมัติสั่งซื้อใหม่ๆ
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

    //cm function ใช้สำหรับดึงการแจ้งเตือนหากมีเครื่องดื่มไหนมีจำนวนน้อยกว่า 5
    var notiDrink = $rootScope.$on('IndexController.notiDrink', function (event, data) {
        $timeout(function () {
            if ($rootScope.privacyAccess.indexOf('admin_drink,') != -1) {
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