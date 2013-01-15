vilniusjs-angularjs-demo
========================

Demo application for AngularJS framework presentation created for Vilnius JS user group meeting. UI in Lithuanian language.

AngularJs prezentacija
======================

1. Paprasčiausias AngularJS puslapis - Sveikas Pasauli!
-------------------------------------------------------

```html
<!doctype html>
<html ng-app>
<body>
	<input type="text" ng-model="name" />
	<p>Sveikas {{name}}!</p>
	<script src="inc/angular/angular.min.js"></script>
</body>
</html>
```

![Automatinis šablono ir modelio sukūrimas](http://docs.angularjs.org/img/tutorial/tutorial_00.png)

AngularJS nuskaito html šabloną ir sukuria kontekstą(angl. scope) su šablone nurodytais properčiais. Duomenų įvedimo elementams uždedami įvykiai, kurie automatiškai keičia kontekstą.

2. Priklausomybių įterpimas (Dependency Injection)
-------------------------------------------------------

AngularJS iš pagrindų remiasi priklausomybių įterpimo principų. Kuriant applikaciją rekomentuojama ją suskaldyti į modulius, kurie turėtų savo konfigūracijas, direktyvas (komponentus), servisus, kontrolerius. 

```js
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
angular.module('catalog').controller('CatalogCtrl', ['$scope', '$location', '$http', 'myService', 
function ($scope, $location, $http, myService) {
	...
}]);
// More ...
```

HTML šablonuose priklausomybės yra automatiškai įterpiamos, JavaScript kode reikia nurodyti priklausomybės pavadinimą ir aprašyti ją kaip closure funkcijos parametrą.

3. URL keliai (Routes)
----------------------

AngularJS leidžia aprašyti URL kelius, einančius už # simbolio ir taip sukontroliuoja perėjimus iš vieno vaizdo į kitą vieno puslapio aplikacijoje. Taip pat sukontroliuoja puslapio istoriją.

```js
angular.module('catalog', []);

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
```

4. Šablonai (Templates)
-----------------------

Leidžiami bent trijų tipų šablonai:
* HTML elementai pagrindiniame puslapyje
* Šablonas `<script>` žymėje
* Šablonas atskirame faile

Pavyzdys:
```html
<script type="text/ng-template" id="partials/item-edit.html">
<form>
...
</form>
</script>
```