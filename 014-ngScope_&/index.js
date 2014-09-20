'use strict';


var app = angular.module('app', []);


app.controller('AppCtrl', function ($scope) {
  $scope.callHome = function (message) {
    alert(message);
  };
});


// the dial directive needs to be independent from the phone directive
// therefore, it's isolated w/in each phone directive instance
// the model is bound to the controller (how data is communicated)
app.directive('phone', function () {
  return {
    scope: {
      dial: '&'
    },
    template: '<input type="text" ng-model="value"/>' +
              '<div class="button" ng-click="dial({ message: value })"```>' +
              'Call Home' +
              '</div>'
  };
});
