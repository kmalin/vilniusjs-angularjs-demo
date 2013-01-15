angular.module('catalog', ['companyDirectives']);

angular.module('catalog').config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/index', {templateUrl: 'partials/index.html'}).
		// optional parameter - filter
		when('/catalog/?:filter', {templateUrl: 'partials/catalog.html', controller: 'CatalogCtrl'}). 
		// required parameter itemId
		when('/item/:itemId', {templateUrl: 'partials/item-edit.html', controller: 'ItemEditCtrl'}). 
		when('/item/view/:itemId', {templateUrl: 'partials/item-detail.html', controller: 'ItemDetailCtrl'}).
		otherwise({redirectTo: '/index'});
}]);