'use strict';

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

	$scope.load_account_data = function() {

		AccountService.getAccountID().then(function (result_Account_ID) {
			$scope.account_id = result_Account_ID.data.Account_ID;

			AccountService.getAccount().then(function (result) {
				$scope.account = result.data.account;
				$scope.country = result.data.country;

				$('#firstname').val('');
				$('#lastname').val('');
				$('#username').val('');
				$('#password').val('');
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

	};

	$scope.deleteaccount = function (Account_ID) {
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

	$scope.search = function () {
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
		return $http.get('http://localhost/restaurant-api/api_get_account_id.php', {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.getAccount = function () {
		return $http.get('http://localhost/restaurant-api/api_get_account.php', {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.search = function (search) {
		return $http.get('http://localhost/restaurant-api/api_get_account.php?search=' + search, {
	    }, function(data, status) {
	        return data;
	    });
	};

	this.delete = function (Account_ID) {
		return $http.post('http://localhost/restaurant-api/api_delete_account.php', {
			'Account_ID': Account_ID
	    }, function(data, status) {
	        return data;
	    });
	};

	this.checkusername = function (username) {
		return $http.post('http://localhost/restaurant-api/api_check_account_username.php', {
			'username': username
	    }, function(data, status) {
	        return data;
	    });
	};

	this.addAccount = function (data) {
		return $http.post('http://localhost/restaurant-api/api_add_account.php', data, function(data, status) {
	        return data;
	    });
	};
}]);