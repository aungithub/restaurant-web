'use strict';

angular.module('RESTAURANT.user_menu', ['ngRoute'])

.controller('MenuController', ['$rootScope', '$scope', '$location', 'MenuService', function($rootScope, $scope, $location, MenuService) {
	var route = 'user_menu';
	$rootScope.loadCookies();

	$scope.listFoodObject = null;
	$scope.listDrinkObject = null;
	$scope.selectedId = "";
	$scope.selectedFoodObject = null;
	$scope.selectedKindObject = null;
	$scope.listKindObject = null;
	$scope.listOrderFoodObject = [];
	$scope.listOrderDrinkObject = [];
	$scope.totalprice = 0;
	$scope.menuSelect =0;
	$scope.menuFoodType =0;
	$scope.orderObject =  false;
	// เอาไว้เรียกใช้งาน function ใน index เืพ่อซ่อนเมนู
	$rootScope.$emit('IndexController.hideLoginShowMenu');
	$rootScope.getAllNotification();
	 $scope.table_id = 10;
	 $scope.listFoodObject = null;

	// เช็คสิทธิ์
	/*if ($rootScope.isLoggedIn == false || $rootScope.privacyAccess == 'undefined' || $rootScope.privacyAccess.indexOf(route) == -1) {
		$location.path('/f/admin_login');
	}*/

	// โหลดข้อมูล unit ทั้งหมดมาแสดงที่ตาราง
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				MenuService.getAllFood().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listFoodObject = result.data.food;

						MenuService.getAllDrink().then(function (result) {

							$scope.listDrinkObject = result.data.drink;

							MenuService.getAllKind().then(function (result) {
								$scope.listKindObject = result.data.kind;
							});
						});
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

	

	$scope.saveTable = function(table_id){

  $scope.table_id = table_id ; 

MenuService.saveTable(table_id).then(function (result) {
				//cm ถ้า status 200 คือเอาลง database ได้ ไม่มีปัญหา
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

$scope.search = function () {
		$scope.listFoodObject = false;
		MenuService.search($('#search').val()).then(function (result) {
			$scope.listFoodObject = result.data.food;
		});
	};

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
					MenuService.getAllKind().then(function (result) {
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
	};

	$scope.orderfood = function(food_id) {

	var idx = $scope.listOrderFoodObject.findIndex(obj => obj.food_id==food_id);



		//alert(food_id);
		//alert($("#comment_"+food_id).val());
		//alert(idx);

	if (idx == -1) {
		$scope.listOrderFoodObject.push({
			food_id : food_id,
			number : $("#number_"+food_id).val(),
			comment : $("#comment_"+food_id).val(),
			food_name : $("#food_name_"+food_id).text(),
			food_price : $("#food_price_"+food_id).text(),
			type : "food"
		});
	}
	else{
		$scope.listOrderFoodObject[idx].number = parseInt($scope.listOrderFoodObject[idx].number) + parseInt($("#number_"+food_id).val());
		console.log($scope.listOrderFoodObject[idx]);
	}
		$scope.calculatetotalprice();
		console.log($scope.listOrderFoodObject);
	}

	$scope.orderdrink = function(drink_id) {

		var idx = $scope.listOrderDrinkObject.findIndex(obj => obj.drink_id==drink_id);

			//alert(food_id);
			//alert($("#comment_"+food_id).val());
			//alert(idx);

		if (idx == -1) {
			$scope.listOrderDrinkObject.push({
				drink_id : drink_id,
				number : $("#number_"+drink_id).val(),
				comment : $("#comment_"+drink_id).val(),
				drink_name : $("#drink_name_"+drink_id).text(),
				drink_price : $("#drink_price_"+drink_id).text(),
				type : "drink"
			});
		}
		else{
			$scope.listOrderDrinkObject[idx].number = parseInt($scope.listOrderDrinkObject[idx].number) + parseInt($("#number_"+drink_id).val());
			console.log($scope.listOrderDrinkObject[idx]);
		}
		$scope.calculatetotalprice();
		console.log($scope.listOrderDrinkObject);
	}

	$scope.calculatetotalprice = function(){
		if ($scope.listOrderFoodObject.length > 0) {
			$scope.totalprice = 0;
			for (var i = 0; i < $scope.listOrderFoodObject.length; i++) {
				$scope.totalprice = $scope.totalprice + $scope.listOrderFoodObject[i].number*$scope.listOrderFoodObject[i].food_price;

			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {
			if ($scope.listOrderFoodObject.length == 0) {
				$scope.totalprice = 0;
			}
			
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {
				$scope.totalprice = $scope.totalprice + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].drink_price;

			}


		}



	}

	$scope.saveFood = function() {
		if ($scope.listOrderFoodObject.length > 0  || $scope.listOrderDrinkObject.length > 0 ) {

			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?',
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
                            text : 'กำลังบันทึกข้อมูล...',
                            callback : {
                                afterShow : function () {
                                $.noty.clearQueue(); $.noty.closeAll();
			MenuService.saveFood($scope.listOrderFoodObject, $scope.listOrderDrinkObject).then(function (result) {
				$.noty.clearQueue(); $.noty.closeAll();

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
								                		$scope.listOrderFoodObject = [];
								                		$scope.listOrderDrinkObject = [];
								                		$scope.totalprice = 0;
								                		// refresh หน้าจอ
								                		//location.reload();
								                		$scope.refreshList();
								                		console.log($scope.listOrderDrinkObject)
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
								                text : 'บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่ในภายหลัง',
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
	$scope.showMenuSelect = function() {
		//console.log();
		//alert($("#menuSelect"+food_id).val());
		//alert(menuSelect);
		//alert($("#menuSelect").val());
		//$("#menuSelect").val()
		$scope.menuFoodType =0;
		$scope.menuSelect = $("#menuSelect").val();


	}

	$scope.showFoodTypeSelect = function() {
		//console.log();
		//alert($("#menuSelect"+food_id).val());
		//alert(menuSelect);
		//alert($("#menuSelect").val());
		//$("#menuSelect").val()
		$scope.menuFoodType = $("#menuFoodType").val();


	}
	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					MenuService.getAllFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listFoodObject = result.data.food;
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

	// END Delete Unit
}])
.service('MenuService', ['$http', '$q',function ($http, $q) {

	this.getAllKind = function () {
		return $http.get('restaurant-api/api_get_kind.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllFood = function () {
		return $http.get('restaurant-api/api_get_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllDrink= function () {
		return $http.get('restaurant-api/api_get_drink.php', {
        }, function(data, status) {
            return data;
        });
	};

	
	this.getByID = function (id) {
		var conditions = "?food_id=" + id;

		return $http.get('restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.saveFood = function (food_list, drink_list) {
		return $http.post('restaurant-api/api_save_food.php', {
            'food_list' : food_list, 
            'drink_list' : drink_list, 
   
        }, function(data, status) {
            return data;
        });
	};

	this.saveTable = function (table_id) {
		return $http.post('restaurant-api/api_save_food.php', {
            'table_id' : table_id, 
   
        }, function(data, status) {
            return data;
        });
	};
	
	this.search = function (search) {
		return $http.get('restaurant-api/api_get_food.php?search=' + search, {
	    }, function(data, status) {
	        return data;
	    });
	};

}]);