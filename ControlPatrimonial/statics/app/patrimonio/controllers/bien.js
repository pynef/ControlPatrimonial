'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule').
controller('bienCtrl',['$scope',
  function($scope){
    console.log('bien controller');
 }
])
.controller('bienesCtrl',['$scope', 'bienService',
  function($scope, bienService){
    console.log('bienessss controller');
    $scope.init = function(){
      console.log('bienessss');
      $scope.bienes = bienService.query();
    }
 }
]);
