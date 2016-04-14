'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('rrhhCtrl',['$scope', 'personaService',
  function($scope, personaService){
    $scope.init = function(){
      $scope.personas = personaService.query();
      console.log($scope.personas);
    };
  }
])
.controller('personaCtrl',['$scope', 'personaService',
  function($scope, personaService){
    $scope.init = function(){
      $scope.personas = personaService.query();
      console.log($scope.personas);
    };
  }
])
