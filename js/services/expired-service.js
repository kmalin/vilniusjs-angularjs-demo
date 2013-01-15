angular.module('catalog')

.factory( 'expiredService', [function() {

	var today = new Date().toISOString().substr(0, 10);
	
	return function(item) {
		return item.date && item.date < today;
	}
	
}]);