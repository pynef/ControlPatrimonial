'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('notaEntradaCtrl',['$scope',
  function($scope){

 }
])
.controller('newNotaEntradaCtrl',['$scope', 'statics', 'proveedorService', 'CatalogoService', 'nota_ingresoService', 'ingresoPorGuiaRemisionService',
  'nota_ingreso_detalleService',
  function($scope, statics, proveedorService, CatalogoService, nota_ingresoService, ingresoPorGuiaRemisionService,
  nota_ingreso_detalleService){
    $scope.init = function(){
      $scope.proveedores = proveedorService.query();
      $scope.st = statics;
      console.log($scope.st)
      $scope.tipo_moneda= '1';
      $scope.nota = {
        detalles: [],
        tipo_moneda: '1',
        total: 0
      };
    };

    $scope.searchCatalogo = function(filter){
      if(filter.length >= 3 )
        $scope.results = CatalogoService.search({filter_catalog: filter});
    };

    $scope.addCatalogo = function(catalogo){
      if(!$scope.existCatalogo(catalogo)){
        return false;
      }
      $scope.nota.detalles.push({
        catalogo: catalogo,
        cantidad:0,
        precio_unitario:0,
        tipo_moneda:1
      });
      $scope.results = [];
      $scope.filter_catalog = '';
    };

    $scope.remCatalogo = function(detalle){
      for (var i = 0; i < $scope.nota.detalles.length; i++) {
        if($scope.nota.detalles[i] === detalle){
          $scope.nota.detalles.splice(i,1);
          break;
        }
      }
    };

    $scope.existCatalogo = function(catalogo){
      for (var i = 0; i < $scope.nota.detalles.length; i++) {
        if($scope.nota.detalles[i].catalogo === catalogo){
          return false;
        }
      }
      return true;
    };
    $scope.totalDetalle = function(){
      var total = 0;
      for (var i = 0; i < $scope.nota.detalles.length; i++) {
        var cantidad = $scope.nota.detalles[i].cantidad?$scope.nota.detalles[i].cantidad:0;
        var precio = $scope.nota.detalles[i].precio_unitario?$scope.nota.detalles[i].precio_unitario:0;
        total += cantidad*precio;
      }
      $scope.nota.total = total;
      return total;
    };
    $scope.procesar = function(nota){
      if(confirm("Seguro que desea hacer ingresar el numero de guia :  " + nota.guia_remision)){
          console.log(nota);
          var nota_ingreso = new Object();
          nota_ingreso.guia_remision = nota.guia_remision;
          nota_ingreso.orden_compra = nota.orden_compra;
          nota_ingreso.condicion = nota.condicion;
          nota_ingreso.tipo_moneda = nota.tipo_moneda;
          nota_ingreso.tipo_cambio   = nota.tipo_cambio;
          nota_ingreso.total = nota.total;
          nota_ingreso.proveedor = nota.proveedor;
          console.log(nota_ingreso)
          var ingreso = new Object();
          if(ingreso = nota_ingresoService.save(nota_ingreso)){
            // ingreso_nota = ingresoPorGuiaRemisionService.get({guia_remision:nota.guia_remision});
            // for (var i = 0; i < $scope.nota.detalles.length; i++) {
            for (var i = 0; i < nota.detalles.length; i++){
              console.log(nota.detalles[i]);
              nota_ingreso_detalleService.save(nota.detalles[i]);
            }
            console.log(nota.detalles)

          }
      }

    }
  }
]);
