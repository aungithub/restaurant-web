'use strict';
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
	'RESTAURANT.user_payment',
	'RESTAURANT.user_cookmenu',
	'RESTAURANT.user_drinkmenu',
	'RESTAURANT.user_report',
	'RESTAURANT.user_report_time',
	'RESTAURANT.user_report_year',
	'RESTAURANT.user_report_expense',
	'RESTAURANT.user_all_report_print'
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

	$routeProvider.when('/frontend/user_cookmenu', {
		templateUrl: 'restaurant-web/pages/frontend/cookmenu/cookmenu.html',
		controller: 'CookmenuController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_drinkmenu', {
		templateUrl: 'restaurant-web/pages/frontend/drinkmenu/drinkmenu.html',
		controller: 'DrinkmenuController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_report', {
		templateUrl: 'restaurant-web/pages/frontend/report/report.html',
		controller: 'ReportController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_report_time', {
		templateUrl: 'restaurant-web/pages/frontend/report_time/report_time.html',
		controller: 'ReporttimeController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_report_year', {
		templateUrl: 'restaurant-web/pages/frontend/report_year/report_year.html',
		controller: 'ReportyearController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_report_expense', {
		templateUrl: 'restaurant-web/pages/frontend/report_expense/report_expense.html',
		controller: 'ReportexpenseController',
		cache: false //cm ไม่เก็บ cache
	});

	$routeProvider.when('/frontend/user_all_report_print', {
		templateUrl: 'restaurant-web/pages/frontend/all_report_print/all_report_print.html',
		controller: 'AllReportPrintController',
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
	$rootScope.reportHtml = '';

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
	    	$rootScope.isLoggedIn = $cookies.get('isLoggedIn') === 'true';
	    }

	    //cm เช็คว่ามี cookie isFrontendLoggedIn เก็บอยู่มั้ย (เอาไว้บอกว่าเคย login แล้ว)
		if ($cookies.get('isFrontendLoggedIn') != 'undefined' && $cookies.get('isFrontendLoggedIn') != undefined) {
	    	$rootScope.isFrontendLoggedIn = $cookies.get('isFrontendLoggedIn') === 'true';
	    	console.log(typeof $rootScope.isFrontendLoggedIn)
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
    //console.log($location.absUrl().split('?')[0])
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
angular.module('RESTAURANT.admin_login', ['ngRoute'])

.controller('LoginController', ['$rootScope', '$scope', '$window', '$cookies', 'UserLogin', function($rootScope, $scope, $window, $cookies, UserLogin) {
	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');

	// ถ้า login อยู่แล้ว
	if ($rootScope.isLoggedIn != false) {
		// ไปหน้าแรก
		$window.location.href = $rootScope.adminFirstPage;
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
                				$rootScope.isLoggedIn = true;

                				// เก็บสิทธิ์ไว้ที่ตัวแปรเพื่อเอาไปใช้ในทุกๆหน้า
                				$rootScope.privacyAccess = result.data.roles;
                				
                				//cm ทำการเก็บ ข้อมูลต่างๆลง cookies บน browser
                				$cookies.put('isLoggedIn', true);
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

		return $http.post('restaurant-api/api_login.php', {
            'username' : username,
            'password' : password
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_home', ['ngRoute'])

.controller('HomeController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	var route = 'admin_home';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	$('#home').height($('html').height());
}]);
angular.module('RESTAURANT.admin_unit', ['ngRoute'])

.controller('UnitController', ['$rootScope', '$scope', '$location', '$cookies', 'UnitService', function($rootScope, $scope, $location, $cookies, UnitService) {
	var route = 'admin_unit';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listUnitObject = null;
	$scope.selectedId = "";
	$scope.selectedUnitObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route + ',') == -1) {
		$cookies.remove('isLoggedIn');
		$cookies.remove('privacyAccess');
		$cookies.remove('empID');
		$rootScope.resetAll();
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert',
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				UnitService.getAllUnit().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll();

					if (result.data.status == 200) {
						$scope.listUnitObject = result.data.unit;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.loadAddUnitForm = function() {
		$("#add_unit_name").val('');
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					UnitService.getAllUnit().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listUnitObject = result.data.unit;
							$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}
	// Add Unit
	$scope.addUnit = function() {
		var unit_name = $.trim($("#add_unit_name").val()),
			unit_status_id = $("#add_unit_status_id").val(),
			unit_number = 1234;

		if (unit_name != ''&& unit_number != '' && unit_status_id != 999 ) {
			UnitService.addUnit(unit_name, unit_number, unit_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();


		                		// refresh list
		                		noty({
							        type : 'alert',
							        layout : 'top',
							        modal : true,
							        text : 'กำลังโหลด...',
							        callback: {
							        	afterShow: function () {
											UnitService.getAllUnit().then(function (result) {
												$.noty.clearQueue(); $.noty.closeAll();

												if (result.data.status == 200) {
													$scope.listUnitObject = result.data.unit;
													// refresh list
													//$scope.$apply();
													$scope.refreshList();
												}
												else {
													noty({
										                type : 'warning',
										                layout : 'top',
										                modal : true,
										                timeout: 3000,
										                text : result.data.message,
										                callback: {
										                	afterClose: function () {
										                		$.noty.clearQueue(); $.noty.closeAll();
										                	}
										                }
										            });
												}
											});
										}
									}
								});

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editUnit = function(id) {
		$scope.selectedId = id;
		$scope.selectedUnitObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		UnitService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.unit.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedUnitObject = result.data.unit[0];

							if ($scope.selectedUnitObject.unit_status_id == 1) {
								$("#edit_unit_status_id").val(1);
							} else if ($scope.selectedUnitObject.unit_status_id == 2) {
								$("#edit_unit_status_id").val(2);
							} else {
								$("#edit_unit_status_id").val(0);	
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateUnit = function(id) {
		var unit_id = $.trim($("#edit_unit_pk_id").val()),
			unit_name = $.trim($("#edit_unit_name").val()),
			unit_status_id = $("#edit_unit_status_id").val(),
			unit_number = 1234;

		if (unit_id != '' && unit_name != '' && unit_number != '' && unit_status_id != 999) {
			UnitService.updateUnit(unit_id, unit_name, unit_number, unit_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//$scope.$apply();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteUnit = function(id) {
		var unit_id = id,
			unit_status_id = 2;

		if (unit_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลหน่วยหลักนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลหน่วยหลัก...',
                            callback : {
                                afterShow : function () {

                                    UnitService.deleteUnit(unit_id, unit_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//$scope.$apply();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลหน่วยหลักไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('UnitService', ['$http', '$q',function ($http, $q) {

	this.getAllUnit = function () {
		return $http.get('restaurant-api/api_get_unit.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addUnit = function (unit_name, unit_number, unit_status_id) {
		return $http.post('restaurant-api/api_add_unit.php', {
            'name' : unit_name,
            'number' : unit_number,
            'status' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?unit_id=" + id;

		return $http.get('restaurant-api/api_get_unit.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateUnit = function (unit_id, unit_name, unit_number, unit_status_id) {
		return $http.post('restaurant-api/api_update_unit.php', {
            'unit_id' : unit_id,
            'unit_name' : unit_name,
            'unit_number' : unit_number,
            'unit_status_id' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteUnit = function (unit_id, unit_status_id) {
		return $http.post('restaurant-api/api_delete_unit.php', {
            'unit_id' : unit_id,
            'unit_status_id' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_employee', ['ngRoute'])

.controller('EmployeeController', ['$rootScope', '$scope', '$location', 'EmployeeService', function($rootScope, $scope, $location, EmployeeService) {
	var route = 'admin_employee';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listEmployeeObject = null;
	$scope.selectedId = "swdcww";
	$scope.selectedEmployeeObject = null;
	$scope.selectedPositionObject = null;
	$scope.listPositionsObject = null;
	$scope.listTelephone = [];
	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {

        		//cm เข้ามาหน้านี้ จะดึงข้อมูลพนักงานทั้งหมดมาแสดงใน list
				EmployeeService.getAllEmployee().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					//cm ถ้า status 200 คือดึงได้ปกติไม่มี error ใดๆ ฝั่ง API
					if (result.data.status == 200) {
						//cm โยนข้อมูลพนักงานทั้งหมดใส่ในตัวแปร เพื่อเอาไปแสดงที่ employee.html
						$scope.listEmployeeObject = result.data.employees;
					}
					else {
						//cm แสดงข้อความจาก api ถ้า status ไม่ใช่ 200
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	//cm เคลียร์ข้อมูลใน textbox ต่างๆ และจะดึงข้อมูลบางส่วนมาใส่ select option
	$scope.loadAddEmployeeForm = function() {
		$("#add_emp_firstname").val('');
		$("#add_emp_lastname").val('');
		$("#add_emp_card_id").val('');
		$("#add_emp_username").val('');
		$("#add_emp_password").val('');
		$("#add_emp_confirm_password").val('');
		$("#add_emp_position_id").val(999);
		$("#add_emp_tel").val('');
		$("#edit_emp_tel").val('');
		$scope.addEmployeeObject = [];
		$scope.listTelephone = [];

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
	        		//cm ดึงตำแหน่งงานทั้งหมดจาก API และจะเอาไปแสดงใน select option
					EmployeeService.getAllPositions().then(function (result) {
						//cm ถ้า status 200 และ ตำแหน่งงานไม่ได้เป็นข้อมูลว่างๆ
						if (result.data.status == 200 && result.data.positions.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							//cm นำข้อมูลตำแหน่งงานลงตัวแปรเพื่อไปแสดงที่ select option
							$scope.listPositionsObject = result.data.positions;
						}
						else {
							//cm บังคับปิด noty ทั้งหมด เผื่อว่ามันมีค้างอยู่
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.AddTel = function(){
		//cm ค้นหาเบอร์ที่กรอกมีในarray หรือยัง
		var isExist = $scope.listTelephone.indexOf($.trim($("#add_emp_tel").val()));

		if ($.trim($("#add_emp_tel").val()) != '' && $.trim($("#add_emp_tel").val()).length == 10 && isExist == -1) {
			$scope.listTelephone.push($.trim($("#add_emp_tel").val()))

			$("#add_emp_tel").val('')

			noty({
	                type : 'success',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'successful ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}
		else if ($.trim($("#add_emp_tel").val()) == '' || $.trim($("#add_emp_tel").val()).length != 10) {
			noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากรอกเบอร์โทรให้ครบ 10 หลัก ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}
		else if (isExist != -1) {
			noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'เบอร์นี้มีการจัดเก็บแล้ว กรุณาเลือกเบอร์โทรอื่น',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}


		console.log($scope.listTelephone);

	}

	$scope.AddTelEdit = function(){
		//cm ค้นหาเบอร์ที่กรอกมีในarray หรือยัง
		var isExist = $scope.listTelephone.indexOf($.trim($("#edit_emp_tel").val()));

		if ($.trim($("#edit_emp_tel").val()) != '' && $.trim($("#edit_emp_tel").val()).length == 10 && isExist == -1) {
			$scope.listTelephone.push($.trim($("#edit_emp_tel").val()))

			$("#edit_emp_tel").val('')

			noty({
	                type : 'success',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากดแก้ไขข้อมูลพนักงาน เพื่อบันทึกลงฐานข้อมูล',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}
		else if ($.trim($("#edit_emp_tel").val()) == '' || $.trim($("#edit_emp_tel").val()).length != 10) {
			noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากรอกเบอร์โทรให้ครบ 10 หลัก ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}
		else if (isExist != -1) {
			noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'เบอร์นี้มีการจัดเก็บแล้ว กรุณาเลือกเบอร์โทรอื่น',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;

		}


		console.log($scope.listTelephone);

	}

	//cm ลบเบอร์โทร
	$scope.DeleteTel = function(index){
		$scope.listTelephone.splice(index, 1);
	}

	//cm ลบเบอร์โทร
	$scope.DeleteTelEdit = function(index){
		$scope.listTelephone.splice(index, 1);
		noty({
            type : 'success',
            layout : 'top',
            modal : true,
            timeout: 3000,
            text : 'กรุณากดแก้ไขข้อมูลพนักงาน เพื่อบันทึกลงฐานข้อมูล',
            callback: {
            	afterClose: function () {
            		// ปิด noty
            		$.noty.clearQueue(); $.noty.closeAll();

            		// do something
            	}
            }
        });
	}

	//cm function สำหรับดึงข้อมูลพนักงานอีกรอบ และ refresh list เพื่อแสดงข้อมูลพนักงาน ณ ปัจจุบัน
	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
	        		//cm ดึงพนักงานทั้งหมด
					EmployeeService.getAllEmployee().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listEmployeeObject = result.data.employees;
							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	//cm function สำหรับใช้ add พนักงาน
	$scope.addEmployee = function() {
		//cm เตรียมข้อมูลโดยดึงมาจาก textbox และ select option และอื่นๆ
		var emp_firstname = $.trim($("#add_emp_firstname").val()), // ตตัดspacebarทั้งหมด
			emp_lastname = $.trim($("#add_emp_lastname").val()), // ตตัดspacebarทั้งหมด
			emp_card_id = $.trim($("#add_emp_card_id").val()), // ตตัดspacebarทั้งหมด
			emp_username = $.trim($("#add_emp_username").val()), // ตตัดspacebarทั้งหมด
			emp_password = $.trim($("#add_emp_password").val()), // ตตัดspacebarทั้งหมด
			emp_confirm_password = $.trim($("#add_emp_confirm_password").val()), // ตตัดspacebarทั้งหมด
			
			emp_tel = $.trim($("#add_emp_tel").val()), // ตตัดspacebarทั้งหมด
			emp_position_id = $("#add_emp_position_id").val(), 
			emp_status_id = $("#add_emp_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		//cm เช็คว่าถ้าพิมข้อมูลมาครบจะเข้าทำ if
		if (emp_firstname != ''&& emp_lastname != '' && emp_card_id != '' && emp_username != '' && emp_password != ''  && $scope.listTelephone.length > 0 && emp_position_id != '' && emp_status_id != 999 ) {
			//cm ถ้า password ไม่เหมือนกัน confirm password จะแจ้งเตือน
			if (emp_password != emp_confirm_password) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'รหัสผ่านและยืนยันรหัสผ่านไม่เหมือนกัน กรุณาตรวจสอบ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;
			}

			//cm ถ้าความยาวรหัสบัตร ปชช ไม่เท่ากับ 13 หลัก จะแจ้งเตือน
			if (emp_card_id.length != 13) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'รหัสบัตรประชาชนต้องเป็น 13 หลัก',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
	            return;
			}

			//cm ถ้าผ่านมาถึงนี้จะโยนข้อมูลทั้งหมดไปยัง addEmployee ใน EmployeeService เพื่อเอาลง database
			EmployeeService.addEmployee($("#add_emp_firstname").val(), $("#add_emp_lastname").val(),  $("#add_emp_card_id").val(), $("#add_emp_username").val(), $("#add_emp_password").val(), $("#add_emp_tel").val(), $("#add_emp_position_id").val(), emp_status_id,$scope.listTelephone).then(function (result) {
				//cm ถ้า status 200 คือเอาลง database ได้ ไม่มีปัญหา
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else if ($scope.listTelephone.length == 0) {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกเบอร์โทรศัพท์',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Employee

	//cm function สำหรับเมื่อกด edit พนักงาน จะไปดึงข้อมูลมาโชว์ และให้ edit
	$scope.editEmployee = function(id) {
		$scope.selectedId = id; //cm เก็บ emp_id ใส่ตัวแปรไว้ เอาไปใช้ในอนาคต
		$scope.selectedEmployeeObject = null;
		$scope.selectedPositionObject = null;
		$scope.listTelephone = [];
		$('#edit_emp_tel').val('');

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลพนักงาน...',
            callback: {
            	afterShow: function () {
            		//cm ดึงข้อมูลพนักงานโดยกำหนด emp_id
            		EmployeeService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.employees.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							//cm เอาข้อมูลพนักงานคนนี้ใส่ตัวแปร เอาไว้ไปโชว์ใน view
							$scope.selectedEmployeeObject = result.data.employees[0];

							$scope.listTelephone = result.data.employees[0].telephone;

							//cm ดึงข้อมูลตำแหน่งงานมาโชว์ใน select option
							$scope.selectedPositionObject = result.data.position;
							//cm กรอกเบอร์โทรลงในช่อง
							//$('#edit_emp_tel').val($scope.selectedEmployeeObject.emp_tel);

							//cm เช็คสถานะพนักงาน และให้เลือกสถานะในตัวเลือกอัตโนมัติ
							if ($scope.selectedEmployeeObject.emp_status_id == 1) {
								$("#edit_emp_status_id").val(1);
							} else if ($scope.selectedEmployeeObject.emp_status_id == 2) {
								$("#edit_emp_status_id").val(2);
							} else {
								$("#edit_emp_status_id").val(0);	
							}

							//cm timeout 0.1 วิ เพื่อให้ตำแหน่งงานถูกสร้างใน select option ก่อน จากนั้นจะเลือกตำแหน่งงานพนักงานคนนี้อัตโนมัติ
							setTimeout(function() {
								$("#edit_emp_position_id").val($scope.selectedEmployeeObject.emp_pos_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	//cm function สำหรับ update  ข้อมูลพนักงาน โดยกำหนด emp_id คนที่จะ update 
	$scope.updateEmployee = function(id) {
		var emp_id = $.trim($("#edit_emp_pk_id").val()),
			emp_firstname = $.trim($("#edit_emp_firstname").val()),
			emp_lastname = $.trim($("#edit_emp_lastname").val()),
			emp_card_id = $.trim($("#edit_emp_card_id").val()),
			emp_username = $.trim($("#edit_emp_username").val()),
			emp_password = $.trim($("#edit_emp_password").val()),
			emp_confirm_password = $.trim($("#edit_emp_confirm_password").val()),
			
			emp_tel = $.trim($("#edit_emp_tel").val()),
			emp_position_id = $("#edit_emp_position_id").val(),
			emp_status_id = $("#edit_emp_status_id").val();

		if (emp_id != '' && emp_firstname != '' && emp_lastname != '' && emp_card_id != '' && emp_username != ''  && $scope.listTelephone.length > 0 && emp_position_id != '' && emp_status_id != 999 && emp_position_id != null && emp_status_id != null) {
			
			if (emp_password != "" && $("#edit_emp_password").val() != $("#edit_emp_confirm_password").val()) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'รหัสผ่านและยืนยันรหัสผ่านไม่เหมือนกัน กรุณาตรวจสอบ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;
			}

			if (emp_card_id.length != 13) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'รหัสบัตรประชาชนต้องเป็น 13 หลัก',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
	            return;
			}

			if ($scope.listTelephone.length == 0) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากรอกเบอร์โทรศัพท์',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
	            return;
			}

			EmployeeService.updateEmployee(emp_id, $("#edit_emp_firstname").val(), $("#edit_emp_lastname").val(), $("#edit_emp_card_id").val(), $("#edit_emp_username").val(), $("#edit_emp_password").val(), $("#edit_emp_tel").val(), emp_position_id, emp_status_id, $scope.listTelephone).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update employee

	//cm function สำหรับลบพนักงานโดยกำหนด emp_id
	$scope.deleteEmployee = function(id) {
		var emp_id = id,
			emp_status_id = 2;

		if (emp_id != '') {
			//cm แสดง noty เป็นแบบ confirm จะได้มีปุ่มให้กด
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลพนักงานนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลพนักงาน...',
                            callback : {
                                afterShow : function () {

                                	//cm ส่ง emp_id และ สถานะ 2 (ไม่ใช้งาน) ไป function deleteEmployee ใน EmployeeService เพื่อลบพนักงานคนนี้
                                    EmployeeService.deleteEmployee(emp_id, emp_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลพนักงานไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('EmployeeService', ['$http', '$q',function ($http, $q) {

	//cm function สำหรับดึงข้อมูลตำแหน่งงานทั้งหมดจากฐานข้อมูล โดยยิงไปขอที่ API
	this.getAllPositions = function () {
		//cm ใช้ http method get ในการดึง 
		return $http.get('restaurant-api/api_get_position.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับดึงข้อมูลพนักงานทั้งหมด
	this.getAllEmployee = function () {
		//cm ใช้ http method get ในการดึง
		return $http.get('restaurant-api/api_get_employee.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับ add พนักงานที่ user กรอก ลงในฐานข้อมูล
	this.addEmployee = function (emp_firstname, emp_lastname, emp_card_id, emp_username, emp_password, emp_tel, emp_pos_id, emp_status_id,listTelephone) {
		//cm ใช้ http method pos ในการ post ข้อมูลไปยัง api เพื่อจะเอาลง database
		return $http.post('restaurant-api/api_add_employee.php', {
            'firstname' : emp_firstname,
            'lastname' : emp_lastname,
             'idc' : emp_card_id,
            'username' : emp_username,
            'password' : emp_password,
            'tel' : emp_tel,
            'position' : emp_pos_id,
            'status' : emp_status_id,
            'listTelephone' :listTelephone,

        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับใช้ดึงพนักงานโดยการหนดให้ดึงตาม emp_id
	this.getByID = function (id) {
		var conditions = "?emp_id=" + id;

		return $http.get('restaurant-api/api_get_employee.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับใช้ update ข้อมูลพนักงาน
	this.updateEmployee = function (emp_id, emp_firstname, emp_lastname, emp_card_id, emp_username, emp_password, emp_tel, emp_position_id, emp_status_id,listTelephone) {
		return $http.post('restaurant-api/api_update_employee.php', {
            'emp_id' : emp_id,
            'emp_firstname' : emp_firstname,
            'emp_lastname' : emp_lastname,
              'emp_card_id' : emp_card_id,
            'emp_username' : emp_username,
            'emp_password' : emp_password,
          
            'emp_tel' : emp_tel,
            'emp_position_id' : emp_position_id,
            'emp_status_id' : emp_status_id,
            'listTelephone' :listTelephone,
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับใช้ลบพนักงาน โดยส่ง emp_id ไปเป็นเงื่อนไขว่าจะลบคนนี้
	this.deleteEmployee = function (emp_id,  emp_status_id) {
		return $http.post('restaurant-api/api_delete_employee.php', {
            'emp_id' : emp_id,
           
            'emp_status_id' : emp_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_role', ['ngRoute'])

.controller('RoleController', ['$rootScope', '$scope', '$location', 'RoleService', function($rootScope, $scope, $location, RoleService) {
	var route = 'admin_role';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listRoleObject = null;
	$scope.selectedId = "";
	$scope.selectedroleObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				RoleService.getAllrole().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listRoleObject = result.data.roles;
						
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddroleForm = function() {
		$("#add_role_name").val('');
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					RoleService.getAllrole().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listRoleObject = result.data.roles;
							$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	//cm function สำหรับ add role
	$scope.addRole = function() {
		var roles_pages = [],
			role_back_pages_string = "";

		//cm คือการดึง role ที่ถูกติ๊กเลือกทั้งหมด มาเก็บไว้ว่ามีอันไหนถูกเลือกบ้าง
		$('.roles_back input[type="checkbox"]:checked').each(function() {
			if (role_back_pages_string != '') {
				role_back_pages_string += ',';
			}
			//cm push ลงตัวแปรไว้
	    	roles_pages.push($(this).val());
	    	//cm ต่อ string ไว้ ผลลัพธ์เช่น admin_unit,admin_employee
	      	role_back_pages_string += $(this).val();
	    });

		var role_name = $.trim($("#add_role_name").val()), // ตตัดspacebarทั้งหมด
			role_status_id = $("#add_role_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (role_name != '' && role_back_pages_string != '' && role_status_id != 999 ) {
			RoleService.addrole($("#add_role_name").val(), role_back_pages_string, role_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add role

	//cm function แก้ไข role
	$scope.editRole = function(id) {
		$scope.selectedId = id;
		$scope.selectedroleObject = null;
		//cm ให้ role ทั้งหมด ถูกติ๊กออกก่อน (ไม่ติ๊กเลือก)
		$('.role_checkbox').prop('checked', false);

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		RoleService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.roles.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedroleObject = result.data.roles[0];

							if ($scope.selectedroleObject.role_status_id == 1) {
								$("#edit_role_status_id").val(1);
							} else if ($scope.selectedroleObject.role_status_id == 2) {
								$("#edit_role_status_id").val(2);
							} else {
								$("#edit_role_status_id").val(0);	
							}

							//cm ถ้ามี role ว่าให้เข้าหน้าไหนได้บ้าง
							if ($scope.selectedroleObject.role_back != null && $scope.selectedroleObject.role_back.length > 0) {
								//cm split role ออกมา จะได้ข้อมูลเป็น array เช่น admin_unit,admin_employee จะได้ ['admin_unit', 'admin_employee']
								var roles = $scope.selectedroleObject.role_back.split(',');

								//cm วนลูป role ที่ split ออกมา เพือให้มันติ๊กเลือกอัตโนมัติ
								for (var i = 0; i < roles.length; i++) {
									//cm ติ๊กเลือก role ที่ได้ถูก split มา
									$(".role_" + $.trim(roles[i])).prop('checked', true);
								}
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateRole = function(id) {
		var roles_pages = [],
			role_back_pages_string = "";
		$('.edit_roles_back input[type="checkbox"]:checked').each(function() {
			if (role_back_pages_string != '') {
				role_back_pages_string += ',';
			}
	    	roles_pages.push($(this).val());
	      	role_back_pages_string += $(this).val();
	    });

		var role_id = $.trim($("#edit_role_pk_id").val()),
			role_name = $.trim($("#edit_role_name").val()),
			//role_front = $("#edit_role_front").val(),
			role_status_id = $("#edit_role_status_id").val();

		if (role_id != '' && role_name != '' && role_status_id != 999) {
			RoleService.updateRole(role_id, role_name, role_back_pages_string, role_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteRole = function(id) {
		var role_id = id,
			role_status_id = 2;

		if (role_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลสิทธิ์การใช้งานนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลสิทธิ์การใช้งาน...',
                            callback : {
                                afterShow : function () {

                                    RoleService.deleteRole(role_id, role_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลสิทธิ์การใช้งานไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('RoleService', ['$http', '$q',function ($http, $q) {

	this.getAllrole = function () {
		return $http.get('restaurant-api/api_get_role.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addrole = function (role_name, role_back_pages_string, role_status_id) {
		return $http.post('restaurant-api/api_add_role.php', {
            'name' : role_name,
            'role_back_pages_string' : role_back_pages_string,
            'status' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?role_id=" + id;

		return $http.get('restaurant-api/api_get_role.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateRole = function (role_id, role_name, role_back_pages_string, role_status_id) {
		return $http.post('restaurant-api/api_update_role.php', {
            'role_id' : role_id,
            'role_name' : role_name,
            //'role_front' : role_front,
            'role_back_pages_string' : role_back_pages_string,
            'role_status_id' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteRole = function (role_id, role_status_id) {
		return $http.post('restaurant-api/api_delete_role.php', {
            'role_id' : role_id,
            'role_status_id' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_food', ['ngRoute'])

.controller('FoodController', ['$rootScope', '$scope', '$location', 'FoodService', function($rootScope, $scope, $location, FoodService) {
	var route = 'admin_food';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				FoodService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listFoodObject = result.data.food;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddFoodForm = function() {
		$("#add_food_name").val('');
		$("#add_food_kind_id").val('');
		$("#add_food_price").val('');
		$("#add_food_status_id").val(999);
	
		
	noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					FoodService.getAllKind().then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listKindObject = result.data.kind;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					FoodService.getAllFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listFoodObject = result.data.food;
							$scope.apply();
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addFood = function() {
		var food_name = $.trim($("#add_food_name").val()), // ตตัดspacebarทั้งหมด
			food_kind_id = $("#add_food_kind_id").val(),
			food_price = $("#add_food_price").val(),
			food_status_id = $("#add_food_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999 ) {
			FoodService.addFood($("#add_food_name").val(), food_kind_id, food_price , food_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editFood = function(id) {
		$scope.selectedId = id;
		$scope.selectedFoodObject = null;
		$scope.selectedKindObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		FoodService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.food.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedFoodObject = result.data.food[0];
							$scope.selectedKindObject = result.data.kind;
					
							if ($scope.selectedFoodObject.food_status_id == 1) {
								$("#edit_food_status_id").val(1);
							} else if ($scope.selectedFoodObject.food_status_id == 2) {
								$("#edit_food_status_id").val(2);
							} else {
								$("#edit_food_status_id").val(0);	
							}
						setTimeout(function() {
								$("#edit_food_kind_id").val($scope.selectedFoodObject.food_kind_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateFood = function(id) {
		var food_id = $.trim($("#edit_food_pk_id").val()),
			food_name = $.trim($("#edit_food_name").val()),
			food_kind_id = $("#edit_food_kind_id").val(),
			food_price = $("#edit_food_price").val(),
			food_status_id = $("#edit_food_status_id").val();

		if (food_id != '' && food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999) {
			FoodService.updateFood(food_id, food_name, food_kind_id, food_price, food_status_id ).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteFood = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    FoodService.deleteFood(food_id, food_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('FoodService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addFood = function (food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('restaurant-api/api_add_food.php', {
            'food_name' : food_name, 
            'food_kind_id' : food_kind_id,
            'food_price' : food_price,
   
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateFood = function (food_id, food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('restaurant-api/api_update_food.php', {
            'food_id' : food_id,
            'food_name' : food_name, 
            'food_kind_id' : food_kind_id,
            'food_price' : food_price,
           
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteFood = function (food_id, food_status_id) {
		return $http.post('restaurant-api/api_delete_food.php', {
            'food_id' : food_id,
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_drink', ['ngRoute'])

.controller('DrinkController', ['$rootScope', '$scope', '$location', 'DrinkService', function($rootScope, $scope, $location, DrinkService) {
	var route = 'admin_drink';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkObject = null;
	$scope.selectedId = "";
	$scope.selectedDrinkObject = null;
	$scope.selectedUnitObject = null;
	$scope.listUnitObject = null;
	$scope.listUnitDetailObject = null;
	$scope.selectedVendorObject = null;
	$scope.listVendorObject = null;
	$scope.selectedVendorDrinkObject = null;
	$scope.selectedDrinkVendorListObject = null;

	$scope.listVendorDrink = [];

	$scope.addDrinkObject = [];
	$scope.drinkName = "";
	$scope.drinkNumber = "";
	$scope.isEditingItem = false;
	$scope.editingItemIndex = -1;

	$scope.drink = null;
	$scope.unit = null;
	$scope.vendor = null;

	$scope.oldDrinkPO = null;
	$scope.drinkPOPrivacy = false;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	//cm เช็คว่า user มีสิทธิ์ใช้งานหน้านี้หรือไม่ ถ้ามีคือ true ไม่มีคือ false ใช้สำหรับจะเอาไปโชว์ หรือซ่อนปุ่มสำหรับเปิดหน้า อนุมัติ
	$scope.drinkPOPrivacy = ($rootScope.privacyAccess.indexOf('admin_drink_po,') != -1 ? true : false);

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkService.getAllDrink().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkObject = result.data.drink;
						$scope.listUnitDetailObject = result.data.unitdetail_list;
						//console.log(listDrinkObject);
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.addVendorDrink = function () {
		var add_drink_vendor_id = $("#add_drink_vendor_id").val();
		var add_drink_price = $("#add_drink_price").val();

		if (add_drink_vendor_id != '' && add_drink_price != '') {
			var idx = $scope.listVendorDrink.findIndex(x => (x.vendor_id==add_drink_vendor_id));
			var idxAddDrinkObject = $scope.addDrinkObject.findIndex(x => (x.vendor_id==add_drink_vendor_id));

			if (idx == -1 && idxAddDrinkObject == -1) {
				$scope.listVendorDrink.push({
					vendor_id: add_drink_vendor_id,
					vendor_name: $("#add_drink_vendor_id option:selected").text(),
					price: add_drink_price
				});
			}
			else {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000, // 3 seconds
	                text : 'บริษัทนี้มีในตัวเลือกแล้ว',
	                callback: {
	                	afterClose: function () {
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
			}
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000, // 3 seconds
                text : 'กรุณาเลือกบริษัทและกรอกราคารับซื้อให้ครบถ้วนก่อนเพิ่มบริษัทลงในลิสต์',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.removeVendorDrink = function (index) {
		$scope.listVendorDrink.splice(index, 1);
	};

	// clear textbox value และ ดึงข้อมูลต่างๆ
	$scope.loadAddDrinkForm = function() {
		$("#add_drink_name").val('');
		$("#add_drink_vendor_id").val('');
		$("#add_drink_number").val('');
		$("#add_drink_unit_id").val('');
		$("#add_drink_price").val('');
		$("#add_drink_order_point").val('');
		$("#add_drink_status_id").val(999);
		$scope.addDrinkObject = [];

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkService.getAllUnit().then(function (result) {
						if (result.data.status == 200 && result.data.unit.length > 0 ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listUnitObject = result.data.unit;
							$scope.unit = $scope.listUnitObject;
							
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});

					DrinkService.getAllVendor().then(function (result) {
						if (result.data.status == 200  ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

						
							$scope.listVendorObject = result.data.vendors;
							$scope.vendor = $scope.listVendorObject;
							
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลบริษัท...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkService.getAllDrink().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty
						if (result.data.status == 200) {
							$scope.listDrinkObject = result.data.drink;
							//$scope.apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add drink
	$scope.addDrink = function() {
		var drink_name = $.trim($("#add_drink_name").val()), // ตตัดspacebarทั้งหมด
			drink_order_point = $("#add_drink_order_point").val(),
			drink_number = $("#add_drink_number").val(),
			drink_unit_id = $("#add_drink_unit_id").val(),
			drink_unit_price = $("#add_drink_unit_price").val(),
			drink_status_id = $("#add_drink_status_id").val();

		if (drink_name != '' && $scope.addDrinkObject.length > 0 && drink_order_point != '' && drink_number != '' && drink_unit_id != '' && drink_unit_price != '' && drink_status_id != 999 ) {
			
			DrinkService.addDrink($("#add_drink_name").val(), $scope.addDrinkObject, drink_order_point, drink_number, drink_unit_id, drink_unit_price, drink_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add drink

	// Edit drink
	$scope.editDrink = function(id) {
		$scope.drinkName = "";
		$scope.selectedId = id;
		$scope.selectedDrinkObject = null;
		$scope.selectedUnitObject = null;
		$scope.selectedVendorObject = null;
		$scope.selectedVendorDrinkObject = null;
		$scope.selectedDrinkVendorListObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {
            		DrinkService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drink.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkObject = result.data.drink[0];
							$scope.selectedUnitObject = result.data.unit;
							$scope.selectedVendorObject = result.data.vendor;
							$scope.selectedVendorDrinkObject = result.data.vendor_drink;
							$scope.selectedDrinkVendorListObject = result.data.vendor_list;
							$scope.drinkName = $scope.selectedDrinkObject.drink_name;

							if ($scope.selectedDrinkVendorListObject.length > 0) {
								$scope.isEditingItem = true;
							}

							if (typeof $scope.selectedVendorDrinkObject != 'undefined' && $scope.selectedVendorDrinkObject.length > 0) {
								for (var i=0; i<$scope.selectedVendorDrinkObject.length; i++) {
									
									var idx = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$scope.selectedVendorDrinkObject[i].vendor_id);

									$scope.selectedVendorObject[idx]['is_checked'] = true;
									$scope.selectedVendorObject[idx]['price'] = $scope.selectedVendorDrinkObject[i].price;
								}
							}


							if ($scope.selectedDrinkObject.drink_status_id == 1) {
								$("#edit_drink_status_id").val(1);
							} else if ($scope.selectedDrinkObject.drink_status_id == 2) {
								$("#edit_drink_status_id").val(2);
							} else {
								$("#edit_drink_status_id").val(0);	
							}
							setTimeout(function() {
								$("#edit_drink_unit_id").val($scope.selectedDrinkObject.drink_unit_id);
								$("#edit_drink_unit_price").val($scope.selectedDrinkObject.drink_unit_price);
								//$("#edit_drink_vendor_id").val($scope.selectedDrinkObject.drink_vendor_id);
								if ($scope.selectedDrinkVendorListObject.length > 0) {
									$('#edit_drink_vendor_id').val($scope.selectedDrinkVendorListObject[0].vendor_id);
									$('#edit_drink_price').val($scope.selectedDrinkVendorListObject[0].drink_price);
									$scope.editEditingItem(0);
								}
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูล...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit drink

	// Update drink
	$scope.updateDrink = function(id) {
		var drink_name = $.trim($("#edit_drink_name").val()), // ตตัดspacebarทั้งหมด
			drink_order_point = $("#edit_drink_order_point").val(),
			drink_number = $("#edit_drink_number").val(),
			drink_unit_id = $("#edit_drink_unit_id").val(),
			drink_unit_price = $("#edit_drink_unit_price").val(),
			drink_status_id = $("#edit_drink_status_id").val();

		if (drink_name != '' && $scope.selectedDrinkVendorListObject.length > 0 && drink_order_point != '' && drink_number != '' && drink_unit_id != '' && drink_unit_price != '' && drink_status_id != 999 ) {
			DrinkService.updateDrink(id, drink_name, $scope.selectedDrinkVendorListObject, drink_number, drink_order_point, drink_unit_id, drink_unit_price, drink_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update drink

	// Delete drink
	$scope.deleteDrink = function(id) {
		var drink_id = id,
			drink_status_id = 2;

		if (drink_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลเครื่องดื่มนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลเครื่องดื่ม...',
                            callback : {
                                afterShow : function () {

                                    DrinkService.deleteDrink(drink_id, drink_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลเครื่องดื่มไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit


	//cm function สำหรับสร้าง form ใบสั่งซื้อ และดึงการสั่งซื้อล่าสุดมาแสดง หลัวจากกด สั่งซื้อ จากเครื่องดื่มที่เหลือน้อย
	$scope.createDrinkPO = function (drink_id) {

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังค้นหาข้อมูลการสั่งซื้อเดิม...',
            callback: {
            	afterShow: function () {
					DrinkService.getOldDrinkPO(drink_id).then(function (resultOld) {

						if (resultOld.data.status == 200) {
							$scope.oldDrinkPO = resultOld.data.drinkPODetails;

							DrinkService.getAllPOSelection().then(function (resultSelection) {
								$.noty.clearQueue(); $.noty.closeAll(); // clear noty

								$scope.drink = resultSelection.data.drink;
								$scope.unit = resultSelection.data.unit;
								$scope.vendor = resultSelection.data.vendor;

								// ถ้าพบการสั่งซื้อเดิม จะทำการกรอกฟอร์มให้อัตโนมัติ
								if ($scope.oldDrinkPO.length > 0) {
									setTimeout(function () {
										$('#add_drink_id').val($scope.oldDrinkPO[0].drink_id);
										$('#add_unit_id').val($scope.oldDrinkPO[0].unit_id);
										$('#add_vendor_id').val($scope.oldDrinkPO[0].vendor_id);
										$('#add_unit_price').val($scope.oldDrinkPO[0].unit_price);
									}, 100);
								}
								
							});
						}
						else {
							$.noty.clearQueue(); $.noty.closeAll(); // clear noty
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ค้นหาข้อมูลการสั่งซื้อเดิมไม่สำเร็จ กรุณาลองใหม่...',
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
            }
        });
	};

	//cm function สำหรับสร้างใบสั่งซื้อหลังจากกดสร้างใบสั่งซื้อ
	$scope.addDrinkPO = function () {
		var add_drink_id = $.trim($('#add_drink_id').val()),
			add_unit_id = $.trim($('#add_unit_id').val()),
			add_vendor_id = $.trim($('#add_vendor_id').val()),
			add_unit_number = $.trim($('#add_unit_number').val()),
			add_unit_price = $.trim($('#add_unit_price').val());

		if ($rootScope.empID != '' && $rootScope.empID != 'undefined') {

			if (add_drink_id != '' && add_unit_id != '' && add_vendor_id != '' && add_unit_number != '' && add_unit_number != 0 && add_unit_price != '') {
				
				var drinkPOObject = [{
					drink_id: add_drink_id,
					unit_id: add_unit_id,
					vendor_id: add_vendor_id,
					number: add_unit_number,
					unit_price: add_unit_price
				}];

				noty({
		            type : 'alert',
		            layout : 'top',
		            modal : true,
		            text : 'กำลังสร้างใบสั่งซื้อ...',
		            callback: {
		            	afterShow: function () {
		            		DrinkService.addDrinkPO($rootScope.empID, drinkPOObject).then(function (result) {
		            			$.noty.clearQueue(); $.noty.closeAll();

		            			if (result.data.status == 200) {
									noty({
						                type : 'success',
						                layout : 'top',
						                modal : true,
						                timeout: 5000,
						                text : 'สร้างใบสั่งซื้อเรียบร้อยแล้ว...',
						                callback: {
						                	afterClose: function () {
						                		// ปิด noty
						                		$.noty.clearQueue(); $.noty.closeAll();

						                		// ปิด modal
						                		$("#close_modal_add_po").click()

						                		// refresh หน้าจอ
						                		//location.reload();
						                		$scope.refreshList();

						                	}
						                }
						            });
								}
								else {
									noty({
						                type : 'warning',
						                layout : 'top',
						                modal : true,
						                timeout: 3000,
						                text : result.data.message,
						                callback: {
						                	afterClose: function () {
						                		// ปิด noty
						                		$.noty.clearQueue(); $.noty.closeAll();

						                		// do something
						                	}
						                }
						            });
								}
		            		});
		            	}
		            }
		        });

			}
			else {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
	                callback: {
	                	afterClose: function () {
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
			}
		}
	};

	$scope.resetItem = function () {
		$("#add_drink_vendor_id").val('');
		$("#add_drink_price").val('');
		$scope.isEditingItem = false;
	};

	$scope.addItem = function () {
		$scope.drinkName = $('#add_drink_name').val();
		$scope.drinkNumber = $('#add_drink_number').val();
		var unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_drink_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		
		if ($scope.listVendorDrink.length > 0 && unit_index != 'undefined' && $("#add_drink_number").val() != '' && $("#add_drink_name").val() != '' && $("#add_drink_order_point").val() != '' && $("#add_drink_status_id").val() != '' ) {
			for (var i=0; i < $scope.listVendorDrink.length; i++) {
				$scope.addDrinkObject.push({
					vendor_id: $scope.listVendorDrink[i].vendor_id,
					vendor_name: $scope.listVendorDrink[i].vendor_name,
					drink_number: $("#add_drink_number").val(),
					drink_price: $scope.listVendorDrink[i].price,
					drink_status_id: $("#add_drink_status_id").val()
				});

				if (i == ($scope.listVendorDrink.length -1)) {
					$scope.listVendorDrink = [];
					$scope.resetItem();
				}
			}
		}
		else if (unit_index != 'undefined' && vendor_index !='undefined' && $("#add_drink_number").val() != '' && $("#add_drink_price").val() != '' && $("#add_drink_name").val() != '' && $("#add_drink_order_point").val() != '' && $("#add_drink_status_id").val() != '') {
			var vendor_index_obj = $scope.addDrinkObject.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			if (vendor_index_obj != -1) {
				$scope.addDrinkObject[vendor_index_obj].drink_number = parseInt($scope.addDrinkObject[vendor_index_obj].drink_number) + parseInt($("#add_drink_number").val());
				$scope.addDrinkObject[vendor_index_obj].drink_price = $("#add_drink_price").val();
				$scope.addDrinkObject[vendor_index_obj].vendor_id = $("#add_drink_vendor_id").val();
				$scope.addDrinkObject[vendor_index_obj].vendor_name = $scope.vendor[vendor_index].vendor_name;
				$scope.addDrinkObject[vendor_index_obj].drink_status_id = $scope.addDrinkObject[vendor_index_obj].drink_status_id;
			}
			else {
				$scope.addDrinkObject.push({
					vendor_id: $("#add_drink_vendor_id").val(),
					vendor_name: $scope.vendor[vendor_index].vendor_name,
					drink_number: $("#add_drink_number").val(),
					drink_price: $("#add_drink_price").val(),
					drink_status_id: $("#add_drink_status_id").val()
				});
			}

			$scope.resetItem();//ฟังก์ชันใช้resetform
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.deleteItem = function (index) {
		$scope.addDrinkObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
	};

	$scope.editItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#add_drink_price").val($scope.addDrinkObject[index].drink_price);
		$("#add_drink_vendor_id").val($scope.addDrinkObject[index].vendor_id);
	};

	$scope.editingItemUpdate = function () {
		$scope.drinkName = $('#add_drink_name').val();
		$scope.drinkNumber = $('#add_drink_number').val();
		var unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_drink_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

		if (unit_index != 'undefined' && vendor_index !='undefined' && unit_index != -1 && vendor_index != -1 && $("#add_drink_number").val() != '' && $("#add_drink_price").val() != '' && $("#add_drink_name").val() != '' && $("#add_drink_order_point").val() != '' && $("#add_drink_status_id").val() != '') {
			$scope.addDrinkObject[$scope.editingItemIndex].vendor_id = $("#add_drink_vendor_id").val();
			$scope.addDrinkObject[$scope.editingItemIndex].vendor_name = $scope.vendor[vendor_index].vendor_name;
			$scope.addDrinkObject[$scope.editingItemIndex].drink_number = $("#add_drink_number").val();
			$scope.addDrinkObject[$scope.editingItemIndex].drink_price = $("#add_drink_price").val();
			$scope.addDrinkObject[$scope.editingItemIndex].drink_status_id = $("#add_drink_status_id").val();

			$scope.resetItem();
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	//cm
	/*
	* กันลืม: ส่วนของการแก้ไขเครื่องดื่ม 
	* logic คล้ายๆส่วนของการสร้างเครื่องดื่ม
	*/
	$scope.resetEditingItem = function () {
		$("#edit_drink_vendor_id").val('');
		$("#edit_drink_price").val('');
		$scope.isEditingItem = false;
	};

	//cm เพิ่ม item ลงใน  list หลังจาก กด add
	$scope.addEditingItem = function () {
		$scope.drinkName = $('#edit_drink_name').val();
		$scope.drinkNumber = $('#edit_drink_number').val();
		var unit_index = $scope.selectedUnitObject.findIndex(x => x.unit_id==$("#edit_drink_unit_id").val()),
			vendor_index = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$("#edit_drink_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		if (unit_index != 'undefined' && vendor_index !='undefined' && $("#edit_drink_number").val() != '' && $("#edit_drink_price").val() != '' && $("#edit_drink_name").val() != '' && $("#edit_drink_order_point").val() != '' && $("#edit_drink_status_id").val() != '') {
			var vendor_index_obj = $scope.selectedDrinkVendorListObject.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			if (vendor_index_obj != -1) {
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_number = parseInt($scope.selectedDrinkVendorListObject[vendor_index_obj].drink_number) + parseInt($("#edit_drink_number").val());
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_price = $("#edit_drink_price").val();
				$scope.selectedDrinkVendorListObject[vendor_index_obj].vendor_id = $("#edit_drink_vendor_id").val();
				$scope.selectedDrinkVendorListObject[vendor_index_obj].vendor_name = $scope.vendor[vendor_index].vendor_name;
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_status_id = $scope.selectedDrinkVendorListObject[vendor_index_obj].drink_status_id;
			}
			else {
				$scope.selectedDrinkVendorListObject.push({
					vendor_id: $("#edit_drink_vendor_id").val(),
					vendor_name: $scope.selectedVendorObject[vendor_index].vendor_name,
					drink_number: $("#edit_drink_number").val(),
					drink_price: $("#edit_drink_price").val(),
					drink_status_id: $("#edit_drink_status_id").val()
				});
			}

			$scope.resetEditingItem();//ฟังก์ชันใช้resetform
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	//cm ลบ item ออกจาก array
	$scope.deleteEditingItem = function (index) {
		$scope.selectedDrinkVendorListObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
	};

	//cm ออโต้กรอกข้อมูลลง form หลังกดปุ่มแก้ไข
	$scope.editEditingItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#edit_drink_price").val($scope.selectedDrinkVendorListObject[index].drink_price);
		$("#edit_drink_vendor_id").val($scope.selectedDrinkVendorListObject[index].vendor_id);
	};

	//cm function สำหรับอัพเดท item ที่กดแก้ไขจาก list และอัพเดทหลังจากการแก้ไข 
	$scope.editingEditingItemUpdate = function () {
		$scope.drinkName = $('#edit_drink_name').val();
		$scope.drinkNumber = $('#edit_drink_number').val();
		var unit_index = $scope.selectedUnitObject.findIndex(x => x.unit_id==$("#edit_drink_unit_id").val()),
			vendor_index = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$("#edit_drink_vendor_id").val());

		if (unit_index != 'undefined' && vendor_index !='undefined' && unit_index != -1 && vendor_index != -1 && $("#edit_drink_number").val() != '' && $("#edit_drink_price").val() != '' && $("#edit_drink_name").val() != '' && $("#edit_drink_order_point").val() != '' && $("#edit_drink_status_id").val() != '') {
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].vendor_id = $("#edit_drink_vendor_id").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].vendor_name = $scope.selectedVendorObject[vendor_index].vendor_name;
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_number = $("#edit_drink_number").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_price = $("#edit_drink_price").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_status_id = $("#edit_drink_status_id").val();

			$scope.resetEditingItem();
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
}])
.service('DrinkService', ['$http', '$q',function ($http, $q) {

	//cm ดึงหน่วยทั้งหมด
	this.getAllUnit = function () {
		return $http.get('restaurant-api/api_get_unit.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm ดึงบริษัทคู่ค้าทั้งหมด
	this.getAllVendor = function () {
		return $http.get('restaurant-api/api_get_vendor.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm ดึงเครื่องดื่มทั้งหมด
	this.getAllDrink = function () {
		return $http.get('restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm เพิ่มเครื่องดื่ม
	this.addDrink = function (drink_name, add_drink_object, drink_order_point, drink_number, drink_unit_id, drink_unit_price, drink_status_id) {
		return $http.post('restaurant-api/api_add_drink.php', {
            'drink_name' : drink_name,
            'add_drink_object' : add_drink_object,
            'drink_unit_id' : drink_unit_id,
            'drink_order_point' : drink_order_point,
            'drink_number' : drink_number,
            'drink_status_id' : drink_status_id,
            'drink_unit_price' : drink_unit_price
           
            
        }, function(data, status) {
            return data;
        });
	};

	//cm ดึงเครื่องดื่มด้วย drink_id
	this.getByID = function (id) {
		var conditions = "?drink_id=" + id;

		return $http.get('restaurant-api/api_get_drink.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	//cm อัพเดทเครื่องดื่ม
	this.updateDrink = function (drink_id, drink_name, edit_drink_object, drink_number, drink_order_point, drink_unit_id, drink_unit_price, drink_status_id) {
		return $http.post('restaurant-api/api_update_drink.php', {
            'drink_id' : drink_id,
            'drink_name' : drink_name,
            'edit_drink_object' : edit_drink_object,
            'drink_number' : drink_number, 
            'drink_order_point' : drink_order_point,
            'drink_unit_id' : drink_unit_id,
            'drink_status_id' : drink_status_id,
            'drink_unit_price' : drink_unit_price
           
        }, function(data, status) {
            return data;
        });
	};

	//cm ลบเครื่องดื่ม
	this.deleteDrink = function (drink_id, drink_status_id) {
		return $http.post('restaurant-api/api_delete_drink.php', {
            'drink_id' : drink_id,
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับดึงการแจ้งเตือนเครื่องดื่มเหลือน้อย
	this.getDrinkNoti = function () {
		return $http.get('restaurant-api/api_get_drink_noti.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function ดึงตัวเลือกต่างๆของการสั่งซื้อ
	this.getAllPOSelection = function () {
		return $http.get('restaurant-api/api_get_po_selection.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับใช้ดึงการสั่งซื้อล่าสุด ของเครื่องดื่มนี้
	this.getOldDrinkPO = function (drink_id) {
		return $http.post('restaurant-api/api_get_old_drink_po.php', {
            'drink_id' : drink_id
        }, function(data, status) {
            return data;
        });
	};

	//cm function ใช้สำหรับ add ใบสั่งซื้อ
	this.addDrinkPO = function (emp_id, drinkPOObject) {
		return $http.post('restaurant-api/api_add_drink_po.php', {
            'emp_id' : emp_id,
            'drinkPOObject' : drinkPOObject
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_unitdetail', ['ngRoute'])

.controller('UnitdetailController', ['$rootScope', '$scope', '$location', '$cookies', 'UnitdetailService', function($rootScope, $scope, $location, $cookies, UnitdetailService) {
	var route = 'admin_unitdetail';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listUnitdetailObject = null;
	$scope.selectedId = "";
	$scope.selectedUnitdetailObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unitdetail ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert',
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				UnitdetailService.getAllUnitdetail().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll();

					if (result.data.status == 200) {
						$scope.listUnitdetailObject = result.data.unitdetail;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.getAllUnitdetails = function () {
		// โหลดข้อมูล unitdetail ทั้งหมดมาแสดงที่ตาราง
		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					UnitdetailService.getAllUnitdetail().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

						if (result.data.status == 200) {
							$scope.listUnitdetailObject = result.data.unitdetail;
							$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.loadAddUnitdetailForm = function() {
		$("#add_primary_unit_id").val('');
		$("#add_secondary_unit_id").val('');
		$("#add_primary_unit_number").val('');
		$("#add_secondary_unit_number").val('');
		$("#add_unitdetail_status_id").val(999);

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					UnitdetailService.getAllUnit().then(function (result) {
						if (result.data.status == 200 && result.data.unit.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedUnitObject = result.data.unit;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					UnitdetailService.getAllUnitdetail().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listUnitdetailObject = result.data.unitdetail;
							$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addUnitdetail = function() {
		var primary_unit_id = $.trim($("#add_primary_unit_id").val()),
			secondary_unit_id = $.trim($("#add_secondary_unit_id").val()),
			primary_unit_number = $("#add_primary_unit_number").val(),
			secondary_unit_number = $("#add_secondary_unit_number").val(),
			unitdetail_status_id = $("#add_unitdetail_status_id").val();

		if (primary_unit_id != '' && secondary_unit_id != '' && primary_unit_number != '' && secondary_unit_number != '' && unitdetail_status_id != 999 ) {
			UnitdetailService.addUnitdetail(primary_unit_id, secondary_unit_id, primary_unit_number, secondary_unit_number, unitdetail_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();

		                		$scope.refreshList();
		                		//$scope.getAllUnitdetails();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editUnitdetail = function(id) {
		$scope.selectedId = id;
		$scope.selectedUnitdetailObject = null;
		$scope.selectedUnitObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		UnitdetailService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.unitdetail.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedUnitdetailObject = result.data.unitdetail[0];
							$scope.selectedUnitObject = result.data.unit;

							if ($scope.selectedUnitdetailObject.primary_status_id == 1) {
								$("#edit_unitdetail_status_id").val(1);
							} else if ($scope.selectedUnitdetailObject.primary_status_id == 2) {
								$("#edit_unitdetail_status_id").val(2);
							} else {
								$("#edit_unitdetail_status_id").val(0);	
							}

							setTimeout(function() {
								$("#edit_primary_unit_id").val($scope.selectedUnitdetailObject.primary_unit_detail_id);
								$("#edit_secondary_unit_id").val($scope.selectedUnitdetailObject.secondary_unit_unit_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateUnitdetail = function() {
		var primary_unit_id = $.trim($("#edit_primary_unit_id").val()),
			secondary_unit_id = $.trim($("#edit_secondary_unit_id").val()),
			primary_unit_number = $("#edit_secondary_unit_number").val(),
			secondary_unit_number = $("#edit_primary_unit_number").val(),
			unitdetail_status_id = $("#edit_unitdetail_status_id").val();

		if (primary_unit_id != '' && secondary_unit_id != '' && primary_unit_number != '' && secondary_unit_number != '' && unitdetail_status_id != 999) {
			UnitdetailService.updateUnitdetail($scope.selectedId, primary_unit_id, secondary_unit_id, primary_unit_number, secondary_unit_number, unitdetail_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//$scope.getAllUnitdetails();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteUnitdetail = function(id) {
		var unitdetail_id = id,
			unitdetail_status_id = 2;

		if (unitdetail_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลการแปลงหน่วยนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลการแปลงหน่วย...',
                            callback : {
                                afterShow : function () {

                                    UnitdetailService.deleteUnitdetail(unitdetail_id, unitdetail_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		$scope.getAllUnitdetails();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลการแปลงหน่วยไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('UnitdetailService', ['$http', '$q',function ($http, $q) {

	this.getAllUnit = function () {
		return $http.get('restaurant-api/api_get_unit.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllUnitdetail = function () {
		return $http.get('restaurant-api/api_get_unitdetail.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addUnitdetail = function (primary_unit_id, secondary_unit_id, primary_unit_number, secondary_unit_number, unitdetail_status_id) {
		return $http.post('restaurant-api/api_add_unitdetail.php', {
            'primary_unit_id' : primary_unit_id,
            'secondary_unit_id' : secondary_unit_id,
            'primary_unit_number' : primary_unit_number,
            'secondary_unit_number' : secondary_unit_number,
            'unitdetail_status_id' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?unitdetail_id=" + id;

		return $http.get('restaurant-api/api_get_unitdetail.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateUnitdetail = function (unitdetail_id, primary_unit_id, secondary_unit_id, primary_unit_number, secondary_unit_number, unitdetail_status_id) {
		return $http.post('restaurant-api/api_update_unitdetail.php', {
			'unitdetail_id' : unitdetail_id,
            'primary_unit_id' : primary_unit_id,
            'secondary_unit_id' : secondary_unit_id,
            'primary_unit_number' : primary_unit_number,
            'secondary_unit_number' : secondary_unit_number,
            'unitdetail_status_id' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteUnitdetail = function (unitdetail_id, unitdetail_status_id) {
		return $http.post('restaurant-api/api_delete_unitdetail.php', {
            'unitdetail_id' : unitdetail_id,
            'unitdetail_status_id' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_position', ['ngRoute'])

.controller('PositionController', ['$rootScope', '$scope', '$location', 'PositionService', function($rootScope, $scope, $location, PositionService) {
	var route = 'admin_position';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listPositionObject = null;
	$scope.selectedId = "";
	$scope.selectedPositionObject = null;
	$scope.listRolesObject = null;
	$scope.selectedRolesObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				PositionService.getAllPosition().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listPositionObject = result.data.positions;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddPositionForm = function() {
		$("#add_pos_name").val('');
		$("#add_pos_id").val(999);

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
	        		//cm ดึง สิทธิ์ทั้งหมด
					PositionService.getAllRoles().then(function (result) {
						if (result.data.status == 200 && result.data.roles.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listRolesObject = result.data.roles;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					PositionService.getAllPosition().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listPositionObject = result.data.positions;
							$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addPosition = function() {
		var pos_name = $.trim($("#add_pos_name").val()), // ตตัดspacebarทั้งหมด
			pos_role_id = $("#add_pos_role_id").val(), //$("#add_position_role_id").val()
			pos_status_id = $("#add_pos_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (pos_name != ''&& pos_role_id != '' && pos_status_id != 999 ) {
			PositionService.addPosition($("#add_pos_name").val(), pos_role_id, pos_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editPosition = function(id) {
		$scope.selectedId = id;
		$scope.selectedPositionObject = null;
		$scope.selectedRolesObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {
            		PositionService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.positions.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedPositionObject = result.data.positions[0];
							$scope.selectedRolesObject = result.data.roles;

							if ($scope.selectedPositionObject.pos_status_id == 1) {
								$("#edit_pos_status_id").val(1);
							} else if ($scope.selectedPositionObject.pos_status_id == 2) {
								$("#edit_pos_status_id").val(2);
							} else {
								$("#edit_pos_status_id").val(0);	
							}

							setTimeout(function() {
								$("#edit_pos_role_id").val($scope.selectedPositionObject.pos_role_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูล...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updatePosition = function(id) {
		var pos_id = $.trim($("#edit_pos_pk_id").val()),
			pos_name = $.trim($("#edit_pos_name").val()),
			pos_role_id = $("#edit_pos_role_id").val(),
			pos_status_id = $("#edit_pos_status_id").val();

		if (pos_id != '' && pos_name != '' && pos_status_id != 999) {
			PositionService.updatePosition(pos_id, pos_name, pos_role_id, pos_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deletePosition = function(id) {
		var pos_id = id,
			pos_status_id = 2;

		if (pos_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลตำแหน่งงานนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลตำแหน่งงาน...',
                            callback : {
                                afterShow : function () {

                                    PositionService.deletePosition(pos_id, pos_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลตำแหน่งงานไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('PositionService', ['$http', '$q',function ($http, $q) {

	this.getAllRoles = function () {
		return $http.get('restaurant-api/api_get_role.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllPosition = function () {
		return $http.get('restaurant-api/api_get_position.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addPosition = function (pos_name, pos_role_id, pos_status_id) {
		return $http.post('restaurant-api/api_add_position.php', {
            'name' : pos_name,
            'role' : pos_role_id,
            'status' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?pos_id=" + id;

		return $http.get('restaurant-api/api_get_position.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updatePosition = function (pos_id, pos_name, pos_role_id, pos_status_id) {
		return $http.post('restaurant-api/api_update_position.php', {
            'pos_id' : pos_id,
            'pos_name' : pos_name,
            'pos_role_id' : pos_role_id,
            'pos_status_id' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deletePosition = function (pos_id, pos_status_id) {
		return $http.post('restaurant-api/api_delete_position.php', {
            'pos_id' : pos_id,
            'pos_status_id' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_table', ['ngRoute'])

.controller('TableController', ['$rootScope', '$scope', '$location', 'TableService', function($rootScope, $scope, $location, TableService) {
	var route = 'admin_table';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listTableObject = null;
	$scope.selectedId = "";
	$scope.selectedTableObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				TableService.getAllTable().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listTableObject = result.data.tables;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddTableForm = function() {
		$("#add_table_number").val('');

	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					TableService.getAllTable().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listTableObject = result.data.tables;
								//$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addTable = function() {
		var table_number = $.trim($("#add_table_number").val()), // ตตัดspacebarทั้งหมด
			table_status = $("#add_table_status").val(),//ดึงค่าจากselectมาไว้ในตัแปล
			table_status_id = $("#add_table_status_id").val();

		if (table_number != '' && table_status != '' && table_status_id != 999 ) {
			TableService.addTable($("#add_table_number").val(), table_status , table_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editTable = function(id) {
		$scope.selectedId = id;
		$scope.selectedTableObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {
            		TableService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.tables.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedTableObject = result.data.tables[0];

							if ($scope.selectedTableObject.table_status_id == 1) {
								$("#edit_table_status_id").val(1);
							} else if ($scope.selectedTableObject.table_status_id == 2) {
								$("#edit_table_status_id").val(2);
							} else {
								$("#edit_table_status_id").val(0);	
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูล...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit

	$scope.updateTable = function(id) {
		var table_id = $.trim($("#edit_table_pk_id").val()),
			table_number = $.trim($("#edit_table_number").val()),
			table_status = $("#edit_table_status").val(),
			table_status_id = $("#edit_table_status_id").val();

		if (table_id != '' && table_number != '' && table_status != '' && table_status_id != 999) {
			TableService.updateTable(table_id, table_number, table_status ,table_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteTable = function(id) {
		var table_id = id,
			table_status = 2,
			table_status_id = 2;

		if (table_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลโต๊ะนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลโต๊ะ...',
                            callback : {
                                afterShow : function () {

                                    TableService.deleteTable(table_id,table_status, table_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลโต๊ะไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('TableService', ['$http', '$q',function ($http, $q) {

	this.getAllTable = function () {
		return $http.get('restaurant-api/api_get_table.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addTable = function (table_number, table_status,table_status_id) {
		return $http.post('restaurant-api/api_add_table.php', {
            'number' : table_number,
            'table_status' : table_status,
             'status' : table_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?table_id=" + id;

		return $http.get('restaurant-api/api_get_table.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateTable = function (table_id, table_number,table_status, table_status_id) {
		return $http.post('restaurant-api/api_update_table.php', {
            'table_id' : table_id,
            'table_number' : table_number,
            'table_status' : table_status,
             'table_status_id' : table_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteTable = function (table_id,table_status, table_status_id) {
		return $http.post('restaurant-api/api_delete_table.php', {
            'table_id' : table_id,
            'table_status' : table_status,
             'table_status_id' : table_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_kind', ['ngRoute'])


.controller('KindController', ['$rootScope', '$scope', '$location', 'KindService', function($rootScope, $scope, $location, KindService) {
	var route = 'admin_kind';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listKindObject = null;
	$scope.selectedId = "";
	$scope.selectedKindObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				KindService.getAllKind().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listKindObject = result.data.kind;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddKindForm = function() {
		$("#add_kind_name").val('');
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					KindService.getAllKind().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listKindObject = result.data.kind;
							$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addKind = function() {
		var kind_name = $.trim($("#add_kind_name").val()), // ตตัดspacebarทั้งหมด
			kind_status = $("#add_kind_status").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (kind_name != '' && kind_status != 999 ) {
			KindService.addKind($("#add_kind_name").val(), kind_status).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editKind = function(id) {
		$scope.selectedId = id;
		$scope.selectedKindObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {
            		KindService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedKindObject = result.data.kind[0];

							if ($scope.selectedKindObject.kind_status == 1) {
								$("#edit_kind_status").val(1);
							} else if ($scope.selectedKindObject.kind_status == 2) {
								$("#edit_kind_status").val(2);
							} else {
								$("#edit_kind_status").val(0);	
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูล...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	
	$scope.updateKind = function(id) {
		var kind_id = $.trim($("#edit_kind_pk_id").val()),
			kind_name = $.trim($("#edit_kind_name").val()),
			kind_status = $("#edit_kind_status").val();

		if (kind_id != '' && kind_name != '' && kind_status != 999) {
			KindService.updateKind(kind_id, kind_name, kind_status).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteKind = function(id) {
		var kind_id = id,
			kind_status = 2;

		if (kind_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลประเภทนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลประเภท...',
                            callback : {
                                afterShow : function () {

                                    KindService.deleteKind(kind_id, kind_status).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลประเภทไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('KindService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addKind = function (kind_name, kind_status) {
		return $http.post('restaurant-api/api_add_kind.php', {
            'name' : kind_name,
            'status' : kind_status,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?kind_id=" + id;

		return $http.get('restaurant-api/api_get_kind.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateKind = function (kind_id, kind_name, kind_status) {
		return $http.post('restaurant-api/api_update_kind.php', {
            'kind_id' : kind_id,
            'kind_name' : kind_name,
            'kind_status' : kind_status,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteKind = function (kind_id, kind_status) {
		return $http.post('restaurant-api/api_delete_kind.php', {
            'kind_id' : kind_id,
            'kind_status' : kind_status,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_promotion', ['ngRoute'])

.controller('PromotionController', ['$rootScope', '$scope', '$location', 'PromotionService', function($rootScope, $scope, $location, PromotionService) {
	var route = 'admin_promotion';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD HH:mm:ss' });

	$scope.listPromotionObject = null;
	$scope.selectedId = "";
	$scope.selectedPromotionObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				PromotionService.getAllpromotion().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listPromotionObject = result.data.promotion;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddPromotionForm = function() {
		$("#add_pro_name").val('');
		$("#add_pro_discount").val('');
		$("#add_pro_start").val('');
		$("#add_pro_end").val('');
		$("#add_pro_status_id").val(999);


	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					PromotionService.getAllpromotion().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listPromotionObject = result.data.promotion;
							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addPromotion = function() {
		var pro_name = $.trim($("#add_pro_name").val()), // ตตัดspacebarทั้งหมด
			pro_discount = $("#add_pro_discount").val(),
			pro_start = $("#add_pro_start").val(),
			pro_end = $("#add_pro_end").val(),
			pro_status_id = $("#add_pro_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (pro_name != '' && pro_discount != '' && pro_start != '' && pro_end != '' && pro_status_id != 999 ) {
			if (pro_discount > 100) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'ส่วนลดไม่สามารถมากกว่า 100%',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		$("#add_pro_discount").val('');

	                		return;
	                	}
	                }
	            });
			}
			else {
				PromotionService.addPromotion($("#add_pro_name").val(), pro_discount, pro_start, pro_end, pro_status_id).then(function (result) {
					if (result.data.status == 200) {
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
			}
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editPromotion = function(id) {
		$scope.selectedId = id;
		$scope.selectedPromotionObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		PromotionService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.promotion.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedPromotionObject = result.data.promotion[0];

							$("#edit_pro_start").val($scope.selectedPromotionObject.pro_start);
							$("#edit_pro_end").val($scope.selectedPromotionObject.pro_end);

							if ($scope.selectedPromotionObject.pro_status_id == 1) {
								$("#edit_pro_status_id").val(1);
							} else if ($scope.selectedPromotionObject.pro_status_id == 2) {
								$("#edit_pro_status_id").val(2);
							} else {
								$("#edit_pro_status_id").val(0);	
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updatePromotion = function(id) {
		var pro_id = $.trim($("#edit_pro_pk_id").val()),
			pro_name = $.trim($("#edit_pro_name").val()),
			pro_discount = $("#edit_pro_discount").val(),
			pro_start = $("#edit_pro_start").val(),
			pro_end = $("#edit_pro_end").val(),
			pro_status_id = $("#edit_pro_status_id").val();
			
		if (pro_id != '' && pro_name != '' && pro_discount != '' && pro_start != '' && pro_end != '' && pro_status_id != 999) {
			if (pro_discount > 100) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'ส่วนลดไม่สามารถมากกว่า 100%',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		$("#edit_pro_discount").val($scope.selectedPromotionObject.pro_discount);

	                		return;
	                	}
	                }
	            });
			}
			else {

				PromotionService.updatePromotion(pro_id, pro_name, pro_discount, pro_start,pro_end, pro_status_id).then(function (result) {
					if (result.data.status == 200) {
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : 'อัพเดทข้อมูลสำเร็จ...',
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_edit").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		$scope.refreshList();
			                	}
			                }
			            });
					}
					else {
						// กรณีไม่ใช่200
						noty({
			                type : 'error',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deletepromotion = function(id) {
		var pro_id = id,
			pro_status_id = 2;

		if (pro_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลโปรโมชั่นนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลโปรโมชั่น...',
                            callback : {
                                afterShow : function () {

                                    PromotionService.deletepromotion(pro_id, pro_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลโปรโมชั่นไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('PromotionService', ['$http', '$q',function ($http, $q) {

	this.getAllpromotion = function () {
		return $http.get('restaurant-api/api_get_promotion.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addPromotion = function (pro_name, pro_discount, pro_start, pro_end, pro_status_id) {
		return $http.post('restaurant-api/api_add_promotion.php', {
            'name' : pro_name,
            'discount' : pro_discount,
            'start' : pro_start,
            'end' : pro_end,
            'status' : pro_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?pro_id=" + id;

		return $http.get('restaurant-api/api_get_promotion.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updatePromotion = function (pro_id, pro_name, pro_discount,pro_start,pro_end, pro_status_id) {
		return $http.post('restaurant-api/api_update_promotion.php', {
            'pro_id' : pro_id,
            'pro_name' : pro_name,
            'pro_discount' : pro_discount,
             'pro_start' : pro_start,
            'pro_end' : pro_end,
            'pro_status_id' : pro_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deletepromotion = function (pro_id, pro_status_id) {
		return $http.post('restaurant-api/api_delete_promotion.php', {
            'pro_id' : pro_id,
            'pro_status_id' : pro_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_vendor', ['ngRoute'])

.controller('VendorController', ['$rootScope', '$scope', '$location', 'VendorService', function($rootScope, $scope, $location, VendorService) {
	var route = 'admin_vendor';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listVendorObject = null;
	$scope.selectedId = "";
	$scope.selectedVendorObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				VendorService.getAllVendor().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listVendorObject = result.data.vendors;
	
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddVendorForm = function() {
		$("#add_vendor_name").val('');
		$("#add_vendor_tel").val('');
		$("#add_vendor_address").val('');
		$("#add_vendor_status_id").val(999);
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					VendorService.getAllVendor().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listVendorObject = result.data.vendors;
							$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// Add Unit
	$scope.addVendor = function() {

		var vendor_name = $.trim($("#add_vendor_name").val()), // ตตัดspacebarทั้งหมด
			vendor_tel = $.trim($("#add_vendor_tel").val()),
			vendor_address = $.trim($("#add_vendor_address").val()),
			vendor_status_id = $("#add_vendor_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (vendor_name != '' && vendor_tel != '' && vendor_address != '' && vendor_status_id != 999 ) {
			VendorService.addVendor($("#add_vendor_name").val(), vendor_tel, $("#add_vendor_address").val(), vendor_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editVendor = function(id) {
		$scope.selectedId = id;
		$scope.selectedVendorObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		VendorService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.vendors.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedVendorObject = result.data.vendors[0];

							if ($scope.selectedVendorObject.vendor_status_id == 1) {
								$("#edit_vendor_status_id").val(1);
							} else if ($scope.selectedVendorObject.vendor_status_id == 2) {
								$("#edit_vendor_status_id").val(2);
							} else {
								$("#edit_vendor_status_id").val(0);	
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateVendor = function(id) {

		var vendor_id = $.trim($("#edit_vendor_pk_id").val()),
			vendor_name = $.trim($("#edit_vendor_name").val()),
			vendor_tel = $("#edit_vendor_tel").val(),
			vendor_address = $.trim($("#edit_vendor_address").val()),
			vendor_status_id = $("#edit_vendor_status_id").val();

		if (vendor_id != '' && vendor_name != '' && vendor_tel != '' && vendor_address != '' && vendor_status_id != 999) {
			VendorService.updateVendor(vendor_id, $("#edit_vendor_name").val(), vendor_tel, $("#edit_vendor_address").val(), vendor_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteVendor = function(id) {
		var vendor_id = id,
		vendor_status_id = 2;
		if (vendor_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลบริษัทคู่ค้านี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลบริษัทคู่ค้า...',
                            callback : {
                                afterShow : function () {

                                    VendorService.deleteVendor(vendor_id, vendor_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลบริษัทคู่ค้าไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Delete Unit
}])
.service('VendorService', ['$http', '$q',function ($http, $q) {

	this.getAllVendor = function () {
		return $http.get('restaurant-api/api_get_vendor.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addVendor = function (vendor_name, vendor_tel, vendor_address, vendor_status_id) {
		return $http.post('restaurant-api/api_add_vendor.php', {
            'name' : vendor_name,
            'tel' : vendor_tel,
            'address' : vendor_address,
            'status' : vendor_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?vendor_id=" + id;

		return $http.get('restaurant-api/api_get_vendor.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateVendor = function (vendor_id, vendor_name, vendor_tel, vendor_address, vendor_status_id) {
		return $http.post('restaurant-api/api_update_vendor.php', {
            'id' : vendor_id,
            'name' : vendor_name,
            'tel' : vendor_tel,
            'address' : vendor_address,
            'status' : vendor_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteVendor = function (vendor_id,vendor_status_id) {
		return $http.post('restaurant-api/api_delete_vendor.php', {
            'vendor_id' : vendor_id,
            'vendor_status_id' : vendor_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_drink_po', ['ngRoute'])

.controller('DrinkPOController', ['$rootScope', '$scope', '$location', 'DrinkPOService', function($rootScope, $scope, $location, DrinkPOService) {
	var route = 'admin_drink_po';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOObject = null;
	$scope.listDrinkPOObjectTmp = null;
	$scope.selectedId = "";
	$scope.selectedDrinkPOObject = null;
	$scope.selectedDrinkPODetailObject = null;
	$scope.selectedDrinkPODocObject = null;
	$scope.totalPrice = 0;
	$scope.totalPriceList = 0;
	$scope.drink = null;
	$scope.unit = null;
	$scope.vendor = null;
	$scope.addPOObject = [];
	$scope.isEditingItem = false;
	$scope.editingItemIndex = -1;
	$scope.isManager = false;
	$scope.selectedDrinkUnitID = 0;

	$scope.poStatus = -1;

	$scope.addDrinkId = 0;

	$scope.addVendorId = 0;
	$scope.vendorUnitPrice = '';

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route + ',') == -1) {
		$location.path('/backend/admin_login');
	}

	$scope.isManager = ($rootScope.empPosID == 10 ? true : false);

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkPOService.getAllDrinkPO().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkPOObject = result.data.drinkPOs;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});


	$scope.showDrinkPoStatus = function () {
		//$scope.poStatus
	};

	//cm function ที่ใช้เมื่อมีการเลือกเครื่องดื่ม จะทำการดึงบริษัทที่ผูกกับเครื่องดื่มนั้นๆ
	$scope.selectDrink = function () {
		$scope.vendor = null;
		var _drinkID = $.trim($('#add_drink_id').val());

		if (_drinkID > 0) {
			noty({
		        type : 'alert', // alert, success, warning, error, confirm
		        layout : 'top',
		        modal : true,
		        text : 'กำลังโหลด...',
		        callback: {
		        	afterShow: function () {
		        		//cm ดึงบริษัทที่ผูกกับเครื่องดื่มนี้
		        		var drink_index = $scope.drink.findIndex(x => x.drink_id==$("#add_drink_id").val())

		        		$scope.selectedDrinkUnitID = $scope.drink[drink_index].drink_unit_id;;

		        		console.log($scope.selectedDrinkUnitID)

						DrinkPOService.getVendorByDrinkID(_drinkID).then(function (result) {
							$.noty.clearQueue(); $.noty.closeAll(); // clear noty

							$scope.vendor = result.data.vendor;

							//$scope.$apply();
						});
					}
				}
			});
		}
		$scope.vendorUnitPrice = '';
	};

	//cm ใช้เมื่อมีการเลือกบริษัทคู่ค้า จะเข้า function นี้ เพื่อทำการแสดงราคาเครื่องดื่มของบริษัทคู่ค้านี้
	$scope.selectDrinkVendor = function () {
		var _drinkVendorID = $.trim($('#add_vendor_id').val());

		if (_drinkVendorID > 0) {
			var vendor_idx = $scope.vendor.findIndex(x => x.vendor_id==_drinkVendorID);

			if (vendor_idx != 'undefined' && vendor_idx != -1) {
				$scope.vendorUnitPrice = $scope.vendor[vendor_idx].vendor_unit_price;
				console.log($scope.vendor[vendor_idx].vendor_unit_price);
			}
			else {
				$scope.vendorUnitPrice = '';
			}
		}
	};

	//cm ใช้คำนวนราคาในหน้า อนุมัติ
	$scope.calculatePrice = function() {
		$scope.totalPrice = 0;//หาราคารวม
		if ($scope.selectedDrinkPODetailObject != null) {
			for (var i = 0; i < $scope.selectedDrinkPODetailObject.length; i++) {
				$scope.totalPrice += $scope.selectedDrinkPODetailObject[i].unit_price * $scope.selectedDrinkPODetailObject[i].number;

				if (i == $scope.selectedDrinkPODetailObject.length) {
					$scope.$apply();
				}
			}
		}
	};

	//cm ใช้คำนวนราคาทั้งหมดในเครื่องดื่มที่เลือกในหน้า add
	$scope.calculatePriceList = function() {
		$scope.totalPriceList = 0;//หาราคารวม
		if ($scope.addPOObject != null) {
			for (var i = 0; i < $scope.addPOObject.length; i++) {
				$scope.totalPriceList += $scope.addPOObject[i].unit_price * $scope.addPOObject[i].number;
			}
		}
	};

	// clear textbox value
	$scope.loadAddDrinkPOForm = function() {
		$("#add_drink_id").val(0);
		$("#add_unit_id").val('');
		$("#add_vendor_id").val('');
		$("#add_unit_number").val('');
		$("#add_unit_price").val('');
		$scope.addPOObject = [];
		$scope.totalPrice = 0;
		$scope.totalPriceList = 0;

		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkPOService.getAllPOSelection().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						$scope.drink = result.data.drink;
						$scope.unit = result.data.unit;
						//$scope.vendor = result.data.vendor;

						//$scope.$apply();
					});
				}
			}
		});
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkPOService.getAllDrinkPO().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listDrinkPOObject = result.data.drinkPOs;
							//$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	//cm function สำหรับการ add การสั่งซื้อ
	$scope.addDrinkPO = function() {

		if ($rootScope.empID != '' && $rootScope.empID != 'undefined') {

			if ($scope.addPOObject.length > 0) {

				DrinkPOService.addDrinkPO($rootScope.empID, $scope.addPOObject).then(function (result) {
					if (result.data.status == 200) {
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
			}
			else {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณาเพิ่มรายการเครื่องดื่มอย่างน้อย 1 รายการ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
			}
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	//cm function สำหรับคำนวนเมื่อมีการกรอกตัวเลขลงในช่องกรอก ในหน้าอนุมัติ
	$scope.editDrink = function(index) {
		if ($.trim($('#dpd_idx_' + index).val()) != '') { //$('#dpd_idx_' + index).val() คือการget valจากtextbox
			$('#dpd_idx_' + index).val(parseInt($('#dpd_idx_' + index).val()))
			$scope.selectedDrinkPODetailObject[index].number = $('#dpd_idx_' + index).val();
			$scope.calculatePrice();
		}
		else {
			$('#dpd_idx_' + index).val(0);
			$scope.selectedDrinkPODetailObject[index].number = 0;
			$scope.calculatePrice();
		}
	};

	//cm function สำหรับดูการสั่งซื้อ สำหรับผู้ที่มีสิทธิ์อนุมัติการสั่งซื้อ เพื่อให้ใช้สำหรับการอนุมัติ
	$scope.viewDrinkPO = function(id) {
		$scope.selectedId = id;
		$scope.selectedDrinkPOObject = null;
		$scope.selectedDrinkPODetailObject = null;
		$scope.totalPrice = 0;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลรายละเอียดการสั่งซื้อ...',
            callback: {
            	afterShow: function () {
            		DrinkPOService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drinkPOs.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPODetailObject = result.data.drinkPODetails;

							$scope.calculatePrice();
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลรายละเอียดการสั่งซื้อ...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	//cm function สำหรับโ๙ว์ปุ่มออกใบสั่งซื้อ ตามบริษัท
	$scope.viewDrinkPODoc = function (dp_id) {
		$scope.selectedId = dp_id;
		$scope.selectedDrinkPOObject = null;
		$scope.selectedDrinkPODocObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		DrinkPOService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drinkPOs.length > 0) {
						
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPODocObject = result.data.drinkPODetails;
							var vendor = [];
							var obj = [];

							//cm ทำการรวมบริษัทเดียวกันไว้เป็นตัวเลือกเดียว
							if (typeof $scope.selectedDrinkPODocObject != 'undefined') {
								for (var i=0; i < $scope.selectedDrinkPODocObject.length; i++) {
									if (vendor.indexOf($scope.selectedDrinkPODocObject[i].vendor_name) == -1) { //เช็คvendorname ซ้ำ ไหม
										
										vendor.push($scope.selectedDrinkPODocObject[i].vendor_name);
										obj.push($scope.selectedDrinkPODocObject[i]);	
									}

									if (i == $scope.selectedDrinkPODocObject.length-1) {
										$scope.selectedDrinkPODocObject = obj;
									}
								}
							}
						
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};

	//cm function สำหรับ อนุมัติการสั่งซื้อ
	$scope.approve = function(id) {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'ยืนยันอนุมัติการสั่งซื้อนี้?',
            buttons : [
            {
                addClass : 'btn btn-danger',//คลาสของbootstrap
                text : 'ยกเลิก',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                        closeWith : [],
                        text : 'กำลังอนุมัติการสั่งซื้อ...',
                        callback : {
                            afterShow : function () {
								DrinkPOService.approveDrinkPO(id, $scope.selectedDrinkPODetailObject, true, $rootScope.empID).then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'อนุมัติการสั่งซื้อสำเร็จ...',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		$("#close_modal_view").click();

							                		// refresh หน้าจอ
							                		//location.reload();
							                		$scope.refreshList();
							                	}
							                }
							            });
									}
									else {
										noty({
							                type : 'error',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'อนุมัติการสั่งซื้อไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();
							                	}
							                }
							            });
									}
								});
							}
                        }
                    });
                }
            }]
        });
	};

	//cm function สำหรับไม่อนุมัติการสั่งซื้อ
	$scope.reject = function(id) {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'ยืนยันไม่อนุมัติการสั่งซื้อนี้?',
            buttons : [
            {
                addClass : 'btn btn-danger',//คลาสของbootstrap
                text : 'ยกเลิก',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                        closeWith : [],
                        text : 'กำลังยกเลิกการสั่งซื้อ...',
                        callback : {
                            afterShow : function () {
								DrinkPOService.approveDrinkPO(id, $scope.selectedDrinkPODetailObject, false, $rootScope.empID).then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'ยกเลิกการสั่งซื้อสำเร็จ...',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		$("#close_modal_view").click();

							                		// refresh หน้าจอ
							                		//location.reload();
							                		$scope.refreshList();
							                	}
							                }
							            });
									}
									else {
										noty({
							                type : 'error',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'ยกเลิกการสั่งซื้อไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();
							                	}
							                }
							            });
									}
								});
							}
                        }
                    });
                }
            }]
        });
	};

	//cm function สำหรับล้างข้อมู, form
	$scope.resetItem = function () {
		$("#add_drink_id").val('');
		$("#add_unit_id").val('');
		$("#add_vendor_id").val('');
		$("#add_unit_number").val('');
		$("#add_unit_price").val('');
		$scope.isEditingItem = false;
		$scope.addVendorId = 0;
	};

	//cm function สำหรับเพิ่ม drink ลงในตัวแปร
	$scope.addItem = function () {
		if ($('#add_drink_id').val() == '' || $('#add_vendor_id').val() == '' || $('#add_unit_id').val() == '' || $('#add_unit_number').val() == '' || $('#add_unit_price').val() == '') {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
            return;
		}

		var drink_index = $scope.drink.findIndex(x => x.drink_id==$("#add_drink_id").val()),//หาindexของเครื่องดื่มที่เลือกเพื่อจะนำไปหาชื่อเครื่องดื่ม
			unit_index = $scope.unit.findIndex(x => x.unitdetail_id==$("#add_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		if (drink_index != 'undefined' && drink_index != -1 && unit_index != 'undefined' && unit_index != -1 && vendor_index !='undefined' && vendor_index != -1 && $("#add_unit_number").val() != '' && $("#add_unit_price").val() != '') {
			var drink_index_obj = $scope.addPOObject.findIndex(x => x.drink_id==$("#add_drink_id").val()),
				vendor_index_obj = $scope.addPOObject.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

			if (drink_index_obj != -1 && vendor_index_obj != -1 && drink_index_obj == vendor_index_obj) {
				//cm แก้ไขเครื่องดื่มที่มีในตัวแปรอยู่แล้ว
				$scope.addPOObject[drink_index_obj].number = parseInt($scope.addPOObject[drink_index_obj].number) + parseInt($("#add_unit_number").val());
				$scope.addPOObject[drink_index_obj].unit_price = $("#add_unit_price").val();
				$scope.addPOObject[drink_index_obj].unit_id = $("#add_unit_id").val();
				$scope.addPOObject[drink_index_obj].unit_name = $scope.unit[unit_index].unitdetail_name;
			}
			else {
				console.log(unit_index);
				console.log($scope.unit);

				//cm เพิ่มเครื่องดื่มลงในตัวแปร
				$scope.addPOObject.push({
					drink_id: $("#add_drink_id").val(),
					drink_name: $scope.drink[drink_index].drink_name,
					unit_id: $("#add_unit_id").val(),
					unit_name: $scope.unit[unit_index].unitdetail_name,
					vendor_id: $("#add_vendor_id").val(),
					vendor_name: $scope.vendor[vendor_index].vendor_name,
					number: $("#add_unit_number").val(),
					unit_price: $("#add_unit_price").val()
				});
			}

			$scope.resetItem();//ฟังก์ชันใช้resetform
			$scope.calculatePriceList(); // คำนวนราคาทั้งหมดที่เลือก
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	//cm ใช้สำหรับลบ item จาก array
	$scope.deleteItem = function (index) {
		$scope.addPOObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
		$scope.calculatePriceList(); // คำนวนราคาทั้งหมดที่เลือก
	};

	//cm function สำหรับให้ auto ระบบกรอก form หลังจากกด edit
	$scope.editItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#add_drink_id").val($scope.addPOObject[index].drink_id);
		$("#add_unit_id").val($scope.addPOObject[index].unit_id);
		$("#add_vendor_id").val($scope.addPOObject[index].vendor_id);
		$("#add_unit_number").val($scope.addPOObject[index].number);
		$("#add_unit_price").val($scope.addPOObject[index].unit_price);
	};

	//cm function ที่ใช้สำหรับ update item ที่แก้ไขใน list
	$scope.editingItemUpdate = function () {
		//cm ค้นหา index จากตัวแปร $scope.drink, $scope.unit, $scope.vendor ที่ถูกเลือกในตัวเลือกต่างๆ
		var drink_index = $scope.drink.findIndex(x => x.drink_id==$("#add_drink_id").val()),
			unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

		//cm ถ้าเจอ index ในตัวแปร $scope.addPOObject
		//cm ทำการใส่ข้อมูลเข้าไปใหม่เพื่ออัพเดทข้อมูลเดิม
		if (drink_index != 'undefined' && unit_index != 'undefined' && vendor_index !='undefined' && drink_index != -1 && unit_index != -1 && vendor_index != -1 && $("#add_unit_number").val() != '' && $("#add_unit_price").val() != '') {
			$scope.addPOObject[$scope.editingItemIndex].drink_id = $("#add_drink_id").val();
			$scope.addPOObject[$scope.editingItemIndex].drink_name = $scope.drink[drink_index].drink_name;
			$scope.addPOObject[$scope.editingItemIndex].unit_id = $("#add_unit_id").val();
			$scope.addPOObject[$scope.editingItemIndex].unit_name = $scope.unit[unit_index].unitdetail_name;
			$scope.addPOObject[$scope.editingItemIndex].vendor_id = $("#add_vendor_id").val();
			$scope.addPOObject[$scope.editingItemIndex].vendor_name = $scope.vendor[vendor_index].vendor_name;
			$scope.addPOObject[$scope.editingItemIndex].number = $("#add_unit_number").val();
			$scope.addPOObject[$scope.editingItemIndex].unit_price = $("#add_unit_price").val();

			//cm ทำการล้างค่าข้อมูลที่ form ที่กรอก
			$scope.resetItem();
			//cm คำนวนราคาทั้งหมดที่เลือก
			$scope.calculatePriceList(); 
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	//cm เปิดหน้า print โดยกำหนด dp_id กับ vendor_id ไปทาง url
	$scope.printDrinkPO = function (dp_id, vendor_id, dpd_id) {
		window.open('restaurant-web/#/backend/admin_drink_po_print?dp_id=' + dp_id + '&vendor_id=' + vendor_id + '&dpd_id=' + dpd_id,'_blank');
	};

}])
.service('DrinkPOService', ['$http', '$q',function ($http, $q) {

	this.getAllDrinkPO = function () {
		return $http.get('restaurant-api/api_get_drink_po.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?dp_id=" + id + "&dp_action=detail";

		return $http.get('restaurant-api/api_get_drink_po.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	//cm อนุมัติการสั่งซื้อ
	this.approveDrinkPO = function (id, drink_pos, approval, empID) {
		return $http.post('restaurant-api/api_approve_drink_po.php', {
            'id' : id,
            'drink_pos' : drink_pos,
            'approval_status': approval,
            'approval_emp_id': empID,
        }, function(data, status) {
            return data;
        });
	};

	//cm get ตัวเลือกต่างๆสำหรับหน้าสั่งซื้อ
	this.getAllPOSelection = function () {
		return $http.get('restaurant-api/api_get_po_selection.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addDrinkPO = function (emp_id, drinkPOObject) {
		return $http.post('restaurant-api/api_add_drink_po.php', {
            'emp_id' : emp_id,
            'drinkPOObject' : drinkPOObject
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับดึงการแจ้งเตือนการสั่งซื้อใหม่ๆ
	this.getAllDrinkPONumber = function () {
		return $http.get('restaurant-api/api_get_new_drink_po.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getVendorByDrinkID = function (drinkID) {
		return $http.get('restaurant-api/api_get_vendor_by_drink.php?drink_id=' + drinkID, {
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_drink_po_print', ['ngRoute'])

.controller('DrinkPOPrintController', ['$rootScope', '$scope', '$location', '$routeParams', 'DrinkPOPrintService', function($rootScope, $scope, $location, $routeParams, DrinkPOPrintService) {
	var route = 'admin_drink_po_print';

	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOObject = null;
	$scope.total_price = 0;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	//cm เช็คว่ามี dp_id และ vendor_id ถูกส่งมากับ URL หรือไม่ ถ้ามี จะทำงานใน if
	if (typeof $routeParams.dp_id != 'undefined' && typeof $routeParams.vendor_id != 'undefined') {
		//cm ทำการ convert dp_id และ vendor_id เป็น integer แล้วเช็คว่ามากกว่า 0 ไหม
		if (parseInt($routeParams.dp_id) > 0 && parseInt($routeParams.vendor_id) > 0) {
			noty({
		        type : 'alert', // alert, success, warning, error, confirm
		        layout : 'top',
		        modal : true,
		        text : 'กำลังโหลดใบเสนอซื้อ...',
		        callback: {
		        	afterShow: function () {
		        		//cm ดึงข้อมูลรายละเอียดการสั่งซื้อตาม dp_id และ vendor_id
						DrinkPOPrintService.getDrinkPOPrint($routeParams.dp_id, $routeParams.vendor_id).then(function (result) {
							$.noty.clearQueue(); $.noty.closeAll();

							if (result.data.status == 200) {
								$scope.listDrinkPOObject = result.data.drinkPOs;
								$scope.listDrinkPOObject[0].dp_date

								//cm ทำการวนลูป item ทั้งหมดเพื่อหาราคารวม
								for (var i = 0; i < $scope.listDrinkPOObject.length; i++) {
									$scope.total_price += $scope.listDrinkPOObject[i].dpd_number * $scope.listDrinkPOObject[i].dpd_unit_price;
								}
							}
							else {
								noty({
					                type : 'warning',
					                layout : 'top',
					                modal : true,
					                timeout: 3000, // 3 seconds
					                text : 'พบข้อผิดพลาด กรุณาลองใหม่ภายหลัง',
					                callback: {
					                	afterClose: function () {
					                		$.noty.clearQueue(); $.noty.closeAll();
					                		$location.path('/backend/admin_login');
					                	}
					                }
					            });
							}
						});
					}
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000, // 3 seconds
                text : 'ไม่พบใบเสนอซื้อ',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                		$location.path('/backend/admin_login');
                	}
                }
            });
		}
	}
	else {
		$location.path('/backend/admin_login');
	}

}])
.service('DrinkPOPrintService', ['$http', '$q',function ($http, $q) {

	this.getDrinkPOPrint = function (dp_id, vendor_id) {
		return $http.post('restaurant-api/api_get_drink_po_print.php', {
            'dp_id' : dp_id,
            'vendor_id' : vendor_id
        }, function(data, status) {
            return data;
        });
	};

}]);
angular.module('RESTAURANT.admin_drink_po_receipt', ['ngRoute'])

.controller('DrinkPOReceiptController', ['$rootScope', '$scope', '$location', 'DrinkPOReceiptService', function($rootScope, $scope, $location, DrinkPOReceiptService) {
	var route = 'admin_drink_po_receipt';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOReceiptObject = null;
	$scope.selectedId = "";
	$scope.selectedDrinkPOReceiptObject = null;
	$scope.selectedDrinkPOReceiptDetailObject = null;
	$scope.isReceiptRemaining = false;

	$scope.poStatus = -1;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล drink po ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkPOReceiptService.getAllDrinkPOReceipt().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkPOReceiptObject = result.data.drinkPOs;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.showDrinkPoStatus = function () {
		//$scope.poStatus
	};

	// clear textbox value
	$scope.loadAddDrinkPOReceiptForm = function() {
		$("#add_dp_receipt_name").val('');
		$("#add_dp_receipt_tel").val('');
		$("#add_dp_receipt_address").val('');
		$("#add_dp_receipt_status_id").val(999);
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkPOReceiptService.getAllDrinkPOReceipt().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listDrinkPOReceiptObject = result.data.drinkPOs;
							//$scope.$apply();
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.calculate = function (index) {
		var number_receipt = parseInt($('#dpd_idx_number_' + index).val());

		if (number_receipt > $scope.selectedDrinkPOReceiptDetailObject[index].receipt_remaining_number) {
			$('#dpd_idx_number_' + index).val('');
			$('#dpd_idx_label_number_remaining_' + index).html('');
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'จำนวนรับต้องไม่เกินจำนวนที่สั่ง...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
		else {
			if (number_receipt > 0) {
				$('#dpd_idx_number_' + index).val(parseInt($('#dpd_idx_number_' + index).val()));
			}
			
			$('#dpd_idx_label_number_remaining_' + index).html(Math.abs(number_receipt - $scope.selectedDrinkPOReceiptDetailObject[index].receipt_remaining_number));
		}
		
	};

	// Edit drink po
	$scope.viewDrinkPO = function(id, vendor_id) {
		$scope.selectedId = id;
		$scope.selectedDrinkPOReceiptObject = null;
		$scope.selectedDrinkPOReceiptDetailObject = null;
		$scope.isReceiptRemaining = false;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลรายการสั่งซื้อ...',
            callback: {
            	afterShow: function () {
            		DrinkPOReceiptService.getByID($scope.selectedId, vendor_id).then(function (result) {
						if (result.data.status == 200 && typeof result.data.drinkPODetails != 'undefined' && result.data.drinkPODetails.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOReceiptObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPOReceiptDetailObject = result.data.drinkPODetails;
							$scope.isReceiptRemaining = result.data.isReceiptRemaining;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                		$("#close_modal_edit").click();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit drink po

	$scope.save = function() {
		var number_receipt_correct = true;

		for (var i = 0; i < $scope.selectedDrinkPOReceiptDetailObject.length; i++) {
			if ($('#dpd_idx_number_' + i).val().length == 0) {
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
	                callback: {
	                	afterClose: function () {
	                		$.noty.clearQueue(); $.noty.closeAll();
	                	}
	                }
	            });
				return;
			}
			else {

				if ($scope.selectedDrinkPOReceiptDetailObject[i].number > $('#dpd_idx_number_' + i).val()) {
					number_receipt_correct = false;
				}
			}

			$scope.selectedDrinkPOReceiptDetailObject[i]['receipt_number'] = $('#dpd_idx_number_' + i).val();

			if (i == $scope.selectedDrinkPOReceiptDetailObject.length - 1) {

				if (number_receipt_correct == false) {

					noty({
		                type : 'confirm',
		                layout : 'top',
		                modal : true,
		                text: 'จำนวนที่รับไม่ครบถ้วน คุณยังต้องการบันทึกรายการรับนี้หรือไม่?',
		                buttons : [
		                {
		                    addClass : 'btn btn-danger',//คลาสของbootstrap
		                    text : 'ยกเลิก',
		                    onClick : function () {
		                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
		                    }
		                },
		                {
		                	id : 'btn_confirm',
		                    addClass: 'btn btn-primary',
		                    text : 'บนทึก',
		                    onClick : function () {
		                        $.noty.clearQueue(); $.noty.closeAll();

		                        DrinkPOReceiptService.saveDrinkPOReceipt($rootScope.empID, $scope.selectedDrinkPOReceiptDetailObject).then(function (result) {
									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'บันทึกการรับสำเร็จ...',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		// ปิด modal
							                		$("#close_modal_edit").click()

							                		// refresh หน้าจอ
							                		//location.reload();
							                		$scope.refreshList();
							                	}
							                }
							            });
									}
								});
		                    }
		                }]
		            });
					
				}
				else {
					DrinkPOReceiptService.saveDrinkPOReceipt($rootScope.empID, $scope.selectedDrinkPOReceiptDetailObject).then(function (result) {
						if (result.data.status == 200) {
							noty({
				                type : 'success',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'บันทึกการรับสำเร็จ...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();

				                		// ปิด modal
				                		$("#close_modal_edit").click()

				                		// refresh หน้าจอ
				                		//location.reload();
				                		$scope.refreshList();
				                	}
				                }
				            });
						}
					});
				}
			}
		}
	};

}])
.service('DrinkPOReceiptService', ['$http', '$q',function ($http, $q) {

	this.getAllDrinkPOReceipt = function () {
		return $http.get('restaurant-api/api_get_drink_po_receipt.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id, vendor_id) {
		var conditions = "?dp_id=" + id + "&vendor_id=" + vendor_id + "&dp_action=detail";

		return $http.get('restaurant-api/api_get_drink_po_receipt.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.saveDrinkPOReceipt = function (emp_id, drink_po_receipt) {
		return $http.post('restaurant-api/api_save_drink_po_receipt.php', {
            'emp_id' : emp_id,
            'drink_po_receipt' : drink_po_receipt
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับดึงการแจ้งเตือนการสั่งซื้อได้รับอนุมัติ
	this.getAllDrinkPOReceiptNumber = function () {
		return $http.get('restaurant-api/api_get_new_drink_po_receipt.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.admin_account', ['ngRoute'])

.controller('AccountController', ['$rootScope', '$scope', '$window', '$cookies', '$location', 'AccountService', function($rootScope, $scope, $window, $cookies, $location, AccountService) {
	var route = 'admin_account';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	$scope.account_id = null;
	$scope.account = null;
	$scope.country = null;
	$scope.selectAccount = false;
	$scope.selectedAccountID = null;

	$scope.load_account_data = function() {
		$scope.selectAccount = false;
		AccountService.getAccountID().then(function (result_Account_ID) {
			$scope.account_id = result_Account_ID.data.Account_ID;

			AccountService.getAccount().then(function (result) {
				$scope.account = result.data.account;
				$scope.country = result.data.country;

				$('#firstname').val('');
				$('#lastname').val('');
				$('#username').val('');
				$('#password').val('');
				$('#confirmpassword').val('');
				$('#birthyear').val('');
				$('#birthmonth').val('01');
				$('#birthday').val('');
				$('#gender').val('M');
				$('#country').val(66);
				$('#mobilephone').val('');
				$('#email').val('');
			});
		});
	}


	// โหลดข้อมูลตอนเข้ามาหน้านี้
	$scope.load_account_data();

	$scope.selectaccount = function (Account_ID) {
		$scope.selectAccount = true;
		AccountService.getAccountByID(Account_ID).then(function (result) {
			var selectedAccount = result.data.account[0];
			$scope.selectedAccountID = selectedAccount.Account_ID;

			$('#firstname').val(selectedAccount.M_NAME);
			$('#lastname').val(selectedAccount.M_LastName);
			$('#username').val(selectedAccount.M_Username);
			$('#password').val('');
			$('#confirmpassword').val('');
			$('#birthyear').val(selectedAccount.byear);
			$('#birthmonth').val('' + selectedAccount.bmonth + '');
			$('#birthday').val(selectedAccount.bday);
			$('#gender').val(selectedAccount.Gender);
			$('#country').val(selectedAccount.Country_ID);
			$('#mobilephone').val(selectedAccount.Mobile);
			$('#email').val(selectedAccount.Email);
		});
	};

	$scope.deleteaccount = function (Account_ID) {
		$scope.selectAccount = false;
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'ต้องการลบข้อมูล?',
            buttons : [
            {
                addClass : 'btn btn-danger',//คลาสของbootstrap
                text : 'ยกเลิก',
                onClick : function () {
                    $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                        closeWith : [],
                        text : 'ลบข้อมูล...',
                        callback : {
                            afterShow : function () {
                            	AccountService.delete(Account_ID).then(function (result) {
                            		$.noty.clearQueue(); $.noty.closeAll();

                            		if (result.data.status == 200) {
                            			AccountService.getAccount().then(function (result) {
											$scope.account = result.data.account;
										});
                            		}
                            	});
                            }
                        }
                    });
                }
            }]
        });
	};

	$scope.editAccount = function () {
		if ($.trim($('#firstname').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกชื่อ',
            });
            return;
		}
		if ($.trim($('#lastname').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกนามสกุล',
            });
            return;
		}
		if ($.trim($('#password').val()) != '' || $.trim($('#confirmpassword').val()) != '') {
			if ($('#password').val() != $('#confirmpassword').val()) {
				$.noty.clearQueue(); $.noty.closeAll();
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'password กับ confirmpassword ต้องตรงกัน',
	            });
	            return;
			}
		}

		if ($.trim($('#birthday').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกวันที่เกิด',
            });
            return;
		}
		if ($.trim($('#birthyear').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกปีที่เกิด',
            });
            return;
		}
		else {
			if ($('#birthyear').val() < 1900 || $('#birthyear').val() > 2560) {
				$.noty.clearQueue(); $.noty.closeAll();
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'ปีเกิดไม่ถูกต้อง',
	            });
	            return;
			}
		}
		if ($.trim($('#mobilephone').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกเบอร์โทร',
            });
            return;
		}
		if ($.trim($('#email').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอก email',
            });
            return;
		}
		if ($.trim($('#mobilephone').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกเบอร์โทร',
            });
            return;
		}

		var day = $('#birthday').val();
		if (day.length == 1) {
			day = '0' + day;
		}

		var data = {
			'Account_ID': $scope.selectedAccountID,
			'firstname': $('#firstname').val(),
			'lastname': $('#lastname').val(),
			'password': $('#password').val(),
			'birthday': $('#birthyear').val() + '' + $('#birthmonth').val() + '' + day,
			'gender': $('#gender').val(),
			'country': $('#country').val(),
			'mobilephone': $('#mobilephone').val(),
			'email': $('#email').val()
		};

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'อัพเดทข้อมูล',
	        callback: {
	        	afterShow: function (){
	        		AccountService.updateAccount(data).then(function (result) {
	        			$.noty.clearQueue(); $.noty.closeAll();

	        			if (result.data.status == 200) {
	        				noty({
				                type : 'success',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'อัพเดทข้อมูลสำเร็จ',
				                callback: {
				                	afterShow: function(){
				                		$scope.load_account_data();
				                	}
				                }
				            });
	        			}
	        			else if (result.data.status == 500) {
	        				noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'Password นี้เคยใช้ไปแล้ว กรุณาเลือกใหม่',
				            });
	        			}
	        			else {
	        				noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'อัพเดทข้อมูลไม่สำเร็จ',
				            });
	        			}
						
					});
	        	}
	        }
	    });
	};

	$scope.search = function () {
		$scope.selectAccount = false;
		AccountService.search($('#search').val()).then(function (result) {
			$scope.account = result.data.account;
		});
	};

	$scope.checkusername = function () {
		if ($.trim($('#username').val()) != '') {

			AccountService.checkusername($('#username').val()).then(function (result) {
				if (result.data.status == 200) {
					$.noty.clearQueue(); $.noty.closeAll();
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'สามารถใช้ username นี้ได้',
		            });
				} else if (result.data.status == 500) {
					$.noty.clearQueue(); $.noty.closeAll();
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'username ซ้ำ',
		            });
				}
			});
		}
	};

	$scope.addAccount = function () {
		$scope.selectAccount = false;
		if ($.trim($('#firstname').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกชื่อ',
            });
            return;
		}
		if ($.trim($('#lastname').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกนามสกุล',
            });
            return;
		}
		if ($.trim($('#username').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอก Username',
            });
            return;
		}
		else {
			AccountService.checkusername($('#username').val()).then(function (result) {
				if (result.data.status == 500) {
					$.noty.clearQueue(); $.noty.closeAll();
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'username ซ้ำ',
		            });
		            return;
				}
			});
		}
		if ($.trim($('#password').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอก password',
            });
            return;
		}
		if ($.trim($('#confirmpassword').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอก confirmpassword',
            });
            return;
		}
		else {
			if ($('#password').val() != $('#confirmpassword').val()) {
				$.noty.clearQueue(); $.noty.closeAll();
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'password กับ confirmpassword ต้องตรงกัน',
	            });
	            return;
			}
		}

		if ($.trim($('#birthday').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกวันที่เกิด',
            });
            return;
		}
		if ($.trim($('#birthyear').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกปีที่เกิด',
            });
            return;
		}
		else {
			if ($('#birthyear').val() < 1900 || $('#birthyear').val() > 2560) {
				$.noty.clearQueue(); $.noty.closeAll();
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : 'ปีเกิดไม่ถูกต้อง',
	            });
	            return;
			}
		}
		if ($.trim($('#mobilephone').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกเบอร์โทร',
            });
            return;
		}
		if ($.trim($('#email').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอก email',
            });
            return;
		}
		if ($.trim($('#mobilephone').val()) == '') {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกเบอร์โทร',
            });
            return;
		}

		var day = $('#birthday').val();
		if (day.length == 1) {
			day = '0' + day;
		}

		var data = {
			'Account_ID': $('#Account_ID').val(),
			'firstname': $('#firstname').val(),
			'lastname': $('#lastname').val(),
			'username': $('#username').val(),
			'password': $('#password').val(),
			'birthday': $('#birthyear').val() + '' + $('#birthmonth').val() + '' + day,
			'gender': $('#gender').val(),
			'country': $('#country').val(),
			'mobilephone': $('#mobilephone').val(),
			'email': $('#email').val()
		};

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'เพิ่มข้อมูล',
	        callback: {
	        	afterShow: function (){
	        		AccountService.addAccount(data).then(function (result) {
	        			$.noty.clearQueue(); $.noty.closeAll();

	        			if (result.data.status == 200) {
	        				noty({
				                type : 'success',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'เพิ่มข้อมูลสำเร็จ',
				                callback: {
				                	afterShow: function(){
				                		$scope.load_account_data();
				                	}
				                }
				            });
	        			}
	        			else {
	        				noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'เพิ่มข้อมูลไม่สำเร็จ',
				            });
	        			}
						
					});
	        	}
	        }
	    });

	};

}])
.service('AccountService', ['$http', '$q',function ($http, $q) {
	this.getAccountID = function () {
		return $http.get('restaurant-api/api_get_account_id.php', {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.getAccount = function () {
		return $http.get('restaurant-api/api_get_account.php', {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.getAccountByID = function (Account_ID) {
		return $http.get('restaurant-api/api_get_account_by_id.php?Account_ID=' + Account_ID, {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.search = function (search) {
		return $http.get('restaurant-api/api_get_account.php?search=' + search, {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.delete = function (Account_ID) {
		return $http.post('restaurant-api/api_delete_account.php', {
			'Account_ID': Account_ID
	    }, function(data, status) {
	        return data;
	    });
	};

	this.checkusername = function (username) {
		return $http.post('restaurant-api/api_check_account_username.php', {
			'username': username
	    }, function(data, status) {
	        return data;
	    });
	};

	this.addAccount = function (data) {
		return $http.post('restaurant-api/api_add_account.php', data, function(data, status) {
	        return data;
	    });
	};

	this.updateAccount = function (data) {
		return $http.post('restaurant-api/api_update_account.php', data, function(data, status) {
	        return data;
	    });
	};
}]);
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
	if ($rootScope.isFrontendLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/frontend/user_login');
	}

	$('#home').height($('html').height());
}]);
angular.module('RESTAURANT.user_menu', ['ngRoute'])

.controller('MenuController', ['$rootScope', '$scope', '$location', 'MenuService', function($rootScope, $scope, $location, MenuService) {
	var route = 'user_menu';
	$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.listDrinkObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;
	$scope.listOrderFoodObject = [];
	$scope.listOrderDrinkObject = [];
	$scope.totalprice = 0;
	$scope.menuSelect =0;
	$scope.menuFoodType =0;
	$scope.orderObject =  false;
	$scope.listOrderObject = [];
	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();
	 $scope.table_id = 0;
	 $scope.listFoodObject = null;
	 $scope.OrderFoodObject = [];
	$scope.OrderDrinkObject = [];
	$scope.selectFoodObject = null;
	$scope.selectDrinkObject = null;
	$scope.listTableZone = [];
	$scope.listTableZoneEdit = [];

	$scope.order_id = 0;
	$scope.reserve_type = 0;
	$scope.isSearch = false;
	$scope.table_reserve_id = null;

	// เช็คสิทธิ์
	/*if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/f/admin_login');
	}*/

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				MenuService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
					
						$scope.listFoodObject = result.data.food;
						$scope.selectFoodObject = result.data.orderfood;
						$scope.selectDrinkObject = result.data.orderdrink;

						MenuService.getAllDrink().then(function (result) {

							$scope.listDrinkObject = result.data.drink;

							MenuService.getAllKind().then(function (result) {
								$scope.listKindObject = result.data.kind;


								MenuService.getAllOrderFood().then(function (result) {
									$scope.OrderFoodObject = result.data.orderfood;

									MenuService.getAllOrderDrink().then(function (result) {
										$scope.OrderDrinkObject = result.data.orderdrink;
										clearInterval($scope.autoRefreshTimer);
										$scope.autorefresh();

										
									});
								});
							});
						});
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.reserveTypeClick = function(type) {
		if (type == 2) {
			$scope.isSearch = false;	
			$scope.getTable();
		}
	}

	$scope.searchReserve = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					MenuService.getAllTableMenuSearch($('#txt_search_reserve').val()).then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

						if (result.data.status == 200) {
							$scope.listTableZone = result.data.zone;

							$scope.isSearch = true;	

							if ($scope.listTableZone.length == 0) {
								noty({
					                type : 'warning',
					                layout : 'top',
					                modal : true,
					                timeout: 3000, // 3 seconds
					                text : "ไม่พบการจองนี้",
					                callback: {
					                	afterClose: function () {
					                		$.noty.clearQueue(); $.noty.closeAll();
					                		$scope.isSearch = false;	
					                	}
					                }
					            });
							}

						}

						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                		$scope.isSearch = false;	
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.getTable = function(){
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
					MenuService.getAllTableMenu().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

						if (result.data.status == 200) {
						$scope.listTableZone = result.data.zone;

									

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});
}

$scope.getTableEdit = function(){
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
					MenuService.getAllTableMenuEdit().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

						if (result.data.status == 200) {
							$scope.listTableZoneEdit = result.data.zone;
									

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});
}


$scope.table = function(table_id,table_reserve_id){

	
		$scope.table_id = table_id;
		$scope.table_reserve_id = (table_reserve_id != 'undefined' ? table_reserve_id: null);
		
  
	}

	$scope.tableEdit = function(table_id){

	
		$scope.table_id = table_id;
		
  
	}

$scope.editmenu = function(id) {
	$scope.selectedId = id;
	$scope.selectedFoodObject = null;
	$scope.selectedDrinkObject = null;
	
		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		MenuService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.orderfood.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedFoodObject = result.data.orderfood[0];
							$scope.selectedDrinkObject = result.data.orderdrink;
									
					
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	//

$scope.saveTable = function(table_id){

  $scope.table_id = table_id ; 


}

$scope.selectTable = function(table_id){
	$scope.listOrderFoodObject = [];
	$scope.listOrderDrinkObject = [];
  	$scope.table_id = table_id ; 

		MenuService.getAllTable($scope.table_id).then(function (result) {
			$scope.selectFoodObject = result.data.orderfood;
			$scope.selectDrinkObject = result.data.orderdrink;

			


			if ($scope.selectFoodObject.length > 0) {

				for (var i = 0; i < $scope.selectFoodObject.length; i++) {

						$scope.order_id =$scope.selectFoodObject[i].order_id;
					
							$scope.listOrderFoodObject.push({
								order_id : $scope.selectFoodObject[i].order_id,
								food_id : $scope.selectFoodObject[i].food_id,
								number : $scope.selectFoodObject[i].number,
								comment : $scope.selectFoodObject[i].comment,
								food_name :$scope.selectFoodObject[i].food_name,
								food_price : $scope.selectFoodObject[i].price,
								type : "food"
					});
				}

			}

			if ($scope.selectDrinkObject.length > 0) {

				for (var i = 0; i < $scope.selectDrinkObject.length; i++) {

						$scope.order_id =$scope.selectDrinkObject[i].order_id;
						
							$scope.listOrderDrinkObject.push({
									order_id : $scope.selectDrinkObject[i].order_id,
									drink_id : $scope.selectDrinkObject[i].drink_id,
									number : $scope.selectDrinkObject[i].number,
									comment : $scope.selectDrinkObject[i].comment,
									drink_name :$scope.selectDrinkObject[i].drink_name,
									drink_price : $scope.selectDrinkObject[i].price,
									type : "drink"
								});

						}


					}
$scope.calculatetotalprice();

});
}

$scope.search = function () {
	$scope.listFoodObject = false;
	$scope.listDrinkObject = false;
		MenuService.searchFood($('#search').val()).then(function (result) {
			$scope.listFoodObject = result.data.food;

			MenuService.searchDrink($('#search').val()).then(function (result) {
			$scope.listDrinkObject = result.data.drink;
		});
		});
	};

	// clear textbox value
	$scope.loadAddFoodForm = function() {
		$("#add_food_name").val('');
		$("#add_food_kind_id").val('');
		$("#add_food_price").val('');
		$("#add_food_status_id").val(999);
	
		
	noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					MenuService.getAllKind().then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listKindObject = result.data.kind;
							$scope.getTable();
							$scope.getTableEdit();

						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};

	$scope.orderfood = function(food_id) {

		if ($("#number_food_"+food_id).val() == 0 || $("#number_food_"+food_id).val() == '') {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณาใส่จำนวนอาหารที่ต้องการสั่งอย่างน้อย 1',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
		else {

		var idx = $scope.listOrderFoodObject.findIndex(obj => obj.food_id==food_id);



			//alert(food_id);
			//alert($("#comment_"+food_id).val());
			//alert(idx);

		if (idx == -1) {
			$scope.listOrderFoodObject.push({
				food_id : food_id,
				number : $("#number_food_"+food_id).val(),
				comment : $("#comment_"+food_id).val(),
				food_name : $("#food_name_"+food_id).text(),
				food_price : $("#food_price_"+food_id).text(),
				type : "food"
			});
		}
		else{
			$scope.listOrderFoodObject[idx].number = parseInt($scope.listOrderFoodObject[idx].number) + parseInt($("#number_food_"+food_id).val());
			console.log($scope.listOrderFoodObject[idx]);
		}
			$scope.calculatetotalprice();
			console.log($scope.listOrderFoodObject);

		}
	}

$scope.orderdrink = function(drink_id) {

	if ($("#number_drink_"+drink_id).val() == 0 || $("#number_drink_"+drink_id).val() == '') {
		noty({
            type : 'warning',
            layout : 'top',
            modal : true,
            timeout: 3000,
            text : 'กรุณาใส่จำนวนเครื่องดื่มที่ต้องการสั่งอย่างน้อย 1',
            callback: {
            	afterClose: function () {
            		// ปิด noty
            		$.noty.clearQueue(); $.noty.closeAll();
            	}
            }
        });
	}
	else {

		var idx = $scope.listOrderDrinkObject.findIndex(obj => obj.drink_id==drink_id);

			//alert(food_id);
			//alert($("#comment_"+food_id).val());
			//alert(idx);

		if (idx == -1) {
			$scope.listOrderDrinkObject.push({
				drink_id : drink_id,
				number : $("#number_drink_"+drink_id).val(),
				comment : $("#comment_"+drink_id).val(),
				drink_name : $("#drink_name_"+drink_id).text(),
				drink_price : $("#drink_price_"+drink_id).text(),
				type : "drink"
			});
		}
		else{
			$scope.listOrderDrinkObject[idx].number = parseInt($scope.listOrderDrinkObject[idx].number) + parseInt($("#number_drink_"+drink_id).val());
			console.log($scope.listOrderDrinkObject[idx]);
		}
		$scope.calculatetotalprice();
		console.log($scope.listOrderDrinkObject);
	}
}

$scope.calculatetotalprice = function(){
	if ($scope.listOrderFoodObject.length > 0) {
		$scope.totalprice = 0;
			for (var i = 0; i < $scope.listOrderFoodObject.length; i++) {
				$scope.totalprice = $scope.totalprice + $scope.listOrderFoodObject[i].number*$scope.listOrderFoodObject[i].food_price;

			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {
			if ($scope.listOrderFoodObject.length == 0) {
				$scope.totalprice = 0;
			}
			
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {
				$scope.totalprice = $scope.totalprice + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].drink_price;

			}


		}



	}


$scope.updateFood = function() {
	if ($scope.listOrderFoodObject.length > 0  || $scope.listOrderDrinkObject.length > 0 ) {

			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังบันทึกข้อมูล...',
                            callback : {
                                afterShow : function () {
                                $.noty.clearQueue(); $.noty.closeAll();
			MenuService.updateFood($scope.listOrderFoodObject, $scope.listOrderDrinkObject,$scope.order_id).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : 'success',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                		$scope.listOrderFoodObject = [];
								                		$scope.listOrderDrinkObject = [];
								                		$scope.totalprice = 0;
								                		 $scope.table_id = 0;
								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                		console.log($scope.listOrderDrinkObject)
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

$scope.saveFood = function() {
	if ($scope.listOrderFoodObject.length > 0  || $scope.listOrderDrinkObject.length > 0 ) {

			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังบันทึกข้อมูล...',
                            callback : {
                                afterShow : function () {
                                $.noty.clearQueue(); $.noty.closeAll();
			MenuService.saveFood($scope.listOrderFoodObject, $scope.listOrderDrinkObject,$scope.table_id,$scope.table_reserve_id).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : 'success',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                		$scope.listOrderFoodObject = [];
								                		$scope.listOrderDrinkObject = [];
								                		$scope.totalprice = 0;
								                		 $scope.table_id = 0;
								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                		console.log($scope.listOrderDrinkObject)
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.autorefresh = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			MenuService.getAllOrderFood().then(function (result) {
				$scope.OrderFoodObject = result.data.orderfood;
					MenuService.getAllOrderDrink().then(function (result) {
						if (result.data.status == 200) {
							$scope.OrderDrinkObject = result.data.orderdrink;
				}
			});
			});
		},5000);//5 วินาที*1000
	}
	$scope.showMenuSelect = function() {
		//console.log();
		//alert($("#menuSelect"+food_id).val());
		//alert(menuSelect);
		//alert($("#menuSelect").val());
		//$("#menuSelect").val()
		$scope.menuFoodType =0;
		$scope.menuSelect = $("#menuSelect").val();


	}

	$scope.showFoodTypeSelect = function() {
		//console.log();
		//alert($("#menuSelect"+food_id).val());
		//alert(menuSelect);
		//alert($("#menuSelect").val());
		//$("#menuSelect").val()
		$scope.menuFoodType = $("#menuFoodType").val();


	}
	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					MenuService.getAllFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listFoodObject = result.data.food;
							//$scope.apply(function(){});
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	// END Delete Unit
}])
.service('MenuService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrink= function () {
		return $http.get('restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	
	this.getByID = function (id) {
		var conditions = "?table_id=" + id;

		return $http.get('restaurant-api/api_edit_order_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.saveFood = function (food_list, drink_list,table_id,table_reserve_id) {
		return $http.post('restaurant-api/api_save_food.php', {
            'food_list' : food_list, 
            'drink_list' : drink_list, 
             'table_id' : table_id, 
             'table_reserve_id': table_reserve_id
   
        }, function(data, status) {
            return data;
        });
	};

	this.updateFood = function (food_list, drink_list,order_id) {
		return $http.post('restaurant-api/api_update_save_food.php', {
            'food_list' : food_list, 
            'drink_list' : drink_list, 
             'order_id' : order_id, 
   
        }, function(data, status) {
            return data;
        });
	};

	this.saveTable = function (table_id) {
		return $http.post('restaurant-api/api_save_food.php', {
            'table_id' : table_id, 
   
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTable = function (table_id) {
		return $http.post('restaurant-api/api_edit_order_food.php', {
            'table_id' : table_id, 
   
        }, function(data, status) {
            return data;
        });
	};
	
	this.searchFood = function (search) {
		return $http.get('restaurant-api/api_search_food.php?search=' + search, {
	    }, function(data, status) {
	        return data;
	    });
	};

		this.searchDrink = function (search) {
		return $http.get('restaurant-api/api_search_drink.php?search=' + search, {
	    }, function(data, status) {
	        return data;
	    });
	};

this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFood = function () {
		return $http.get('restaurant-api/api_get_order_food_new.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTableMenu = function (id) {
		return $http.get('restaurant-api/api_get_all_table_menu.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTableMenuEdit = function (id) {
		return $http.get('restaurant-api/api_get_all_table_menuedit.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTableMenuSearch = function (search) {
		return $http.post('restaurant-api/api_get_all_table_menu_search.php',{
			'search' : search,
        }, function(data, status) {
            return data;
        });
	};

}]);
angular.module('RESTAURANT.user_reserve', ['ngRoute'])

.controller('ReserveController', ['$rootScope', '$scope', '$location', 'ReserveService', function($rootScope, $scope, $location, ReserveService) {
	var route = 'user_reserve';

$scope.table_id = [];
$scope.table_status_id = 0;
$scope.listTableObject = null;
$scope.listTableZone = [];
$scope.selectedId = "";
$scope.selectedReserveObject = null;
$scope.listTableZoneReserve = [];
$scope.listTableZoneEdit = [];
$scope.comment_reserve = "";
$scope.autoRefreshTimer = null;
$scope.reserveEdit = null;

$scope.tableTime = null;
$scope.updated_table = false;
$scope.isEditing = false;

$('.datepicker').datetimepicker({ defaultDate: new Date(), format: 'YYYY-MM-DD' });


noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReserveService.getAllReserveList().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										$scope.autocheckreserve();
									$scope.listTableZoneReserve = result.data.reserve;

									

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	}); 

$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReserveService.getAllReserveList().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
									$scope.autocheckreserve();
									$scope.listTableZoneReserve = result.data.reserve;
									//$scope.apply();
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	} 
$scope.autocheckreserve = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			ReserveService.getCancelReserve().then(function (result) {
				if (result.data.status == 200) {
					console.log("check success");
				}
			});
		},1800000);//5 วินาที*1000 => 1800000 = 30 นาที
	}

	$scope.deleteReserve = function(id) {
		var reserve_id = id;

		if (reserve_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูล...',
                            callback : {
                                afterShow : function () {

                                    ReserveService.deleteReserve(reserve_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

$scope.getTable = function(){
	$scope.isEditing = false;
		$scope.listTableZone = [];

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReserveService.getAllTable().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.listTableZone = result.data.zone;

									

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});
}

$scope.updateTableTime = function(time) {
	$('#reserve_time').val(time);
	$('#reserve_time_edit').val(time);
	$("#close_modal_table_list").click()
	$scope.updated_table = true;
}

$scope.listTable = function() {

	ReserveService.getTableTime($scope.table_id[0], $("#reserve_date").val(),$("#reserve_time").val()).then(function (result) {
		$scope.tableTime = result.data.tableTime;
	});
}

$scope.table = function(table_id){

	if($scope.table_status_id == 3){
		var idx = $scope.table_id.findIndex(obj => obj==table_id);

		if(idx == -1){
			$scope.table_id.push(table_id);
		}
	}
	else {
		$scope.table_id = [];
		$scope.table_id.push(table_id);

		$scope.listTable();
		if ($scope.isEditing == false || ($scope.table_status_id == 4 && $scope.isEditing == true)) {
			document.getElementById("listTableButton").click();
		}
		
	}
	
  
	}

	$scope.tableStatus = function(table_status_id){

  $scope.table_status_id =table_status_id ;


}

$scope.tableDetail = function(){

  
var detail = $("#detail").val();


}

$scope.saveTable = function(){

  
  	noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังบันทึก...',
            callback: {
            	afterShow: function () {
            		ReserveService.saveTable( $scope.table_id, $scope.table_status_id,$("#detail").val(),$("#reserve_date").val(),$("#reserve_time").val() ).then(function (result) {
						if (result.data.status == 200 ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();


							$scope.listTableObject = result.data.table;
						
								$("#close_modal_add").click()
								$scope.refreshList();
							
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();

				                	}
				                }
				            });
						}
					});
            	}
            }
        });

}

	//edit//
$scope.editReserve = function(id) {
		$scope.isEditing = true;
		$scope.table_id = [];
		$scope.table_status_id = 0;
		$scope.selectedId = id;
		$scope.selectedReserveObject = null;
		$scope.listTableZoneEdit = [];
		$scope.comment_reserve = "";
		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {

            		ReserveService.getAllTableEdit($scope.selectedId).then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

							if (result.data.status == 200) {
							$scope.reserveEdit = result.data.reserve[0];
							$scope.listTableZoneEdit = result.data.zone;
							$scope.comment_reserve = result.data.comment_reserve;
							$scope.table_status_id = result.data.service_id_reserve;

							$('#reserve_date_edit').val($scope.reserveEdit.reserve_date);
							$('#reserve_time_edit').val($scope.reserveEdit.reserve_time);

							for (var i=0; i<$scope.listTableZoneEdit.length; i++) {
								for (var j=0; j<$scope.listTableZoneEdit[i].table.length; j++) {
									if ($scope.listTableZoneEdit[i].table[j].table_reserve == true) {
										$scope.table_id.push($scope.listTableZoneEdit[i].table[j].table_id);
									}
								}
							}
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูล...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	}
	// END Edit Unit

	// Update Unit

	$scope.updateReserve = function(id) {
		var reserve_id = $scope.selectedId,
			service_id = $scope.table_status_id,
			reserve_name = $("#detail_edit").val();
			

		if (reserve_id != '' && service_id != '' ) {
			ReserveService.updateReserve(reserve_id, service_id, reserve_name,$scope.table_id,$("#reserve_date_edit").val(),$("#reserve_time_edit").val() ).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		//$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit


}])
.service('ReserveService', ['$http', '$q',function ($http, $q) {


	 this.getAllTableDetail = function (id) {
	 	var conditions = "?table_id=" + id;
		return $http.get('restaurant-api/api_get_table_detail.php'+ conditions,{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTable = function (id) {
		return $http.get('restaurant-api/api_get_all_table.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTableEdit = function (reserve_id) {
		return $http.post('restaurant-api/api_get_all_table_edit.php',{
			 'reserve_id' : reserve_id

        }, function(data, status) {
            return data;
        });
	};

	this.getAllReserveList = function (id) {
		return $http.get('restaurant-api/api_get_all_reserve_list.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.saveTable = function (table_id,table_status_id,detail,reserve_date,reserve_time) {
		return $http.post('restaurant-api/api_save_table.php', {
            'table_id' : table_id,
            'table_status_id' : table_status_id, 
            'detail' : detail,
            'reserve_date': reserve_date,
            'reserve_time': reserve_time,
   
        }, function(data, status) {
            return data;
        });
	};

	this.getAllReserve = function (id) {
		var conditions = "?reserve_id=" + id;

		return $http.get('restaurant-api/api_get_all_reserve.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateReserve = function (reserve_id, service_id, reserve_name, table_id,date,time) {
		return $http.post('restaurant-api/api_update_reserve.php', {
            'reserve_id' : reserve_id,
            'service_id' : service_id,
            'reserve_name' : reserve_name,
            'table_id' : table_id,
            'date': date,
            'time': time
            
        }, function(data, status) {
            return data;
        });
	};
	
	this.getCancelReserve = function () {
	return $http.post('restaurant-api/api_cancel_reserve.php', {
           
        }, function(data, status) {
            return data;
        });
	};


	this.getTableTime = function (table_id,reserve_date,reserve_time) {
		return $http.post('restaurant-api/api_get_reserve_time_by_table.php', {
            'table_id' : table_id,
            'reserve_date': reserve_date,
            'reserve_time': reserve_time,
   
        }, function(data, status) {
            return data;
        });
	};

	this.deleteReserve = function (reserve_id) {
		return $http.post('restaurant-api/api_delete_reserve.php', {
            'reserve_id' : reserve_id,
           
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.user_payment', ['ngRoute'])

.controller('PaymentController', ['$rootScope', '$scope', '$location', '$window', 'PaymentService', function($rootScope, $scope, $location, $window, PaymentService) {
	var route = 'user_payment';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย

	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var date = date.getDate();
	$scope.today = year + '/' + month + '/' + date;

	$scope.listOrderObject = [];
	$scope.OrderObject = [];
	$scope.listOrderDrinkObject = [];
	$scope.autoRefreshTimer = null;
	$scope.totalprice = 0;
	$scope.totalpromotion = 0;
	$scope.promotion = 0;
	$scope.promotionlist = 0;
	$scope.discountPercent = 0;
	$scope.discountPercentdrink = 0;
	$scope.discount = 0;
	$scope.tatal = 0;
	$scope.changeprice = 0;
	$scope.numberprice = null;
	$scope.order_id = 0;
	$scope.totalpricedrink = 0;
	$scope.promotiondrink = 0;
	$scope.promotiondrinklist = 0;
	$scope.discountdrink = 0;
	$scope.tataldrink = 0;
	$scope.changepricedrink = 0;
	$scope.numberpricedrink = null;
	$scope.numberprice = 0;

	$('#report-list').css('display', 'none');  

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				PaymentService.getAllOrder2().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderObject = result.data.orderlist;
						$scope.OrderObject = result.data.orderlist;
						

						if (result.data.promotionlist.length > 0) {
							$scope.discountPercent = result.data.promotionlist[0].pro_discount;
							$scope.discountPercentdrink = result.data.promotionlist[0].pro_discount;
							}

							PaymentService.getAllOrderDrink().then(function (result) {
								$scope.listOrderDrinkObject = result.data.orderdrink;

							  });



					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.printSlip = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


$scope.savePrice = function() {

		var 
			order_id = $scope.order_id, // ตตัดspacebarทั้งหมด
			totalprice = $("#total1").val(), // ตตัดspacebarทั้งหมด
			promotion = $("#total2").val(), // ตตัดspacebarทั้งหมด
			
			discount = $("#total3").val(), // ตตัดspacebarทั้งหมด
			total = $("#total4").val(), 
			price = $("#numberprice").val(),//ดึงค่าจากselectมาไว้ในตัแปล
			changeprice = $("#changeprice").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (price == '') {
			//cm ถ้า password ไม่เหมือนกัน confirm password จะแจ้งเตือน
			
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : ' กรุณาตรวจสอบ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;
			}
			

			//cm ถ้าผ่านมาถึงนี้จะโยนข้อมูลทั้งหมดไปยัง addEmployee ใน EmployeeService เพื่อเอาลง database
			PaymentService.savePrice(order_id, totalprice,  promotion, discount, total, price, changeprice).then(function (result) {
				//cm ถ้า status 200 คือเอาลง database ได้ ไม่มีปัญหา
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}

		
	$scope.calculatetotalpricechange = function(){
var  numberprice = $("#numberprice").val();
$scope.numberprice = numberprice;
$scope.changeprice = numberprice - ($scope.tatal + $scope.tataldrink);

	}

	$scope.calculatetotalprice = function(){

		if ($scope.listOrderObject.length > 0) {

			$scope.totalprice = 0;
			$scope.promotion = 0;
			$scope.promotionlist = 0;
			$scope.discount = 0;
			$scope.tatal = 0;
			$scope.changeprice = 0;
			$scope.numberprice = null;  
			for (var i = 0; i < $scope.listOrderObject.length; i++) {

				$scope.totalprice = $scope.totalprice + $scope.listOrderObject[i].number*$scope.listOrderObject[i].price;	
				$scope.promotion = $scope.totalprice + ($scope.totalprice * 0.07);
				
				if (i == $scope.listOrderObject.length-1) {
					$scope.tatal = $scope.promotion;
					if ($scope.discountPercent > 0) {

						//$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
						$scope.discount = $scope.promotion * $scope.discountPercent / 100;
						$scope.tatal = $scope.tatal - $scope.discount ;
						
					}
						
				}
				
			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {

			$scope.totalpricedrink = 0;
			$scope.promotiondrink = 0;
			$scope.promotiondrinklist = 0;
			$scope.discountdrink = 0;
			$scope.tataldrink = 0;
			$scope.changeprice = 0;
			$scope.numberpricedrink = null;  
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {

				$scope.totalpricedrink = $scope.totalpricedrink + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].price;	
				$scope.promotiondrink = $scope.totalpricedrink + ($scope.totalpricedrink * 0.07);
				
				if (i == $scope.listOrderDrinkObject.length-1) {
					$scope.tataldrink = $scope.promotiondrink;
					if ($scope.discountPercentdrink > 0) {

						//$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
						$scope.discountdrink = $scope.promotiondrink * $scope.discountPercentdrink / 100;
						$scope.tataldrink = $scope.tataldrink - $scope.discountdrink;
						
					}
						
				}
				
			}


		}



	}
	$scope.deleteFood = function(id,food_id,index) {
		var order_id = id
			food_id = food_id;
			

		if (order_id != '' ) {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลรายการอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลรายการอาหาร...',
                            callback : {
                                afterShow : function () {

                                    PaymentService.deleteFood(order_id,food_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											$scope.listOrderObject.splice(index, 1);
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                		
								                		// refresh หน้าจอ
								                		//location.reload();
								                		//$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลรายการอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.deleteDrink = function(id,drink_id,index) {
		var order_id = id
			drink_id = drink_id;
			

		if (order_id != '' ) {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลรายการเครื่องดื่มนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลรายการเครื่องดื่ม...',
                            callback : {
                                afterShow : function () {

                                    PaymentService.deleteDrink(order_id,drink_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											$scope.listOrderDrinkObject.splice(index, 1);
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		//$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลรายการเครื่องดื่มไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.calculatetotalpromotion = function(){
		if ($scope.listOrderObject.length > 0) {
			$scope.totalpromotion = 0;
			$scope.promotion = 0;
			$scope.promotionlist = 0;
			for (var i = 0; i < $scope.listOrderObject.length; i++) {
				$scope.totalpromotion = $scope.totalpromotion + $scope.listOrderObject[i].number*$scope.listOrderObject[i].price;	
				$scope.promotion = $scope.totalpromotion + ($scope.totalpromotion * 0.07);
				$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {
			$scope.totalpromotiondrink = 0;
			$scope.promotiondrink = 0;
			$scope.promotiondrinklist = 0;
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {
				$scope.totalpromotiondrink = $scope.totalpromotiondrink + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].price;	
				$scope.promotiondrink = $scope.totalpromotiondrink + ($scope.totalpromotiondrink * 0.07);
				$scope.promotionlist = $scope.promotiondrink * ($scope.listOrderDrinkObject[i].pro_discount / 100);
			}


		}



	}



	$scope.listOrder = function(order_id) {
		$scope.order_id = order_id;
		PaymentService.getAllOrder(order_id).then(function (result) {
			if (result.data.status == 200) {
				$scope.listOrderObject = result.data.orderlist;
				
			PaymentService.getAllOrderDrink(order_id).then(function (result) {
			if (result.data.status == 200) {
				$scope.listOrderDrinkObject = result.data.orderdrink;
			}
			$scope.calculatetotalprice();
			$scope.calculatetotalpromotion();
		});
			}
		});
		console.log($scope.listOrderObject)
		console.log($scope.listOrderDrinkObject)

	}



	/*$scope.orderfood = function(food_id) {

	var idx = $scope.listOrderFoodObject.findIndex(obj => obj.food_id==food_id);



		//alert(food_id);
		//alert($("#comment_"+food_id).val());
		//alert(idx);

	if (idx == -1) {
		$scope.listOrderFoodObject.push({
			food_id : food_id,
			number : $("#number_"+food_id).val(),
			comment : $("#comment_"+food_id).val(),
			food_name : $("#food_name_"+food_id).text(),
			food_price : $("#food_price_"+food_id).text(),
			type : "food"
		});
	}
	else{
		$scope.listOrderFoodObject[idx].number = parseInt($scope.listOrderFoodObject[idx].number) + parseInt($("#number_"+food_id).val());
		console.log($scope.listOrderFoodObject[idx]);
	}
		$scope.calculatetotalprice();
		console.log($scope.listOrderFoodObject);
	}


$scope.orderdrink = function(drink_id) {

	var idx = $scope.listOrderDrinkObject.findIndex(obj => obj.drink_id==drink_id);



		//alert(food_id);
		//alert($("#comment_"+food_id).val());
		//alert(idx);

	if (idx == -1) {
		$scope.listOrderDrinkObject.push({
			drink_id : drink_id,
			number : $("#number_"+drink_id).val(),
			comment : $("#comment_"+drink_id).val(),
			drink_name : $("#drink_name_"+drink_id).text(),
			drink_price : $("#drink_price_"+drink_id).text(),
			type : "drink"
		});
	}
	else{
		$scope.listOrderDrinkObject[idx].number = parseInt($scope.listOrderDrinkObject[idx].number) + parseInt($("#number_"+drink_id).val());
		console.log($scope.listOrderDrinkObject[idx]);
	}
		$scope.calculatetotalprice();
		console.log($scope.listOrderDrinkObject);
	}

	*/

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					PaymentService.getAllOrderFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderFoodObject = result.data.orderfood;
							$scope.listOrderDrinkObject = result.data.orderdrink;
							//$scope.apply();
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}
	

	// END Delete Unit
}])
.service('PaymentService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addFood = function (food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('restaurant-api/api_add_food.php', {
            'food_name' : food_name, 
            'food_kind_id' : food_kind_id,
            'food_price' : food_price,
   
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderFood = function (status,id, id_food) {
		return $http.post('restaurant-api/api_update_order_food.php', {
            'order_id' : id,
            'status' : status,
            'food_id' : id_food, 
           
        }, function(data, status) {
            return data;
        });
	};

	this.deleteFood = function (order_id,food_id) {
		return $http.post('restaurant-api/api_delete_food_payment.php', {
            'order_id' : order_id,
              'food_id' : food_id,
         
           
        }, function(data, status) {
            return data;
        });
	};

	this.deleteDrink = function (order_id,drink_id) {
		return $http.post('restaurant-api/api_delete_drink_payment.php', {
            'order_id' : order_id,
              'drink_id' : drink_id,
         
           
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFood = function () {
		return $http.get('restaurant-api/api_get_order_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrder = function (order_id) {
		return $http.get('restaurant-api/api_get_order_list.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrder2 = function (order_id) {
		return $http.get('restaurant-api/api_get_order_list2.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink= function (order_id) {
		return $http.get('restaurant-api/api_get_order_drink.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.savePrice = function (order_id, totalprice,  promotion, discount, total, price, changeprice) {
		return $http.post('restaurant-api/api_save_price.php', {
   			'order_id' : order_id,
            'totalprice' : totalprice,
            'promotion' : promotion,
            'discount' : discount,
            'total' : total,
            'price' : price,
            'changeprice' : changeprice,
            
   
        }, function(data, status) {
            return data;
        });
	};
	
}]);
angular.module('RESTAURANT.user_cookmenu', ['ngRoute'])

.controller('CookmenuController', ['$rootScope', '$scope', '$location', 'CookmenuService', function($rootScope, $scope, $location, CookmenuService) {
	var route = 'user_cookmenu';



	$scope.listOrderFoodObject = [];
	$scope.autoRefreshTimer = null;

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				CookmenuService.getAllOrderFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderFoodObject = result.data.orderfood;
						clearInterval($scope.autoRefreshTimer);
						$scope.autorefresh();
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.$on('$routeChangeStart', function($event, next, current) { 

 	 clearInterval($scope.autoRefreshTimer);

 });

	$scope.autorefresh = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			CookmenuService.getAllOrderFood().then(function (result) {
				if (result.data.status == 200) {
					$scope.listOrderFoodObject = result.data.orderfood;
				}
			});
		},5000);//5 วินาที*1000
	}

	$scope.cook = function(status,id, id_food){
		var order_id = id,
			status = status,
			food_id = id_food;
			

		if (order_id != '' ) {
			CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.cookfinish = function(status,id, id_food){
		var order_id = id,
			status = status,
			food_id = id_food;
			

		if (order_id != '' ) {
			CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};


$scope.cancel = function(status,id, id_food){
var order_id = id,
status = status,
food_id = id_food,
food_status_id = 2,
action ='cancel';

if (order_id != '' ) {
CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
	if (result.data.status == 200) {
		

            CookmenuService.deleteFood(food_id, food_status_id,action).then(function (result) {
            	$.noty.clearQueue(); $.noty.closeAll();

				if (result.data.status == 200) {
					noty({
	                type : 'confirm',
	                layout : 'top',
	                modal : true,
	                text: 'คุณต้องการยกเลิกข้อมูลอาหารนี้ใช่หรือไม่?',
	                buttons : [
	                {
	                    addClass : 'btn btn-danger',//คลาสของbootstrap
	                    text : 'ยกเลิก',
	                    onClick : function () {
	                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
	                            closeWith : [],
	                            text : 'กำลังลบข้อมูลอาหาร...',
	                            callback : {
	                                afterShow : function () {

                                CookmenuService.deleteFood(food_id, food_status_id,action).then(function (result) {
                                	$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text :'success',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		// refresh หน้าจอ
							                		//location.reload();
							                		$scope.refreshList();
							                	}
							                }
							            });
									}
											else {
												noty({
									                type : 'error',
									                layout : 'top',
									                modal : true,
									                timeout: 3000,
									                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
									                callback: {
									                	afterClose: function () {
									                		// ปิด noty
									                		$.noty.clearQueue(); $.noty.closeAll();
									                	}
									                }
									            });
											}
										});
	                                }
	                            }
	                        });
	                    }
	                }]
	            });
				}
				else {
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'ยกเลิกข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
        
}


	else {
		// กรณีไม่ใช่200
		noty({
            type : 'error',
            layout : 'top',
            modal : true,
            timeout: 3000,
            text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
            callback: {
            	afterClose: function () {
            		// ปิด noty
            		$.noty.clearQueue(); $.noty.closeAll();
            	}
            }
        });
	}
});
}
else {
noty({
    type : 'warning',
    layout : 'top',
    modal : true,
    timeout: 3000,
    text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
    callback: {
    	afterClose: function () {
    		$.noty.clearQueue(); $.noty.closeAll();
    	}
    }
});
}
};
/*
	$scope.cancel = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    CookmenuService.cancel(food_id, food_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};*/

	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	/*$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				FoodService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listFoodObject = result.data.food;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddFoodForm = function() {
		$("#add_food_name").val('');
		$("#add_food_kind_id").val('');
		$("#add_food_price").val('');
		$("#add_food_status_id").val(999);
	
		
	noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					FoodService.getAllKind().then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listKindObject = result.data.kind;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};*/

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					CookmenuService.getAllOrderFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderFoodObject = result.data.orderfood;
							//$scope.apply();
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}
	/*

	// Add Unit
	$scope.addFood = function() {
		var food_name = $.trim($("#add_food_name").val()), // ตตัดspacebarทั้งหมด
			food_kind_id = $("#add_food_kind_id").val(),
			food_price = $("#add_food_price").val(),
			food_status_id = $("#add_food_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999 ) {
			FoodService.addFood($("#add_food_name").val(), food_kind_id, food_price , food_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editFood = function(id) {
		$scope.selectedId = id;
		$scope.selectedFoodObject = null;
		$scope.selectedKindObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		FoodService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.food.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedFoodObject = result.data.food[0];
							$scope.selectedKindObject = result.data.kind;
					
							if ($scope.selectedFoodObject.food_status_id == 1) {
								$("#edit_food_status_id").val(1);
							} else if ($scope.selectedFoodObject.food_status_id == 2) {
								$("#edit_food_status_id").val(2);
							} else {
								$("#edit_food_status_id").val(0);	
							}
						setTimeout(function() {
								$("#edit_food_kind_id").val($scope.selectedFoodObject.food_kind_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateFood = function(id) {
		var food_id = $.trim($("#edit_food_pk_id").val()),
			food_name = $.trim($("#edit_food_name").val()),
			food_kind_id = $("#edit_food_kind_id").val(),
			food_price = $("#edit_food_price").val(),
			food_status_id = $("#edit_food_status_id").val();

		if (food_id != '' && food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999) {
			FoodService.updateFood(food_id, food_name, food_kind_id, food_price, food_status_id ).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteFood = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    FoodService.deleteFood(food_id, food_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};*/
	// END Delete Unit
}])
.service('CookmenuService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addFood = function (food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('restaurant-api/api_add_food.php', {
            'food_name' : food_name, 
            'food_kind_id' : food_kind_id,
            'food_price' : food_price,
   
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderFood = function (status,id, id_food) {
		return $http.post('restaurant-api/api_update_order_food.php', {
            'order_id' : id,
            'status' : status,
            'food_id' : id_food, 
           
        }, function(data, status) {
            return data;
        });
	};

	this.deleteFood = function (food_id, food_status_id,action) {
		return $http.post('restaurant-api/api_update_food.php', {
            'food_id' : food_id,
            'food_status_id' : food_status_id,
            'action' : action,
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFood = function () {
		return $http.get('restaurant-api/api_get_order_food.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.user_drinkmenu', ['ngRoute'])

.controller('DrinkmenuController', ['$rootScope', '$scope', '$location', 'DrinkmenuService', function($rootScope, $scope, $location, DrinkmenuService) {
	var route = 'user_drinkmenu';



	$scope.listOrderDrinkObject = [];
	$scope.autoRefreshTimer = null;

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkmenuService.getAllOrderDrink().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderDrinkObject = result.data.orderdrink;
						clearInterval($scope.autoRefreshTimer);
						console.log($scope.listOrderDrinkObject )
						$scope.autorefresh();
						
						console.log($scope.listOrderDrinkObject )
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	$scope.$on('$routeChangeStart', function($event, next, current) { 

 	 clearInterval($scope.autoRefreshTimer);

 });

	$scope.autorefresh = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			DrinkmenuService.getAllOrderDrink().then(function (result) {
				if (result.data.status == 200) {
					$scope.listOrderDrinkObject = result.data.orderdrink;
				}
			});
		},5000);//5 วินาที*1000
	}

	$scope.cook = function(status,id, drink_id,drink_status_id,number){
		var order_id = id,
			status = status,
			number = number,
			drink_status_id = drink_status_id,
			drink_id = drink_id;
			

		if (order_id != '' ) {
			DrinkmenuService.updateOrderDrink(status ,order_id,drink_id,drink_status_id,number).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll();
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.cookfinish = function(status,id, drink_id,drink_status_id,number){
		var order_id = id,
			status = status,
			drink_status_id = drink_status_id,
			number = number,
			
			drink_id = drink_id;
			

		if (order_id != '' ) {
			DrinkmenuService.updateOrderDrink(status ,order_id,drink_id,drink_status_id,number).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll();
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					$.noty.clearQueue(); $.noty.closeAll();
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			$.noty.clearQueue(); $.noty.closeAll();
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};


$scope.cancel = function(status,id, drink_id){
var order_id = id,
status = status,
drink_id = drink_id,
drink_status_id = 2,
action ='cancel';

if (order_id != '' ) {
DrinkmenuService.updateOrderDrink(status ,order_id,drink_id).then(function (result) {
	$.noty.clearQueue(); $.noty.closeAll();
	if (result.data.status == 200) {
		

            DrinkmenuService.deleteDrink(drink_id, drink_status_id,action).then(function (result) {
            	$.noty.clearQueue(); $.noty.closeAll();

				if (result.data.status == 200) {
					noty({
	                type : 'confirm',
	                layout : 'top',
	                modal : true,
	                text: 'คุณต้องการยกเลิกข้อมูลอาหารนี้ใช่หรือไม่?',
	                buttons : [
	                {
	                    addClass : 'btn btn-danger',//คลาสของbootstrap
	                    text : 'ยกเลิก',
	                    onClick : function () {
	                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
	                            closeWith : [],
	                            text : 'กำลังลบข้อมูลอาหาร...',
	                            callback : {
	                                afterShow : function () {

                                DrinkmenuService.deleteDrink(drink_id, drink_status_id,action).then(function (result) {
                                	$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text :'success',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		// refresh หน้าจอ
							                		//location.reload();
							                		$scope.refreshList();
							                	}
							                }
							            });
									}
											else {
												$.noty.clearQueue(); $.noty.closeAll();
												noty({
									                type : 'error',
									                layout : 'top',
									                modal : true,
									                timeout: 3000,
									                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
									                callback: {
									                	afterClose: function () {
									                		// ปิด noty
									                		$.noty.clearQueue(); $.noty.closeAll();
									                	}
									                }
									            });
											}
										});
	                                }
	                            }
	                        });
	                    }
	                }]
	            });
				}
				else {
					$.noty.clearQueue(); $.noty.closeAll();
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'ยกเลิกข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
        
}


	else {
		// กรณีไม่ใช่200
		$.noty.clearQueue(); $.noty.closeAll();
		noty({
            type : 'error',
            layout : 'top',
            modal : true,
            timeout: 3000,
            text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
            callback: {
            	afterClose: function () {
            		// ปิด noty
            		$.noty.clearQueue(); $.noty.closeAll();
            	}
            }
        });
	}
});
}
else {
	$.noty.clearQueue(); $.noty.closeAll();
noty({
    type : 'warning',
    layout : 'top',
    modal : true,
    timeout: 3000,
    text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
    callback: {
    	afterClose: function () {
    		$.noty.clearQueue(); $.noty.closeAll();
    	}
    }
});
}
};
/*
	$scope.cancel = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    CookmenuService.cancel(food_id, food_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};*/

	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	/*$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				FoodService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listFoodObject = result.data.food;
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
				});
			}
		}
	});

	// clear textbox value
	$scope.loadAddFoodForm = function() {
		$("#add_food_name").val('');
		$("#add_food_kind_id").val('');
		$("#add_food_price").val('');
		$("#add_food_status_id").val(999);
	
		
	noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					FoodService.getAllKind().then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listKindObject = result.data.kind;
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	};*/


	$scope.refreshList = function() {
		$.noty.clearQueue(); $.noty.closeAll();
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkmenuService.getAllOrderDrink().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderDrinkObject = result.data.orderdrink;
							//$scope.apply();
									}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}
	/*

	// Add Unit
	$scope.addFood = function() {
		var food_name = $.trim($("#add_food_name").val()), // ตตัดspacebarทั้งหมด
			food_kind_id = $("#add_food_kind_id").val(),
			food_price = $("#add_food_price").val(),
			food_status_id = $("#add_food_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999 ) {
			FoodService.addFood($("#add_food_name").val(), food_kind_id, food_price , food_status_id).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_add").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();

		                	}
		                }
		            });
				}
				else {
					noty({
		                type : 'warning',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : result.data.message,
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// do something
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Add Unit

	// Edit Unit
	$scope.editFood = function(id) {
		$scope.selectedId = id;
		$scope.selectedFoodObject = null;
		$scope.selectedKindObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		FoodService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.food.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedFoodObject = result.data.food[0];
							$scope.selectedKindObject = result.data.kind;
					
							if ($scope.selectedFoodObject.food_status_id == 1) {
								$("#edit_food_status_id").val(1);
							} else if ($scope.selectedFoodObject.food_status_id == 2) {
								$("#edit_food_status_id").val(2);
							} else {
								$("#edit_food_status_id").val(0);	
							}
						setTimeout(function() {
								$("#edit_food_kind_id").val($scope.selectedFoodObject.food_kind_id);
							}, 100);
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลหน่วย...',
				                callback: {
				                	afterClose: function () {
				                		// ปิด noty
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit Unit

	// Update Unit
	$scope.updateFood = function(id) {
		var food_id = $.trim($("#edit_food_pk_id").val()),
			food_name = $.trim($("#edit_food_name").val()),
			food_kind_id = $("#edit_food_kind_id").val(),
			food_price = $("#edit_food_price").val(),
			food_status_id = $("#edit_food_status_id").val();

		if (food_id != '' && food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999) {
			FoodService.updateFood(food_id, food_name, food_kind_id, food_price, food_status_id ).then(function (result) {
				if (result.data.status == 200) {
					noty({
		                type : 'success',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลสำเร็จ...',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();

		                		// ปิด modal
		                		$("#close_modal_edit").click()

		                		// refresh หน้าจอ
		                		//location.reload();
		                		$scope.refreshList();
		                	}
		                }
		            });
				}
				else {
					// กรณีไม่ใช่200
					noty({
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'อัพเดทข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
		                callback: {
		                	afterClose: function () {
		                		// ปิด noty
		                		$.noty.clearQueue(); $.noty.closeAll();
		                	}
		                }
		            });
				}
			});
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
	// END Update Unit

	// Delete Unit
	$scope.deleteFood = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
                buttons : [
                {
                    addClass : 'btn btn-danger',//คลาสของbootstrap
                    text : 'ยกเลิก',
                    onClick : function () {
                        $.noty.clearQueue(); $.noty.closeAll();//หลังclickจะทำ
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
                            closeWith : [],
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    FoodService.deleteFood(food_id, food_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : result.data.noty_type,
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : result.data.message,
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();

								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                	}
								                }
								            });
										}
										else {
											noty({
								                type : 'error',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
								                callback: {
								                	afterClose: function () {
								                		// ปิด noty
								                		$.noty.clearQueue(); $.noty.closeAll();
								                	}
								                }
								            });
										}
									});
                                }
                            }
                        });
                    }
                }]
            });
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน...',
                callback: {
                	afterClose: function () {
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};*/
	// END Delete Unit
}])
.service('DrinkmenuService', ['$http', '$q',function ($http, $q) {

	this.getAllUnit = function () {
		return $http.get('restaurant-api/api_get_unitdetail.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrink = function () {
		return $http.get('restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addDrink = function (drink_name, drink_unit_id, drink_price, drink_status_id) {
		return $http.post('restaurant-api/api_add_drink.php', {
            'drink_name' : drink_name, 
            'drink_unit_id' : drink_unit_id,
            'drink_price' : drink_price,
   
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_drink.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderDrink = function (status,id, drink_id,drink_status_id,number) {
		return $http.post('restaurant-api/api_update_order_drink.php', {
            'order_id' : id,
            'status' : status,
            'drink_status_id' : drink_status_id,
            'number' : number,
            'drink_id' : drink_id, 
            
        }, function(data, status) {
            return data;
        });
	};

	this.deleteDrink = function (drink_id, drink_status_id) {
		return $http.post('restaurant-api/api_delete_drink.php', {
            'drink_id' : drink_id,
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink_new.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);
angular.module('RESTAURANT.user_report', ['ngRoute'])

.controller('ReportController', ['$rootScope', '$scope', '$location', 'ReportService', '$window', function($rootScope, $scope, $location, ReportService, $window) {
	var route = 'user_report';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];
	 $scope.totalPrice = 0;

	 $('#report-list').css('display', 'none');

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReportService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.orderlist;

									$scope.calculateTotalPrice();

									ReportService.getAllOrderDrink().then(function (result) {
										$scope.reportOrderDrinkObject = result.data.order;
										
										$scope.calculateTotalPrice();
									});

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});

	$scope.calculateTotalPrice = function () {
		$scope.totalPrice = 0;
		if ($scope.reportOrderObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderObject[i].price * $scope.reportOrderObject[i].number);
			}
		}
		if ($scope.reportOrderDrinkObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderDrinkObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderDrinkObject[i].price * $scope.reportOrderDrinkObject[i].number);
			}
		}
	}

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReportService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.orderlist;

							$scope.calculateTotalPrice();
							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.loadAddReportForm = function() {
		
		var report_start =  $("#report_start").val(),
		    report_end = $("#report_end").val();

		   
				ReportService.getAllOrderFoodReport(report_start, report_end).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;
						$scope.reportOrderDrinkObject = result.data.order_drink;

						$scope.calculateTotalPrice();
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		//$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
		
	};

	$scope.printReport = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


	// END Delete Unit
}])
.service('ReportService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink_report.php', {
        }, function(data, status) {
            return data;
        });
	};
	
	this.getAllOrderFoodReport = function (report_start, report_end) {
		return $http.post('restaurant-api/api_get_order_time_report.php', {
			'report_start' : report_start, 
        	 'report_end' : report_end, 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);
angular.module('RESTAURANT.user_report_time', ['ngRoute'])

.controller('ReporttimeController', ['$rootScope', '$scope', '$location', 'ReporttimeService', '$window', function($rootScope, $scope, $location, ReporttimeService, $window) {
	var route = 'user_report_time';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];
	 $scope.totalPrice = 0;

	 $('#report-list').css('display', 'none');

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReporttimeService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.orderlist;

									$scope.calculateTotalPrice();

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});

	$scope.calculateTotalPrice = function () {
		$scope.totalPrice = 0;
		if ($scope.reportOrderObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderObject[i].price * $scope.reportOrderObject[i].number);
			}
		}
		if ($scope.reportOrderDrinkObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderDrinkObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderDrinkObject[i].price * $scope.reportOrderDrinkObject[i].number);
			}
		}
	}

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReporttimeService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.orderlist;

							$scope.calculateTotalPrice();

							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.loadAddReportForm = function() {
		
		var report_start =  $("#report_start").val(),
		    report_end = $("#report_end").val();

		   
				ReporttimeService.getAllOrderFoodReport(report_start, report_end).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;
						
						$scope.calculateTotalPrice();
						
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		//$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
		
	};

	$scope.printReport = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


	// END Delete Unit
}])
.service('ReporttimeService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report_time.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFoodReport = function (report_start, report_end) {
		return $http.post('restaurant-api/api_get_order_time_report_time.php', {
			'report_start' : report_start, 
        	 'report_end' : report_end, 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);
angular.module('RESTAURANT.user_report_year', ['ngRoute'])

.controller('ReportyearController', ['$rootScope', '$scope', '$location', 'ReportyearService', '$window', function($rootScope, $scope, $location, ReportyearService, $window) {
	var route = 'user_report_year';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];
	 $scope.totalPrice = 0;

	 $('#report-list').css('display', 'none');

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReportyearService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.orderlist;

									$scope.calculateTotalPrice();

									ReportyearService.getAllOrderDrink().then(function (result) {
										$scope.reportOrderDrinkObject = result.data.order;
										
										$scope.calculateTotalPrice();
										
									});

					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});

	$scope.calculateTotalPrice = function () {
		$scope.totalPrice = 0;
		if ($scope.reportOrderObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderObject[i].price * $scope.reportOrderObject[i].number);
			}
		}
		if ($scope.reportOrderDrinkObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderDrinkObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + ($scope.reportOrderDrinkObject[i].price * $scope.reportOrderDrinkObject[i].number);
			}
		}
	}

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReportyearService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.orderlist;

							$scope.calculateTotalPrice();

							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.loadAddReportForm = function() {
		
		var  year =  $("#year").val();

		   
				ReportyearService.getAllOrderFoodReport(year).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;
						$scope.reportOrderDrinkObject = result.data.order_drink;

						$scope.calculateTotalPrice();

						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		//$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
		
	};

	$scope.printReport = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


	// END Delete Unit
}])
.service('ReportyearService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report_year.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink_report_year.php', {
        }, function(data, status) {
            return data;
        });
	};
	
	this.getAllOrderFoodReport = function (year) {
		return $http.post('restaurant-api/api_get_order_time_report_year.php', {
			'year' : year, 
        	 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);
angular.module('RESTAURANT.user_report_expense', ['ngRoute'])

.controller('ReportexpenseController', ['$rootScope', '$scope', '$location', 'ReportexpenseService', '$window', function($rootScope, $scope, $location, ReportexpenseService, $window) {
	var route = 'user_report_expense';
	$rootScope.loadCookies();
	$('.datepicker').datetimepicker({ format: 'YYYY-MM-DD' });

	 $scope.reportOrderObject = [];
	 $scope.reportOrderDrinkObject = [];
	 $scope.totalPrice = 0;

	 $('#report-list').css('display', 'none');

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReportexpenseService.getAllOrder().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.reportOrderObject = result.data.order;

									$scope.calculateTotalPrice();
					}

					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000, // 3 seconds
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		$.noty.clearQueue(); $.noty.closeAll();
			                	}
			                }
			            });
					}
					
				});


			}
		}
	});

	$scope.calculateTotalPrice = function () {
		$scope.totalPrice = 0;
		if ($scope.reportOrderObject.length > 0) {
			for (var i = 0; i < $scope.reportOrderObject.length; i++) {
				$scope.totalPrice = $scope.totalPrice + parseInt($scope.reportOrderObject[i].dpd_total_price);
			}
		}
	}

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReportexpenseService.getAllOrder().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.reportOrderObject = result.data.order;

							$scope.calculateTotalPrice();

							//$scope.apply(function(){});
						}
						else {
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000, // 3 seconds
				                text : result.data.message,
				                callback: {
				                	afterClose: function () {
				                		$.noty.clearQueue(); $.noty.closeAll();
				                	}
				                }
				            });
						}
					});
				}
			}
		});
	}

	$scope.loadAddReportForm = function() {
		
		var month =  $("#month").val();

		   
				ReportexpenseService.getAllOrderFoodReport(month).then(function (result) {
					if (result.data.status == 200) {
						$scope.reportOrderObject = result.data.order;

						$scope.calculateTotalPrice();
						
						noty({
			                type : 'success',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// ปิด modal
			                		$("#close_modal_add").click()

			                		// refresh หน้าจอ
			                		//location.reload();
			                		//$scope.refreshList();

			                	}
			                }
			            });
					}
					else {
						noty({
			                type : 'warning',
			                layout : 'top',
			                modal : true,
			                timeout: 3000,
			                text : result.data.message,
			                callback: {
			                	afterClose: function () {
			                		// ปิด noty
			                		$.noty.clearQueue(); $.noty.closeAll();

			                		// do something
			                	}
			                }
			            });
					}
				});
		
	};

	$scope.printReport = function () {
		let rp = $("#report-list").html();
		$rootScope.reportHtml = rp;

		$window.localStorage.setItem('reportHtml', $rootScope.reportHtml);

		window.open('restaurant-web/#/frontend/user_all_report_print', '_blank');
	}


	// END Delete Unit
}])
.service('ReportexpenseService', ['$http', '$q',function ($http, $q) {

	
	this.getAllOrder = function () {
		return $http.get('restaurant-api/api_get_order_list_report_expense.php', {
        }, function(data, status) {
            return data;
        });
	};

	
	this.getAllOrderFoodReport = function (month) {
		return $http.post('restaurant-api/api_get_order_time_report_expense.php', {
			'month' : month, 
        	 

        }, function(data, status) {
        	 
            return data;
        });
	};

}]);
angular.module('RESTAURANT.user_all_report_print', ['ngRoute'])

.controller('AllReportPrintController', ['$rootScope', '$scope', '$sce', '$window', function($rootScope, $scope, $sce, $window) {
	var route = 'user_all_report_print';

	$rootScope.loadCookies();

	$rootScope.reportHtml = $window.localStorage.getItem('reportHtml');

	$scope.reportHtml = $sce.trustAsHtml($rootScope.reportHtml);


	//function สำหรับ export html รายงาน เป็น pdf
    $scope.export = function(){
        html2canvas(document.getElementById('export'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Report.pdf");
            }
        });
    }

    // ทำการเรียก function export เพื่อ export pdf
    $scope.export();

}]);