'use strict';

var app = angular.module("myApp", []);


app.controller("AppCtrl", function () {
    var self = this;

    self.message = "hello";
});


app.directive("myFirstDir", function () {
    return function (scope, element, attrs) {
        element.text(scope.app.message + " " + attrs.message);
    };
});
