'use strict';

var app = angular.module('myApp', ['angularStats']);


app.controller('MainCtrl', function MainCtrl (timer) {
  var vm = this;

  vm.itemCount = 10;
  vm.hovering = {};
  vm.timer = timer;

  vm.onItemCountChange = function onItemCountChange (newVal) {
    vm.totalItems = [];

    for (var i = 0; i < newVal; i++) vm.totalItems.push(i);
  };

  vm.onItemCountChange(vm.itemCount);
});


app.value('timer', {
  wait: 3
});


app.filter('longFilter', function onLongFilter () {

  return function longFilter (input, wait) {

    var now = new Date();

    while (new Date() - now < wait) // waiting

    return 'Item ' + input + ' waited ' + (new Date() - now) + 'ms';
  };
});
