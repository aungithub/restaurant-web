'use strict';

angular.module('RESTAURANT.user_reserve', ['ngRoute'])

.controller('ReserveController', ['$rootScope', '$scope', '$location', 'ReserveService', function($rootScope, $scope, $location, ReserveService) {
	var route = 'user_reserve';

$scope.table_id = 0;
$scope.listTableObject = null;

$scope.table = function(table_id){

  $scope.table_id =table_id ;
   
	noty({
        type : 'alert', // alert, success, warning, error, confirm
        layout : 'top',
        modal : true,
        text : 'กำลังโหลด...',
        callback: {
        	afterShow: function () {

        		//cm เข้ามาหน้านี้ จะดึงข้อมูลพนักงานทั้งหมดมาแสดงใน list
				ReserveService.getAllTable().then(function (result) {
					$.noty.clearQueue(); $.noty.closeAll(); // clear noty

					//cm ถ้า status 200 คือดึงได้ปกติไม่มี error ใดๆ ฝั่ง API
					if (result.data.status == 200) {
						//cm โยนข้อมูลพนักงานทั้งหมดใส่ในตัวแปร เพื่อเอาไปแสดงที่ employee.html
						$scope.listTableObject = result.data.table;
						console.log(listTableObject)
					}
					else {
						//cm แสดงข้อความจาก api ถ้า status ไม่ใช่ 200
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

}])
.service('ReserveService', ['$http', '$q',function ($http, $q) {

	 this.getAllTable = function () {
		return $http.get('restaurant-api/api_get_table.php', {
        }, function(data, status) {
            return data;
        });
	};
	
}]);