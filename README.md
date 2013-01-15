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
