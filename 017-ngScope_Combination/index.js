'use strict';


var eggApp = angular.module('eggApp', []);


eggApp.controller('AppCtrl', function ($scope) {
  $scope.leaveVoiceMail = function (message, number) {
    alert(message + ' from ' + number);
  };
});


eggApp.directive('phone', function () {
  return {
    restrict: 'E',
    scope: {
      number: '@',
      network: '=',
      makeCall: '&'
    },
    template: '<div class="panel"> {{number}} Network: ' +
                  '<select ng-model="network" ng-options="net for net in networks">' +
                  '<input type="text" ng-model="value"/>' +
                  '<div class="button" ng-click="makeCall({ message: value, number: number })">' +
                    'Call Home' +
                  '</div>' +
              '</div>',
    link: function ($scope) {
      $scope.networks = ['AT&T', 'Verizon', 'T-mobile'],
      $scope.network = $scope.networks[0]
    }
  };
});
