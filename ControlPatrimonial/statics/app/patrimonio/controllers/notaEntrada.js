'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('notaEntradaCtrl',['$scope',
  function($scope){

 }
])
.controller('newNotaEntradaCtrl',['$scope', 'ProveedorService', 'CatalogoService',
  function($scope, ProveedorService, CatalogoService){
    $scope.init = function(){
      $scope.proveedores = ProveedorService.query();
    };

    $scope.searchCatalogo = function(filter){
      if(filter.length >= 3 )
        $scope.results = CatalogoService.search({filter_catalog: filter});
    };
  }
]);
