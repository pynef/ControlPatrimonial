'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('contabilidadCtrl',['$scope', 'contabilidadService',
  function($scope, contabilidadService){
    $scope.init = function(){
      console.log(666);
    };
  }
])
