'use strict';


var app = angular.module('app', []);


function AppCtrl ($scope) {
  $scope.ctrlFlavor = "default value";
}


app.directive('drink', function () {
  return {
    scope: {
      flavor: '@'
    },
    template: '<div>{{flavor}}</div>'
  };
});
