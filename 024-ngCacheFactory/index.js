'use strict';


var app = angular.module('eggz', []);


// create cache factory
app.factory('peopleCache', function ($cacheFactory) {
  return $cacheFactory('people');
});


// controller stuff
app.controller('AppCtrl', function ($http, peopleCache) {

  var app = this;

  app.loadPeople = function () {
    // http get testing data
    $http.get('http://www.json-generator.com/api/json/get/cqgXuFmnQO?indent=2', { cache: peopleCache })
      .success(function onSuccess (data) {
        app.people = data;
      });
  };

  app.clearCache = function () {
    peopleCache.remove('http://www.json-generator.com/api/json/get/cqgXuFmnQO?indent=2');
  };

});
