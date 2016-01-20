'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('catalogoCtrl',['$scope','grupoService','tipoService', 'CatalogoService',
  function($scope, grupoService, tipoService, CatalogoService){
    $scope.init = function(){
      //load grupo clase tipo y cuenta
      $scope.grupos = grupoService.query();
      $scope.tipos = tipoService.query();
    };
    $scope.ch_grupo = function(grupo_id) {
      $scope.clases = grupoService.clases({id: grupo_id});
      // body...
    };
    $scope.list = function(){
      $scope.catalogos = CatalogoService.query();
    };
    $scope.new = function(data){
      var catalogo = new CatalogoService(data);
      catalogo.institucion = 1;
      catalogo.cuenta_contable = 1;
      catalogo.$save(
        function(data){ console.log('success', data); },
        function(err){ console.log('error', err); }
      );
    };
    $scope.edit = function(data){
      var catalogo = new CatalogoService(data);
      catalogo.institucion = 1;
      catalogo.cuenta_contable = 1;
      catalogo.$save(
        function(data){ console.log('success', data); },
        function(err){ console.log('error', err); }
      );
    };
    $scope.info = function(){
    };

    $scope.save_catalogo = function(data){
      console.log(data);

    };
 }
]);
