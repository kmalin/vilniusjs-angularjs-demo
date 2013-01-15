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
