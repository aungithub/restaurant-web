'use strict';

angular.module('RESTAURANT.user_login', ['ngRoute'])

.controller('UserLoginController', ['$rootScope', '$scope', '$window', '$cookies', 'UserLogin', function($rootScope, $scope, $window, $cookies, UserLogin) {
	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');

	

	// ถ้า login อยู่แล้ว
	
	if ($rootScope.isFrontendLoggedIn == true) {
		// ไปหน้าแรก
		$window.location.href = $rootScope.userFirstPage;
		console.log($rootScope.isFrontendLoggedIn)
	}

	

	//cm function ที่จะเข้ามาทำ หลังจากปุ่ม login ถูก click หรือ enter 
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
                		//cm ส่ง username และ password ไป login
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
                				$rootScope.isFrontendLoggedIn = true;

                				// เก็บสิทธิ์ไว้ที่ตัวแปรเพื่อเอาไปใช้ในทุกๆหน้า
                				$rootScope.privacyAccess = result.data.roles;
                				
                				//cm ทำการเก็บ ข้อมูลต่างๆลง cookies บน browser
                				$cookies.put('isFrontendLoggedIn', true);
                				$cookies.put('privacyAccess', $rootScope.privacyAccess);
                				$cookies.put('empID', result.data.emp_id);
                				$cookies.put('empPosID', result.data.emp_pos_id);

								noty({
					                type : 'success',
					                layout : 'top',
					                modal : true,
					                timeout: 3000,
					                text : 'เข้าสู่ระบบสำเร็จ...',
					                callback: {
					                	afterClose: function () {
					                		$.noty.clearQueue(); $.noty.closeAll();

					                		//cm redirect พา user ไปหน้าหลังจาก login 
					                		$window.location.href = $rootScope.userFirstPage;
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
.service('UserLogin', ['$http', '$q', function ($http, $q) {
	this.login = function (username, password) {

		$http.defaults.headers.common = { 'Content-type' : 'application/json'};

		return $http.post('restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};


}]);