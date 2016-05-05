'use strict';
/* jshint -W097 */
/* global angular, confirm */

angular.module('patrimonioModule')
.controller('notaEntradaCtrl',['$scope', 'statics', 'NotaIngresoService',
  function($scope, statics, NotaIngresoService){
    $scope.init = function(){
      $scope.st = statics;
      $scope.notas = NotaIngresoService.query();
    };
 }
])
.controller('newNotaEntradaCtrl',['$scope', '$state', 'statics', 'proveedorService', 'CatalogoService', 'NotaIngresoService', 'ingresoPorGuiaRemisionService',
  function($scope, $state, statics, proveedorService, CatalogoService, NotaIngresoService, ingresoPorGuiaRemisionService){
    $scope.init = function(){
      $scope.proveedores = proveedorService.query();
      $scope.st = statics;
      // console.log($scope.st)
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
      var res = confirm("Seguro que desea hacer ingresar el numero de guia :  " + nota.guia_remision);
      if(res){
        var nota_ingreso = new NotaIngresoService(nota);
        nota_ingreso.detalles = null;
        nota_ingreso.$save(
          function(){
            nota_ingreso.detalles = nota.detalles;
            $scope.procesarDetalle(nota_ingreso);
          },
          function(err){
            //CREAR funcion para manejo de errores
            $scope.error_form = 'Hay un error, no se a podido guardar';
            for(var item in err.data){
              $scope.error_form += '-'+item;
              for (var i = 0; i < err.data[item].length; i++) {
                $scope.error_form += '-'+ err.data[item][i];
              }
            }
          }
        );
      }
    };

    $scope.procesarDetalle = function(nota){
      NotaIngresoService.save_detalles(
        {id: nota.id, detalles: nota.detalles},
        function(data){
          $state.go('^');
        },
        function(err){}
      );
    };
  }
])
.controller('infoNotaEntradaCtrl',['$scope', '$state','$stateParams', 'statics', 'NotaIngresoService', 'NotaIngresoDetalleService',
  function($scope, $state, $stateParams, statics, NotaIngresoService, NotaIngresoDetalleService){
    $scope.init = function(){
      NotaIngresoService.get({id:$stateParams.id_nota},
        function(data){
          $scope.nota = data;
          $scope.nota.detalles = NotaIngresoService.detalles({id:$stateParams.id_nota});
        },
        function(err){}
      );

    };

    $scope.generar = function(detalle){
      NotaIngresoDetalleService.generar({id: detalle.id},
        function(data){
          detalle.pendiente = false;
        },
        function(err){
        }
      );
    };
  }
])
.controller('detallesNotaEntradaCtrl',['$scope', '$state','$stateParams', 'statics', 'bienService',
  function($scope, $state, $stateParams, statics, bienService){
    $scope.init = function(){
      console.log($stateParams.idDetalleIngreso);
      $scope.bienes = bienService.query({detalle_ingreso:$stateParams.idDetalleIngreso});
      console.log($scope.bienes);
    };
  }
]);
