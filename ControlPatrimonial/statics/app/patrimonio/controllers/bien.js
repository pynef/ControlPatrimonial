'use strict';
/* jshint -W097 */
/* jshint -W117 */
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
      console.log($stateParams);
      $scope.bien = bienService.get({id : $stateParams.idBien});
    };
    $scope.saveBien = function(bien){
      console.log(666666);
      var bienSave = new bienService(bien);
      bienSave.$save(function(data){
        if(!$stateParams.idDetalleIngreso){$state.go('bienes_detalleIngreso', {idDetalleIngreso: $stateParams.idDetalleIngreso});console.log(1);}
        else{console.log(2);$state.go('bienes_detalleIngreso', {idDetalleIngreso: $stateParams.idDetalleIngreso});}
      });
      console.log($stateParams);
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
      if(!$stateParams.idGrupo){
          grupo.institucion = 1;
      }
      var grupoSave = new grupoService(grupo);
      grupoSave.$save(function(){
        $state.go('grupos');
      });
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
            var claseSave = new claseService(clase);
            claseSave.$save(function(){
              $window.location.reload();
            });
        };
        $scope.remove = function(clase){
          if(confirm('Esta seguro que desea borrar la Clase: ' + clase.nombre)){
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
            var claseSave = new claseService(clase);
            claseSave.$save(function(){
              $state.go('^');
            });
        };
    }
]);
