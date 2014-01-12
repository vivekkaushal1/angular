'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope){
	$scope.phones = [
	{'name': 'Lumia 1520',
	'snippet': 'Do not recall just relive..'},
	{'name': 'Lumia 1020',
	'snippet': 'Zoom Reinvented'},
	{'name': 'Lumia 2520',
	'snippet': 'Innovation Reinvented'}
	];
});
