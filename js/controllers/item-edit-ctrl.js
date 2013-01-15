angular.module('catalog')

.controller('ItemEditCtrl', ['$scope', '$location', 'catalogService', '$routeParams', function ($scope, $location, catalogService, $routeParams) {
	if (parseInt($routeParams.itemId)) {
		$scope.item = catalogService.getItem($routeParams.itemId);
	}
	
	$scope.doneEditing = function(item) {
		catalogService[item.id ? 'save' : 'add'](item);
		$location.path('/catalog');
	}
}]);