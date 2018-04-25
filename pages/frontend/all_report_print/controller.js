'use strict';

angular.module('RESTAURANT.user_all_report_print', ['ngRoute'])

.controller('AllReportPrintController', ['$rootScope', '$scope', '$sce', '$window', function($rootScope, $scope, $sce, $window) {
	var route = 'user_all_report_print';

	$rootScope.loadCookies();

	$rootScope.reportHtml = $window.localStorage.getItem('reportHtml');

	$scope.reportHtml = $sce.trustAsHtml($rootScope.reportHtml);

}]);