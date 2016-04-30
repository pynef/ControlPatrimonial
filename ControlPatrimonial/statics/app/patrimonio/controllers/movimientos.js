'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('disposicionCtrl',['$scope', 'disposicionBienService',
  function($scope, disposicionBienService){
    $scope.disposiciones = disposicionBienService.query();
    console.log('disposicionCtrl controller');

 }
])
.controller('trasladosCtrl',['$scope',
  function($scope){
    console.log('trasladosCtrl controller');
 }
])
.controller('bajasCtrl',['$scope',
  function($scope){
    console.log('bajasCtrl controller');
 }
]);
