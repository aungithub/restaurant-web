'use strict';

angular.module('RESTAURANT.admin_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_login', {
		templateUrl: 'pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false
	});
}])

.controller('LoginController', ['$rootScope', '$scope', '$window', 'UserLogin', function($rootScope, $scope, $window, UserLogin) {
	
	if ($rootScope.isLoggedIn == true) {
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

                				$rootScope.isLoggedIn = true;

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