'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule').
controller('catalogoCtrl',
  ['$scope','grupoService','tipoService', 'catalogoService',
  function($scope, grupoService, tipoService, catalogoService){
    $scope.init = function(){
      //load grupo clase tipo y cuenta
      $scope.grupos = grupoService.query();
      $scope.tipos = tipoService.query();
    };
    $scope.ch_grupo = function(grupo_id) {
      $scope.clases = grupoService.clases({id: grupo_id});
      // body...
    };
    $scope.save_catalogo = function(catalogo){
      // console.log(catalogo);
      catalogoService.save(catalogo);
    };
  }
]);
