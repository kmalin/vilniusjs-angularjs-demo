// Creating a module
angular.module('companyDirectives', []);

// Creating a directive
angular.module('companyDirectives').directive('datePicker', [function () {
	return {
		priority: 0,
		/*
		replace: false,
		restrict: 'A', //restrict to attributes
		*/
		replace: true,
		template: '<input type="text" />',
		restrict: 'E', 
		scope: false,
		require:'?ngModel',
		compile: function compile() {
			return function postLink(scope, element, attrs, controller) {
				
				var opts = { 
					showOtherMonths: true,
					selectOtherMonths: false,
					changeMonth: true,
					changeYear: true,
					dateFormat: 'yy-mm-dd',
					firstDay: 1
				};
				
				if (controller) {
					var updateModel = function () {
						scope.$apply(function () {
							var date = element.val();
							element.datepicker("setDate", date);
							controller.$setViewValue(date);
						});
					};
					opts.onSelect = updateModel;
					
				}
				
				// If we don't destroy the old one it doesn't update properly when the config changes
				element.datepicker('destroy');
				// Create the new datepicker widget
				element.datepicker(opts);
			}
		}
	};
}]);