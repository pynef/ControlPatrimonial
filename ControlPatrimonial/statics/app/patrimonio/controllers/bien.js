'use strict';
/* jshint -W097 */-
/* global angular */

angular.module('patrimonioModule')
// controller('bienCtrl',['$scope',
//   function($scope){
//     console.log('bien controller');
//  }
// ])
.controller('bienesCtrl',['$scope', 'bienService',
  function($scope, bienService){
    $scope.init = function(){
      $scope.titleBien = "Lista de bienes";
      $scope.bienes = bienService.query();
    };
 }
])
.controller('bienEditCtrl',['$scope', '$state', '$stateParams', 'bienService',
  function($scope, $state, $stateParams, bienService){
    $scope.init = function(){
      $scope.bien = bienService.get({id : $stateParams.idBien});
    };
    $scope.saveBien = function(bien){
      bienService.save(bien);
      $state.go('.^');
    };
 }
])
.controller('grupoCtrl',['$scope', 'grupoService',
  function($scope, grupoService){
    $scope.init = function(){
      $scope.grupos = grupoService.query();
    };
 }
])
