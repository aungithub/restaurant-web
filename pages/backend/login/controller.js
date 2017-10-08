'use strict';

angular.module('RESTAURANT.admin_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/backend/admin_login', {
		templateUrl: 'pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false
	});
}])

.controller('LoginController', ['$scope', 'UserLogin', function($scope, UserLogin) {
	$scope.loginClicked = function () {
		var username = $.trim($('#username').val());
		var password = $.trim($('#password').val());
		if (username == '' || password == '') {
			noty({
                type : 'alert',
                layout : 'top',
                modal : true,
                timeout: 3,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน'
            });
		} else {
			noty({
                type : 'alert',
                layout : 'top',
                modal : true,
                text : 'กำลังเข้าสู่ระบบ...',
                closeWith: [], // บังคับไม่ให้กดปิด
                callback: {
                	afterShow: function () {
                		UserLogin.login(username, password).then(function (result) {

							$.noty.clearQueue(); $.noty.closeAll(); // เคลียร์ noty ทั้งหมด

							noty({
				                type : 'success',
				                layout : 'top',
				                modal : true,
				                timeout: 3,
				                text : 'เข้าสู่ระบบสำเร็จ...',
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();

				                		// ควรพา user เข้าไปสู่หน้าที่เขาสามารถทำงานต่อได้หลังจากเข้าสู่ระบบ
				                	}
				                }
				            });
						});
                	}
                }
            });
		}
	};
}])
.service('UserLogin', ['$http', '$q',function ($http, $q) {
	this.login = function (username, password) {
		return $http.post('http://localhost/restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};
}]);