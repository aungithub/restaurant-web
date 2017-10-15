'use strict';

angular.module('RESTAURANT.admin_drink', ['ngRoute'])

.controller('DrinkController', ['$rootScope', '$scope', '$location', 'DrinkService', function($rootScope, $scope, $location, DrinkService) {
	var route = 'admin_drink';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkObject = null;
	$scope.selectedId = "";
	$scope.selectedDrinkObject = null;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowLogout');

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
				DrinkService.getAllDrink().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkObject = result.data.drink;
						console.log($scope.listDrinkObject);
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
	$scope.loadAddDrinkForm = function() {
		$("#add_drink_name").val('');
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
	$scope.addDrink = function() {
		var drink_name = $.trim($("#add_drink_name").val()), // ตตัดspacebarทั้งหมด
			drink_number = 1, //$("#add_position_role_id").val()
			drink_price = $("#add_drink_price").val();//ดึงค่าจากselectมาไว้ในตัแปล
			drink_status_id = 1, //$("#add_position_role_id").val()
			drink_unit_id = $("#add_drink_unit_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (drink_name != '' && drink_number != '' && drink_price != '' && drink_status_id != '' && drink_unit_id != 999 ) {
			DrinkService.addDrink($("#add_drink_name").val(), drink_number, drink_price, drink_status_id, drink_unit_id).then(function (result) {
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
	$scope.editDrink = function(id) {
		$scope.selectedId = id;
		$scope.selectedDrinkObject = null;

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

							if ($scope.selectedDrinkObject.drink_status_id == 1) {
								$("#edit_drink_status_id").val(1);
							} else if ($scope.selectedDrinkObject.drink_status_id == 2) {
								$("#edit_drink_status_id").val(2);
							} else {
								$("#edit_drink_status_id").val(0);	
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
	$scope.updateDrink = function(id) {
		var drink_id = $.trim($("#edit_drink_id").val()),
			drink_name = $.trim($("#edit_drink_name").val()),
			drink_number = $("#edit_drink_number").val(),
			drink_price = $("#edit_drink_price").val();
			drink_status_id = $("#edit_drink_status_id").val(),
			drink_unit_id = $("#edit_drink_unit_id").val();

		if (drink_id != '' && drink_name != '' && drink_number != '' && drink_price != '' && drink_status_id != '' && drink_unit_id != 999) {
			DrinkService.updateDrink(drink_id, drink_name, drink_number, drink_price, drink_status_id, drink_unit_id).then(function (result) {
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
	$scope.deleteDrink = function(id) {
		var drink_id = id,
			drink_status_id = 2;

		if (drink_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลหน่วยนี้ใช่หรือไม่?',
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

                                    DrinkService.deleteDrink(drink_id, drink_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : 'success',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลสำเร็จ...',
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
	// END Delete Unit
}])
.service('DrinkService', ['$http', '$q',function ($http, $q) {

	this.getAllDrink = function () {
		return $http.get('http://localhost/restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addDrink = function (drink_name, drink_number, drink_price, drink_status_id, drink_unit_id) {
		return $http.post('http://localhost/restaurant-api/api_add_drink.php', {
            'name' : drink_name,
            'number' : drink_number,
            'price' : drink_price,
             'status' : drink_status_id,
            'unit' : drink_unit_id,
            
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?drink_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_drink.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateDrink = function (drink_id, drink_name, drink_number, drink_price, drink_status_id, drink_unit_id) {
		return $http.post('http://localhost/restaurant-api/api_update_drink.php', {
             'drink_id' : drink_id,
             'drink_name' : drink_name,
            'drink_number' : drink_number,
            'drink_price' : drink_price,
             'drink_status_id' : drink_status_id,
            'drink_unit_id' : drink_unit_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteDrink = function (drink_id, drink_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_drink.php', {
            'drink_id' : drink_id,
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);