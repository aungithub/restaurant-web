'use strict';

angular.module('RESTAURANT.user_home', ['ngRoute'])

.controller('UserHomeController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	var route = 'user_home';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	//$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isFrontendLoggedIn == false) {
		$location.path('/frontend/user_login');
	}

	$('#home').height($('html').height());
}]);