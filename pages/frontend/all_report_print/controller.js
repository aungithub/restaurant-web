'use strict';

angular.module('RESTAURANT.user_all_report_print', ['ngRoute'])

.controller('AllReportPrintController', ['$rootScope', '$scope', '$sce', '$window', function($rootScope, $scope, $sce, $window) {
	var route = 'user_all_report_print';

	$rootScope.loadCookies();

	$rootScope.reportHtml = $window.localStorage.getItem('reportHtml');

	$scope.reportHtml = $sce.trustAsHtml($rootScope.reportHtml);


	//function สำหรับ export html รายงาน เป็น pdf
    $scope.export = function(){
        html2canvas(document.getElementById('export'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Report.pdf");
            }
        });
    }

    // ทำการเรียก function export เพื่อ export pdf
    $scope.export();

}]);