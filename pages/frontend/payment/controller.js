'use strict';

angular.module('RESTAURANT.user_payment', ['ngRoute'])

.controller('PaymentController', ['$rootScope', '$scope', '$location', 'PaymentService', function($rootScope, $scope, $location, PaymentService) {
	var route = 'user_payment';
	// โหลด cookies เพื่อดูว่าได้ login แล้วหรือยัง
	// ถ้า login อยู่แล้วก็จะเอาสิทธิ์ต่างๆที่เก็บใน cookies มาเก็บไว้ในตัวแปร $rootScope.privacyAccess ด้วย
	$scope.listOrderObject = [];
	$scope.OrderObject = [];
	$scope.listOrderDrinkObject = [];
	$scope.autoRefreshTimer = null;
	$scope.totalprice = 0;
	$scope.totalpromotion = 0;
	$scope.promotion = 0;
	$scope.promotionlist = 0;
	$scope.discountPercent = 0;
	$scope.discountPercentdrink = 0;
	$scope.discount = 0;
	$scope.tatal = 0;
	$scope.changeprice = 0;
	$scope.numberprice = null;
	$scope.order_id = 0;
	$scope.totalpricedrink = 0;
	$scope.promotiondrink = 0;
	$scope.promotiondrinklist = 0;
	$scope.discountdrink = 0;
	$scope.tataldrink = 0;
	$scope.changepricedrink = 0;
	$scope.numberpricedrink = null;  

	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
				PaymentService.getAllOrder2().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					if (result.data.status == 200) {
						$scope.listOrderObject = result.data.orderlist;
						$scope.OrderObject = result.data.orderlist;
						

						if (result.data.promotionlist.length > 0) {
							$scope.discountPercent = result.data.promotionlist[0].pro_discount;
							$scope.discountPercentdrink = result.data.promotionlist[0].pro_discount;
							}

							PaymentService.getAllOrderDrink().then(function (result) {
								$scope.listOrderDrinkObject = result.data.orderdrink;

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

	$scope.printSlip = function () {
		
	}


$scope.savePrice = function() {

		var 
			order_id = $scope.order_id, // ตตัดspacebarทั้งหมด
			totalprice = $("#total1").val(), // ตตัดspacebarทั้งหมด
			promotion = $("#total2").val(), // ตตัดspacebarทั้งหมด
			
			discount = $("#total3").val(), // ตตัดspacebarทั้งหมด
			total = $("#total4").val(), 
			price = $("#numberprice").val(),//ดึงค่าจากselectมาไว้ในตัแปล
			changeprice = $("#changeprice").val();//ดึงค่าจากselectมาไว้ในตัแปล

		if (price == '') {
			//cm ถ้า password ไม่เหมือนกัน confirm password จะแจ้งเตือน
			
				noty({
	                type : 'warning',
	                layout : 'top',
	                modal : true,
	                timeout: 3000,
	                text : ' กรุณาตรวจสอบ',
	                callback: {
	                	afterClose: function () {
	                		// ปิด noty
	                		$.noty.clearQueue(); $.noty.closeAll();

	                		// do something
	                	}
	                }
	            });
	            return;
			}
			

			//cm ถ้าผ่านมาถึงนี้จะโยนข้อมูลทั้งหมดไปยัง addEmployee ใน EmployeeService เพื่อเอาลง database
			PaymentService.savePrice(order_id, totalprice,  promotion, discount, total, price, changeprice).then(function (result) {
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

		
	$scope.calculatetotalpricechange = function(){
var  numberprice = $("#numberprice").val();
$scope.changeprice = numberprice - ($scope.tatal + $scope.tataldrink);

	}

	$scope.calculatetotalprice = function(){

		if ($scope.listOrderObject.length > 0) {

			$scope.totalprice = 0;
			$scope.promotion = 0;
			$scope.promotionlist = 0;
			$scope.discount = 0;
			$scope.tatal = 0;
			$scope.changeprice = 0;
			$scope.numberprice = null;  
			for (var i = 0; i < $scope.listOrderObject.length; i++) {

				$scope.totalprice = $scope.totalprice + $scope.listOrderObject[i].number*$scope.listOrderObject[i].price;	
				$scope.promotion = $scope.totalprice + ($scope.totalprice * 0.07);
				
				if (i == $scope.listOrderObject.length-1) {
					$scope.tatal = $scope.promotion;
					if ($scope.discountPercent > 0) {

						//$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
						$scope.discount = $scope.promotion * $scope.discountPercent / 100;
						$scope.tatal = $scope.tatal - $scope.discount ;
						
					}
						
				}
				
			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {

			$scope.totalpricedrink = 0;
			$scope.promotiondrink = 0;
			$scope.promotiondrinklist = 0;
			$scope.discountdrink = 0;
			$scope.tataldrink = 0;
			$scope.changeprice = 0;
			$scope.numberpricedrink = null;  
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {

				$scope.totalpricedrink = $scope.totalpricedrink + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].price;	
				$scope.promotiondrink = $scope.totalpricedrink + ($scope.totalpricedrink * 0.07);
				
				if (i == $scope.listOrderDrinkObject.length-1) {
					$scope.tataldrink = $scope.promotiondrink;
					if ($scope.discountPercentdrink > 0) {

						//$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
						$scope.discountdrink = $scope.promotiondrink * $scope.discountPercentdrink / 100;
						$scope.tataldrink = $scope.tataldrink - $scope.discountdrink;
						
					}
						
				}
				
			}


		}



	}

	$scope.calculatetotalpromotion = function(){
		if ($scope.listOrderObject.length > 0) {
			$scope.totalpromotion = 0;
			$scope.promotion = 0;
			$scope.promotionlist = 0;
			for (var i = 0; i < $scope.listOrderObject.length; i++) {
				$scope.totalpromotion = $scope.totalpromotion + $scope.listOrderObject[i].number*$scope.listOrderObject[i].price;	
				$scope.promotion = $scope.totalpromotion + ($scope.totalpromotion * 0.07);
				$scope.promotionlist = $scope.promotion * ($scope.listOrderObject[i].pro_discount / 100);
			}


		}

		if ($scope.listOrderDrinkObject.length > 0) {
			$scope.totalpromotiondrink = 0;
			$scope.promotiondrink = 0;
			$scope.promotiondrinklist = 0;
			for (var i = 0; i < $scope.listOrderDrinkObject.length; i++) {
				$scope.totalpromotiondrink = $scope.totalpromotiondrink + $scope.listOrderDrinkObject[i].number*$scope.listOrderDrinkObject[i].price;	
				$scope.promotiondrink = $scope.totalpromotiondrink + ($scope.totalpromotiondrink * 0.07);
				$scope.promotionlist = $scope.promotiondrink * ($scope.listOrderDrinkObject[i].pro_discount / 100);
			}


		}



	}



	$scope.listOrder = function(order_id) {
		$scope.order_id = order_id;
		PaymentService.getAllOrder(order_id).then(function (result) {
			if (result.data.status == 200) {
				$scope.listOrderObject = result.data.orderlist;
				$scope.calculatetotalprice();
				$scope.calculatetotalpromotion();
			PaymentService.getAllOrderDrink(order_id).then(function (result) {
			if (result.data.status == 200) {
				$scope.listOrderDrinkObject = result.data.orderdrink;
				}
		});
			}
		});
		console.log($scope.listOrderObject)
		console.log($scope.listOrderDrinkObject)

	}



	/*$scope.orderfood = function(food_id) {

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

	*/

	$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					PaymentService.getAllOrderFood().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
							$scope.listOrderFoodObject = result.data.orderfood;
							$scope.listOrderDrinkObject = result.data.orderdrink;
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
	

	// END Delete Unit
}])
.service('PaymentService', ['$http', '$q',function ($http, $q) {

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

	this.addFood = function (food_name, food_kind_id, food_price, food_status_id) {
		return $http.post('restaurant-api/api_add_food.php', {
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

		return $http.get('restaurant-api/api_get_food.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateOrderFood = function (status,id, id_food) {
		return $http.post('restaurant-api/api_update_order_food.php', {
            'order_id' : id,
            'status' : status,
            'food_id' : id_food, 
           
        }, function(data, status) {
            return data;
        });
	};

	this.deleteFood = function (food_id, food_status_id,action) {
		return $http.post('restaurant-api/api_update_food.php', {
            'food_id' : food_id,
            'food_status_id' : food_status_id,
            'action' : action,
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderFood = function () {
		return $http.get('restaurant-api/api_get_order_food.php', {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrder = function (order_id) {
		return $http.get('restaurant-api/api_get_order_list.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrder2 = function (order_id) {
		return $http.get('restaurant-api/api_get_order_list2.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.getAllOrderDrink= function (order_id) {
		return $http.get('restaurant-api/api_get_order_drink.php?order_id='+order_id, {
        }, function(data, status) {
            return data;
        });
	};

	this.savePrice = function (order_id, totalprice,  promotion, discount, total, price, changeprice) {
		return $http.post('restaurant-api/api_save_price.php', {
   			'order_id' : order_id,
            'totalprice' : totalprice,
            'promotion' : promotion,
            'discount' : discount,
            'total' : total,
            'price' : price,
            'changeprice' : changeprice,
            
   
        }, function(data, status) {
            return data;
        });
	};
	
}]);