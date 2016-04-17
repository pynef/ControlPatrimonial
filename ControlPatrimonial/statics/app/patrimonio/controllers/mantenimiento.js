'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('mantenimientoBienCtrl',['$scope', '$state', 'nota_ingresoService', 'ingresoPorGuiaRemisionService', 'nota_ingreso_detalleService',
  function( $scope, $state, , nota_ingresoService, ingresoPorGuiaRemisionService, nota_ingreso_detalleService){
    $scope.init = function(){
      console.log(666)
    };
  }
]);
