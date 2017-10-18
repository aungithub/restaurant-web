'use strict';

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
		var pos_id = $.trim($("#edit_pos_id").val()),
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

                                    PositionService.deletePosition(pos_id, pos_status_id).then(function (result) {
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
.service('PositionService', ['$http', '$q',function ($http, $q) {

	this.getAllRoles = function () {
		return $http.get('http://localhost/restaurant-api/api_get_role.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllPosition = function () {
		return $http.get('http://localhost/restaurant-api/api_get_position.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addPosition = function (pos_name, pos_role_id, pos_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_position.php', {
            'name' : pos_name,
            'role' : pos_role_id,
            'status' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?pos_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_position.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updatePosition = function (pos_id, pos_name, pos_role_id, pos_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_position.php', {
            'pos_id' : pos_id,
            'pos_name' : pos_name,
            'pos_role_id' : pos_role_id,
            'pos_status_id' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deletePosition = function (pos_id, pos_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_position.php', {
            'pos_id' : pos_id,
            'pos_status_id' : pos_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);