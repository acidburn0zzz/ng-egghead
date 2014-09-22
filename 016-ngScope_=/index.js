'use strict';


var eggheadApp = angular.module('eggheadApp', []);


// property attached to the scope => used for data binding
eggheadApp.controller('AppCtrl', function ($scope) {
  $scope.ctrlFlavor = "hello cruel world";
});


// directive creates an isolated scope expecting an object (hence "=")
// creates a template w/ bidirectional binding
eggheadApp.directive('cream', function () {
  return {
      scope: {
        world: '='
      },
      template: '<input type="text" ng-model="world"/>'
  };
});
