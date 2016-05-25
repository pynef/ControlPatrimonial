'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('disposicionCtrl',['$scope', 'disposicionBienService',
  function($scope, disposicionBienService){
  	$scope.init = function(){
	    $scope.disposiciones = disposicionBienService.query();
	};
 }
])
.controller('disposicionNewCtrl',['$scope', '$stateParams', 'disposicionBienService', 'institucionService',
	'institucionSedesService', 'SedeLocalesService', 'localAmbientesService',
	'trabajadorService', 'bienDisponiblesService', '$state',
  function($scope, $stateParams, disposicionBienService, institucionService,
  	institucionSedesService, SedeLocalesService, localAmbientesService,
  	trabajadorService, bienDisponiblesService, $state){
    $scope.init = function(){
    	$scope.instituciones = institucionService.query();
    	$scope.sedes = institucionSedesService.query({id: 1});
    	if ($stateParams.idDisposicion){
    		$scope.disposicion = disposicionBienService.get({id:$stateParams.idDisposicion});
    	}
    };
    $scope.changeSedes = function(sede_id){
      	$scope.locales = SedeLocalesService.query({id: sede_id});
    };
    $scope.changelocales = function(local_id){
    	$scope.ambientes = localAmbientesService.query({id: local_id});
    };
    $scope.changeAmbientes = function(){
    	$scope.solicitantes = trabajadorService.query();
    };
    $scope.changeSolicitantes = function(){
    	$scope.bienes = bienDisponiblesService.query();
    };
    $scope.saveDisposicioBien = function(disposicion){
    	disposicion.institucion = 1;
      console.log(disposicion)
      var dispocicionBien = new disposicionBienService(disposicion);
      dispocicionBien.$save(function(data){
        alert(data);
    	var bien = bienDisponiblesService.get({id: data.bien},function(bien){
          bien.usuario = data.solicitante;
          bien.institucion = data.institucion;
          bien.sede = data.sede;
          bien.local = data.local;
          bien.ambiente = data.ambiente;
          bien.fecha_activa = data.fecha;
          bien.estado = 1;
          bien.almacen = false;
      		bien.$save();
      		$state.go('disposicion');
        });
    	});
    };
 }
])
.controller('trasladoCtrl',['$scope', 'trasladoBienService', 'SedeLocalesService',
 'localAmbientesService', 'trabajadorService', 'institucionSedesService',
  function($scope, trasladoBienService, SedeLocalesService,
  localAmbientesService, trabajadorService, institucionSedesService){
    $scope.init = function(){
      $scope.traslados = trasladoBienService.query();
    };
 }
])
.controller('trasladoNewCtrl',['$scope', 'trasladoBienService', 'SedeLocalesService', 'institucionSedesService',
 'localAmbientesService', 'trabajadorService', 'bienAmbienteService',
  function($scope, trasladoBienService, SedeLocalesService, institucionSedesService,
     localAmbientesService, trabajadorService, bienAmbienteService){
    $scope.init = function(){
      $scope.traslados = trasladoBienService.query();
      $scope.sedes = institucionSedesService.query({id:1});
    };
    $scope.changeSedesO = function(sede_id){
      	$scope.localesO = SedeLocalesService.query({id: sede_id});
    };
    $scope.changelocalesO = function(local_id){
    	$scope.ambientesO = localAmbientesService.query({id: local_id});
    };
    $scope.changeAmbientesO = function(ambiente_id){
      $scope.bienesO = bienAmbienteService.query({ambiente_id:ambiente_id});
    };
    $scope.changeBienes = function(ambiente_id){
    	// $scope.bienes = bienAmbienteService.query({ambiente_id:ambiente_id});
    };
    //Datos del Destino
    //Del traslado
    $scope.changeSedesD = function(sede_id){
        $scope.localesD = SedeLocalesService.query({id: sede_id});
    };
    $scope.changelocalesD = function(local_id){
      $scope.ambientesD = localAmbientesService.query({id: local_id});
    };
    $scope.changeAmbientesD = function(ambiente_id){
      $scope.bienesD = bienAmbienteService.query({ambiente_id:ambiente_id});
    };
    $scope.trasladando = function(traslado){
     alert(traslado.origen);
     console.log(traslado);
    }
 }
])
.controller('bajasCtrl',['$scope',
  function($scope){
    console.log('bajasCtrl controller');
 }
]);
