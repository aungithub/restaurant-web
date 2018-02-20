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
		return $http.get('http://localhost/restaurant-api/api_get_position.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับดึงข้อมูลพนักงานทั้งหมด
	this.getAllEmployee = function () {
		//cm ใช้ http method get ในการดึง
		return $http.get('http://localhost/restaurant-api/api_get_employee.php', {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับ add พนักงานที่ user กรอก ลงในฐานข้อมูล
	this.addEmployee = function (emp_firstname, emp_lastname, emp_card_id, emp_username, emp_password, emp_tel, emp_pos_id, emp_status_id,listTelephone) {
		//cm ใช้ http method pos ในการ post ข้อมูลไปยัง api เพื่อจะเอาลง database
		return $http.post('http://localhost/restaurant-api/api_add_employee.php', {
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

		return $http.get('http://localhost/restaurant-api/api_get_employee.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	//cm function สำหรับใช้ update ข้อมูลพนักงาน
	this.updateEmployee = function (emp_id, emp_firstname, emp_lastname, emp_card_id, emp_username, emp_password, emp_tel, emp_position_id, emp_status_id,listTelephone) {
		return $http.post('http://localhost/restaurant-api/api_update_employee.php', {
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
		return $http.post('http://localhost/restaurant-api/api_delete_employee.php', {
            'emp_id' : emp_id,
           
            'emp_status_id' : emp_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);