'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('proveedorCtrl',['$scope', 'proveedorService',
  function($scope, proveedorService){
    $scope.init = function(){
      $scope.proveedores = proveedorService.query();
      console.log($scope.proveedores);
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
    $scope.remove = function(proveedor){
      if(confirm("Esta seguro que desea eliminar este proveedor :  " + proveedor.nombre)){
        proveedor.is_active = false;
        proveedorService.save(proveedor)
        $scope.proveedores = _.without( $scope.proveedores, _.findWhere($scope.proveedores,{id:proveedor.id}));
        console.log(proveedor)
      }
    }
  }
])
.controller('proveedorNewCtrl',['$scope','$state', '$stateParams', 'proveedorService','personaService',
  function($scope, $state,  $stateParams, proveedorService, personaService){
    $scope.init = function(proveedor){
      console.log($stateParams);
      $scope.personas = personaService.query();
      if($stateParams.idProveedor){
          console.log($stateParams);
          $scope.proveedor = proveedorService.get({id:$stateParams.idProveedor});
          console.log($scope.trabajador);
        }
    }
    $scope.saveProveedor = function(proveedor){
        if($stateParams.idProveedor){
            console.log(8)
            proveedorService.save(proveedor)
        }else{
            console.log(9)
            proveedor.institucion = 1;
            proveedorService.save(proveedor)
            console.log(proveedor);
        }
        $state.go('^');
    }
  }
])
