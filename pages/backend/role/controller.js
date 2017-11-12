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

	// Add Unit
	$scope.addRole = function() {
		var roles_pages = [],
			role_back_pages_string = "";
		$('.roles_back input[type="checkbox"]:checked').each(function() {
			if (role_back_pages_string != '') {
				role_back_pages_string += ',';
			}
	    	roles_pages.push($(this).val());
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
	// END Add Unit

	// Edit Unit
	$scope.editRole = function(id) {
		$scope.selectedId = id;
		$scope.selectedroleObject = null;
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

							// for backend pages
							if ($scope.selectedroleObject.role_back != null && $scope.selectedroleObject.role_back.length > 0) {
								var roles = $scope.selectedroleObject.role_back.split(',');

								for (var i = 0; i < roles.length; i++) {
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
		return $http.get('http://localhost/restaurant-api/api_get_role.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addrole = function (role_name, role_back_pages_string, role_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_role.php', {
            'name' : role_name,
            'role_back_pages_string' : role_back_pages_string,
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

	this.updateRole = function (role_id, role_name, role_back_pages_string, role_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_role.php', {
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
		return $http.post('http://localhost/restaurant-api/api_delete_role.php', {
            'role_id' : role_id,
            'role_status_id' : role_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);