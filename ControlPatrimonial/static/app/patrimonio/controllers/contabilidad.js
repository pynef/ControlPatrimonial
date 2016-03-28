'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('contabilidadCtrl',['$scope', 'cuenta_contableService',
  function($scope, cuenta_contableService){
    $scope.init = function(){
      $scope.cuentas = cuenta_contableService.query();
      console.log($scope.cuentas);
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
    $scope.borrarCuentaContable = function(cuenta){
      if( confirm('Esta seguro que dese borrar la Cuenta Contable: ' + cuenta.nombre)){
        cuenta_contableService.delete(cuenta);
        $scope.cuentas = _.without( $scope.cuentas, _.findWhere($scope.cuentas,{id:cuenta.id}));
      };
    };
  }
])
angular.module('patrimonioModule')
.controller('cuenta_contableNewCtrl',['$scope', '$state', '$stateParams','cuenta_contableService',
  function($scope, $state, $stateParams, cuenta_contableService){
    $scope.init = function(){
    	if($stateParams.idCuentaContable){
    		$scope.cuentas_contables = cuenta_contableService.query();
        	$scope.cuenta_contable = cuenta_contableService.get({id:$stateParams.idCuentaContable});
    	}
    };
    $scope.nuevaCuentaContable = function(cuenta_contable){
    	console.log(cuenta_contable);
    	cuenta_contableService.save(cuenta_contable);
    	$state.go('^');
    }
  }
])
angular.module('patrimonioModule')
.controller('cuenta_contableEditCtrl',['$scope', '$state', '$stateParams', 'cuenta_contableService',
  function($scope, $state, $stateParams, cuenta_contableService){
    $scope.init = function(){
      console.log($stateParams.idCuentaContable)
    };
    $scope.nuevaCuentaContable = function(cuenta_contable){
    	console.log(cuenta_contable);
    	cuenta_contableService.save(cuenta_contable);
    	$state.go('^');
    }
  }
])