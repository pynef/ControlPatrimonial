'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('contabilidadCtrl',['$scope', 'cuentasService',
  function($scope, cuentasService){
    $scope.init = function(){
      $scope.cuentas = cuentasService.query();
      console.log($scope.cuentas);
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
    $scope.borrarCuentaContable = function(cuenta){
      if( confirm('Esta seguro que dese borrar la Cuenta Contable: ' + cuenta.cuenta_nombre)){
        cuentasService.delete(cuenta);
        $scope.cuentas = _.without( $scope.cuentas, _.findWhere($scope.cuentas,{id:cuenta.id}));
      };
    };
  }
])
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
    	console.log(cuenta_contable);
    	cuentasService.save(cuenta_contable);
    	$state.go('^');
    }
  }
])
angular.module('patrimonioModule')
.controller('cuenta_contableEditCtrl',['$scope', '$state', '$stateParams', 'cuentasService',
  function($scope, $state, $stateParams, cuentasService){
    $scope.init = function(){
      console.log($stateParams.idCuentaContable)
    };
    $scope.nuevaCuentaContable = function(cuenta_contable){
    	console.log(cuenta_contable);
    	cuentasService.save(cuenta_contable);
    	$state.go('^');
    }
  }
])

angular.module('patrimonioModule')
.controller('cuenta_contableDepreciacionCtrl',['$scope', '$state', '$stateParams', 'cuentasService',
  function($scope, $state, $stateParams, cuentasService){
    $scope.init = function(){
      $scope.cuenta = cuentasService.get({id:$stateParams.idCuentaContable})
      console.log($scope.cuenta)
    };
  }
])
