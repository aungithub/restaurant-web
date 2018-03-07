'use strict';

angular.module('RESTAURANT.user_cookmenu', ['ngRoute'])

.controller('CookmenuController', ['$rootScope', '$scope', '$location', 'CookmenuService', function($rootScope, $scope, $location, CookmenuService) {
	var route = 'user_cookmenu';



	$scope.listOrderFoodObject = [];
	$scope.autoRefreshTimer = null;

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				CookmenuService.getAllOrderFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderFoodObject = result.data.orderfood;
						clearInterval($scope.autoRefreshTimer);
						$scope.autorefresh();
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

	$scope.$on('$routeChangeStart', function($event, next, current) { 

 	 clearInterval($scope.autoRefreshTimer);

 });

	$scope.autorefresh = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			CookmenuService.getAllOrderFood().then(function (result) {
				if (result.data.status == 200) {
					$scope.listOrderFoodObject = result.data.orderfood;
				}
			});
		},5000);//5 วินาที*1000
	}

	$scope.cook = function(status,id, id_food){
		var order_id = id,
			status = status,
			food_id = id_food;

		if (order_id != '' ) {
			CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
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

	$scope.cookfinish = function(status,id, id_food){
		var order_id = id,
			status = status,
			food_id = id_food;

		if (order_id != '' ) {
			CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
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


	$scope.cancel = function(status,id, id_food){
		var order_id = id,
			status = status,
			food_id = id_food;

		if (order_id != '' ) {
			CookmenuService.updateOrderFood(status ,order_id,food_id).then(function (result) {
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

	
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	/*$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;

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
				FoodService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listFoodObject = result.data.food;
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
	$scope.loadAddFoodForm = function() {
		$("#add_food_name").val('');
		$("#add_food_kind_id").val('');
		$("#add_food_price").val('');
		$("#add_food_status_id").val(999);
	
		
	noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					FoodService.getAllKind().then(function (result) {
						if (result.data.status == 200 && result.data.kind.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listKindObject = result.data.kind;
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
	};*/

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					CookmenuService.getAllOrderFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderFoodObject = result.data.orderfood;
							$scope.apply();
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
	/*

	// Add Unit
	$scope.addFood = function() {
		var food_name = $.trim($("#add_food_name").val()), // ตตัดspacebarทั้งหมด
			food_kind_id = $("#add_food_kind_id").val(),
			food_price = $("#add_food_price").val(),
			food_status_id = $("#add_food_status_id").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999 ) {
			FoodService.addFood($("#add_food_name").val(), food_kind_id, food_price , food_status_id).then(function (result) {
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
	$scope.editFood = function(id) {
		$scope.selectedId = id;
		$scope.selectedFoodObject = null;
		$scope.selectedKindObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		FoodService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.food.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedFoodObject = result.data.food[0];
							$scope.selectedKindObject = result.data.kind;
					
							if ($scope.selectedFoodObject.food_status_id == 1) {
								$("#edit_food_status_id").val(1);
							} else if ($scope.selectedFoodObject.food_status_id == 2) {
								$("#edit_food_status_id").val(2);
							} else {
								$("#edit_food_status_id").val(0);	
							}
						setTimeout(function() {
								$("#edit_food_kind_id").val($scope.selectedFoodObject.food_kind_id);
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
	$scope.updateFood = function(id) {
		var food_id = $.trim($("#edit_food_pk_id").val()),
			food_name = $.trim($("#edit_food_name").val()),
			food_kind_id = $("#edit_food_kind_id").val(),
			food_price = $("#edit_food_price").val(),
			food_status_id = $("#edit_food_status_id").val();

		if (food_id != '' && food_name != '' && food_kind_id != '' && food_price != ''  && food_status_id != 999) {
			FoodService.updateFood(food_id, food_name, food_kind_id, food_price, food_status_id ).then(function (result) {
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
	$scope.deleteFood = function(id) {
		var food_id = id,
			food_status_id = 2;

		if (food_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลอาหารนี้ใช่หรือไม่?',
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
                            text : 'กำลังลบข้อมูลอาหาร...',
                            callback : {
                                afterShow : function () {

                                    FoodService.deleteFood(food_id, food_status_id).then(function (result) {
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
								                text : 'ลบข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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
	};*/
	// END Delete Unit
}])
.service('CookmenuService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('http://localhost/restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('http://localhost/restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addFood = function (food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_food.php', {
            'food_name' : food_name, 
            'food_kind_id' : food_kind_id,
            'food_price' : food_price,
   
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderFood = function (status,id, id_food) {
		return $http.post('http://localhost/restaurant-api/api_update_order_food.php', {
            'order_id' : id,
            'status' : status,
            'food_id' : id_food, 
            
        }, function(data, status) {
            return data;
        });
	};

	this.deleteFood = function (food_id, food_status_id) {
		return $http.post('http://localhost/restaurant-api/api_delete_food.php', {
            'food_id' : food_id,
            'food_status_id' : food_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFood = function () {
		return $http.get('http://localhost/restaurant-api/api_get_order_food.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);