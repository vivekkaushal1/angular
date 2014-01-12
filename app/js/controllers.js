'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',[$scope, $http function($scope, $h{ttp){
	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;
	});

	$scope.orderProp = 'age'
}]);
