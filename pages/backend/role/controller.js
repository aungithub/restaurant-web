'use strict';

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
				RoleService.getAllrole().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listRoleObject = result.data.roles;
						console.log($scope.listRoleObject)
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
	$scope.addrole = function() {
		var role_name = $.trim($("#add_role_name").val()), // ตตัดspacebarทั้งหมด
			role_front = $("#add_role_id").val(),
			role_back = $("#add_role_back").val(),
			role_status_id = $("#add_role_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (role_name != '' && role_front != '' && role_back != '' && role_status_id != 999 ) {
			roleService.addrole($("#add_role_name").val(), role_front, role_back, role_status_id).then(function (result) {
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
	$scope.editrole = function(id) {
		$scope.selectedId = id;
		$scope.selectedroleObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		roleService.getByID($scope.selectedId).then(function (result) {
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
	$scope.updaterole = function(id) {
		var role_id = $.trim($("#edit_role_id").val()),
			role_name = $.trim($("#edit_role_name").val()),
			role_front = $("#edit_role_front").val(),
			role_back = $("#edit_role_back").val(),
			role_status_id = $("#edit_role_status_id").val();

		if (role_id != '' && role_name != '' && role_status_id != 999) {
			roleService.updaterole(role_id, role_name, role_front, role_back, role_status_id).then(function (result) {
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
	$scope.deleterole = function(id) {
		var role_id = id,
			role_status_id = 2;

		if (role_id != '') {
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

                                    RoleService.deleterole(role_id, role_status_id).then(function (result) {
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
.service('RoleService', ['$http', '$q',function ($http, $q) {

	this.getAllrole = function () {
		return $http.get('http://localhost/restaurant-api/api_get_role.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addrole = function (role_name, role_front, role_back, role_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_role.php', {
            'name' : role_name,
            'role_front' : role_front,
            'role_back' : role_back,
            'status' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?role_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_role.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updaterole = function (role_id, role_name, role_front, role_back, role_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_role.php', {
            'role_id' : role_id,
            'role_name' : role_name,
            'role_front' : role_front,
            'role_back' : role_back,
            'role_status_id' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleterole = function (role_id, role_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_role.php', {
            'role_id' : role_id,
            'role_status_id' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);