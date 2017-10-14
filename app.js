'use strict';

// Declare app level module which depends on views, and components
angular.module('RESTAURANT', [
	'ngCookies',
	'ngRoute',
	'RESTAURANT.index',
	'RESTAURANT.admin_login',
	'RESTAURANT.admin_home',
	'RESTAURANT.admin_unit',
	'RESTAURANT.admin_employee',
	'RESTAURANT.admin_role',
	'RESTAURANT.admin_food',
	'RESTAURANT.admin_drink',
	'RESTAURANT.admin_unitdata',
	'RESTAURANT.admin_position',
	'RESTAURANT.admin_table',
	'RESTAURANT.admin_kind',
	'RESTAURANT.admin_promotion'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.when('/backend/admin_login', {
		templateUrl: 'pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false
	});

	$routeProvider.when('/backend/admin_position', {
		templateUrl: 'pages/backend/position/position.html',
		controller: 'PositionController',
		cache: false
	});

	$routeProvider.when('/backend/admin_drink', {
		templateUrl: 'pages/backend/drink/drink.html',
		controller: 'DrinkController',
		cache: false
	});

	$routeProvider.when('/backend/admin_employee', {
		templateUrl: 'pages/backend/employee/employee.html',
		controller: 'EmployeeController',
		cache: false
	});

	$routeProvider.when('/backend/admin_food', {
		templateUrl: 'pages/backend/food/food.html',
		controller: 'FoodController',
		cache: false
	});

	$routeProvider.when('/backend/admin_home', {
		templateUrl: 'pages/backend/home/home.html',
		controller: 'HomeController',
		cache: false
	});

	$routeProvider.when('/backend/admin_kind', {
		templateUrl: 'pages/backend/kind/kind.html',
		controller: 'KindController',
		cache: false
	});

	$routeProvider.when('/backend/admin_promotion', {
		templateUrl: 'pages/backend/promotion/promotion.html',
		controller: 'PromotionController',
		cache: false
	});

	$routeProvider.when('/backend/admin_role', {
		templateUrl: 'pages/backend/role/role.html',
		controller: 'RoleController',
		cache: false
	});

	$routeProvider.when('/backend/admin_table', {
		templateUrl: 'pages/backend/table/table.html',
		controller: 'TableController',
		cache: false
	});

	$routeProvider.when('/backend/admin_unit', {
		templateUrl: 'pages/backend/unit/unit.html',
		controller: 'UnitController',
		cache: false
	});

	$routeProvider.when('/backend/admin_unitdata', {
		templateUrl: 'pages/backend/unitdata/unitdata.html',
		controller: 'UnitdataController',
		cache: false
	});

	//$routeProvider.otherwise({redirectTo: '/backend/admin_login'});
}])
.run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
	$rootScope.isLoggedIn = false;
	$rootScope.privacyAccess = '';

	$rootScope.loadCookies = function () {
		// เช็คว่ามี cookie isLoggedIn เก็บอยู่มั้ย (เอาไว้บอกว่าเคย login แล้ว)
		if ($cookies.get('isLoggedIn') != 'undefined' && $cookies.get('isLoggedIn') != undefined) {
	    	$rootScope.isLoggedIn = $cookies.get('isLoggedIn');
	    }

	    // เช็คว่ามี cookie privacyAccess เก็บอยู่มั้ย (สิทธิ์ต่างๆ)
	    if ($cookies.get('privacyAccess') != 'undefined' && $cookies.get('privacyAccess') != undefined) {
	    	$rootScope.privacyAccess = $cookies.get('privacyAccess');
	    }
	};

	// ล้างข้อมูลทั้งหมด
	$rootScope.resetAll = function () {
		$rootScope.isLoggedIn = false;
		$rootScope.privacyAccess = '';
	};

	$rootScope.property = true;
	$rootScope.adminFirstPage = '#!/backend/admin_unit'; // หน้าแรกหลังจาก Login
}]);
