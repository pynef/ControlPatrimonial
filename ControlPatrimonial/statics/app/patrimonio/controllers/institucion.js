'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule').
controller('institucionCtrl',['$scope','institucionService',
  function($scope,institucionService){
    $scope.init = function(){
      //load grupo clase tipo y cuenta
      $scope.instituciones = institucionService.query();
      $scope.nueva_institucion = 0;
      console.log($scope.nueva_institucion);
    };
 }
]);
