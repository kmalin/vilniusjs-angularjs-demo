angular.module('catalog')

.filter('expiredFilter', ['$routeParams', 'expiredService', function($routeParams, expiredService) {
    
	return function(input) {
		if ($routeParams.filter === 'expired') {
			return _.filter(input, expiredService);
		} else {
			return input;
		}
    };
}]);