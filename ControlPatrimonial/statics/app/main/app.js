'use strict';
/* jshint -W097 */
/* global angular, $, document, setTimeout */

angular.module('app',
[
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ui.bootstrap',
  'RESTServices',
  'patrimonioModule'
])
.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    console.log('run app');
  }
])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }
])
.directive('renderInstitucion',['institucionService',
  function (institucionService) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      template: '<span>{{ institucion.nombre }}</span>',
      priority: 1,
      scope:{ value:'='},
      link: function(scope, element, attrs, ngModelController){
        ngModelController.$formatters.unshift(function (valueFromModel) {
          //console.log('reverse local directive', valueFromModel)
          if(valueFromModel){
            institucionService.get({id:valueFromModel},
              function(institucion){
                scope.institucion = institucion;
              },
              function(err){}
            );
          }
        });
      }
    };
  }])
.directive('renderSede',['sedeService',
  function (sedeService) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      template: '<span>{{ sede.nombre }}</span>',
      priority: 1,
      scope:{ value:'='},
      link: function(scope, element, attrs, ngModelController){
        ngModelController.$formatters.unshift(function (valueFromModel) {
          //console.log('reverse local directive', valueFromModel)
          if(valueFromModel){
            sedeService.get({id:valueFromModel},
              function(sede){
                scope.sede = sede;
              },
              function(err){}
            );
          }
        });
      }
    };
  }])
.directive('renderLocal',['localService',
  function (localService) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      template: '<span>{{ local.nombre }}</span>',
      priority: 1,
      scope:{ value:'='},
      link: function(scope, element, attrs, ngModelController){
        ngModelController.$formatters.unshift(function (valueFromModel) {
          //console.log('reverse local directive', valueFromModel)
          if(valueFromModel){
            localService.get({id:valueFromModel},
              function(local){
                scope.local = local;
              },
              function(err){}
            );
          }
        });
      }
    };
  }])
.directive('renderAmbiente',['ambienteService',
  function (ambienteService) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      template: '<span>{{ ambiente.nombre }}</span>',
      priority: 1,
      scope:{ value:'='},
      link: function(scope, element, attrs, ngModelController){
        ngModelController.$formatters.unshift(function (valueFromModel) {
          //console.log('reverse ambiente directive', valueFromModel)
          if(valueFromModel){
            ambienteService.get({id:valueFromModel},
              function(ambiente){
                scope.ambiente = ambiente;
              },
              function(err){}
            );
          }
        });
      }
    };
  }])
  .directive('renderTrabajador',['trabajadorService', 'personaService',
    function (trabajadorService, personaService) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        template: '<span>{{ persona.apellido_paterno }} {{ persona.apellido_materno }} {{ persona.nombres }}</span>',
        priority: 1,
        scope:{ value:'='},
        link: function(scope, element, attrs, ngModelController){
          ngModelController.$formatters.unshift(function (valueFromModel) {
            //console.log('reverse trabajador directive', valueFromModel)
            if(valueFromModel){
              trabajadorService.get({id:valueFromModel},
                function(trabajador){
                  personaService.get({id:trabajador.persona},
                    function(persona){
                      scope.persona = persona;
                    },
                    function(err){}
                  );
                },
                function(err){}
              );
            }
          });
        }
      };
  }])
  .directive('renderBien',['bienService', 'CatalogoService',
    function (bienService, CatalogoService) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        template: '<span>{{ catalogo.nombre }}</span>',
        priority: 1,
        scope:{ value:'='},
        link: function(scope, element, attrs, ngModelController){
          ngModelController.$formatters.unshift(function (valueFromModel) {
            //console.log('reverse bien directive', valueFromModel)
            if(valueFromModel){
              bienService.get({id:valueFromModel},
                function(bien){
                  CatalogoService.get({id:bien.catalogo},
                    function(catalogo){
                      scope.catalogo = catalogo;
                    },
                    function(err){}
                  );
                },
                function(err){}
              );
            }
          });
        }
      };
  }]);
