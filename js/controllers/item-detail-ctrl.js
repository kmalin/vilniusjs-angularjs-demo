angular.module('catalog')

.controller('ItemDetailCtrl', ['$scope', '$location', 'catalogService', '$routeParams', function ($scope, $location, catalogService, $routeParams) {
	if (parseInt($routeParams.itemId)) {
		$scope.item = catalogService.getItem($routeParams.itemId);
	}
}]);