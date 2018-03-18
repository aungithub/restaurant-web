'use strict';

angular.module('RESTAURANT.user_drinkmenu', ['ngRoute'])

.controller('DrinkmenuController', ['$rootScope', '$scope', '$location', 'DrinkmenuService', function($rootScope, $scope, $location, DrinkmenuService) {
	var route = 'user_drinkmenu';



	$scope.listOrderDrinkObject = [];
	$scope.autoRefreshTimer = null;

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkmenuService.getAllOrderDrink().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderDrinkObject = result.data.orderdrink;
						clearInterval($scope.autoRefreshTimer);
						$scope.autorefresh();
						 console.log($scope.listOrderDrinkObject);
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
			DrinkmenuService.getAllOrderDrink().then(function (result) {
				if (result.data.status == 200) {
					$scope.listOrderDrinkObject = result.data.orderdrink;
				}
			});
		},5000);//5 วินาที*1000
	}

	$scope.cook = function(status,id, drink_id){
		var order_id = id,
			status = status,
			drink_id = drink_id;
			

		if (order_id != '' ) {
			DrinkmenuService.updateOrderDrink(status ,order_id,drink_id).then(function (result) {
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

	$scope.cookfinish = function(status,id, drink_id){
		var order_id = id,
			status = status,
			drink_id = drink_id;
			

		if (order_id != '' ) {
			DrinkmenuService.updateOrderDrink(status ,order_id,drink_id).then(function (result) {
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


$scope.cancel = function(status,id, drink_id){
var order_id = id,
status = status,
drink_id = drink_id,
drink_status_id = 2,
action ='cancel';

if (order_id != '' ) {
DrinkmenuService.updateOrderDrink(status ,order_id,drink_id).then(function (result) {
	if (result.data.status == 200) {
		

            DrinkmenuService.deleteDrink(drink_id, drink_status_id,action).then(function (result) {
            	$.noty.clearQueue(); $.noty.closeAll();

				if (result.data.status == 200) {
					noty({
	                type : 'confirm',
	                layout : 'top',
	                modal : true,
	                text: 'คุณต้องการยกเลิกข้อมูลอาหารนี้ใช่หรือไม่?',
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

                                DrinkmenuService.deleteDrink(drink_id, drink_status_id,action).then(function (result) {
                                	$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text :'success',
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
		                type : 'error',
		                layout : 'top',
		                modal : true,
		                timeout: 3000,
		                text : 'ยกเลิกข้อมูลอาหารไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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
/*
	$scope.cancel = function(id) {
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

                                    CookmenuService.cancel(food_id, food_status_id).then(function (result) {
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
					DrinkmenuService.getAllOrderDrink().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderDrinkObject = result.data.orderdrink;
							//$scope.apply();
							$scope.refreshList();
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
.service('DrinkmenuService', ['$http', '$q',function ($http, $q) {

	this.getAllUnit = function () {
		return $http.get('restaurant-api/api_get_unitdetail.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrink = function () {
		return $http.get('restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addDrink = function (drink_name, drink_unit_id, drink_price, drink_status_id) {
		return $http.post('restaurant-api/api_add_drink.php', {
            'drink_name' : drink_name, 
            'drink_unit_id' : drink_unit_id,
            'drink_price' : drink_price,
   
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_drink.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderDrink = function (status,id, drink_id) {
		return $http.post('restaurant-api/api_update_order_drink.php', {
            'order_id' : id,
            'status' : status,
            'drink_id' : drink_id, 
            
        }, function(data, status) {
            return data;
        });
	};

	this.deleteDrink = function (drink_id, drink_status_id) {
		return $http.post('restaurant-api/api_delete_drink.php', {
            'drink_id' : drink_id,
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink = function () {
		return $http.get('restaurant-api/api_get_order_drink.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);