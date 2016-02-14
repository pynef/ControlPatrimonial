'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule').
controller('institucionCtrl',['$scope','institucionService',
  function($scope, institucionService){
    $scope.init = function(){
      console.log('>>>', $scope.static_url)
      //load grupo clase tipo y cuenta
      $scope.instituciones = institucionService.query();
      $scope.nueva_institucion = 0;
      console.log($scope.nueva_institucion);
    };
    $scope.nuevaInstitucion = function(institucion){
      console.log(institucion);
      institucionService.save(institucion);
      $scope.instituciones.push(institucion);
    };
    $scope.borrarInstitucion = function(institucion){
      console.log(institucion);
      institucionService.delete(institucion);
      $scope.instituciones = _.without( $scope.instituciones, _.findWhere($scope.instituciones,{id:institucion.id}));
    };
 }
])
.controller('sedeCtrl',['$scope','sedeService',
  function($scope, institucionService){
    $scope.init = function(){
      sedeService.get({id: $scope.user.id},
        function(sede){
          $scope.sedes = sede;
        });
      console.log(666);
    };
 }
]);
