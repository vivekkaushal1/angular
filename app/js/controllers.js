var phonecatApp = angular.module('phonecatApp', []);
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$http.get('../phones/phones.json').success(function(data) {
			$scope.phones = data;
		});

		$scope.orderProp = 'age';
	}]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$http.get('../phones/phones.json').success(function (data) {
			$scope.phones = data;
		});

		$scope.orderProp = 'age';
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
			$scope.phone = data;
		});
	}
	]);