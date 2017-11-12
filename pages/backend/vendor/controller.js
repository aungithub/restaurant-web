'use strict';

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
		return $http.get('http://localhost/restaurant-api/api_get_vendor.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addVendor = function (vendor_name, vendor_tel, vendor_address, vendor_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_vendor.php', {
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

		return $http.get('http://localhost/restaurant-api/api_get_vendor.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateVendor = function (vendor_id, vendor_name, vendor_tel, vendor_address, vendor_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_vendor.php', {
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
		return $http.post('http://localhost/restaurant-api/api_delete_vendor.php', {
            'vendor_id' : vendor_id,
            'vendor_status_id' : vendor_status_id,
        }, function(data, status) {
            return data;
        });
	};
}]);