'use strict';
/* jshint -W097 */
/* global angular, _ */

angular.module('patrimonioModule')
.controller('institucionCtrl',['$scope','institucionService',
  function($scope, institucionService){
    $scope.init = function(){
      //load grupo clase tipo y cuenta
      $scope.instituciones = institucionService.query();
      $scope.nueva_institucion = 0;
      $scope.sede_tpl = '';
      $scope.ambiente_tpl = '';
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
    $scope.show_sedes = function(institucion_id){
      //console.log(institucion_id)
      $scope.sede_tpl = $scope.static_url + '/app/patrimonio/views/sede/list.html';

    };
  }
])
.controller('sedeCtrl',['$scope','sedeService',
  function($scope, sedeService){
    $scope.init = function(){
      sedeService.get({id: $scope.user.id},
        function(sede){
          $scope.sedes = sede;
        });
    };
    $scope.validate_parent = function(){
      console.log()$scope.$parent.sede_id);
    }
 }
]);
