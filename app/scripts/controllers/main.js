'use strict';

/**
 * @ngdoc function
 * @name hitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hitmanApp
 */
angular.module('hitmanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
