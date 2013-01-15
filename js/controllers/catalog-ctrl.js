angular.module('catalog')

.controller('CatalogCtrl', ['$scope', 'catalogService', 'expiredService', function ($scope, catalogService, expiredService) {
	
	var refreshList = function() {
		$scope.pagedItems = catalogService.getList();
	};
	
	$scope.$watch('pagedItems', function(newValue, oldValue) {
		$scope.expiredCount = _.filter(newValue, expiredService).length;
	});
	
	$scope.remove = function(item) {
		catalogService.remove(item);
		refreshList();
	};
	
	$scope.isExpired = function(item) {
		return expiredService(item);
	}
	
	refreshList();	
}]);