// Library module
angular.module('companyDirectives', []);

// Directives
angular.module('companyDirectives').directive('datePicker', [function () {
	...
}]);

// Application module
angular.module('catalog', ['companyDirectives', 'ui.directives', ...]);
// Configurations
angular.module('catalog').config(['$routeProvider', function($routeProvider) {
	...
}]);
// Services 
angular.module('catalog').factory( 'myService', [function() {
	...	
	return function(item) {
		...
	}	
}]);
// Controllers
angular.module('catalog').controller('CatalogCtrl', ['$scope', '$location', '$http', 'myService', function ($scope, $location, $http, myService) {
	...
}]);
// More ...

