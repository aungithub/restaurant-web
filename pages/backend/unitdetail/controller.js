'use strict';

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
	$rootScope.$emit('IndexController.hideLoginShowLogout');

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
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

	$scope.loadAddUnitdetailForm = function() {
		$("#add_unitdetail_number").val('');
	};

	// Add Unit
	$scope.addUnitdetail = function() {
		var unitdetail_number = 1234,//$.trim($("#add_unitdetail_number").val()),
			unitdetail_unit_id = $("#add_unitdetail_unit_id").val(),
			unitdetail_status_id = $("#add_unitdetail_status_id").val();

		if (unitdetail_number != '' && unitdetail_unit_id != '' && unitdetail_status_id != 999 ) {
			UnitdetailService.addUnitdetail(unitdetail_number, unitdetail_unit_id, unitdetail_status_id).then(function (result) {
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
											UnitdetailService.getAllUnitdetail().then(function (result) {
												$.noty.clearQueue(); $.noty.closeAll();

												if (result.data.status == 200) {
													$scope.listUnitdetailObject = result.data.unitdetail;
													// refresh list
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

							if ($scope.selectedUnitdetailObject.unitdetail_status_id == 1) {
								$("#edit_unitdetail_status_id").val(1);
							} else if ($scope.selectedUnitdetailObject.unitdetail_status_id == 2) {
								$("#edit_unitdetail_status_id").val(2);
							} else {
								$("#edit_unitdetail_status_id").val(0);	
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
	$scope.updateUnitdetail = function(id) {
		var unitdetail_id = $.trim($("#edit_unitdetail_id").val()),
			unitdetail_number = $.trim($("#edit_unitdetail_number").val()),
			unitdetail_unit_id = $("#edit_unitdetail_unit_id").val(),
			unitdetail_status_id = $("#edit_unit_status_id").val();

		if (unitdetail_id != '' && unitdetail_number != '' && unitdetail_unit_id != '' && unitdetail_status_id != 999) {
			UnitdetailService.updateUnitdetail(unitdetail_id, unitdetail_number, unitdetail_unit_id, unitdetail_status_id).then(function (result) {
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
		                		$scope.$apply();
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
                text: 'คุณต้องการลบข้อมูลหน่วยนี้ใช่หรือไม่?',
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
                            text : 'กำลังลบข้อมูลหน่วย...',
                            callback : {
                                afterShow : function () {

                                    UnitdetailService.deleteUnitdetail(unitdetail_id, unitdetail_status_id).then(function (result) {
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
								                		$scope.$apply();
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
.service('UnitdetailService', ['$http', '$q',function ($http, $q) {

	this.getAllUnitdetail = function () {
		return $http.get('http://localhost/restaurant-api/api_get_unitdetail.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addUnitdetail = function (unitdetail_number, unitdetail_unit_id, unitdetail_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_unitdetail.php', {
            'number' : unitdetail_number,
            'unit_id' : unitdetail_unit_id,
            'status' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?unitdetail_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_unitdetail.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateUnitdetail = function (unitdetail_id, unitdetail_number, unitdetail_unit_id, unitdetail_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_unitdetail.php', {
            'unitdetail_id' : unitdetail_id,
            'unitdetail_number' : unitdetail_number,
            'unitdetail_unit_id' : unitdetail_unit_id,
            'unitdetail_status_id' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deleteUnitdetail = function (unitdetail_id, unitdetail_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_unitdetail.php', {
            'unitdetail_id' : unitdetail_id,
            'unitdetail_status_id' : unitdetail_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);