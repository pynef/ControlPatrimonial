'use strict';
/* jshint -W097 */-
/* global angular */

angular.module('patrimonioModule')
// controller('bienCtrl',['$scope',
//   function($scope){
//     console.log('bien controller');
//  }
// ])
.controller('bienesCtrl',['$scope', 'bienService',
  function($scope, bienService){
    $scope.init = function(){
      $scope.titleBien = "Lista de bienes";
      $scope.bienes = bienService.query();
    };
 }
])
.controller('bienEditCtrl',['$scope', '$state', '$stateParams', 'bienService',
  function($scope, $state, $stateParams, bienService){
    $scope.init = function(){
      $scope.bien = bienService.get({id : $stateParams.idBien});
    };
    $scope.saveBien = function(bien){
      bienService.save(bien);
      $state.go('.^');
    };
 }
])
.controller('grupoCtrl',['$scope', 'grupoService',
  function($scope, grupoService){
    $scope.init = function(){
      $scope.grupos = grupoService.query();
    };
    $scope.remove = function(grupo){
      if(confirm("Desea eliminar el grupo: " + grupo.nombre)){
        grupo.is_active = false;
        grupoService.save(grupo);
      }
      $scope.grupos = _.without( $scope.grupos, _.findWhere($scope.grupos,{id:grupo.id}));
    };
 }
])
.controller('grupoNewCtrl',['$scope', '$state', '$stateParams', 'grupoService',
  function($scope, $state, $stateParams, grupoService){
    $scope.init = function(grupo){
        if($stateParams.idGrupo){
            $scope.grupo = grupoService.get({id:$stateParams.idGrupo});
        }
    };
    $scope.saveGrupo = function(grupo){
      if($stateParams.idGrupo){
          grupoService.save(grupo);
          $state.go('grupos');
      }else{
          grupo.institucion = 1;
          grupoService.save(grupo);
          $state.go('grupos');
      }
    };

  $scope.cancelar = function(){
    $scope.grupos = grupoService.query();
  };
 }
])
.controller('grupoClasesCtrl',['$scope', '$window', '$state', '$stateParams' ,'grupoClasesService', 'claseService',
  function($scope, $window, $state, $stateParams, grupoClasesService, claseService){
        $scope.init = function(){
            $scope.clases = grupoClasesService.query({id:$stateParams.idGrupo});
        };
        $scope.agregarClase = function(clase){
            clase.institucion = 1;
            clase.grupo = $stateParams.idGrupo;
            claseService.save(clase);
            $window.location.reload();
        };
        $scope.remove = function(clase){
          if(confirm('Esta seguro que desea borrar el Puesto: ' + clase.nombre)){
            claseService.delete(clase);
            $scope.clases = _.without( $scope.clases, _.findWhere($scope.clases,{id:clase.id}));
          }
        };
    }
])
.controller('grupoClasesEditCtrl',['$scope', '$state', '$stateParams', 'claseService',
  function($scope, $state, $stateParams, claseService){
        $scope.init = function(){
            $scope.clase = claseService.get({id:$stateParams.idClase});
        };
        $scope.saveClase = function(clase){
            claseService.save(clase);
            $state.go('^');
        };
    }
]);
