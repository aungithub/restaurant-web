'use strict';

angular.module('RESTAURANT.admin_drink_po', ['ngRoute'])

.controller('DrinkPOController', ['$rootScope', '$scope', '$location', 'DrinkPOService', function($rootScope, $scope, $location, DrinkPOService) {
	var route = 'admin_drink_po';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOObject = null;
	$scope.listDrinkPOObjectTmp = null;
	$scope.selectedId = "";
	$scope.selectedDrinkPOObject = null;
	$scope.selectedDrinkPODetailObject = null;
	$scope.selectedDrinkPODocObject = null;
	$scope.totalPrice = 0;
	$scope.totalPriceList = 0;
	$scope.drink = null;
	$scope.unit = null;
	$scope.vendor = null;
	$scope.addPOObject = [];
	$scope.isEditingItem = false;
	$scope.editingItemIndex = -1;
	$scope.isManager = false;

	$scope.poStatus = -1;

	$scope.addDrinkId = 0;

	$scope.addVendorId = 0;
	$scope.vendorUnitPrice = '';

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์สำหรับหน้าแรก
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route + ',') == -1) {
		$location.path('/backend/admin_login');
	}

	$scope.isManager = ($rootScope.empPosID == 10 ? true : false);

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkPOService.getAllDrinkPO().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkPOObject = result.data.drinkPOs;
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


	$scope.showDrinkPoStatus = function () {
		//$scope.poStatus
	};

	$scope.selectDrink = function () {
		var _drinkID = $.trim($('#add_drink_id').val());

		if (_drinkID > 0) {
			noty({
		        type : 'alert', // alert, success, warning, error, confirm
		        layout : 'top',
		        modal : true,
		        text : 'กำลังโหลด...',
		        callback: {
		        	afterShow: function () {
						DrinkPOService.getVendorByDrinkID(_drinkID).then(function (result) {
							$.noty.clearQueue(); $.noty.closeAll(); // clear noty

							$scope.vendor = result.data.vendor;

							//$scope.$apply();
						});
					}
				}
			});
		}
		$scope.vendorUnitPrice = '';
	};

	$scope.selectDrinkVendor = function () {
		var _drinkVendorID = $.trim($('#add_vendor_id').val());

		if (_drinkVendorID > 0) {
			var vendor_idx = $scope.vendor.findIndex(x => x.vendor_id==_drinkVendorID);

			if (vendor_idx != 'undefined' && vendor_idx != -1) {
				$scope.vendorUnitPrice = $scope.vendor[vendor_idx].vendor_unit_price;
				console.log($scope.vendor[vendor_idx].vendor_unit_price);
			}
			else {
				$scope.vendorUnitPrice = '';
			}
		}
	};

	$scope.calculatePrice = function() {
		$scope.totalPrice = 0;//หาราคารวม
		if ($scope.selectedDrinkPODetailObject != null) {
			for (var i = 0; i < $scope.selectedDrinkPODetailObject.length; i++) {
				$scope.totalPrice += $scope.selectedDrinkPODetailObject[i].unit_price * $scope.selectedDrinkPODetailObject[i].number;

				if (i == $scope.selectedDrinkPODetailObject.length) {
					$scope.$apply();
				}
			}
		}
	};

	$scope.calculatePriceList = function() {
		$scope.totalPriceList = 0;//หาราคารวม
		if ($scope.addPOObject != null) {
			for (var i = 0; i < $scope.addPOObject.length; i++) {
				$scope.totalPriceList += $scope.addPOObject[i].unit_price * $scope.addPOObject[i].number;
			}
		}
	};

	// clear textbox value
	$scope.loadAddDrinkPOForm = function() {
		$("#add_drink_id").val('');
		$("#add_unit_id").val('');
		$("#add_vendor_id").val('');
		$("#add_unit_number").val('');
		$("#add_unit_price").val('');
		$scope.addPOObject = [];

		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkPOService.getAllPOSelection().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						$scope.drink = result.data.drink;
						$scope.unit = result.data.unit;
						//$scope.vendor = result.data.vendor;

						//$scope.$apply();
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
					DrinkPOService.getAllDrinkPO().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listDrinkPOObject = result.data.drinkPOs;
							//$scope.$apply();
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
	$scope.addDrinkPO = function() {

		if ($rootScope.empID != '' && $rootScope.empID != 'undefined') {

			if ($scope.addPOObject.length > 0) {

				DrinkPOService.addDrinkPO($rootScope.empID, $scope.addPOObject).then(function (result) {
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
	                text : 'กรุณาเพิ่มรายการเครื่องดื่มอย่างน้อย 1 รายการ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
			}
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

	$scope.editDrink = function(index) {
		if ($.trim($('#dpd_idx_' + index).val()) != '') { //$('#dpd_idx_' + index).val() คือการget valจากtextbox
			$('#dpd_idx_' + index).val(parseInt($('#dpd_idx_' + index).val()))
			$scope.selectedDrinkPODetailObject[index].number = $('#dpd_idx_' + index).val();
			$scope.calculatePrice();
		}
		else {
			$('#dpd_idx_' + index).val(0);
			$scope.selectedDrinkPODetailObject[index].number = 0;
			$scope.calculatePrice();
		}
	};

	// Edit Unit
	$scope.viewDrinkPO = function(id) {
		$scope.selectedId = id;
		$scope.selectedDrinkPOObject = null;
		$scope.selectedDrinkPODetailObject = null;
		$scope.totalPrice = 0;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลรายละเอียดการสั่งซื้อ...',
            callback: {
            	afterShow: function () {
            		DrinkPOService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drinkPOs.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPODetailObject = result.data.drinkPODetails;

							$scope.calculatePrice();
						}
						else {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							noty({
				                type : 'warning',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'ไม่พบข้อมูลรายละเอียดการสั่งซื้อ...',
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

	$scope.viewDrinkPODoc = function (dp_id) {
		$scope.selectedId = dp_id;
		$scope.selectedDrinkPOObject = null;
		$scope.selectedDrinkPODocObject = null;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		DrinkPOService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && result.data.drinkPOs.length > 0) {
						
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPODocObject = result.data.drinkPODetails;
							var vendor = [];
							var obj = [];

							if (typeof $scope.selectedDrinkPODocObject != 'undefined') {
								for (var i=0; i < $scope.selectedDrinkPODocObject.length; i++) {
									if (vendor.indexOf($scope.selectedDrinkPODocObject[i].vendor_name) == -1) { //เช็คvendorname ซ้ำ ไหม
										
										vendor.push($scope.selectedDrinkPODocObject[i].vendor_name);
										obj.push($scope.selectedDrinkPODocObject[i]);	
									}

									if (i == $scope.selectedDrinkPODocObject.length-1) {
										$scope.selectedDrinkPODocObject = obj;
									}
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

	$scope.approve = function(id) {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'ยืนยันอนุมัติการสั่งซื้อนี้?',
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
                        text : 'กำลังอนุมัติการสั่งซื้อ...',
                        callback : {
                            afterShow : function () {
								DrinkPOService.approveDrinkPO(id, $scope.selectedDrinkPODetailObject, true, $rootScope.empID).then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'อนุมัติการสั่งซื้อสำเร็จ...',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		$("#close_modal_view").click();

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
							                text : 'อนุมัติการสั่งซื้อไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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
	};

	$scope.reject = function(id) {
		noty({
            type : 'confirm',
            layout : 'top',
            modal : true,
            text: 'ยืนยันไม่อนุมัติการสั่งซื้อนี้?',
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
                        text : 'กำลังยกเลิกการสั่งซื้อ...',
                        callback : {
                            afterShow : function () {
								DrinkPOService.approveDrinkPO(id, $scope.selectedDrinkPODetailObject, false, $rootScope.empID).then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'ยกเลิกการสั่งซื้อสำเร็จ...',
							                callback: {
							                	afterClose: function () {
							                		// ปิด noty
							                		$.noty.clearQueue(); $.noty.closeAll();

							                		$("#close_modal_view").click();

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
							                text : 'ยกเลิกการสั่งซื้อไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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
	};

	$scope.resetItem = function () {
		$("#add_drink_id").val('');
		$("#add_unit_id").val('');
		$("#add_vendor_id").val('');
		$("#add_unit_number").val('');
		$("#add_unit_price").val('');
		$scope.isEditingItem = false;
	};

	$scope.addItem = function () {
		var drink_index = $scope.drink.findIndex(x => x.drink_id==$("#add_drink_id").val()),//หาindexของเครื่องดื่มที่เลือกเพื่อจะนำไปหาชื่อเครื่องดื่ม
			unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

			//เพื่อนำไปใช้เป็นlistname
		if (drink_index != 'undefined' && unit_index != 'undefined' && vendor_index !='undefined' && $("#add_unit_number").val() != '' && $("#add_unit_price").val() != '') {
			var drink_index_obj = $scope.addPOObject.findIndex(x => x.drink_id==$("#add_drink_id").val()),
				vendor_index_obj = $scope.addPOObject.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

			if (drink_index_obj != -1 && vendor_index_obj != -1 && drink_index_obj == vendor_index_obj) {
				$scope.addPOObject[drink_index_obj].number = parseInt($scope.addPOObject[drink_index_obj].number) + parseInt($("#add_unit_number").val());
				$scope.addPOObject[drink_index_obj].unit_price = $("#add_unit_price").val();
				$scope.addPOObject[drink_index_obj].unit_id = $("#add_unit_id").val();
				$scope.addPOObject[drink_index_obj].unit_name = $scope.unit[unit_index].unit_name;
			}
			else {
				$scope.addPOObject.push({
					drink_id: $("#add_drink_id").val(),
					drink_name: $scope.drink[drink_index].drink_name,
					unit_id: $("#add_unit_id").val(),
					unit_name: $scope.unit[unit_index].unit_name,
					vendor_id: $("#add_vendor_id").val(),
					vendor_name: $scope.vendor[vendor_index].vendor_name,
					number: $("#add_unit_number").val(),
					unit_price: $("#add_unit_price").val()
				});
			}

			$scope.resetItem();//ฟังก์ชันใช้resetform
			$scope.calculatePriceList(); // คำนวนราคาทั้งหมดที่เลือก
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
		$scope.addPOObject.splice(index, 1);//spliceใช้ตัดข้อมูลโดยการกำหนดindexของอาร์เรย์
		$scope.calculatePriceList(); // คำนวนราคาทั้งหมดที่เลือก
	};

	$scope.editItem = function (index) {
		$scope.editingItemIndex = index;
		$scope.isEditingItem = true;
		$("#add_drink_id").val($scope.addPOObject[index].drink_id);
		$("#add_unit_id").val($scope.addPOObject[index].unit_id);
		$("#add_vendor_id").val($scope.addPOObject[index].vendor_id);
		$("#add_unit_number").val($scope.addPOObject[index].number);
		$("#add_unit_price").val($scope.addPOObject[index].unit_price);
	};

	$scope.editingItemUpdate = function () {
		var drink_index = $scope.drink.findIndex(x => x.drink_id==$("#add_drink_id").val()),
			unit_index = $scope.unit.findIndex(x => x.unit_id==$("#add_unit_id").val()),
			vendor_index = $scope.vendor.findIndex(x => x.vendor_id==$("#add_vendor_id").val());

		if (drink_index != 'undefined' && unit_index != 'undefined' && vendor_index !='undefined' && drink_index != -1 && unit_index != -1 && vendor_index != -1 && $("#add_unit_number").val() != '' && $("#add_unit_price").val() != '') {
			$scope.addPOObject[$scope.editingItemIndex].drink_id = $("#add_drink_id").val();
			$scope.addPOObject[$scope.editingItemIndex].drink_name = $scope.drink[drink_index].drink_name;
			$scope.addPOObject[$scope.editingItemIndex].unit_id = $("#add_unit_id").val();
			$scope.addPOObject[$scope.editingItemIndex].unit_name = $scope.unit[unit_index].unit_name;
			$scope.addPOObject[$scope.editingItemIndex].vendor_id = $("#add_vendor_id").val();
			$scope.addPOObject[$scope.editingItemIndex].vendor_name = $scope.vendor[vendor_index].vendor_name;
			$scope.addPOObject[$scope.editingItemIndex].number = $("#add_unit_number").val();
			$scope.addPOObject[$scope.editingItemIndex].unit_price = $("#add_unit_price").val();

			$scope.resetItem();
			$scope.calculatePriceList(); // คำนวนราคาทั้งหมดที่เลือก
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

	// Print
	$scope.printDrinkPO = function (dp_id, vendor_id) {
		window.open('restaurant-web/#/backend/admin_drink_po_print?dp_id=' + dp_id + '&vendor_id=' + vendor_id,'_blank');
	};

}])
.service('DrinkPOService', ['$http', '$q',function ($http, $q) {

	this.getAllDrinkPO = function () {
		return $http.get('http://localhost/restaurant-api/api_get_drink_po.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getByID = function (id) {
		var conditions = "?dp_id=" + id + "&dp_action=detail";

		return $http.get('http://localhost/restaurant-api/api_get_drink_po.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.approveDrinkPO = function (id, drink_pos, approval, empID) {
		return $http.post('http://localhost/restaurant-api/api_approve_drink_po.php', {
            'id' : id,
            'drink_pos' : drink_pos,
            'approval_status': approval,
            'approval_emp_id': empID,
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

	this.addDrinkPO = function (emp_id, drinkPOObject) {
		return $http.post('http://localhost/restaurant-api/api_add_drink_po.php', {
            'emp_id' : emp_id,
            'drinkPOObject' : drinkPOObject
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrinkPONumber = function () {
		return $http.get('http://localhost/restaurant-api/api_get_new_drink_po.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getVendorByDrinkID = function (drinkID) {
		return $http.get('http://localhost/restaurant-api/api_get_vendor_by_drink.php?drink_id=' + drinkID, {
        }, function(data, status) {
            return data;
        });
	};
}]);