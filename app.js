'use strict';

// Declare app level module which depends on views, and components
//cm import โมดูลทุกโมดูลเข้ามาใน angular app
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
	'RESTAURANT.admin_unitdetail',
	'RESTAURANT.admin_position',
	'RESTAURANT.admin_table',
	'RESTAURANT.admin_kind',
	'RESTAURANT.admin_promotion',
	'RESTAURANT.admin_vendor',
	'RESTAURANT.admin_drink_po',
	'RESTAURANT.admin_drink_po_print',
	'RESTAURANT.admin_drink_po_receipt',
	'RESTAURANT.admin_account',
	'RESTAURANT.user_login',
	'RESTAURANT.user_home',
	'RESTAURANT.user_menu',
	'RESTAURANT.user_reserve',
	'RESTAURANT.user_payment'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	//cm config ว่าถ้าเข้า path นี้ๆ จะใช้ html อันไหน และ controller ไหนในการทำงาน
	$routeProvider.when('/backend/admin_login', {
		templateUrl: 'restaurant-web/pages/backend/login/login.html',
		controller: 'LoginController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/backend/admin_position', {
		templateUrl: 'restaurant-web/pages/backend/position/position.html',
		controller: 'PositionController',
		cache: false
	});

	$routeProvider.when('/backend/admin_drink', {
		templateUrl: 'restaurant-web/pages/backend/drink/drink.html',
		controller: 'DrinkController',
		cache: false
	});

	$routeProvider.when('/backend/admin_employee', {
		templateUrl: 'restaurant-web/pages/backend/employee/employee.html',
		controller: 'EmployeeController',
		cache: false
	});

	$routeProvider.when('/backend/admin_food', {
		templateUrl: 'restaurant-web/pages/backend/food/food.html',
		controller: 'FoodController',
		cache: false
	});

	$routeProvider.when('/backend/admin_home', {
		templateUrl: 'restaurant-web/pages/backend/home/home.html',
		controller: 'HomeController',
		cache: false
	});

	$routeProvider.when('/backend/admin_kind', {
		templateUrl: 'restaurant-web/pages/backend/kind/kind.html',
		controller: 'KindController',
		cache: false
	});

	$routeProvider.when('/backend/admin_promotion', {
		templateUrl: 'restaurant-web/pages/backend/promotion/promotion.html',
		controller: 'PromotionController',
		cache: false
	});

	$routeProvider.when('/backend/admin_role', {
		templateUrl: 'restaurant-web/pages/backend/role/role.html',
		controller: 'RoleController',
		cache: false
	});

	$routeProvider.when('/backend/admin_table', {
		templateUrl: 'restaurant-web/pages/backend/table/table.html',
		controller: 'TableController',
		cache: false
	});

	$routeProvider.when('/backend/admin_unit', {
		templateUrl: 'restaurant-web/pages/backend/unit/unit.html',
		controller: 'UnitController',
		cache: false
	});

	$routeProvider.when('/backend/admin_unitdetail', {
		templateUrl: 'restaurant-web/pages/backend/unitdetail/unitdetail.html',
		controller: 'UnitdetailController',
		cache: false
	});

	$routeProvider.when('/backend/admin_vendor', {
		templateUrl: 'restaurant-web/pages/backend/vendor/vendor.html',
		controller: 'VendorController',
		cache: false
	});

	$routeProvider.when('/backend/admin_drink_po', {
		templateUrl: 'restaurant-web/pages/backend/drink_po/drink_po.html',
		controller: 'DrinkPOController',
		cache: false
	});

	$routeProvider.when('/backend/admin_drink_po_receipt', {
		templateUrl: 'restaurant-web/pages/backend/drink_po_receipt/drink_po_receipt.html',
		controller: 'DrinkPOReceiptController',
		cache: false
	});

	$routeProvider.when('/backend/admin_drink_po_print', {
		templateUrl: 'restaurant-web/pages/backend/drink_po_print/drink_po_print.html',
		controller: 'DrinkPOPrintController',
		cache: false
	});

	$routeProvider.when('/backend/admin_account', {
		templateUrl: 'restaurant-web/pages/backend/account/account.html',
		controller: 'AccountController',
		cache: false
	});

	$routeProvider.when('/frontend/user_login', {
		templateUrl: 'restaurant-web/pages/frontend/login/login.html',
		controller: 'UserLoginController',
		cache: false //cm ไม่เก็บ cache
	});
	$routeProvider.when('/frontend/user_home', {
		templateUrl: 'restaurant-web/pages/frontend/home/home.html',
		controller: 'UserHomeController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_menu', {
		templateUrl: 'restaurant-web/pages/frontend/menu/menu.html',
		controller: 'MenuController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_reserve', {
		templateUrl: 'restaurant-web/pages/frontend/reserve/reserve.html',
		controller: 'ReserveController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_payment', {
		templateUrl: 'restaurant-web/pages/frontend/payment/payment.html',
		controller: 'PaymentController',
		cache: false //cm ไม่เก็บ cache
	});

	//cm เพื่อลบเครื่องหมาย ! ออกไป เพราะพบปัญหา angular ต้องใส่ #! ใน url
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: true
	});
	//$routeProvider.otherwise({redirectTo: '/backend/admin_login'});
}])
.run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {

	//cm กำหนดตัวแปร rootScope เพื่อจะนำไปใช้ได้ทั้งระบบ
	$rootScope.isLoggedIn = false; //cm ตัวแปรเพื่อบอกว่า login หรือยัง
	$rootScope.privacyAccess = ''; //cm ตัวแปรเพื่อเก็บสิทธิ์การเข้าถึงหน้าเว็บ
	$rootScope.empID = ''; //cm ตัวแปรเพื่อเก็บ emp id หลัง login
	$rootScope.empPosID = ''; //cm ตัวแปรเพื่อเก็บรหัสตำแหน่งงาน

	$rootScope.isFrontendLoggedIn = false;

	//cm ลบ cache
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if (typeof(fromState.templateUrl) !== 'undefined'){
			$templateCache.remove(fromState.templateUrl);
		}
	});

	//cm function เพื่อจะเอาไว้ใช้ให้มันดึง cookie ที่เก็บใน browser หลังการ login
	$rootScope.loadCookies = function () {
		//cm เช็คว่ามี cookie isLoggedIn เก็บอยู่มั้ย (เอาไว้บอกว่าเคย login แล้ว)
		if ($cookies.get('isLoggedIn') != 'undefined' && $cookies.get('isLoggedIn') != undefined) {
	    	$rootScope.isLoggedIn = $cookies.get('isLoggedIn');
	    }

	    //cm เช็คว่ามี cookie isFrontendLoggedIn เก็บอยู่มั้ย (เอาไว้บอกว่าเคย login แล้ว)
		if ($cookies.get('isFrontendLoggedIn') != 'undefined' && $cookies.get('isFrontendLoggedIn') != undefined) {
	    	$rootScope.isFrontendLoggedIn = $cookies.get('isFrontendLoggedIn');
	    }

	    //cm เช็คว่ามี cookie privacyAccess เก็บอยู่มั้ย (สิทธิ์ต่างๆ)
	    if ($cookies.get('privacyAccess') != 'undefined' && $cookies.get('privacyAccess') != undefined) {
	    	$rootScope.privacyAccess = $cookies.get('privacyAccess');
	    }

	    //cm เช็คว่ามี cookie empID เก็บอยู่มั้ย (เอาไว้ใช้ส่งไป api)
		if ($cookies.get('empID') != 'undefined' && $cookies.get('empID') != undefined) {
	    	$rootScope.empID = $cookies.get('empID');
	    }

	    //cm เช็คว่ามี cookie empPosID เก็บอยู่มั้ย (เอาไว้ใช้ส่งไป api)
		if ($cookies.get('empPosID') != 'undefined' && $cookies.get('empPosID') != undefined) {
	    	$rootScope.empPosID = $cookies.get('empPosID');
	    }
	};

	//cm function ล้างข้อมูลตัวแปร rootScope ทั้งหมด
	$rootScope.resetAll = function () {
		$rootScope.isLoggedIn = false;
		$rootScope.privacyAccess = '';
		$rootScope.empID = '';
		$rootScope.empPosID = '';
	};

	//cm function ล้างข้อมูลตัวแปร rootScope ทั้งหมด
	$rootScope.resetAll = function () {
		$rootScope.isFrontendLoggedIn = false;
	};

	//cm function เพื่อให้ระบบทำการดึงการแจ้งเตือนต่างๆ
	$rootScope.getAllNotification = function () {
		//cm เพื่อให้เรียกใช้ function ใน IndexController
		$rootScope.$emit('IndexController.notiPO');
		$rootScope.$emit('IndexController.notiPOReceipt');
		$rootScope.$emit('IndexController.notiDrink');
	};

	$rootScope.property = true;
	$rootScope.adminFirstPage = 'restaurant-web/#/backend/admin_home'; //cm หน้าแรกหลังจาก Login
	$rootScope.userFirstPage = 'restaurant-web/#/frontend/user_home'; //cm หน้าแรกหลังจาก Login
}])
.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value);
      });
    }
  };
});
