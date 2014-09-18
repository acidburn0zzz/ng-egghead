'use strict';


var myApp = angular.module('myApp', []);


myApp.controller('WhateverCtrl', function () {
  var app = this;

  app.message = 'Hello';
});


myApp.directive('myFirstDirective', function () {
  return function (scope, element, attributes) {
    element.text(scope.app.message + ' ' + attributes.message);
  };
});
