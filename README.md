vilniusjs-angularjs-demo
========================

Demo application for AngularJS framework presentation created for Vilnius JS user group meeting. UI in Lithuanian language.

AngularJs prezentacija
======================

1. Papras�iausias AngularJS puslapis - Sveikas Pasauli!
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

![Automatinis �ablono ir modelio suk�rimas](http://docs.angularjs.org/img/tutorial/tutorial_00.png)

AngularJS nuskaito html �ablon� ir sukuria kontekst�(angl. scope) su �ablone nurodytais proper�iais. Duomen� �vedimo elementams u�dedami �vykiai, kurie automati�kai kei�ia kontekst�.

2. Priklausomybi� �terpimas (Dependency Injection)
-------------------------------------------------------

AngularJS i� pagrind� remiasi priklausomybi� �terpimo princip�. Kuriant applikacij� rekomentuojama j� suskaldyti � modulius, kurie tur�t� savo konfig�racijas, direktyvas (komponentus), servisus, kontrolerius. 

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

HTML �ablonuose priklausomyb�s yra automati�kai �terpiamos, JavaScript kode reikia nurodyti priklausomyb�s pavadinim� ir apra�yti j� kaip closure funkcijos parametr�.