'use strict';


var myApp = angular.module('myApp', []);


myApp.factory('Data', function onFactory() {
  return {
    message: 'I\'m data from a service'
  };
});


myApp.filter('reverse', function onReverse (Data) {
  return function (text) {
    return text.split('').reverse().join('');
  }
});


function FirstCtrl ($scope, Data) {
  $scope.data = Data;
}


function SecondCtrl ($scope, Data) {
  $scope.data = Data;
}
