'use strict';

angular.module('RESTAURANT.admin_promotion', ['ngRoute'])

.controller('PromotionController', ['$rootScope', '$scope', '$location', 'PromotionService', function($rootScope, $scope, $location, PromotionService) {
	var route = 'admin_promotion';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listPromotionObject = null;
	$scope.selectedId = "";
	$scope.selectedPromotionObject = null;

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
				PromotionService.getAllpromotion().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listPromotionObject = result.data.promotion;
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
	$scope.loadAddromotionForm = function() {
		$("#add_pro_name").val('');
		$("#add_pro_discount").val('');
		$("#add_pro_start").val('');
		$("#add_pro_end").val('');
		$("#add_pro_status_id").val(999);
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					PromotionService.getAllpromotion().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listPromotionObject = result.data.promotion;
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
	$scope.addpromotion = function() {
		var pro_name = $.trim($("#add_pro_name").val()), // ตตัดspacebarทั้งหมด
			pro_discount = $("#add_pro_discount").val(),
			pro_start = $("#edit_pro_start").val(),
			pro_end = $("#edit_pro_end").val(),
			pro_status_id = $("#add_pro_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (pro_name != '' && pro_discount != '' && pro_start != '' && pro_end != '' && pro_status_id != 999 ) {
			PromotionService.addpromotion($("#add_pro_name").val(), pro_discount, pro_start, pro_end, pro_status_id).then(function (result) {
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
	$scope.editpromotion = function(id) {
		$scope.selectedId = id;
		$scope.selectedPromotionObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		PromotionService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.promotion.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedPromotionObject = result.data.promotion[0];

							if ($scope.selectedpromotionObject.pro_status_id == 1) {
								$("#edit_pro_status_id").val(1);
							} else if ($scope.selectedpromotionObject.pro_status_id == 2) {
								$("#edit_pro_status_id").val(2);
							} else {
								$("#edit_pro_status_id").val(0);	
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
	$scope.updatepromotion = function(id) {
		var pro_id = $.trim($("#edit_pro_id").val()),
			pro_name = $.trim($("#edit_pro_name").val()),
			pro_discount = $("#edit_pro_discount").val(),
			pro_start = $("#edit_pro_start").val(),
			pro_end = $("#edit_pro_end").val(),
			pro_status_id = $("#edit_pro_status_id").val();
			
		if (pro_id != '' && pro_name != '' && pro_discount != '' && pro_start != '' && pro_end != '' && pro_status_id != 999) {
			PromotionService.updatepromotion(pro_id, pro_name, pro_discount, start,pro_end, pro_status_id).then(function (result) {
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
	$scope.deletepromotion = function(id) {
		var pro_id = id;
		if (pro_id != '') {
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

                                    PromotionService.deletepromotion(pro_id).then(function (result) {
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
.service('PromotionService', ['$http', '$q',function ($http, $q) {

	this.getAllpromotion = function () {
		return $http.get('http://localhost/restaurant-api/api_get_promotion.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addpromotion = function (pro_name, pro_discount, pro_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_promotion.php', {
            'name' : pro_name,
            'role' : pro_discount,
            'status' : pro_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?pro_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_promotion.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updatepromotion = function (pro_id, pro_name, pro_discount,pro_start,pro_end, pro_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_promotion.php', {
            'pro_id' : pro_id,
            'pro_name' : pro_name,
            'pro_discount' : pro_discount,
             'pro_start' : pro_start,
            'pro_end' : pro_end,
            'pro_status_id' : pro_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.deletepromotion = function (pro_id) {
		return $http.post('http://localhost/restaurant-api/api_delete_promotion.php', {
            'pro_id' : pro_id,
           
        }, function(data, status) {
            return data;
        });
	};
}]);