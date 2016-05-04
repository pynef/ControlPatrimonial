'use strict';
/* jshint -W097 */
/* jshint -W117 */
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
      if( confirm('Esta seguro que desea borrar la Institucion: ' + institucion.nombre)){
        institucionService.delete(institucion);
        $scope.instituciones = _.without( $scope.instituciones, _.findWhere($scope.instituciones,{id:institucion.id}));
      }
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
      if( confirm('Esta seguro que desea borrar la Sede: ' + sede.nombre)){
        sedeService.delete(sede);
        $scope.sedes = _.without( $scope.sedes, _.findWhere($scope.sedes,{id:sede.id}));
      }
    };
    $scope.validate_parent = function(){
      console.log($scope.$parent.sede_id);
    };
 }
])

.controller('institucionSedeNewCtrl',['$scope', '$state', '$stateParams', 'sedeService',
  function($scope, $state, $stateParams, sedeService){
    $scope.init = function(){
      if($stateParams.idSede){
        $scope.sedes = sedeService.query();
        $scope.sede = sedeService.get({id:$stateParams.idSede});
      }
    };
    $scope.nuevaSede = function(sede){
      $scope.sedes = sedeService.query();
      if(!$stateParams.idSede){
          sede.institucion = $stateParams.idInstitucion;
        }
      var sedeSave = new sedeService(sede);
      sedeSave.$save(function(){
        $state.go('^');
      });
    };
  }
])
.controller('institucionSedeLocalesCtrl',['$scope', '$state', '$stateParams', 'SedeLocalesService', 'localService',
  function($scope, $state, $stateParams, SedeLocalesService, localService){
    $scope.init = function(){
          SedeLocalesService.query({id: $stateParams.idSede},function(locales){
          $scope.locales = locales;
        });
    };
    $scope.borrarLocal = function(local){
      if( confirm('Esta seguro que desea borrar el local:  ' + local.nombre)){
        localService.delete(local);
        $scope.locales = _.without( $scope.locales, _.findWhere($scope.locales,{id:local.id}));
        $state.go('^');
      }
    };
  }
])

.controller('institucionSedeLocalesNewCtrl',['$scope', '$state', '$stateParams', 'localService',
  function($scope, $state, $stateParams, localService){
    $scope.init = function(){
      if($stateParams.idLocal){
        $scope.locales = localService.query();
        $scope.local = localService.get({id:$stateParams.idLocal});
      }
    };
    $scope.nuevaLocal = function(local){
      $scope.locales = localService.query();
      if(!$stateParams.idLocal){
          local.institucion = $stateParams.idInstitucion;
          local.sede = $stateParams.idSede;
        }
        var localSave = new localService(local);
        console.log(localSave);
          localSave.$save(function(){
            $state.go('institucion.sedes.locales');
          },
        function (err) {
            console.log(err);
          });
        };
  }
])
.controller('institucionSedeLocalAmbientesCtrl',['$scope', '$state', '$stateParams', 'localAmbientesService', 'ambienteService', 'tipoAmbientesService',
  function($scope, $state, $stateParams, localAmbientesService, ambienteService, tipoAmbientesService){
    $scope.init = function(){
          localAmbientesService.query({id: $stateParams.idLocal},function(ambientes){
          $scope.ambientes = ambientes;
        });
    };
    $scope.borrarAmbiente = function(ambiente){
      if( confirm('Esta seguro que desea borrar el ambiente:  ' + ambiente.nombre)){
        ambienteService.delete(ambiente);
        $scope.ambientes = _.without( $scope.ambientes, _.findWhere($scope.ambientes,{id:ambiente.id}));
      }
    };
  }
])
.controller('institucionSedeLocalAmbientesNewCtrl',['$scope', '$state', '$stateParams', '$window', 'localAmbientesService', 'ambienteService', 'tipoAmbientesService',
  function($scope, $state, $stateParams, $window, localAmbientesService, ambienteService, tipoAmbientesService){
    $scope.init = function(){
      $scope.tipo_ambientes = tipoAmbientesService.query();
      if($stateParams.idAmbiente){
        $scope.ambientes = ambienteService.query();
        $scope.ambiente = ambienteService.get({id:$stateParams.idAmbiente});
      }
    };
    $scope.nuevaAmbiente = function(ambiente){
      $scope.ambientes = ambienteService.query();
      if(!$stateParams.idAmbiente){
          ambiente.institucion = $stateParams.idInstitucion;
          ambiente.sede = $stateParams.idSede;
          ambiente.local = $stateParams.idLocal;
        }
      var ambienteSave = new ambienteService(ambiente);
      ambienteSave.$save(function(){
        $state.go('^');
      })

    };
  }
]);
