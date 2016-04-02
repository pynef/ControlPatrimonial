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
      if( confirm('Esta seguro que dese borrar la Institucion: ' + institucion.nombre)){
        institucionService.delete(institucion);
        $scope.instituciones = _.without( $scope.instituciones, _.findWhere($scope.instituciones,{id:institucion.id}));
      };
    };
  }
])
.controller('institucionNewCtrl',['$scope', '$state', '$stateParams', 'institucionService',
  function($scope, $state, $stateParams,  institucionService){
    $scope.init = function(){
      if($stateParams.idInstitucion){
        $scope.instituciones = institucionService.query();
        $scope.institucion = institucionService.get({id:$stateParams.idInstitucion});
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
      //$scope.instituciones.push(institucion);s
      $state.go('institucion');
    };
  }
])
.controller('institucionSedesCtrl',['$scope', '$stateParams', 'institucionSedesService', 'sedeService',
  function($scope, $stateParams, institucionSedesService, sedeService){
    $scope.init = function(){
      institucionSedesService.query({id: $stateParams.idInstitucion},
        function(sedes){
          $scope.sedes = sedes;
        });
    };
    $scope.borrarSede = function(sede){
      if( confirm('Esta seguro que dese borrar la Sede: ' + sede.nombre)){
        sedeService.delete(sede);
        $scope.sedes = _.without( $scope.sedes, _.findWhere($scope.sedes,{id:sede.id}));
      };
    };
    $scope.validate_parent = function(){
      console.log($scope.$parent.sede_id);
    };
 }
])

.controller('institucionSedeNewCtrl',['$scope', '$state', '$stateParams', 'sedeService',
  function($scope, $state, $stateParams, sedeService){
    console.log($stateParams)
    $scope.init = function(){
      if($stateParams.idSede){
        $scope.sedes = sedeService.query();
        $scope.sede = sedeService.get({id:$stateParams.idSede});
      }
    };
    $scope.nuevaSede = function(sede){
      $scope.sedes = sedeService.query();
      if(!$stateParams.idSede){
          sede.institucion = $stateParams.idInstitucion
        }
      sedeService.save(sede);
      $state.go('^');
    };
  }
])
.controller('institucionSedeLocalesCtrl',['$scope', '$state', '$stateParams', 'localService',
  function($scope, $state, $stateParams, localService){
    console.log($stateParams)
    $scope.init = function(){
      if($stateParams.idLocal){
        $scope.locales = localService.query();
        $scope.locales = localService.get({id:$stateParams.idLocal});
      }
    }
  }
]);
