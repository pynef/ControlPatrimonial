'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule')
.controller('rrhhCtrl',['$scope', 'personaService',
  function($scope, personaService){
    $scope.init = function(){
      $scope.personas = personaService.query();
    };
  }
])
.controller('personaCtrl',['$scope', 'personaService',
  function($scope, personaService){
    $scope.init = function(){
      $scope.personas = personaService.query();
    };
    $scope.remove = function(persona){
      if(confirm("Esta seguro que desea borrar a: " + persona.nombres )){
          persona.is_active = false;
          personaService.save(persona)
          $scope.personas = _.without( $scope.personas, _.findWhere($scope.personas,{id:persona.id}));
          console.log(persona)
      }
    }
  }
])
.controller('personaNewCtrl',['$scope', '$stateParams', '$state', 'personaService',
  function($scope, $stateParams, $state, personaService){
    $scope.init = function(){
        if($stateParams.idPersona){
          $scope.cabecera = "Editar datos de la persona ";
          $scope.persona = personaService.get({id: $stateParams.idPersona});
          console.log($stateParams)
          console.log($scope.persona)
        }else{
          $scope.cabecera = "Registro de nueva Persona";
          $scope.generos = [{'id':'M', 'nombre':'Masculino'},{'id':'F', 'nombre':'Femefino'}]
          console.log(666)

        }
      }
    $scope.savePersona = function(persona){
      if($stateParams.idPersona){
          console.log(persona)
          personaService.save(persona);
          $state.go('^');
      }else{
        console.log(persona)
        persona.institucion = 1;
        personaService.save(persona);
        $state.go('^');
      }
    }
  }
])

.controller('areaCtrl',['$scope', 'areaService',
  function($scope, areaService){
    $scope.init = function(){
      $scope.areas = areaService.query();
      console.log($scope.areas)
    };
    $scope.remove = function(area){
      if(confirm("Desea eliminar el area: " + area.nombre)){
        area.is_active = false;
        areaService.save(area)
      }
      $scope.areas = _.without( $scope.areas, _.findWhere($scope.areas,{id:area.id}));
    }
  }
])
.controller('areaNewCtrl',['$scope', '$state', '$stateParams' ,'areaService',
  function($scope, $state, $stateParams, areaService){
      $scope.init = function(area){
        console.log($stateParams.idArea)
          if($stateParams.idArea){
              $scope.area = areaService.get({id:$stateParams.idArea})
              console.log('$scope.area')
              console.log($stateParams)
          }
      }
      $scope.saveArea = function(area){
        if($stateParams.idArea){
            console.log(area);
            areaService.save(area);
            $state.go('^');
        }else{
            area.institucion = 1;
            areaService.save(area);
            $state.go('^');
        }
      }

    $scope.cancelar = function(){
      $scope.areas = areaService.query();
    }
  }
])
.controller('areaPuestosCtrl',['$scope', '$state', '$stateParams' ,'areaPuestosService', 'puestoService',
  function($scope, $state, $stateParams, areaPuestosService, puestoService){
        $scope.init = function(){
            $scope.puestos = areaPuestosService.query({id:$stateParams.idArea});
            console.log($stateParams.idArea)
        };
        $scope.agregarPuesto = function(puesto){
          console.log($stateParams.idArea)
            puesto.institucion = 1;
            puesto.area = $stateParams.idArea;
            puestoService.save(puesto);
            $state.go('^');
        }
        $scope.remove = function(puesto){
          if( confirm('Esta seguro que desea borrar el Puesto: ' + puesto.nombre)){
            puestoService.delete(puesto);
            $scope.puestos = _.without( $scope.puestos, _.findWhere($scope.puestos,{id:puesto.id}));
          };
        };
    }
])
.controller('areaPuestosEditCtrl',['$scope', '$state', '$stateParams' ,'areaPuestosService', 'puestoService',
  function($scope, $state, $stateParams, areaPuestosService, puestoService){
        $scope.init = function(){
            console.log("edit puesto");
            $scope.puesto = puestoService.get({id:$stateParams.idPuesto});
            console.log($scope.puesto);
        }
        $scope.savePuesto = function(puesto){
            puestoService.save(puesto)
            $state.go('^');
        }
    }
])
.controller('trabajadorCtrl',['$scope', '$state', '$stateParams' ,'trabajadorService', 'puestoService',
  function($scope, $state, $stateParams, trabajadorService, puestoService){
        $scope.init = function(){
            $scope.trabajadores = trabajadorService.query();
        }
        $scope.remove = function(trabajador){
          if( confirm('Esta seguro que desea borrar al trabajador: ' + trabajador.persona)){
            trabajadorService.delete(trabajador);
            $scope.trabajadores = _.without( $scope.trabajadores, _.findWhere($scope.trabajadores,{id:trabajador.id}));
          };
        }
    }
])
.controller('trabajadorNewCtrl',['$scope', '$stateParams', '$state', 'institucionSedesService', 'personaService',
  'SedeLocalesService', 'areaService', 'areaPuestosService', 'localAmbientesService', 'trabajadorService',
  function($scope, $stateParams, $state, institucionSedesService, personaService,
  SedeLocalesService, areaService, areaPuestosService, localAmbientesService, trabajadorService){
    $scope.init = function(){
      $scope.areas = areaService.query();
      $scope.personas = personaService.query();
      $scope.sedes = institucionSedesService.query({id:1});
        if($stateParams.idTrabajador){
          $scope.trabajador = trabajadorService.get({id: $stateParams.idTrabajador})
          $scope.cabecera = "Editar datos del trabajador ";
          console.log($stateParams.idTrabajador);
          console.log($scope.trabajador);
          console.log("$scope.trabajador");
        }else{
          $scope.cabecera = "Registro de nueva Trabajador";
          console.log(666);
        }
      }
    $scope.changeSedes = function(sede_id){
      console.log(sede_id);
        $scope.locales = SedeLocalesService.query({id:sede_id});
        console.log($scope.locales);
    }
    $scope.changeLocales = function(local_id){
        $scope.ambientes = localAmbientesService.query({id:local_id});
        console.log($scope.ambientes);
    }
    $scope.changeAreas = function(area_id){
        $scope.puestos = areaPuestosService.query({id:area_id});
    }
    $scope.saveTrabajador = function(trabajador){
      if($stateParams.idTrabajador){
          console.log(trabajador)
          trabajadorService.save(trabajador);
          $state.go('^');
      }else{
        console.log(trabajador)
        trabajador.institucion = 1;
        trabajadorService.save(trabajador);
        $state.go('^');
      }
    }
  }
]);
