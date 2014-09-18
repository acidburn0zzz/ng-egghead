'use strict';


var myApp = angular.module('myApp', []);


myApp.directive('ironman', function () {
  return {
    restrict: 'A',
    link: function () {
      alert('I\'m working stronger');
    }
  };
});


myApp.directive('thor', function () {
  return {
    restrict: 'C',
    link: function () {
      alert('I\'m working faster');
    }
  };
});
