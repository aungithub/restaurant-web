'use strict';

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
								                type : 'success',
								                layout : 'top',
								                modal : true,
								                timeout: 3000,
								                text : 'ลบข้อมูลหน่วยหลักสำเร็จ...',
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
		return $http.get('http://localhost/restaurant-api/api_get_unit.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addUnit = function (unit_name, unit_number, unit_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_unit.php', {
            'name' : unit_name,
            'number' : unit_number,
            'status' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?unit_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_unit.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateUnit = function (unit_id, unit_name, unit_number, unit_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_unit.php', {
            'unit_id' : unit_id,
            'unit_name' : unit_name,
            'unit_number' : unit_number,
            'unit_status_id' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteUnit = function (unit_id, unit_status_id) {
		return $http.post('http://localhost/restaurant-api/api_delete_unit.php', {
            'unit_id' : unit_id,
            'unit_status_id' : unit_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);