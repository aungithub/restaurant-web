'use strict';

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
				EmployeeService.getAllEmployee().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listEmployeeObject = result.data.employees;
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
	$scope.loadAddEmployeeForm = function() {
		$("#add_emp_firstname").val('');
		$("#add_emp_lastname").val('');
		$("#add_emp_card_id").val('');
		$("#add_emp_username").val('');
		$("#add_emp_password").val('');
		$("#add_emp_confirm_password").val('');
		$("#add_emp_position_id").val(999);

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					EmployeeService.getAllPositions().then(function (result) {
						if (result.data.status == 200 && result.data.positions.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listPositionsObject = result.data.positions;
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
					EmployeeService.getAllEmployee().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listEmployeeObject = result.data.employees;
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
	$scope.addEmployee = function() {
		var emp_firstname = $.trim($("#add_emp_firstname").val()), // ตตัดspacebarทั้งหมด
			emp_lastname = $.trim($("#add_emp_lastname").val()), // ตตัดspacebarทั้งหมด
			emp_username = $.trim($("#add_emp_username").val()), // ตตัดspacebarทั้งหมด
			emp_password = $.trim($("#add_emp_password").val()), // ตตัดspacebarทั้งหมด
			emp_confirm_password = $.trim($("#add_emp_confirm_password").val()), // ตตัดspacebarทั้งหมด
			emp_card_id = $.trim($("#add_emp_card_id").val()), // ตตัดspacebarทั้งหมด
			emp_position_id = $("#add_emp_position_id").val(), 
			emp_status_id = $("#add_emp_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (emp_firstname != ''&& emp_lastname != '' && emp_username != '' && emp_password != '' && emp_card_id != '' && emp_position_id != '' && emp_status_id != 999 ) {
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

			EmployeeService.addEmployee($("#add_emp_firstname").val(), $("#add_emp_lastname").val(), $("#add_emp_username").val(), $("#add_emp_password").val(),  $("#add_emp_card_id").val(), $("#add_emp_position_id").val(), emp_status_id).then(function (result) {
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
	$scope.editEmployee = function(id) {
		$scope.selectedId = id;
		$scope.selectedEmployeeObject = null;
		$scope.selectedPositionObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		EmployeeService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.employees.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedEmployeeObject = result.data.employees[0];
							$scope.selectedPositionObject = result.data.position;

							if ($scope.selectedEmployeeObject.emp_status_id == 1) {
								$("#edit_emp_status_id").val(1);
							} else if ($scope.selectedEmployeeObject.emp_status_id == 2) {
								$("#edit_emp_status_id").val(2);
							} else {
								$("#edit_emp_status_id").val(0);	
							}

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

	// Update Unit
	$scope.updateEmployee = function(id) {
		var emp_id = $.trim($("#edit_emp_id").val()),
			emp_firstname = $.trim($("#edit_emp_firstname").val()),
			emp_lastname = $.trim($("#edit_emp_lastname").val()),
			emp_username = $.trim($("#edit_emp_username").val()),
			emp_password = $.trim($("#edit_emp_password").val()),
			emp_confirm_password = $.trim($("#edit_emp_confirm_password").val()),
			emp_card_id = $.trim($("#edit_emp_card_id").val()),
			emp_position_id = $("#edit_emp_position_id").val(),
			emp_status_id = $("#edit_emp_status_id").val();

		if (emp_id != '' && emp_firstname != '' && emp_lastname != '' && emp_username != '' && emp_card_id != '' && emp_position_id != '' && emp_status_id != 999 && emp_position_id != null && emp_status_id != null) {
			
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

			EmployeeService.updateEmployee(emp_id, $("#edit_emp_firstname").val(), $("#edit_emp_lastname").val(), $("#edit_emp_username").val(), $("#edit_emp_password").val(), $("#edit_emp_card_id").val(), emp_position_id, emp_status_id).then(function (result) {
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
	$scope.deleteEmployee = function(id) {
		var emp_id = id,
			emp_status_id = 2;

		if (emp_id != '') {
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
                            text : 'กำลังลบข้อมูลหน่วย...',
                            callback : {
                                afterShow : function () {

                                    EmployeeService.deleteEmployee(emp_id, emp_status_id).then(function (result) {
                                    	$.noty.clearQueue(); $.noty.closeAll();

										if (result.data.status == 200) {
											noty({
								                type : 'success',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลหน่วยสำเร็จ...',
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
								                text : 'ลบข้อมูลหน่วยไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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

	this.getAllPositions = function () {
		return $http.get('http://localhost/restaurant-api/api_get_position.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllEmployee = function () {
		return $http.get('http://localhost/restaurant-api/api_get_employee.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addEmployee = function (emp_firstname, emp_lastname, emp_username, emp_password, emp_card_id, emp_pos_id, emp_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_employee.php', {
            'firstname' : emp_firstname,
            'lastname' : emp_lastname,
            'username' : emp_username,
            'password' : emp_password,
            'idc' : emp_card_id,
            'position' : emp_pos_id,
            'status' : emp_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?emp_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_employee.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateEmployee = function (emp_id, emp_firstname, emp_lastname, emp_username, emp_password, emp_card_id, emp_position_id, emp_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_employee.php', {
            'emp_id' : emp_id,
            'emp_firstname' : emp_firstname,
            'emp_lastname' : emp_lastname,
            'emp_username' : emp_username,
            'emp_password' : emp_password,
            'emp_card_id' : emp_card_id,
            'emp_position_id' : emp_position_id,
            'emp_status_id' : emp_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteEmployee = function (emp_id, emp_firstname, emp_lastname, emp_user, emp_pass, emp_idcard, emp_pos_id, emp_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_employee.php', {
            'emp_id' : emp_id,
            'emp_firstname' : emp_firstname,
            'pos_role_id' : emp_lastname,
            'emp_status_id' : emp_user,
            'emp_id' : emp_pass,
            'emp_firstname' : emp_idcard,
            'pos_role_id' : emp_pos_id,
            'emp_status_id' : emp_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);