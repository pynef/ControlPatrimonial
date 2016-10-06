'use strict';
/* jshint -W097 */
/* jshint -W117 */
/* global angular */
angular.module('patrimonioModule')
.controller('contabilidadCtrl',['$scope', '$state', 'cuentasService',
  function($scope, $state, cuentasService){
    $scope.init = function(){
      $scope.cuentas = cuentasService.query();
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
    $scope.borrarCuentaContable = function(cuenta){
      if( confirm('Esta seguro que dese borrar la Cuenta Contable: ' + cuenta.cuenta_nombre)){
        cuentasService.delete(cuenta);
        $scope.cuentas = _.without( $scope.cuentas, _.findWhere($scope.cuentas,{id:cuenta.id}));
          $state.go('cuenta_contable');
      }
    };
  }
]);
angular.module('patrimonioModule')
.controller('cuenta_contableNewCtrl',['$scope', '$state', '$stateParams','cuentasService',
  function($scope, $state, $stateParams, cuentasService){
    $scope.init = function(){
    	if($stateParams.idCuentaContable){
    		$scope.cuentas_contables = cuentasService.query();
        	$scope.cuenta_contable = cuentasService.get({id:$stateParams.idCuentaContable});
    	}
    };
    $scope.nuevaCuentaContable = function(cuenta_contable){
      var cuentaContableSave = new cuentasService(cuenta_contable);
      cuentaContableSave.$save(function(){
        $state.go('^');
      });
    };
  }
]);
angular.module('patrimonioModule')
.controller('cuenta_contableDepreciacionCtrl',['$scope', '$state', '$stateParams', 'cuentasService',
  function($scope, $state, $stateParams, cuentasService){
    $scope.init = function(){
      $scope.editable = 0;
      $scope.cuenta = cuentasService.get({id:$stateParams.idCuentaContable});
    };
        $scope.agregarDepreciacion = function(cuenta){
          var depreciacionSave = new cuentasService(cuenta);
          depreciacionSave.$save(function(){
          });
        };
        $scope.cancelar = function(cuenta){
          $scope.cuenta = cuentasService.get({id:$stateParams.idCuentaContable});
        };
  }
]);
