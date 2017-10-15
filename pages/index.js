'use strict';

angular.module('RESTAURANT.index', ['ngRoute'])

.controller('IndexController', ['$rootScope', '$scope', '$location', '$timeout', '$cookies', '$window', function($rootScope, $scope, $location, $timeout, $cookies, $window) {
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.isLoggedIn = $rootScope.isLoggedIn;
	$scope.privacyAccess = $rootScope.privacyAccess;

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
				        		$rootScope.resetAll();
				        		$scope.isLoggedIn = false;
				        		$scope.privacyAccess = '';

				        		$window.location.href = '#!/backend/admin_login'; // หน้าแรกหลังจาก Logout
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
            if ($scope.privacyAccess == '') {
            	$scope.privacyAccess = $rootScope.privacyAccess; // ดึงค่าการ สิทธิ์ จาก root
            }
        });
    });

    $scope.$on('$destroy', function () {
        hideLoginShowMenu();
    });
}]);