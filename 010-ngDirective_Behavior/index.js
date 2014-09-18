'use strict';


var myApp = angular.module('myApp', []);


myApp.directive('enter', function onEnter () {
  return function (scope, element) {
    element.bind('mouseenter', function onMouseEnter () {
      console.log('"mouseenter" just happened');
    });
  };
});


myApp.directive('leave', function onLeave () {
  return function (scope, element) {
    element.bind('mouseleave', function onMouseLeave () {
      console.log('"mouseleave" just happened');
    });
  };
});
