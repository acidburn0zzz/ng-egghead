'use strict';

var myApp = angular.module('myApp', []);


myApp.factory('Data', function createFactory () {
  return {
    message: 'hello cruel world'
  };
});


function FirstCtrl ($scope, Data) {
  $scope.data = Data;
}


function SecondCtrl ($scope, Data) {
  $scope.data = Data;

  $scope.reverse = function reverseMessage (message) {
    return message.split('').reverse().join('');
  }
}
