'use strict';

angular.module('RESTAURANT.index', ['ngRoute'])

.controller('IndexController', ['$rootScope', '$scope', '$location', '$timeout', '$cookies', '$window', function($rootScope, $scope, $location, $timeout, $cookies, $window) {
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.isLoggedIn = $rootScope.isLoggedIn;

	$scope.logout = function () {
		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังออกจากระบบ...',
	        timeout: 3000,
	        callback: {
	        	afterClose: function () {
	        		$cookies.remove('isLoggedIn');
	        		$cookies.remove('privacyAccess');
	        		$rootScope.resetAll();

	        		$window.location.href = '#!/backend/admin_login'; // หน้าแรกหลังจาก Logout
	        	}
	        }
	    });
	};

	var hideLoginShowLogout = $rootScope.$on('IndexController.hideLoginShowLogout', function (event, data) {
        $timeout(function () {
            $scope.isLoggedIn = $rootScope.isLoggedIn;
        });
    });

    $scope.$on('$destroy', function () {
        hideLoginShowLogout();
    });
}]);