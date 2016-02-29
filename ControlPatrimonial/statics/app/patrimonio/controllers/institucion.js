'use strict';
/* jshint -W097 */
/* global angular */
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
    $scope.borrarInstitucion = function(institucion){
      console.log(institucion);
      institucionService.delete(institucion);
      $scope.instituciones = _.without( $scope.instituciones, _.findWhere($scope.instituciones,{id:institucion.id}));
    };
  }
])
.controller('institucionNewCtrl',['$scope', '$state', '$stateParams', 'institucionService',
  function($scope, $state, $stateParams,  institucionService){
    $scope.init = function(){
      if($stateParams.id){
        $scope.instituciones = institucionService.query();
        $scope.institucion = institucionService.get({id:$stateParams.id});
      }
    };
    $scope.nuevaInstitucion = function(institucion){
      $scope.instituciones = institucionService.query();
      institucionService.save(institucion);
      $state.go('^');
    };
  }
])
.controller('institucionEditCtrl',['$scope', '$state', 'institucionService',
  function($scope, $state,   institucionService){
    $scope.init = function(){
    };
    $scope.nuevaInstitucion = function(institucion){
      $scope.instituciones = institucionService.query();
      institucionService.save(institucion);
      $scope.instituciones.push(institucion);
      $state.go('institucion');
    };
  }
])
.controller('institucionSedesCtrl',['$scope', '$stateParams', 'institucionSedesService',
  function($scope, $stateParams, institucionSedesService){
    $scope.init = function(){
      console.log(666);
      institucionSedesService.query({id: $stateParams.id},
        function(sedes){
          $scope.sedes = sedes;
          console.log(sedes);
        });
    };
    $scope.validate_parent = function(){
      console.log($scope.$parent.sede_id);
    };
 }
])

.controller('institucionSedeNewCtrl',['$scope', '$state', '$stateParams', 'sedeService',
  function($scope, $state, $stateParams,  sedeService){
    $scope.init = function(){
      if($stateParams.id){
        $scope.sedes = sedeService.query();
        $scope.sede = sedeService.get({id:$stateParams.id});
      }
    };
    $scope.nuevaSede = function(sede){
      $scope.sedes = sedeService.query();
      sedeService.save(institucion);
      $state.go('^');
    };
  }
]);
