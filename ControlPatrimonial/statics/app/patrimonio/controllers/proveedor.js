'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('proveedoresCtrl',['$scope', 'proveedorService',
  function($scope, proveedorService){
    $scope.init = function(){
      $scope.proveedores = proveedorService.query();
      console.log($scope.proveedores);
      //$scope.cuentass = djResource($rootScope.api_url + 'cuenta_contables/', {depreciacion: False});
    };
  }
])
