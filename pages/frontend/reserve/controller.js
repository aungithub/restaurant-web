'use strict';

angular.module('RESTAURANT.user_reserve', ['ngRoute'])

.controller('ReserveController', ['$rootScope', '$scope', '$location', 'ReserveService', function($rootScope, $scope, $location, ReserveService) {
	var route = 'user_reserve';

$scope.table_id = [];
$scope.table_status_id = 0;
$scope.listTableObject = null;
$scope.listTableZone = [];
$scope.selectedId = "";
$scope.selectedReserveObject = null;
$scope.listTableZoneReserve = [];
$scope.listTableZoneEdit = [];
$scope.comment_reserve = "";
$scope.autoRefreshTimer = null;


noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReserveService.getAllReserveList().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
										$scope.autocheckreserve();
									$scope.listTableZoneReserve = result.data.reserve;

									

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

$scope.autocheckreserve = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			ReserveService.getCancelReserve().then(function (result) {
				if (result.data.status == 200) {
					console.log("check success");
				}
			});
		},1800000);//5 วินาที*1000 => 1800000 = 30 นาที
	}


$scope.getTable = function(){
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {
								ReserveService.getAllTable().then(function (result) {
									$.noty.clearQueue(); $.noty.closeAll();

									if (result.data.status == 200) {
									$scope.listTableZone = result.data.zone;

									

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

$scope.table = function(table_id){

	if($scope.table_status_id == 3){
		var idx = $scope.table_id.findIndex(obj => obj==table_id);

		if(idx == -1){
			$scope.table_id.push(table_id);
		}
	}
	else {
		$scope.table_id = [];
		$scope.table_id.push(table_id);
	}
	
  
	}

	$scope.tableStatus = function(table_status_id){

  $scope.table_status_id =table_status_id ;


}

$scope.tableDetail = function(){

  
var detail = $("#detail").val();


}

$scope.saveTable = function(){

  
  	noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูลหน่วย...',
            callback: {
            	afterShow: function () {
            		ReserveService.saveTable( $scope.table_id, $scope.table_status_id,$("#detail").val() ).then(function (result) {
						if (result.data.status == 200 ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();

							$scope.listTableObject = result.data.table;
					
				
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

}

	//edit//
$scope.editReserve = function(id) {
		$scope.table_id = [];
		$scope.table_status_id = 0;
		$scope.selectedId = id;
		$scope.selectedReserveObject = null;
		$scope.listTableZoneEdit = [];
		$scope.comment_reserve = "";
		noty({
            type : 'alert',
            layout : 'top',
            modal : true,
            text : 'กำลังดึงข้อมูล...',
            callback: {
            	afterShow: function () {

            		ReserveService.getAllTableEdit($scope.selectedId).then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll();

							if (result.data.status == 200) {
							$scope.listTableZoneEdit = result.data.zone;
							$scope.comment_reserve = result.data.comment_reserve;
							$scope.table_status_id = result.data.service_id_reserve;

							for (var i=0; i<$scope.listTableZoneEdit.length; i++) {
								for (var j=0; j<$scope.listTableZoneEdit[i].table.length; j++) {
									if ($scope.listTableZoneEdit[i].table[j].table_reserve == true) {
										$scope.table_id.push($scope.listTableZoneEdit[i].table[j].table_id);
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
	}
	// END Edit Unit

	// Update Unit

	$scope.updateReserve = function(id) {
		var reserve_id = $scope.selectedId,
			service_id = $scope.table_status_id,
			reserve_name = $("#detail_edit").val();
			

		if (reserve_id != '' && service_id != '' ) {
			ReserveService.updateReserve(reserve_id, service_id, reserve_name,$scope.table_id ).then(function (result) {
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
		                		//$scope.refreshList();
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


}])
.service('ReserveService', ['$http', '$q',function ($http, $q) {


	 this.getAllTableDetail = function (id) {
	 	var conditions = "?table_id=" + id;
		return $http.get('restaurant-api/api_get_table_detail.php'+ conditions,{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTable = function (id) {
		return $http.get('restaurant-api/api_get_all_table.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.getAllTableEdit = function (reserve_id) {
		return $http.post('restaurant-api/api_get_all_table_edit.php',{
			 'reserve_id' : reserve_id

        }, function(data, status) {
            return data;
        });
	};

	this.getAllReserveList = function (id) {
		return $http.get('restaurant-api/api_get_all_reserve_list.php',{
        }, function(data, status) {
            return data;
        });
	};

	this.saveTable = function (table_id,table_status_id,detail) {
		return $http.post('restaurant-api/api_save_table.php', {
            'table_id' : table_id,
            'table_status_id' : table_status_id, 
            'detail' : detail,
   
        }, function(data, status) {
            return data;
        });
	};

	this.getAllReserve = function (id) {
		var conditions = "?reserve_id=" + id;

		return $http.get('restaurant-api/api_get_all_reserve.php' + conditions, {
        }, function(data, status) {
            return data;
        });
	};

	this.updateReserve = function (reserve_id, service_id, reserve_name, table_id) {
		return $http.post('restaurant-api/api_update_reserve.php', {
            'reserve_id' : reserve_id,
            'service_id' : service_id,
            'reserve_name' : reserve_name,
            'table_id' : table_id
            
        }, function(data, status) {
            return data;
        });
	};
	
	this.getCancelReserve = function () {
	return $http.post('restaurant-api/api_cancel_reserve.php', {
           
        }, function(data, status) {
            return data;
        });
	};
}]);