'use strict';

angular.module('RESTAURANT.admin_drink', ['ngRoute'])

.controller('DrinkController', ['$rootScope', '$scope', '$location', 'DrinkService', function($rootScope, $scope, $location, DrinkService) {
	var route = 'admin_drink';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkObject = null;
	$scope.selectedId = "";
	$scope.selectedDrinkObject = null;
	$scope.selectedUnitObject = null;
	$scope.listUnitObject = null;
	$scope.selectedVendorObject = null;
	$scope.listVendorObject = null;
	$scope.selectedVendorDrinkObject = null;
	$scope.selectedDrinkVendorListObject = null;

	$scope.addDrinkObject = [];
	$scope.drinkName = "";
	$scope.drinkNumber = "";
	$scope.isEditingItem = false;
	$scope.editingItemIndex = -1;

	$scope.drink = null;
	$scope.unit = null;
	$scope.vendor = null;

	$scope.oldDrinkPO = null;
	$scope.drinkPOPrivacy = false;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	$scope.drinkPOPrivacy = ($rootScope.privacyAccess.indexOf('admin_drink_po,') != -1 ? true : false);

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkService.getAllDrink().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkObject = result.data.drink;
						//console.log(listDrinkObject);
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
	$scope.loadAddDrinkForm = function() {
		$("#add_drink_name").val('');
		$("#add_drink_vendor_id").val('');
		$("#add_drink_number").val('');
		$("#add_drink_unit_id").val('');
		$("#add_drink_price").val('');
		$("#add_drink_order_point").val('');
		$("#add_drink_status_id").val(999);
		$scope.addDrinkObject = [];

		noty({
	        type : 'alert',
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkService.getAllUnit().then(function (result) {
						if (result.data.status == 200 && result.data.unit.length > 0 ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listUnitObject = result.data.unit;
							$scope.unit = $scope.listUnitObject;
							
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

					DrinkService.getAllVendor().then(function (result) {
						if (result.data.status == 200  ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

						
							$scope.listVendorObject = result.data.vendors;
							$scope.vendor = $scope.listVendorObject;
							
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลบริษัท...',
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
					DrinkService.getAllDrink().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty
						if (result.data.status == 200) {
							$scope.listDrinkObject = result.data.drink;
							//$scope.apply();
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
	$scope.addDrink = function() {
		var drink_name = $.trim($("#add_drink_name").val()), // ตตัดspacebarทั้งหมด
			drink_order_point = $("#add_drink_order_point").val(),
			drink_number = $("#add_drink_number").val(),
			drink_unit_id = $("#add_drink_unit_id").val(),
			drink_unit_price = $("#add_drink_unit_price").val(),
			drink_status_id = $("#add_drink_status_id").val();

		if (drink_name != '' && $scope.addDrinkObject.length > 0 && drink_order_point != '' && drink_number != '' && drink_unit_id != '' && drink_unit_price != '' && drink_status_id != 999 ) {
			
			DrinkService.addDrink($("#add_drink_name").val(), $scope.addDrinkObject, drink_order_point, drink_number, drink_unit_id, drink_unit_price, drink_status_id).then(function (result) {
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
	$scope.editDrink = function(id) {
		$scope.drinkName = "";
		$scope.selectedId = id;
		$scope.selectedDrinkObject = null;
		$scope.selectedUnitObject = null;
		$scope.selectedVendorObject = null;
		$scope.selectedVendorDrinkObject = null;
		$scope.selectedDrinkVendorListObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {
            		DrinkService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drink.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkObject = result.data.drink[0];
							$scope.selectedUnitObject = result.data.unit;
							$scope.selectedVendorObject = result.data.vendor;
							$scope.selectedVendorDrinkObject = result.data.vendor_drink;
							$scope.selectedDrinkVendorListObject = result.data.vendor_list;
							$scope.drinkName = $scope.selectedDrinkObject.drink_name;

							if ($scope.selectedDrinkVendorListObject.length > 0) {
								$scope.isEditingItem = true;
							}

							if (typeof $scope.selectedVendorDrinkObject != 'undefined' && $scope.selectedVendorDrinkObject.length > 0) {
								for (var i=0; i<$scope.selectedVendorDrinkObject.length; i++) {
									
									var idx = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$scope.selectedVendorDrinkObject[i].vendor_id);

									$scope.selectedVendorObject[idx]['is_checked'] = true;
									$scope.selectedVendorObject[idx]['price'] = $scope.selectedVendorDrinkObject[i].price;
								}
							}


							if ($scope.selectedDrinkObject.drink_status_id == 1) {
								$("#edit_drink_status_id").val(1);
							} else if ($scope.selectedDrinkObject.drink_status_id == 2) {
								$("#edit_drink_status_id").val(2);
							} else {
								$("#edit_drink_status_id").val(0);	
							}
							setTimeout(function() {
								$("#edit_drink_unit_id").val($scope.selectedDrinkObject.drink_unit_id);
								$("#edit_drink_unit_price").val($scope.selectedDrinkObject.drink_unit_price);
								//$("#edit_drink_vendor_id").val($scope.selectedDrinkObject.drink_vendor_id);
								if ($scope.selectedDrinkVendorListObject.length > 0) {
									$('#edit_drink_vendor_id').val($scope.selectedDrinkVendorListObject[0].vendor_id);
									$('#edit_drink_price').val($scope.selectedDrinkVendorListObject[0].drink_price);
									$scope.editEditingItem(0);
								}
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
	$scope.updateDrink = function(id) {
		var drink_name = $.trim($("#edit_drink_name").val()), // ตตัดspacebarทั้งหมด
			drink_order_point = $("#edit_drink_order_point").val(),
			drink_number = $("#edit_drink_number").val(),
			drink_unit_id = $("#edit_drink_unit_id").val(),
			drink_unit_price = $("#edit_drink_unit_price").val(),
			drink_status_id = $("#edit_drink_status_id").val();

		if (drink_name != '' && $scope.selectedDrinkVendorListObject.length > 0 && drink_order_point != '' && drink_number != '' && drink_unit_id != '' && drink_unit_price != '' && drink_status_id != 999 ) {
			DrinkService.updateDrink(id, drink_name, $scope.selectedDrinkVendorListObject, drink_number, drink_order_point, drink_unit_id, drink_unit_price, drink_status_id).then(function (result) {
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
	$scope.deleteDrink = function(id) {
		var drink_id = id,
			drink_status_id = 2;

		if (drink_id != '') {
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
                            text : 'กำลังลบข้อมูล...',
                            callback : {
                                afterShow : function () {

                                    DrinkService.deleteDrink(drink_id, drink_status_id).then(function (result) {
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


	$scope.createDrinkPO = function (drink_id) {

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังค้นหาข้อมูลการสั่งซื้อเดิม...',
            callback: {
            	afterShow: function () {
					DrinkService.getOldDrinkPO(drink_id).then(function (resultOld) {

						if (resultOld.data.status == 200) {
							$scope.oldDrinkPO = resultOld.data.drinkPODetails;

							DrinkService.getAllPOSelection().then(function (resultSelection) {
								$.noty.clearQueue(); $.noty.closeAll(); // clear noty

								$scope.drink = resultSelection.data.drink;
								$scope.unit = resultSelection.data.unit;
								$scope.vendor = resultSelection.data.vendor;

								// ถ้าพบการสั่งซื้อเดิม จะทำการกรอกฟอร์มให้อัตโนมัติ
								if ($scope.oldDrinkPO.length > 0) {
									setTimeout(function () {
										$('#add_drink_id').val($scope.oldDrinkPO[0].drink_id);
										$('#add_unit_id').val($scope.oldDrinkPO[0].unit_id);
										$('#add_vendor_id').val($scope.oldDrinkPO[0].vendor_id);
										$('#add_unit_price').val($scope.oldDrinkPO[0].unit_price);
									}, 100);
								}
								
							});
						}
						else {
							$.noty.clearQueue(); $.noty.closeAll(); // clear noty
							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ค้นหาข้อมูลการสั่งซื้อเดิมไม่สำเร็จ กรุณาลองใหม่...',
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
	};

	$scope.addDrinkPO = function () {
		var add_drink_id = $.trim($('#add_drink_id').val()),
			add_unit_id = $.trim($('#add_unit_id').val()),
			add_vendor_id = $.trim($('#add_vendor_id').val()),
			add_unit_number = $.trim($('#add_unit_number').val()),
			add_unit_price = $.trim($('#add_unit_price').val());

		if ($rootScope.empID != '' && $rootScope.empID != 'undefined') {

			if (add_drink_id != '' && add_unit_id != '' && add_vendor_id != '' && add_unit_number != '' && add_unit_number != 0 && add_unit_price != '') {
				
				var drinkPOObject = [{
					drink_id: add_drink_id,
					unit_id: add_unit_id,
					vendor_id: add_vendor_id,
					number: add_unit_number,
					unit_price: add_unit_price
				}];

				noty({
		            type : 'alert',
		            layout : 'top',
		            modal : true,
		            text : 'กำลังสร้างใบสั่งซื้อ...',
		            callback: {
		            	afterShow: function () {
		            		DrinkService.addDrinkPO($rootScope.empID, drinkPOObject).then(function (result) {
		            			$.noty.clearQueue(); $.noty.closeAll();

		            			if (result.data.status == 200) {
									noty({
						                type : 'success',
						                layout : 'top',
						                modal : true,
						                timeout: 5000,
						                text : 'สร้างใบสั่งซื้อเรียบร้อยแล้ว...',
						                callback: {
						                	afterClose: function () {
						                		// ปิด noty
						                		$.noty.clearQueue(); $.noty.closeAll();

						                		// ปิด modal
						                		$("#close_modal_add_po").click()

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
		}
	};

	$scope.resetItem = function () {
		$("#add_drink_vendor_id").val('');
		$("#add_drink_price").val('');
		$scope.isEditingItem = false;
	};

	$scope.addItem = function () {
		$scope.drinkName = $('#add_drink_name').val();
		$scope.drinkNumber = $('#add_drink_number').val();
		var unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_drink_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		if (unit_index != 'undefined' && vendor_index !='undefined' && $("#add_drink_number").val() != '' && $("#add_drink_price").val() != '' && $("#add_drink_name").val() != '' && $("#add_drink_order_point").val() != '' && $("#add_drink_status_id").val() != '') {
			var vendor_index_obj = $scope.addDrinkObject.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			if (vendor_index_obj != -1) {
				$scope.addDrinkObject[vendor_index_obj].drink_number = parseInt($scope.addDrinkObject[vendor_index_obj].drink_number) + parseInt($("#add_drink_number").val());
				$scope.addDrinkObject[vendor_index_obj].drink_price = $("#add_drink_price").val();
				$scope.addDrinkObject[vendor_index_obj].vendor_id = $("#add_drink_vendor_id").val();
				$scope.addDrinkObject[vendor_index_obj].vendor_name = $scope.vendor[vendor_index].vendor_name;
				$scope.addDrinkObject[vendor_index_obj].drink_status_id = $scope.addDrinkObject[vendor_index_obj].drink_status_id;
			}
			else {
				$scope.addDrinkObject.push({
					vendor_id: $("#add_drink_vendor_id").val(),
					vendor_name: $scope.vendor[vendor_index].vendor_name,
					drink_number: $("#add_drink_number").val(),
					drink_price: $("#add_drink_price").val(),
					drink_status_id: $("#add_drink_status_id").val()
				});
			}

			$scope.resetItem();//ฟังก์ชันใช้resetform
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.deleteItem = function (index) {
		$scope.addDrinkObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
	};

	$scope.editItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#add_drink_price").val($scope.addDrinkObject[index].drink_price);
		$("#add_drink_vendor_id").val($scope.addDrinkObject[index].vendor_id);
	};

	$scope.editingItemUpdate = function () {
		$scope.drinkName = $('#add_drink_name').val();
		$scope.drinkNumber = $('#add_drink_number').val();
		var unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_drink_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

		if (unit_index != 'undefined' && vendor_index !='undefined' && unit_index != -1 && vendor_index != -1 && $("#add_drink_number").val() != '' && $("#add_drink_price").val() != '' && $("#add_drink_name").val() != '' && $("#add_drink_order_point").val() != '' && $("#add_drink_status_id").val() != '') {
			$scope.addDrinkObject[$scope.editingItemIndex].vendor_id = $("#add_drink_vendor_id").val();
			$scope.addDrinkObject[$scope.editingItemIndex].vendor_name = $scope.vendor[vendor_index].vendor_name;
			$scope.addDrinkObject[$scope.editingItemIndex].drink_number = $("#add_drink_number").val();
			$scope.addDrinkObject[$scope.editingItemIndex].drink_price = $("#add_drink_price").val();
			$scope.addDrinkObject[$scope.editingItemIndex].drink_status_id = $("#add_drink_status_id").val();

			$scope.resetItem();
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	/*
	* ส่วนของการแก้ไขเครื่องดื่ม 
	* logic คล้ายๆส่วนของการสร้างเครื่องดื่ม
	*/
	$scope.resetEditingItem = function () {
		$("#edit_drink_vendor_id").val('');
		$("#edit_drink_price").val('');
		$scope.isEditingItem = false;
	};

	$scope.addEditingItem = function () {
		$scope.drinkName = $('#edit_drink_name').val();
		$scope.drinkNumber = $('#edit_drink_number').val();
		var unit_index = $scope.selectedUnitObject.findIndex(x => x.unit_id==$("#edit_drink_unit_id").val()),
			vendor_index = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$("#edit_drink_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		if (unit_index != 'undefined' && vendor_index !='undefined' && $("#edit_drink_number").val() != '' && $("#edit_drink_price").val() != '' && $("#edit_drink_name").val() != '' && $("#edit_drink_order_point").val() != '' && $("#edit_drink_status_id").val() != '') {
			var vendor_index_obj = $scope.selectedDrinkVendorListObject.findIndex(x => x.vendor_id==$("#add_drink_vendor_id").val());

			if (vendor_index_obj != -1) {
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_number = parseInt($scope.selectedDrinkVendorListObject[vendor_index_obj].drink_number) + parseInt($("#edit_drink_number").val());
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_price = $("#edit_drink_price").val();
				$scope.selectedDrinkVendorListObject[vendor_index_obj].vendor_id = $("#edit_drink_vendor_id").val();
				$scope.selectedDrinkVendorListObject[vendor_index_obj].vendor_name = $scope.vendor[vendor_index].vendor_name;
				$scope.selectedDrinkVendorListObject[vendor_index_obj].drink_status_id = $scope.selectedDrinkVendorListObject[vendor_index_obj].drink_status_id;
			}
			else {
				$scope.selectedDrinkVendorListObject.push({
					vendor_id: $("#edit_drink_vendor_id").val(),
					vendor_name: $scope.selectedVendorObject[vendor_index].vendor_name,
					drink_number: $("#edit_drink_number").val(),
					drink_price: $("#edit_drink_price").val(),
					drink_status_id: $("#edit_drink_status_id").val()
				});
			}

			$scope.resetEditingItem();//ฟังก์ชันใช้resetform
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};

	$scope.deleteEditingItem = function (index) {
		$scope.selectedDrinkVendorListObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
	};

	$scope.editEditingItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#edit_drink_price").val($scope.selectedDrinkVendorListObject[index].drink_price);
		$("#edit_drink_vendor_id").val($scope.selectedDrinkVendorListObject[index].vendor_id);
	};

	$scope.editingEditingItemUpdate = function () {
		$scope.drinkName = $('#edit_drink_name').val();
		$scope.drinkNumber = $('#edit_drink_number').val();
		var unit_index = $scope.selectedUnitObject.findIndex(x => x.unit_id==$("#edit_drink_unit_id").val()),
			vendor_index = $scope.selectedVendorObject.findIndex(x => x.vendor_id==$("#edit_drink_vendor_id").val());

		if (unit_index != 'undefined' && vendor_index !='undefined' && unit_index != -1 && vendor_index != -1 && $("#edit_drink_number").val() != '' && $("#edit_drink_price").val() != '' && $("#edit_drink_name").val() != '' && $("#edit_drink_order_point").val() != '' && $("#edit_drink_status_id").val() != '') {
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].vendor_id = $("#edit_drink_vendor_id").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].vendor_name = $scope.selectedVendorObject[vendor_index].vendor_name;
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_number = $("#edit_drink_number").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_price = $("#edit_drink_price").val();
			$scope.selectedDrinkVendorListObject[$scope.editingItemIndex].drink_status_id = $("#edit_drink_status_id").val();

			$scope.resetEditingItem();
		}
		else {
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
	};
}])
.service('DrinkService', ['$http', '$q',function ($http, $q) {

	this.getAllUnit = function () {
		return $http.get('http://localhost/restaurant-api/api_get_unit.php', {
        }, function(data, status) {
            return data;
        });
	};


	this.getAllVendor = function () {
		return $http.get('http://localhost/restaurant-api/api_get_vendor.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrink = function () {
		return $http.get('http://localhost/restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.addDrink = function (drink_name, add_drink_object, drink_order_point, drink_number, drink_unit_id, drink_unit_price, drink_status_id) {
		return $http.post('http://localhost/restaurant-api/api_add_drink.php', {
            'drink_name' : drink_name,
            'add_drink_object' : add_drink_object,
            'drink_unit_id' : drink_unit_id,
            'drink_order_point' : drink_order_point,
            'drink_number' : drink_number,
            'drink_status_id' : drink_status_id,
            'drink_unit_price' : drink_unit_price
           
            
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?drink_id=" + id;

		return $http.get('http://localhost/restaurant-api/api_get_drink.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateDrink = function (drink_id, drink_name, edit_drink_object, drink_number, drink_order_point, drink_unit_id, drink_unit_price, drink_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_drink.php', {
            'drink_id' : drink_id,
            'drink_name' : drink_name,
            'edit_drink_object' : edit_drink_object,
            'drink_number' : drink_number, 
            'drink_order_point' : drink_order_point,
            'drink_unit_id' : drink_unit_id,
            'drink_status_id' : drink_status_id,
            'drink_unit_price' : drink_unit_price
           
        }, function(data, status) {
            return data;
        });
	};

	this.deleteDrink = function (drink_id, drink_status_id) {
		return $http.post('http://localhost/restaurant-api/api_update_drink.php', {
            'drink_id' : drink_id,
            'drink_status_id' : drink_status_id,
        }, function(data, status) {
            return data;
        });
	};


	this.getDrinkNoti = function () {
		return $http.get('http://localhost/restaurant-api/api_get_drink_noti.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllPOSelection = function () {
		return $http.get('http://localhost/restaurant-api/api_get_po_selection.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getOldDrinkPO = function (drink_id) {
		return $http.post('http://localhost/restaurant-api/api_get_old_drink_po.php', {
            'drink_id' : drink_id
        }, function(data, status) {
            return data;
        });
	};

	this.addDrinkPO = function (emp_id, drinkPOObject) {
		return $http.post('http://localhost/restaurant-api/api_add_drink_po.php', {
            'emp_id' : emp_id,
            'drinkPOObject' : drinkPOObject
        }, function(data, status) {
            return data;
        });
	};
}]);