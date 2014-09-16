'use strict';


var myApp = angular.module('myApp', []);


myApp.directive('enter', function onEnter () {
  return function (scope, element, attrs) {
    element.bind('mouseenter', function onMouseEnter () {
      element.addClass(attrs.enter);
    });
  };
});


myApp.directive('leave', function onLeave () {
  return function (scope, element, attrs) {
    element.bind('mouseleave', function onMouseLeave () {
      element.removeClass(attrs.enter);
    });
  };
});
