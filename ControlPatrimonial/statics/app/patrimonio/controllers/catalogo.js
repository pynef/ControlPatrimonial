'use strict';
/* jshint -W097 */
/* global angular, confirm, _ */

angular.module('patrimonioModule').
controller('catalogoCtrl',
  ['$scope','grupoService','tipoService', 'CatalogoService',
  function($scope, grupoService, tipoService, CatalogoService){
    $scope.init = function(){
      $scope.catalogos = CatalogoService.query();
    };
    $scope.remove = function(catalogo){
      if( confirm('Esta seguro que dese borrar el Catalodo: ' + catalogo.nombre)){
        CatalogoService.remove({id: catalogo.id});
        $scope.catalogos = _.without($scope.catalogos, catalogo);
      }
    };
  }
]).
controller('catalogoShowCtrl',
  ['$scope', '$stateParams', 'CatalogoService',
  function($scope, $stateParams, CatalogoService){
    $scope.init = function(){
      $scope.catalogo = CatalogoService.get({id:$stateParams.id});
    };
  }
]).
controller('catalogoEditCtrl',
  ['$scope', '$stateParams', 'grupoService', 'tipoService', 'cuenta_contableService', 'CatalogoService',
  function($scope, $stateParams, grupoService, tipoService, cuenta_contableService, CatalogoService){
    $scope.init = function(){
      $scope.catalogo = CatalogoService.get({id:$stateParams.id});
      $scope.grupos = grupoService.query();
      $scope.tipos = tipoService.query();
      $scope.cuentas = cuenta_contableService.query();
    };
    $scope.changeGrupo = function(grupo_id){
      //$scope.clases = null;
      $scope.clases = grupoService.clases({id: grupo_id});
    };
  }
]).
controller('catalogoSaveCtrl',
['$scope', '$state', '$stateParams', 'grupoService', 'tipoService', 'cuenta_contableService', 'CatalogoService',
function($scope, $state, $stateParams, grupoService, tipoService, cuenta_contableService, CatalogoService){
    $scope.init = function(){
      if($stateParams.id){
        $scope.catalogo = CatalogoService.get({id:$stateParams.id});
      }else{
        $scope.catalogo = {'$resolved': true};
        $scope.grupos = grupoService.query();
        $scope.tipos = tipoService.query();
        $scope.cuentas = cuenta_contableService.query();
    }};
    $scope.changeGrupo = function(grupo_id){
      //$scope.clases = null;
      $scope.clases = grupoService.clases({id: grupo_id});
    };
    $scope.saveCatalogo = function(e, obj){
      var btn = angular.element(e.currentTarget);
      btn.attr('disabled', true);
      var catalogo = new CatalogoService(obj);
      catalogo.$save(function(data){
        $scope.catalogo = data;
        $scope.message = ({success:true, error: false});
        btn.removeAttr('disabled');
        //$state.go('^');
      }, function(err){
        $scope.message = ({success:false, error:true});
        btn.removeAttr('disabled');
      });
    };
  }
]);
