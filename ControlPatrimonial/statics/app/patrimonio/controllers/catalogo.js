'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('catalogoCtrl',['$scope','grupoService','tipoService', 'CatalogoService',
  function($scope, grupoService, tipoService, CatalogoService){
    $scope.init = function(){
      $scope.catalogos = CatalogoService.query();
      //load grupo clase tipo y cuenta
      $scope.grupos = grupoService.query();
      $scope.tipos = tipoService.query();
    };
    $scope.ch_grupo = function(grupo_id) {
      $scope.clases = grupoService.clases({id: grupo_id});
      // body...
    };
    $scope.save_catalogo = function(data){
      console.log(data);
      var catalogo = new CatalogoService(data);
      catalogo.institucion = 1;
      catalogo.cuenta_contable = 1;
      catalogo.$save(
        function(data){ console.log('success', data); },
        function(err){ console.log('error', err); }
      );
    };
 }
]);
