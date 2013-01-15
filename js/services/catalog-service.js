angular.module('catalog')

.factory( 'catalogService', ['catalogStorage', function(catalogStorage) {
  
	var items = null;

	var getNextId = function() {
		var id = 0;
		_.each(items, function(item) { 
			id = item.id > id ? item.id : id;
		});
		return id + 1;
	};
	items = catalogStorage.get();
	if (!items) {
		items = [];
	}
	
	var save = function() {
		catalogStorage.put(items);
	};
	
	return {
		getList: function() {
			return items;
		},
		
		getItem: function(itemId) {
			var result = _.find(items, function(item) { return item.id == itemId; });
			return result;
		},
		
		add: function(item) {
			item.id = getNextId();
			items.push(item);
			save();
		},
		
		save: function(item) {
			save();
		},
		
		remove: function(item) {
			items = _.without(items, item);
			save();
		}
	};
}]);