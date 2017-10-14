'use strict';

angular.module('RESTAURANT.admin_login', ['ngRoute'])

.controller('LoginController', ['$rootScope', '$scope', '$window', '$cookies', 'UserLogin', function($rootScope, $scope, $window, $cookies, UserLogin) {
	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowLogout');

	// ถ้า login อยู่แล้ว
	if ($rootScope.isLoggedIn != false) {
		// ไปหน้าแรก
		$window.location.href = $rootScope.adminFirstPage;
	}

	$scope.loginClicked = function () {
		var username = $.trim($('#username').val());
		var password = $.trim($('#password').val());
		if (username == '' || password == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
            });
		} 
		else {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'alert',
                layout : 'top',
                modal : true,
                text : 'กำลังเข้าสู่ระบบ...',
                closeWith: [], // บังคับไม่ให้กดปิด
                callback: {
                	afterShow: function () {
                		UserLogin.login(username, password).then(function (result) {

                			if (result.data.status == 404) {
                				$.noty.clearQueue(); $.noty.closeAll();
								noty({
					                type : 'warning',
					                layout : 'top',
					                modal : true,
					                timeout: 3000,
					                text : 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
					            });
                			}
                			else if (result.data.status == 200) {
                				$.noty.clearQueue(); $.noty.closeAll(); // เคลียร์ noty ทั้งหมด

                				// ทำให้รู้ว่า login แล้ว
                				$rootScope.isLoggedIn = true;

                				// เก็บสิทธิ์ไว้ที่ตัวแปรเพื่อเอาไปใช้ในทุกๆหน้า
                				$rootScope.privacyAccess = result.data.roles;

                				$cookies.put('isLoggedIn', true);
                				$cookies.put('privacyAccess', $rootScope.privacyAccess);

								noty({
					                type : 'success',
					                layout : 'top',
					                modal : true,
					                timeout: 3000,
					                text : 'เข้าสู่ระบบสำเร็จ...',
					                callback: {
					                	afterClose: function () {
					                		$.noty.clearQueue(); $.noty.closeAll();

					                		// ควรพา user เข้าไปสู่หน้าที่เขาสามารถทำงานต่อได้หลังจากเข้าสู่ระบบ
					                		$window.location.href = $rootScope.adminFirstPage;
					                	}
					                }
					            });
                			}
						});
                	}
                }
            });
		}
	};
}])
.service('UserLogin', ['$http', '$q',function ($http, $q) {
	this.login = function (username, password) {
		$http.defaults.headers.common = { 'Content-type' : 'application/json'};

		return $http.post('http://localhost/restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};
}]);