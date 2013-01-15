angular.module('catalog')

.factory( 'catalogStorage', function() {
  var STORAGE_ID = 'catalog-storage';

  return {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function( items ) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(items));
    }
  };
});