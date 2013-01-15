vilniusjs-angularjs-demo
========================

Demo application for AngularJS framework presentation created for Vilnius JS user group meeting. UI in Lithuanian language.

AngularJs prezentacija
======================

1. Paprasèiausias AngularJS puslapis - Sveikas Pasauli!
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

![Automatinis ðablono ir modelio sukûrimas](http://docs.angularjs.org/img/tutorial/tutorial_00.png)

AngularJS nuskaito html ðablonà ir sukuria kontekstà(angl. scope) su ðablone nurodytais properèiais. Duomenø ávedimo elementams uþdedami ávykiai, kurie automatiðkai keièia kontekstà.

2. Priklausomybiø áterpimas (Dependency Injection)
-------------------------------------------------------

AngularJS ið pagrindø remiasi priklausomybiø áterpimo principø. Kuriant applikacijà rekomentuojama jà suskaldyti á modulius, kurie turëtø savo konfigûracijas, direktyvas (komponentus), servisus, kontrolerius. 

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

HTML ðablonuose priklausomybës yra automatiðkai áterpiamos, JavaScript kode reikia nurodyti priklausomybës pavadinimà ir apraðyti jà kaip closure funkcijos parametrà.