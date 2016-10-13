'use strict';
/* jshint -W097 */
/* jshint -W117 */
/* global angular */
angular.module('patrimonioModule')
.controller('proveedorCtrl',['$scope', 'proveedorService',
  function($scope, proveedorService){
    $scope.init = function(){
      $scope.proveedores = proveedorService.query();
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
    $scope.remove = function(proveedor){
      if(confirm("Esta seguro que desea eliminar este proveedor :  " + proveedor.nombre)){
        proveedor.is_active = false;
        proveedorService.save(proveedor);
        $scope.proveedores = _.without( $scope.proveedores, _.findWhere($scope.proveedores,{id:proveedor.id}));
      }
    };
  }
])
.controller('proveedorNewCtrl',['$scope','$state', '$stateParams', 'proveedorService','personaService','personasNoProveedorasService',
  function($scope, $state,  $stateParams, proveedorService, personaService, personasNoProveedorasService){
    $scope.init = function(proveedor){
      $scope.personasFaltantes = personasNoProveedorasService.query({idInstitucion:1})
      $scope.personas = personaService.query();
      if($stateParams.idProveedor){
          $scope.proveedor = proveedorService.get({id:$stateParams.idProveedor});
      }
    };
    $scope.saveProveedor = function(proveedor){
        if(!$stateParams.idProveedor){
            proveedor.institucion = 1;
        }
        var proveedorSave = new proveedorService(proveedor);
        proveedorSave.$save(function(){
        $state.go('^');
        });
    };
    $scope.cancelar = function(){
      $scope.proveedores = proveedorService.query();
      $state.go('^');
    }
  }
]);
