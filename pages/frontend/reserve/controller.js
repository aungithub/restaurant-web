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
$scope.reserveEdit = null;
$scope.table_id_search_time_list = null;

$scope.tableTime = null;
$scope.updated_table = false;
$scope.isEditing = false;
$scope.reserve_time_selected = null;

$('.datepicker').datetimepicker({ defaultDate: new Date(), format: 'YYYY-MM-DD' });


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

$scope.refreshList = function() {
		noty({
	        type : 'alert', // alert, success, warning, error, confirm
	        layout : 'top',
	        modal : true,
	        text : 'กำลังโหลด...',
	        callback: {
	        	afterShow: function () {
					ReserveService.getAllReserveList().then(function (result) {
						$.noty.clearQueue(); $.noty.closeAll(); // clear noty

						if (result.data.status == 200) {
									$scope.autocheckreserve();
									$scope.listTableZoneReserve = result.data.reserve;
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
$scope.autocheckreserve = function(){
		$scope.autoRefreshTimer = setInterval(function(){
			ReserveService.getCancelReserve().then(function (result) {
				if (result.data.status == 200) {
					console.log("check success");
				}
			});
		},1800000);//5 วินาที*1000 => 1800000 = 30 นาที
	}

	$scope.deleteReserve = function(id) {
		var reserve_id = id;

		if (reserve_id != '') {
			noty({
                type : 'confirm',
                layout : 'top',
                modal : true,
                text: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่?',
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

                                    ReserveService.deleteReserve(reserve_id).then(function (result) {
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

$scope.getTable = function(){
	$scope.isEditing = false;
		$scope.listTableZone = [];

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

$scope.updateTableTime = function(time) {
	$scope.reserve_time_selected = time;
	$('#reserve_time').val(time);
	$('#reserve_time_edit').val(time);
	$("#close_modal_table_list").click()
	$scope.updated_table = true;
}

$scope.listTable = function() {

	ReserveService.getTableTime($scope.table_id_search_time_list, $("#reserve_date").val(),$("#reserve_time").val()).then(function (result) {
		$scope.tableTime = result.data.tableTime;
	});
}

$scope.table = function(table_id){

	$scope.table_id_search_time_list = table_id;
	if($scope.table_status_id == 3){
		var idx = $scope.table_id.findIndex(obj => obj==table_id);

		if(idx == -1){
			$scope.table_id.push(table_id);
		}

		$scope.listTable();
		if ($scope.isEditing == false || ($scope.table_status_id == 4 && $scope.isEditing == true)) {
			document.getElementById("listTableButton").click();
		}
	}
	else {
		$scope.table_id = [];
		$scope.table_id.push(table_id);

		$scope.listTable();
		if ($scope.isEditing == false || ($scope.table_status_id == 4 && $scope.isEditing == true)) {
			document.getElementById("listTableButton").click();
		}
		
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
            text : 'กำลังบันทึก...',
            callback: {
            	afterShow: function () {
            		ReserveService.saveTable( $scope.table_id, $scope.table_status_id,$("#detail").val(),$("#reserve_date").val(),$("#reserve_time").val() ).then(function (result) {
						if (result.data.status == 200 ) {
							// ปิด noty
							$.noty.clearQueue(); $.noty.closeAll();


							$scope.listTableObject = result.data.table;
						
								$("#close_modal_add").click()
								$scope.refreshList();
							
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
		$scope.isEditing = true;
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
							$scope.reserveEdit = result.data.reserve[0];
							$scope.listTableZoneEdit = result.data.zone;
							$scope.comment_reserve = result.data.comment_reserve;
							$scope.table_status_id = result.data.service_id_reserve;

							$('#reserve_date_edit').val($scope.reserveEdit.reserve_date);
							$('#reserve_time_edit').val($scope.reserveEdit.reserve_time);

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
			ReserveService.updateReserve(reserve_id, service_id, reserve_name,$scope.table_id,$("#reserve_date_edit").val(),$("#reserve_time_edit").val() ).then(function (result) {
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

	this.saveTable = function (table_id,table_status_id,detail,reserve_date,reserve_time) {
		return $http.post('restaurant-api/api_save_table.php', {
            'table_id' : table_id,
            'table_status_id' : table_status_id, 
            'detail' : detail,
            'reserve_date': reserve_date,
            'reserve_time': reserve_time,
   
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

	this.updateReserve = function (reserve_id, service_id, reserve_name, table_id,date,time) {
		return $http.post('restaurant-api/api_update_reserve.php', {
            'reserve_id' : reserve_id,
            'service_id' : service_id,
            'reserve_name' : reserve_name,
            'table_id' : table_id,
            'date': date,
            'time': time
            
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


	this.getTableTime = function (table_id,reserve_date,reserve_time) {
		return $http.post('restaurant-api/api_get_reserve_time_by_table.php', {
            'table_id' : table_id,
            'reserve_date': reserve_date,
            'reserve_time': reserve_time,
   
        }, function(data, status) {
            return data;
        });
	};

	this.deleteReserve = function (reserve_id) {
		return $http.post('restaurant-api/api_delete_reserve.php', {
            'reserve_id' : reserve_id,
           
        }, function(data, status) {
            return data;
        });
	};
}]);