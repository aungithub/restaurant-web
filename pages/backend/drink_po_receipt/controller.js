'use strict';

angular.module('RESTAURANT.admin_drink_po_receipt', ['ngRoute'])

.controller('DrinkPOReceiptController', ['$rootScope', '$scope', '$location', 'DrinkPOReceiptService', function($rootScope, $scope, $location, DrinkPOReceiptService) {
	var route = 'admin_drink_po_receipt';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$rootScope.loadCookies();

	$scope.listDrinkPOReceiptObject = null;
	$scope.selectedId = "";
	$scope.selectedDrinkPOReceiptObject = null;
	$scope.selectedDrinkPOReceiptDetailObject = null;
	$scope.isReceiptRemaining = false;

	$scope.poStatus = -1;

	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();

	// เช็คสิทธิ์
	if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/backend/admin_login');
	}

	// โหลดข้อมูล drink po ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				DrinkPOReceiptService.getAllDrinkPOReceipt().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listDrinkPOReceiptObject = result.data.drinkPOs;
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

	// clear textbox value
	$scope.loadAddDrinkPOReceiptForm = function() {
		$("#add_dp_receipt_name").val('');
		$("#add_dp_receipt_tel").val('');
		$("#add_dp_receipt_address").val('');
		$("#add_dp_receipt_status_id").val(999);
	};

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					DrinkPOReceiptService.getAllDrinkPOReceipt().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listDrinkPOReceiptObject = result.data.drinkPOs;
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

	$scope.calculate = function (index) {
		var number_receipt = parseInt($('#dpd_idx_number_' + index).val());

		if (number_receipt > $scope.selectedDrinkPOReceiptDetailObject[index].receipt_remaining_number) {
			$('#dpd_idx_number_' + index).val('');
			$('#dpd_idx_label_number_remaining_' + index).html('');
			noty({
                type : 'warning',
                layout : 'top',
                modal : true,
                timeout: 3000,
                text : 'จำนวนรับต้องไม่เกินจำนวนที่สั่ง...',
                callback: {
                	afterClose: function () {
                		// ปิด noty
                		$.noty.clearQueue(); $.noty.closeAll();
                	}
                }
            });
		}
		else {
			if (number_receipt > 0) {
				$('#dpd_idx_number_' + index).val(parseInt($('#dpd_idx_number_' + index).val()));
			}
			
			$('#dpd_idx_label_number_remaining_' + index).html(Math.abs(number_receipt - $scope.selectedDrinkPOReceiptDetailObject[index].receipt_remaining_number));
		}
		
	};

	// Edit drink po
	$scope.viewDrinkPO = function(id) {
		$scope.selectedId = id;
		$scope.selectedDrinkPOReceiptObject = null;
		$scope.selectedDrinkPOReceiptDetailObject = null;
		$scope.isReceiptRemaining = false;

		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลรายการสั่งซื้อ...',
            callback: {
            	afterShow: function () {
            		DrinkPOReceiptService.getByID($scope.selectedId).then(function (result) {
						if (result.data.status == 200 && typeof result.data.drinkPODetails != 'undefined' && result.data.drinkPODetails.length > 0) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.selectedDrinkPOReceiptObject = result.data.drinkPOs[0];
							$scope.selectedDrinkPOReceiptDetailObject = result.data.drinkPODetails;
							$scope.isReceiptRemaining = result.data.isReceiptRemaining;
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
				                		$("#close_modal_edit").click();
				                	}
				                }
				            });
						}
					});
            	}
            }
        });
	};
	// END Edit drink po

	$scope.save = function() {
		var number_receipt_correct = true;

		for (var i = 0; i < $scope.selectedDrinkPOReceiptDetailObject.length; i++) {
			if ($('#dpd_idx_number_' + i).val().length == 0) {
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
				return;
			}
			else {

				if ($scope.selectedDrinkPOReceiptDetailObject[i].number > $('#dpd_idx_number_' + i).val()) {
					number_receipt_correct = false;
				}
			}

			$scope.selectedDrinkPOReceiptDetailObject[i]['receipt_number'] = $('#dpd_idx_number_' + i).val();

			if (i == $scope.selectedDrinkPOReceiptDetailObject.length - 1) {

				if (number_receipt_correct == false) {

					noty({
		                type : 'confirm',
		                layout : 'top',
		                modal : true,
		                text: 'จำนวนที่รับไม่ครบถ้วน คุณยังต้องการบันทึกรายการรับนี้หรือไม่?',
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
		                    text : 'บนทึก',
		                    onClick : function () {
		                        $.noty.clearQueue(); $.noty.closeAll();

		                        DrinkPOReceiptService.saveDrinkPOReceipt($rootScope.empID, $scope.selectedDrinkPOReceiptDetailObject).then(function (result) {
									if (result.data.status == 200) {
										noty({
							                type : 'success',
							                layout : 'top',
							                modal : true,
							                timeout: 3000,
							                text : 'บันทึกการรับสำเร็จ...',
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
								});
		                    }
		                }]
		            });
					
				}
				else {
					DrinkPOReceiptService.saveDrinkPOReceipt($rootScope.empID, $scope.selectedDrinkPOReceiptDetailObject).then(function (result) {
						if (result.data.status == 200) {
							noty({
				                type : 'success',
				                layout : 'top',
				                modal : true,
				                timeout: 3000,
				                text : 'บันทึกการรับสำเร็จ...',
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
					});
				}
			}
		}
	};

}])
.service('DrinkPOReceiptService', ['$http', '$q',function ($http, $q) {

	this.getAllDrinkPOReceipt = function () {
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

	this.saveDrinkPOReceipt = function (emp_id, drink_po_receipt) {
		return $http.post('http://localhost/restaurant-api/api_save_drink_po_receipt.php', {
            'emp_id' : emp_id,
            'drink_po_receipt' : drink_po_receipt
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrinkPOReceiptNumber = function () {
		return $http.get('http://localhost/restaurant-api/api_get_new_drink_po_receipt.php', {
        }, function(data, status) {
            return data;
        });
	};
}]);