'use strict';
/* jshint -W097 */
/* global angular */

angular.module('patrimonioModule')
.controller('disposicionCtrl',['$scope', 'disposicionBienService',
  function($scope, disposicionBienService){
  	$scope.init = function(){
	    $scope.disposiciones = disposicionBienService.query();
	}
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
      var dispocicionBien = new disposicionBienService(disposicion);
      dispocicionBien.$save(function(data){
    		bienDisponiblesService.get({id: data.bien},function(bien){
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1; //hoy es 0!
        var yyyy = hoy.getFullYear();
        if(dd<10) {
            dd='0'+dd;
        }
        if(mm<10) {
            mm='0'+mm;
        }
          $scope.hoy = yyyy+'/'+mm+'/'+dd;
          bien.usuario = data.solicitante;
          bien.institucion = data.institucion;
          bien.sede = data.sede;
          bien.local = data.local;
          bien.ambiente = data.ambiente;
          bien.fecha_activa = $scope.hoy;
          bien.estado = 1;
          bien.almacen = false;
      		bien.$save();
      		$state.go('disposicion');
        });
    	});
    };
 }
])
.controller('trasladosCtrl',['$scope',
  function($scope){
    console.log('trasladosCtrl controller');
 }
])
.controller('bajasCtrl',['$scope',
  function($scope){
    console.log('bajasCtrl controller');
 }
]);
