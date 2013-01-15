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

5. Formos (Forms)
-----------------

AngularJS turi savo būdą kaip validuoti formas. Karkasas palaiko standartinius HTML įvedimo elementus, ir automatiškai susaisto reikšmes kai yra nurodomas `ng-model` atributas.
Pvz.:
```html
<input type="text" placeholder="Pavadinimas (iki 50 simb.)" ng-model="item.title">
```

Taip pat galima nurodyti papildomas validavimo roles, kaip: `text, number, url, email, radio, checkbox`. Kiekviena rolė dar gali turėti papildomus atributus, pvz.: `required, pattern, minlength, maxlength, min, max`.
Tada pilnas aprašymas galėtų atrodyti taip:
```html
<input type="number" placeholder="Kaina litais" ng-model="item.price" required number min="0" max="1000000">
```

Vos tik kuriam nors formos elementui pakeičiama reikšmė, formos elementams ir pačiai formai priskiriamos šios css klasės:
* ng-valid - Elemento reikšmė validi
* ng-invalid - Element reikšmė nevalidi
* ng-pristine - Elemento reikšmė nepakeista
* ng-dirty - Elemento reikšmė pakeista

Formą ir jos validavimo rezultatus galima matyti iš šablono arba kontrolerio jei nurodomas formos `name` atributas - `name="form"`. Tada pvz. šablone galima kontroliuoti formos patvirtinimo mygtuką.
```html
<button type="submit" class="btn" ng-disabled="form.$invalid || form.$pristine">Išsaugoti</button>
```
Formos nebus galima išsaugoti tol kol ji bus validi ar niekas nebus pakeista.

Kai forma yra patvirtininama, šį įvykį galima sugauti ir iškviesti kontrolerio funkciją: `ng-submit="doneEditing(item)"`

6. Kontroleriai (Controllers)
-----------------------------

Galima įsivaizduoti, kad kontroleris "valdo" tam tikrą html fragmentą. Tiksliau AngularJS karkase, kontroleris keičia konteksto objektą ("scope", modelio atitikmuo pagal MVC) pridėdamas naujus properčius ar metodus.

Paprastas kontrolerio pavyzdys:
```html
<!doctype html>
<html ng-app>
<head>
	<link rel="stylesheet" href="inc/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/styles.css">
	<script src="inc/angular/angular.min.js"></script>
	<script type="text/javascript" >
		function MathCtrl($scope) {
			
			$scope.calculate = function() {
				$scope.result = $scope.x * $scope.x;
			};
			
		}
	</script>
</head>
<body>
	<div class="container main-content" ng-controller="MathCtrl">
		<input type="text" number ng-model="x" ><br/>
		<button class="btn" ng-click="calculate()">Kelti kvadratu</button>
		<p>Rezultatas: {{result}}</p>
	</div>
</body>
</html>
```

7. Servisai (Services)
----------------------

Reikia stengtis neapkrauti kontrolerių daugiau nei reikalauja biznio logika tam HTML vaizdui. Kitą, pvz duomenų gavimo ir saugojimo, logiką reikia iškelti į servisus.

Paprasto serviso pavyzdys:
```js
angular.module('catalog')

.factory( 'expiredService', [function() {

	var today = new Date().toISOString().substr(0, 10);
	
	return function(item) {
		return item.date && item.date < today;
	}
	
}]);
```

AngularJS turi daug standartinių servisų: 
* $location
* $rout
* $routeParams
* $http
* $log
* $timeout
* $window
* $q
* $resource
* ...

Kaip matome šie servisai užvelka abstrakcijos lygį ant standartinių JavaScript objektų, tam kad juos prireikus būtų galima pakeisti kitais (pvz. testuojant).

8. Filtrai (Filters)
--------------------

Filtras AngularJS karkase - tai funkcija, kuri keičia išraiškos reikšmę. Filtrai išraiškose prijungiami '|' simboliu. Paprastas pavyzdys - skaičių formatavimas: 
```html
{{item.remainder * item.price | number:2}}
``` 
Filtrai dažnai naudojami filtruoti masyvams:
```html
<tbody ng-repeat="item in pagedItems | expiredFilter | filter:query">
```
Kaip matome, galima apjungti keletą filtrų į nuoseklų filtravimą.
Filtro kodas:
```js
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
```
